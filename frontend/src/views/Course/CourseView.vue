<template>
<div class="relative mt-4 py-12">
    <div class="ml-3 rounded-md flex flex-col content-center ">
        <div class="flex justify-between pr-16"> 
            <div class="flex gap-2">
                <h1 class="font-black text-4xl">{{ course.title }}</h1>
                <div class="flex items-center pt-2">
                    <BookmarkButton/>
                </div>
            </div>
            <div class="flex gap-2 absolute right-24 top-12">
                <img class="w-8 h-8 border-2 border-white dark:border-gray-800" 
                    :src="author.avatar" alt="">
                <div>
                    <p class="text-gray-500 pr-24 text-xs">Create by</p>
                    <p class="font-bold text-sm">{{ author.first_name + ' ' + author.last_name }}</p>
                </div>
            </div>
        </div>
        <div class="flex w-full mt-5 gap-8">
            <div class="logo_lessons flex gap-1">
                <svg class="" width="16px" height="16px" viewBox="0 -3 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="48" height="48" fill="white" fill-opacity="0.01"/>
                <path d="M28 12V4L8 14V42L20 36" stroke="#000000" stroke-width="4" stroke-linejoin="round"/>
                <path d="M20 16L40 6V34L20 44V16Z" fill="#2F88FF" stroke="#000000" stroke-width="4" stroke-linejoin="round"/>
                </svg>
                    <p class="text-slate-500 text-sm font-semibold">{{ totalword }} terms</p>
            </div>
            <div class="flex cursor-pointer hover:underline underline-offset-2" @click="openRatingSectionMethod">
                <svg class="h-5" fill="#FFDF00" stroke="#FDCC0D" stroke-width="0.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"></path>
                </svg>
                <p class="font-black text-gray-600">4.5</p>
                <p class="font-bold  text-gray-300">/5</p>
            </div>
            <div class="flex gap-1 cursor-pointer" @click="openCommentSectionMethod">
                <svg class="h-4 mt-0.5" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 32 32" enable-background="new 0 0 32 32" version="1.1" xml:space="preserve" fill="#000000">

<g id="SVGRepo_bgCarrier" stroke-width="0"/>

<g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"/>

