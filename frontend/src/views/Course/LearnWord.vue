<template>
<div v-if="learndone" class="py-8 px-32 w-full h-full flex justify-center items-center">
    <div class="bg-white shadow-md rounded-md py-8 px-16 flex flex-col justify-center items-center gap-4">
        <p class="text-green-500 font-black text-3xl">Congratulation!</p>
        <div class="relative w-64 h-40 ml-36">
            <Celebrate class="absolute w-full h-full self-center"></Celebrate>
        </div>
        <p class="text-green-400 font-semibold text-lg">You have completed this session, do you want to continue studying?</p>
        <div class="flex justify-between w-full px-20 mt-4">
            <RouterLink to="/course/1/learnword">
                <GameButton class=" !bg-gray-200">
                    <p class="font-bold text-slate-500 text-lg">I will take a break</p>
                </GameButton>
            </RouterLink>

            <a to="/course/1" @click="resetLearn">
                <GameButton class=" !bg-yellow-400 text-lg">
                    <p class="font-bold text-white">Of course, let's go!</p>
                </GameButton>
            </a>
        </div>
    </div>
</div>
<div v-else class="py-8 px-32 w-full">
    <ProgressBar class="" :progress="(index/wordlists.length)*100" color="yellow" thin="no"></ProgressBar>

    <div class="flex mt-8">

        <!-- LEARN WORD -->

        <video v-if="(term.type == 2) && (learnmode== true)" controls autoplay class="bg-gray-200 rounded-lg w-64 h-64 mr-8 my-auto shadow-lg">
            <source :src="term.link" type="video/mp4">
        </video>

        <img v-if="(term.type == 1) && (learnmode== true)"
            class="object-cover w-80 h-80 mr-8 my-auto shadow-lg" 
            :src="term.link" 
            alt="">
        <!-- 2/5 or 4/5 -->
        <div v-if="learnmode" class="flex flex-col divide-y-4 divide-slate-400/2500 pr-8 w-full">
            <div class="flex">
                <div class="select-text">
                    <p class="text-sm text-gray-600 font-medium ">TERM</p>
                    <p class="font-bold text-4xl mt-4">
                        {{ term.word }}
                    </p>
                    <p class="text-sm text-gray-500 font-medium mt-6">DEFINITION</p>
                    <p class="font-semibold text-lg mt-2 mb-4">
                        {{ term.define }}
                    </p>
                </div>
            </div>
            <div class="">
                <p class="text-xs text-gray-600 font-semibold mt-6">AUDIO</p>
                <button class="bg-gray-300 w-fit p-2 rounded-xl mt-2" @click="playSound(term.word)"  aria-label="Listen to the audio" data-cooltipz-dir="right">
                    <svg  class="w-10 h-10" fill="none" stroke="black" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M19.114 5.636a9 9 0 010 12.728M16.463 8.288a5.25 5.25 0 010 7.424M6.75 8.25l4.72-4.72a.75.75 0 011.28.53v15.88a.75.75 0 01-1.28.53l-4.72-4.72H4.51c-.88 0-1.704-.507-1.938-1.354A9.01 9.01 0 012.25 12c0-.83.112-1.633.322-2.396C2.806 8.756 3.63 8.25 4.51 8.25H6.75z"></path>
                    </svg>
                </button>
            </div>
        </div>

        <!-- MINITEST -->

        <QuestionView v-else class="pr-8 w-full" ref="questionview" :learnedIndex="index" :wordlists="wordlists"></QuestionView>

        <!-- BUTTON -->

        <div class="flex flex-col gap-2 pt-16 w-fit">
            <GameButton @click="nextWord"  aria-label="Next word" data-cooltipz-dir="right" class="!bg-yellow-300 !px-5 !py-4">
                <svg class="w-8 h-8" fill="none" stroke="currentColor" stroke-width="5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5"></path>
                </svg>
                <p class="text-center pt-2 font-bold">
                    Next
                </p>
            </GameButton>

            <div class="flex gap-2 justify-center">
                <GameButton aria-label="This word is easy" data-cooltipz-dir="left" class="!bg-yellow-50 !p-1">
                    <svg class="h-4 w-4" fill="yellow" stroke="black" stroke-width="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z"></path>
                    </svg>                    
                </GameButton>

                <GameButton aria-label="This word is HARD" data-cooltipz-dir="right" class="!bg-red-50 !p-1">
                    <svg  class="h-4 w-4" fill="white" stroke="red" stroke-width="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M16.712 4.33a9.027 9.027 0 011.652 1.306c.51.51.944 1.064 1.306 1.652M16.712 4.33l-3.448 4.138m3.448-4.138a9.014 9.014 0 00-9.424 0M19.67 7.288l-4.138 3.448m4.138-3.448a9.014 9.014 0 010 9.424m-4.138-5.976a3.736 3.736 0 00-.88-1.388 3.737 3.737 0 00-1.388-.88m2.268 2.268a3.765 3.765 0 010 2.528m-2.268-4.796a3.765 3.765 0 00-2.528 0m4.796 4.796c-.181.506-.475.982-.88 1.388a3.736 3.736 0 01-1.388.88m2.268-2.268l4.138 3.448m0 0a9.027 9.027 0 01-1.306 1.652c-.51.51-1.064.944-1.652 1.306m0 0l-3.448-4.138m3.448 4.138a9.014 9.014 0 01-9.424 0m5.976-4.138a3.765 3.765 0 01-2.528 0m0 0a3.736 3.736 0 01-1.388-.88 3.737 3.737 0 01-.88-1.388m2.268 2.268L7.288 19.67m0 0a9.024 9.024 0 01-1.652-1.306 9.027 9.027 0 01-1.306-1.652m0 0l4.138-3.448M4.33 16.712a9.014 9.014 0 010-9.424m4.138 5.976a3.765 3.765 0 010-2.528m0 0c.181-.506.475-.982.88-1.388a3.736 3.736 0 011.388-.88m-2.268 2.268L4.33 7.288m6.406 1.18L7.288 4.33m0 0a9.024 9.024 0 00-1.652 1.306A9.025 9.025 0 004.33 7.288"></path>
                    </svg>                  
                </GameButton>
            </div>
        </div>
        
        <!-- Celebrate -->        
    </div>
