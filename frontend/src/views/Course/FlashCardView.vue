<template>
  <div class="h-full flex pb-16 gap-5 w-full px-8">
    <div class="w-5/6 ">
      <GameButton class="!absolute z-10" @click="backURL" v-if="turnBack">
        Back
      </GameButton>
     <ProgressBar class="px-8" :progress="(index/wordlists.length)*100" :color="1" thin="no"></ProgressBar>
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
import { mapState } from 'pinia';
import { useUserStore } from '../../stores/user';

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
        point: 2,
        turnBack: false,
      }
    },
    computed: {
      ...mapState(useUserStore, ['getUser'])
    },
    methods: {
      reviewModeSwitch() {
        this.reviewMode = !this.reviewMode
      },
      async nextWord() {

        
        this.point = this.$refs.flipcard.point;
        const response = await axios.post('/progress/update',{
          user_id: this.getUser.id,
          course_id: this.$route.params.id,
          vocabulary_id: this.wordlists[this.index].id,
          point: this.point,
        })
        this.point = 2;
        
        
        if (this.index < this.wordlists.length - 1) {
         this.index++;
        } else {
          this.turnBack = true;
          this.index = 0;
        }
        console.log(this.index, this.wordlists[this.index]);
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
      async flipCard() {
        this.$refs.flipcard.flipDownCard(false);
      },

      backURL() {
        this.$router.back()
      }
    },
    watch: {
      index(newValue, oldValue) {
        this.term = this.wordlists[newValue];
        // console.log(this.term, newValue);
      }
    },
    mounted() {
      axios.get(`/courses/${this.$route.params.id}/random_list_word`).then((res)=>{
        this.wordlists = res.data.vocabularies;
        this.term = this.wordlists[0];
        // console.log(res.data, this.term);
      })
    },
}

</script>

<style scoped>

</style>