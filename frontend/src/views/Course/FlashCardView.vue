<template>
  <div class="h-full flex pb-16 gap-5 w-full px-8">
    <div class="w-5/6 ">
     <ProgressBar class="px-8" :progress="(index/wordlists.length)*100" color="gray" thin="no"></ProgressBar>
     <FlipCard 
        class="w-full overflow-x-hidden overflow-y-hidden" 
        :reviewComponent="reviewMode"
        :term="term"
        ref="flipcard"
      >
    </FlipCard>
    </div>
    <div class=" flex items-end">
      <FlashcardButton 
        :reviewMode="reviewMode" 
        @reviewModeSwitch="reviewModeSwitch"
        @nextWord="nextWord"
        @backWord="backWord"
        @randomWord = "randomWord"
        @flipCard = "flipCard"
      ></FlashcardButton>
    </div>
  </div>
</template>

<script>
import FlipCard from '../../components/card/FlipCard.vue';
import GameButton from '../../components/button/GameButton.vue'
import FlashcardButton from '../../components/button/FlashcardButton.vue';
import ProgressBar from '../../components/progress/ProgressBar.vue';
import axios from 'axios';
import { toRaw } from 'vue';

export default {
    components: { FlipCard, GameButton, FlashcardButton, ProgressBar },
    data() {
      return {
        wordlists: [],
        reviewMode: false,
        term: {
          word: 'Test',
          define: 'Kiểm tra'
        },
        index: 0,
      }
    },
    methods: {
      reviewModeSwitch() {
        this.reviewMode = !this.reviewMode
      },
      nextWord() {
        if (this.index < this.wordlists.length -1) {
         this.index++;
        } else {
          this.index = 0;
        }
      },
      backWord() {
        if (this.index > 0) {
         this.index--;
        } else {
          this.index = this.wordlists.length -1;
        }
      },
      randomWord() {
        this.wordlists = this.wordlists.sort(() => 0.5 - Math.random())
        this.index = 0;
        this.term = this.wordlists[0]
      },
      flipCard() {
        this.$refs.flipcard.flipDownCard(false);
      }
    },
    watch: {
      index(newValue, oldValue) {
        this.term = this.wordlists[newValue];
        // console.log(this.term, newValue);
      }
    },
    mounted() {
      axios.get('vocabularys').then((res)=> {
        this.wordlists = res.data;
        this.term = res.data[0];
        // console.log(res.data, this.term);
      })
    }
}

</script>

<style scoped>

</style>