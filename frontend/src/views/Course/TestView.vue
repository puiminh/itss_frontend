<template>

<div class="flex flex-col justify-center items-center gap-10">    
    <TrueFalseCard 
        v-for="(term, index) in halfArray"
        :term ="term"
        :answer = "halfArray[halfArray.length * Math.random() | 0]" 
        :index = "index + 1"
        :total="wordlists.length"
        ref="truefalses"
    ></TrueFalseCard>

    <QuestionCard
        v-for="(term, index) in halfEndArray"
        :term ="term"
        :answers = "[halfArray[halfArray.length * Math.random() | 0], 
                     halfArray[halfArray.length * Math.random() | 0], 
                     halfArray[halfArray.length * Math.random() | 0]]"
        :total="wordlists.length"
        :index = "index + halfArray.length + 1"
        ref="questions"
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
import { closeModal, openModal } from 'jenesius-vue-modal';
import TestResult from '../../components/modal/TestResult.vue';




export default {
    components: {
    TrueFalseCard,
    QuestionCard,
    TestResult
},
    props: {

    }, 
    data() {
        return {
            wordlists: [],
            index: 0,
            testresults: [],
        }
    },
    methods: {
        randomWord() {
            this.wordlists = this.wordlists.sort(() => 0.5 - Math.random())
        },
        submitTest() {
            let checktruefasle = true;
            let checkquestion = true
            console.log(this.$refs.truefalses, this.$refs.questions);
            this.$refs.truefalses.forEach(element => {
                // console.log(element.term.id,element.testresult);
                // if (element.truefalse == null) {
                //     checktruefasle = false;
                // } else {

                // }
                this.testresults.push({id: element.term.id, result: element.testresult})
                element.submit()

            });
            this.$refs.questions.forEach(element => {
                // console.log(element.term.id,element.testresult);
                this.testresults.push({id: element.term.id, result: element.testresult})
                element.submit()
                
            });
            console.log(this.testresults);
            let mark = this.testresults.filter(x => x.result).length
            this.openModalMethod(mark, this.wordlists.length)
        },
        openModalMethod(result, total) {
            openModal(TestResult, {result: result, total: total})
        }
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

    },
    mounted() {
        axios.get(`/courses/${this.$route.params.id}/random_list_word`).then((res)=>{
            this.wordlists = res.data.vocabularies;
            this.randomWord();
            // console.log(res.data, this.term);
        })
    }
}
</script>