<template>

<div>
  <p class="text-2xl text-gray-600">Pick the correct answer</p>

  <QNA class="mt-8" :question="question" :answers="answers" :right="right" ref="QNA"></QNA>
</div>


</template>

<script>
import QNA from '../../components/Q&A/QNA.vue';

export default {
  props: ['id'],
  components: {
    QNA: QNA,
  },
  computed: {
    answers() {
        const shuffled = this.mockData.slice().sort(() => 0.5 - Math.random()); //Xoc data
        let selected = shuffled.slice(0, 3); //Lay ra 3

        if (!selected.includes(this.mockData[this.currentWord])) {
            selected.push(this.mockData[this.currentWord]);
            selected = selected.sort(() => 0.5 - Math.random());
        } else {
            selected = shuffled.slice(0, 4); //Neu da co thi lay ra 4 (vi da co trong 3 cai dau)
        }
        console.log(selected,this.question,this.right);
        this.currentWord;
        return selected;
    },
    question() {
        return this.mockData[this.currentWord].define
    }, 
    right() {
        return this.mockData[this.currentWord].vocabulary_id
    }
  },
  methods: {
    nextWord() {
        // this.currentWord = (this.mockData.length-1 > this.currentWord) ? this.currentWord + 1 : 0;
        this.currentWord = Math.floor(Math.random() * (this.mockData.length-1 - 0 + 1) ) + 0;
        console.log("Current word: ",this.currentWord)
        this.$refs.QNA.resetColor()
    }
  },
  data() {
    return {
        currentWord: 0,
        mockData: [
            {
            "vocabulary_id": 1,
            "word": "Hello",
            "define": "xin chao",
            "link": "",
            "type": 0,
            "course_id": 1
            },
            {
            "vocabulary_id": 2,
            "word": "Wow",
            "define": "O! (bat ngo)",
            "link": "",
            "type": 0,
            "course_id": 1
            },
            {
            "vocabulary_id": 3,
            "word": "Name",
            "define": "Ten",
            "link": "",
            "type": 0,
            "course_id": 1
            },
            {
            "vocabulary_id": 4,
            "word": "Age",
            "define": "Tuoi",
            "link": "",
            "type": 0,
            "course_id": 1
            },
            {
            "vocabulary_id": 5,
            "word": "Year",
            "define": "Nam",
            "link": "",
            "type": 0,
            "course_id": 1
            },
            {
            "vocabulary_id": 6,
            "word": "Store",
            "define": "Cua hang",
            "link": "",
            "type": 0,
            "course_id": 1
            },
            {
            "vocabulary_id": 7,
            "word": "Close",
            "define": "Dong",
            "link": "",
            "type": 0,
            "course_id": 1
            },
            {
            "vocabulary_id": 8,
            "word": "Open",
            "define": "Mo",
            "link": "",
            "type": 0,
            "course_id": 1
            },
            {
            "vocabulary_id": 9,
            "word": "Happy",
            "define": "Vui",
            "link": "",
            "type": 0,
            "course_id": 1
            }
        ]
    }
  }
}
</script>

<style scoped>

</style>