<g id="SVGRepo_iconCarrier"> <g id="Home"/> <g id="Print"/> <g id="Mail"/> <g id="Camera"/> <g id="Video"/> <g id="Film"/> <g id="Message"> <path d="M24,1h-7.9H8C4.1,1,1,4.1,1,8v10c0,3.5,2.6,6.4,6,6.9V30c0,0.4,0.2,0.7,0.5,0.9C7.7,31,7.8,31,8,31 c0.2,0,0.4-0.1,0.6-0.2l7.5-5.6l0.3-0.2H24c3.9,0,7-3.1,7-7V8C31,4.1,27.9,1,24,1z" fill="#1cc45d"/> <path d="M16.1,7v2H8C7.5,9,7,8.5,7,8s0.5-1,1-1H16.1z" fill="#ffffff"/> <path d="M16.1,13v2H8c-0.5,0-1-0.5-1-1s0.5-1,1-1H16.1z" fill="#ffffff"/> <g> <path d="M8,9h8.1H24c0.5,0,1-0.5,1-1s-0.5-1-1-1h-7.9H8C7.5,7,7,7.5,7,8S7.5,9,8,9z" fill="#ffffff"/> <path d="M24,13h-7.9H8c-0.5,0-1,0.5-1,1s0.5,1,1,1h8.1H24c0.5,0,1-0.5,1-1S24.5,13,24,13z" fill="#ffffff"/> </g> </g> </g>

                </svg>
                <p class=" text-slate-500 text-sm font-semibold hover:underline underline-offset-2"> 50 comment</p>

            </div>
        </div>

        <div class="flex mt-8 gap-10">
            <RouterLink to="/course/1/flashcard" class="shadow-md-gray-50 rounded-md bg-white w-64 2xl:w-80 h-20 flex items-center justify-center gap-3 shadow-md">
                <svg class="" width="32px" height="32px" viewBox="0 -3 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect width="48" height="48" fill="white" fill-opacity="0.01"/>
                    <path d="M28 12V4L8 14V42L20 36" stroke="#000000" stroke-width="4" stroke-linejoin="round"/>
                    <path d="M20 16L40 6V34L20 44V16Z" fill="#2F88FF" stroke="#000000" stroke-width="4" stroke-linejoin="round"/>
                </svg>
                <p class="font-bold text-lg">
                    Flashcard
                </p>
            </RouterLink>
            <RouterLink to="/course/1/learnword" class="shadow-md-gray-50 rounded-md bg-white w-64 2xl:w-80 h-20 flex items-center justify-center gap-3 shadow-md">
                <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="32px" height="32px" viewBox="0 0 512 512" aria-hidden="true" role="img" class="iconify iconify--fxemoji" preserveAspectRatio="xMidYMid meet"><path fill="#FF6F1F" d="M55.187 73h83.541v104.705H55.187z"/><circle fill="#FF6F1F" cx="129.088" cy="77.691" r="73.9"/><path fill="#FF6F1F" d="M439.814 427.451H142.152c-20.544 0-37.199-16.654-37.199-37.199V41.24c0-20.544 1.004-37.199 21.549-37.199h301.431c27.106 0 49.08 21.974 49.08 49.08v337.131c0 20.545-16.655 37.199-37.199 37.199z"/><path fill="#DCE2E2" d="M455.931 67.945c0-21.992-20.75-39.972-46.96-41.336v-.093H129.088c-20.407 0-36.95 12.668-36.95 28.294s16.543 28.294 36.95 28.294v.485H331.89v390.972l73.882 8.673c28.693 0 50.159-56.776 50.159-84.813V69.915h-.06c.037-.653.06-1.309.06-1.97z"/><path fill="#F2A74E" d="M390.578 507H91.857c-20.252 0-36.669-16.417-36.669-36.669V120.259c0-20.252 53.649-36.669 73.9-36.669h261.49c20.252 0 36.669 16.417 36.669 36.669V470.33c0 20.253-16.417 36.67-36.669 36.67z"/><path fill="#FF6F1F" d="M131.234 507H90.601c-19.558 0-35.414-15.855-35.414-35.414V83.59h76.046V507z"/><path fill="#2B3B47" d="M333.49 240.399H200.546c-7.953 0-14.4-6.447-14.4-14.4v-50.115c0-7.953 6.447-14.4 14.4-14.4H333.49c7.953 0 14.4 6.447 14.4 14.4v50.115c0 7.953-6.447 14.4-14.4 14.4z"/></svg>
                <p class="font-bold text-lg">
                    Learn
                </p>
            </RouterLink>
            <RouterLink to="/course/1/test" class="shadow-md-gray-50 rounded-md bg-white w-64 h-20 2xl:w-80 flex items-center justify-center gap-3 shadow-md">
                <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" height="32px" width="32px" version="1.1" id="Layer_1" viewBox="0 0 512 512" xml:space="preserve">
                    <g>
                        <g>
                            <path style="fill:#996459;" d="M416,40H96c-22.055,0-40,17.945-40,40v392c0,22.055,17.945,40,40,40h320c22.055,0,40-17.945,40-40    V80C456,57.945,438.055,40,416,40z"/>
                        </g>
                        <g>
                            <path style="fill:#FFFFFF;" d="M415.6,72c4.639,0,8.4,3.728,8.4,8.327v391.347c0,4.599-3.761,8.327-8.4,8.327H96.4    c-4.639,0-8.4-3.728-8.4-8.327V80.326C88,75.728,91.761,72,96.4,72H415.6z"/>
                        </g>
                        <g>
                            <g>
                                <path style="fill:#B4B6BC;" d="M200,216h-48c-8.82,0-16-7.18-16-16v-48c0-8.82,7.18-16,16-16h48c8.82,0,16,7.18,16,16v48     C216,208.82,208.82,216,200,216z M152,152v48h48.016L200,152H152z"/>
                            </g>
                        </g>
                        <g>
                            <g>
                                <path style="fill:#5C546A;" d="M264,160h-24c-4.422,0-8-3.578-8-8s3.578-8,8-8h24c4.422,0,8,3.578,8,8S268.422,160,264,160z"/>
                            </g>
                        </g>
                        <g>
                            <g>
                                <path style="fill:#868491;" d="M360,192H240c-4.422,0-8-3.578-8-8s3.578-8,8-8h120c4.422,0,8,3.578,8,8S364.422,192,360,192z"/>
                            </g>
                        </g>
                        <g>
                            <g>
                                <path style="fill:#5C546A;" d="M320,272h-80c-4.422,0-8-3.578-8-8s3.578-8,8-8h80c4.422,0,8,3.578,8,8S324.422,272,320,272z"/>
                            </g>
                        </g>
                        <g>
                            <g>
                                <path style="fill:#868491;" d="M360,304H240c-4.422,0-8-3.578-8-8s3.578-8,8-8h120c4.422,0,8,3.578,8,8S364.422,304,360,304z"/>
                            </g>
                        </g>
                        <g>
                            <g>
                                <path style="fill:#5C546A;" d="M272,376h-32c-4.422,0-8-3.578-8-8s3.578-8,8-8h32c4.422,0,8,3.578,8,8S276.422,376,272,376z"/>
                            </g>
                        </g>
                        <g>
                            <g>
                                <path style="fill:#868491;" d="M360,408H240c-4.422,0-8-3.578-8-8s3.578-8,8-8h120c4.422,0,8,3.578,8,8S364.422,408,360,408z"/>
                            </g>
                        </g>
                        <g>
                            <g>
                                <path style="fill:#868491;" d="M288,40c-4.422,0-8-3.578-8-8v-8c0-4.414-3.586-8-8-8h-32c-4.414,0-8,3.586-8,8v8     c0,4.422-3.578,8-8,8s-8-3.578-8-8v-8c0-13.234,10.766-24,24-24h32c13.234,0,24,10.766,24,24v8C296,36.422,292.422,40,288,40z"/>
                            </g>
                        </g>
                        <g>
                            <path style="fill:#B4B6BC;" d="M344,24H168c-4.418,0-8,3.582-8,8v24c0,22.091,17.909,40,40,40h112c22.091,0,40-17.909,40-40V32    C352,27.582,348.418,24,344,24z"/>
                        </g>
                        <g>
                            <g>
                                <path style="fill:#B4B6BC;" d="M200,320h-48c-8.82,0-16-7.18-16-16v-48c0-8.82,7.18-16,16-16h48c8.82,0,16,7.18,16,16v48     C216,312.82,208.82,320,200,320z M152,256v48h48.016L200,256H152z"/>
                            </g>
                        </g>
                        <g>
                            <g>
                                <path style="fill:#B4B6BC;" d="M200,424h-48c-8.82,0-16-7.18-16-16v-48c0-8.82,7.18-16,16-16h48c8.82,0,16,7.18,16,16v48     C216,416.82,208.82,424,200,424z M152,360v48h48.016L200,360H152z"/>
                            </g>
                        </g>
                        <g>
                            <g>
                                <path style="fill:#FF4F19;" d="M184,296c-2.047,0-4.094-0.781-5.656-2.344l-16-16c-3.125-3.125-3.125-8.188,0-11.313     s8.188-3.125,11.313,0L184,276.687l34.344-34.344c3.125-3.125,8.188-3.125,11.313,0s3.125,8.187,0,11.312l-40,40     C188.094,295.219,186.047,296,184,296z"/>
                            </g>
                        </g>
                    </g>
                 </svg>
                <p class="font-bold text-lg">
                    Test
                </p>
            </RouterLink>
        </div>
        <div class="flex mt-8 h-96 gap-5">
            <div class="relative w-full">
                <FlipCard :term="wordlist[index]" ref="flipcard" review-component="false" class="" width="100%" height="500px"></FlipCard>
            </div>
            <div class="flex items-end pb-6">
                <FlashcardButton  
                    @nextWord="nextWord"
                    @backWord="backWord"
                    @randomWord = "randomWord"
                    @flipCard = "flipCard"
                ></FlashcardButton>
            </div>
        </div>

        <div class="mt-8">
            
        </div>

        <div class="flex w-full justify-between">
            <p class="font-bold text-lg pt-3">Terms in this set: {{ totalword }}</p>
            <div class="flex mr-12">
                <ProgressBar class="w-64" key="1" name="Your process: " progress="78" color="red"></ProgressBar>
            </div>
        </div>

        <div class="grid grid-cols-5 gap-2 mt-8">
            <button v-for="i in wordlist" class="w-36 h-12 flex justify-center text-center items-center bg-white shadow-sm rounded-lg">
                {{ i.word }}
            </button>
        </div>

        <div class="comment_section_wrap absolute top-0 left-0 opacity-0 hidden">
            <div class="flex justify-end mb-4">
                <div class="bg-white shadow-md rounded-full p-2 cursor-pointer">
                    <svg class="h-5 w-5" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12"></path>
                    </svg>
                </div>
            </div>
        </div>
    </div>
