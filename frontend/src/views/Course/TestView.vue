<template>

<div class="flex flex-col justify-center items-center gap-10">
    <QuestionCard></QuestionCard>
    
    
    <TrueFalseCard 
        v-for="term in halfArray"
        :term ="term"
        :answer = randomTerm 
    ></TrueFalseCard>
</div>



</template>

<script>
import TrueFalseCard from '../../components/card/TrueFalseCard.vue';
import QuestionCard from '../../components/card/QuestionCard.vue';
import axios from 'axios';




export default {
    components: {
    TrueFalseCard,
    QuestionCard
    },
    props: {

    }, 
    data() {
        return {
            wordlists: [],
            index: 0,
        }
    },
    methods: {
        randomWord() {
            this.wordlists = this.wordlists.sort(() => 0.5 - Math.random())
        },
    },
    computed: {
        halfArray() {
            return this.wordlists.slice(0).slice(Math.ceil(0, this.wordlists.length/2))
        },
        randomTerm() {
            return this.wordlists[this.wordlists.length * Math.random() | 0]
        }
    },
    mounted() {
        axios.get('vocabularys').then((res)=>{
            this.wordlists = res.data
            this.randomWord()
        })
    }
}
</script>