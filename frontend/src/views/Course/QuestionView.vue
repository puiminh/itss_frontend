<template>

<div>
  <p class="text-2xl text-gray-600">Pick the correct answer</p>

  <QNA class="mt-8" :question="question" :answers="answers" :right="right" ref="QNA"></QNA>
</div>


</template>

<script>
import QNA from '../../components/Q&A/QNA.vue';

export default {
  props: {
    wordlists: {
      default: 
        [
            {
            "id": 1,
            "word": "Hello",
            "define": "xin chao",
            "link": "",
            "type": 0,
            "course_id": 1
            }
        ]
    },
    learnedIndex: {
      default: 4
    }

  },
  components: {
    QNA: QNA,
  },
  computed: {
    answers() {
        const shuffled = this.wordlists.slice().sort(() => 0.5 - Math.random()); //Xoc data
        let selected = shuffled.slice(0, 3); //Lay ra 3

        if (!selected.includes(this.wordlists[this.testWord])) {
            selected.push(this.wordlists[this.testWord]);
            selected = selected.sort(() => 0.5 - Math.random());
        } else {
            selected = shuffled.slice(0, 4); //Neu da co thi lay ra 4 (vi da co trong 3 cai dau)
        }
        console.log(selected,this.question,this.right);
        this.testWord;
        return selected;
    },
    question() {
        return this.wordlists[this.testWord].define
    }, 
    right() {
        return this.wordlists[this.testWord].id
    },
    // testWord() {
    //   return Math.floor(Math.random() * this.learnedIndex)
    // }
  },
  methods: {
    nextWord() {
        // this.testWord = (this.wordlists.length-1 > this.testWord) ? this.testWord + 1 : 0;
        // this.testWord = Math.floor(Math.random() * (this.wordlists.length-1 - 0 + 1) ) + 0;
        let oldword = this.testWord;
        // 4 r2 + 4 -4 =2 .  8 r2 + 8 - 4 = 6 .  16 r3 + 16 -4 = 15
        this.testWord = Math.floor(Math.random() * 4) + this.learnedIndex - 4;
        if (this.testWord == oldword) { //Giúp có tỷ lệ hỏi lại những câu hỏi ở đầu tiên, đáng lẽ nên áp dụng luôn thuật toán ở trên.
          this.testWord = Math.floor(Math.random() * this.learnedIndex);
        }
        console.log("Current word: ",this.testWord)
        this.$refs.QNA.resetColor()
    }
  },
  data() {
    return {
        testWord: Math.floor(Math.random() * this.learnedIndex)
    }
  }
}
</script>

<style scoped>

</style>