<template>
  <div class="h-full flex pb-16 gap-5 w-full">
    <div class="w-5/6 ">
     <ProgressBar class="px-8" progress="80" color="gray"></ProgressBar>
     <FlipCard class="w-full"></FlipCard>
    </div>
    <div class=" flex items-end">
      <FlashcardButton></FlashcardButton>
    </div>
  </div>
</template>

<script>
import FlipCard from '../../components/card/FlipCard.vue';
import GameButton from '../../components/button/GameButton.vue'
import FlashcardButton from '../../components/button/FlashcardButton.vue';
import ProgressBar from '../../components/progress/ProgressBar.vue';

export default {
    components: { FlipCard, GameButton, FlashcardButton, ProgressBar },
    data() {
      return {
        wordlists: []
      }
    }
}

</script>

<style scoped>

</style>