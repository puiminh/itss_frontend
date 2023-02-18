<template>

<div class="flex flex-col justify-center items-center gap-10">    
    <TrueFalseCard 
        v-for="(term, index) in halfArray"
        :term ="term"
        :answer = "halfArray[halfArray.length * Math.random() | 0]" 
        :index = "index + 1"
        :total="wordlists.length"
    ></TrueFalseCard>

    <QuestionCard
        v-for="(term, index) in halfEndArray"
        :term ="term"
        :answers = "[halfArray[halfArray.length * Math.random() | 0], 
                     halfArray[halfArray.length * Math.random() | 0], 
                     halfArray[halfArray.length * Math.random() | 0]]"
        :total="wordlists.length"
        :index = "index + halfArray.length + 1"

    >
    </QuestionCard>

    <div class="w-full flex justify-center">
        <button @click="submitTest" class="mt-12 flex justify-center items-center px-5 py-2 bg-blue-600 hover:bg-blue-800 border-2 border-gray-200 rounded-lg cursor-pointer">
            <span class="text-2xl font-bold text-white">Submit</span>
        </button>
    </div>

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
            return this.wordlists.slice(0).slice(0, Math.ceil(this.wordlists.length/2))
        },
        halfEndArray() {
            return this.wordlists.slice(0).slice(Math.ceil(this.wordlists.length/2), this.wordlists.length)
        },
        randomTerm() {
            return this.wordlists[this.wordlists.length * Math.random() | 0]
        },
        submitTest() {
            
        }
    },
    mounted() {
        axios.get('vocabularys').then((res)=>{
            this.wordlists = res.data
            this.randomWord()
            console.log(this.halfArray, this.halfEndArray);
        })
    }
}
</script>