</div>

</template>

<script>
import Block from '../../components/block/Block.vue';
import CommentSection from '../../components/comment/CommentSection.vue';

import FlipCard from '../../components/card/FlipCard.vue';
import ProgressBar from '../../components/progress/ProgressBar.vue';

import gsap from 'gsap';
import GameButton from '../../components/button/GameButton.vue';
import BookmarkButton from '../../components/button/BookmarkButton.vue';
import FlashcardButton from '../../components/button/FlashcardButton.vue';
import Rating from '../../components/rating/Rating.vue'
import { closeModal, openModal } from 'jenesius-vue-modal';
import axios from 'axios';
import { useCourseCollectionStore } from '../../stores/course';
import { mapState } from 'pinia';


export default {
    components: {
    FlipCard,
    ProgressBar,
    Block,
    CommentSection,
    GameButton,
    BookmarkButton,
    FlashcardButton
    },
    props: ['id'],
    data() {
        return {
            // wordlist: [],
            // totalword: 0,
            index: 0,
        }
    },
    computed: {
        ...mapState(useCourseCollectionStore, ['getCourseInfo']),
        wordlist() {
            return this.getCourseInfo?.vocabularies? this.getCourseInfo.vocabularies : []
        },
        author() {
            return this.getCourseInfo?.author
        },
        totalword() {
            return this.getCourseInfo?.vocabularies?.length
        },
        course() {
            return this.getCourseInfo?.course
        }
    }
    ,
    methods: {
        openCommentSectionMethod() {
            openModal(CommentSection)
        },
        openRatingSectionMethod() {
            openModal(Rating);
        },
        nextWord() {
            if (this.index >= this.totalword - 1) {
                this.index = 0;
            } else {
                this.index++;
            }
        },
        backWord() {
            if (this.index <= 0) {
                this.index = this.totalword - 1;
            } else {
                this.index--;
            }
        },
        flipCard() {
            this.$refs.flipcard.flipDownCard(false);
        },
        randomWord() {
            this.wordlist = this.wordlist.sort(() => 0.5 - Math.random())
            this.index = 0;
        },
    },

    beforeRouteEnter(to, from, next) {
        const courseStore = useCourseCollectionStore()
        console.log(to);
        courseStore.getCourseInfoAction(to.params.id).then((res)=>{
            // this.wordlist = res.data;
            // this.totalword = this.wordlist.length
            console.log('getCourseInfo:', courseStore.getCourseInfo);
            next();
        })
    },
    mounted() {

    }
}

</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;1,300;1,400;1,500;1,600;1,700;1,800&display=swap');

.textName {
    font-family: 'Oswald', sans-serif;
}

* {
    font-family: 'Open Sans', sans-serif;   
}

.leftArrow {
    top: 50%;
    left: -30px;
}

.rightArrow {
    top: 50%;
    right: -30px;
}
</style>