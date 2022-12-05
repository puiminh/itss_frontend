<template>
<div @click="flipCard" class="scene scene--card">
  <div :class="(flip ? '' : 'is-flipped')+ ' card'">
    <div class="card__face card__face--front">{{props.cardData.word}}</div>
    <div class="card__face card__face--back">
      <img :src="props.cardData.image" alt="">
      {{props.cardData.mean}}
    </div>
  </div>
</div>
</template>

<script setup>
import { ref } from 'vue';


const props = defineProps(['cardData'])

const flip = ref(true);

function flipCard() {
    flip.value = !flip.value
}

</script>

<style scoped>
body { font-family: sans-serif; }

.scene {
  width: 400px;
  height: 260px;
  border: 1px solid #CCC;
  margin: 40px 0;
  perspective: 600px;
}

.card {
  width: 100%;
  height: 100%;
  transition: transform 1s;
  transform-style: preserve-3d;
  cursor: pointer;
  position: relative;
}

.card.is-flipped {
  transform: rotateY(180deg);
}

.card__face {
  position: absolute;
  width: 100%;
  height: 100%;
  line-height: 260px;
  color: white;
  text-align: center;
  font-weight: bold;
  font-size: 40px;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
}

.card__face--front {
  background: red;
}

.card__face--back {
  background: blue;
  transform: rotateY(180deg);
}
</style>