</div>


</template>

<script>
import GameButton from '../../components/button/GameButton.vue';
import ProgressBar from '../../components/progress/ProgressBar.vue';
import { VideoPlayer } from '@videojs-player/vue'
import 'video.js/dist/video-js.css'
import QuestionView from './QuestionView.vue';
import axios from 'axios';
import Celebrate from '../../components/celebrate/Celebrate.vue'


export default {
    data() {
        return {
            learnmode: true,
            learndone: false,
            index: 0,
            questionCount: 0,
            wordlists: [],
            term: {
                word: 'Test',
                define: 'Kiem tra',
                link: 'https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
                type: 0,
            }

        }
    },
    components: { ProgressBar, GameButton, VideoPlayer, QuestionView, Celebrate },
    methods: {
        playSound (sound) {
            if(sound) {
                var foo = new p5.Speech(); // speech synthesis object
                foo.speak(sound); // say something
            }
        },
        nextWord() {

            if (this.learnmode) { //LEARN MODE -> next word
                if (this.index < this.wordlists.length - 1) {
                    this.index++;
                } else {
                    // this.index = 0;
                    this.learndone = true
                }
            } else {
                if (this.questionCount < 3) {                 
                    this.$refs.questionview.nextWord();
                    this.questionCount++;   
                } else {
                    this.questionCount = 0;
                    this.learnmode = true;
                }
            }
        },
        randomWord() {
            this.wordlists = this.wordlists.sort(() => 0.5 - Math.random())
            this.index = 0;
            this.term = this.wordlists[0]
        },
        resetLearn() {
            axios.get('vocabularys').then((res)=>{
            this.index = 0;
            this.wordlists = res.data;
            this.term = res.data[0];
            
            this.learndone=false
            // this.randomWord()
        })
        }
    },
    watch: {
      index(newValue, oldValue) {
        if ((newValue%4 == 0) && (newValue!=0)) {
            this.learnmode = false;            
        } else {
            this.term = this.wordlists[newValue];
            console.log(this.term, newValue);
        }
      }
    },
    mounted() {
        axios.get('vocabularys').then((res)=>{
            this.wordlists = res.data
            this.term = res.data[0]
            // this.randomWord()
        })
    }
}
</script>

<style scoped>
  .video-player {
    background-color: black;
    width: 100%;
  }

  /* Change all text and icon colors in the player. */
.vjs-matrix.video-js {
  color: #00ff00;
}

/* Change the border of the big play button. */
.vjs-matrix .vjs-big-play-button {
  border-color: #00ff00;
}

/* Change the color of various "bars". */
.vjs-matrix .vjs-volume-level,
.vjs-matrix .vjs-play-progress,
.vjs-matrix .vjs-slider-bar {
  background: #00ff00;
}
</style>