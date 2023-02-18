<template>
                <div class="flex flex-col gap-1 z-auto">
                    <GameButton @click="nextWordMethods" class="border border-gray-300" aria-label="Next" data-cooltipz-dir="right">
                        <svg class="h-5 w-5" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5"></path>
                        </svg>
                    </GameButton>
                    <GameButton @click="backWordMethods" class="border border-gray-300" aria-label="Back" data-cooltipz-dir="right">
                        <svg class="h-5 w-5" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5"></path>
                        </svg>
                    </GameButton>
                    <GameButton @click="randomWordMethods" class="border border-gray-300" aria-label="Random" data-cooltipz-dir="right">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="black" stroke-width="3" class="w-5 h-5">
                            <path d="M4.755 10.059a7.5 7.5 0 0112.548-3.364l1.903 1.903h-3.183a.75.75 0 100 1.5h4.992a.75.75 0 00.75-.75V4.356a.75.75 0 00-1.5 0v3.18l-1.9-1.9A9 9 0 003.306 9.67a.75.75 0 101.45.388zm15.408 3.352a.75.75 0 00-.919.53 7.5 7.5 0 01-12.548 3.364l-1.902-1.903h3.183a.75.75 0 000-1.5H2.984a.75.75 0 00-.75.75v4.992a.75.75 0 001.5 0v-3.18l1.9 1.9a9 9 0 0015.059-4.035.75.75 0 00-.53-.918z"   />
                        </svg>
                    </GameButton>
                    <GameButton @click="reivewModeSwitchMethod" class="border border-gray-300" aria-label="Review Mode" data-cooltipz-dir="right">
                        <svg v-if="reviewMode" fill="none" stroke="rgb(49,196,141)" stroke-width="3" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M15.182 15.182a4.5 4.5 0 01-6.364 0M21 12a9 9 0 11-18 0 9 9 0 0118 0zM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75zm-.375 0h.008v.015h-.008V9.75zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75zm-.375 0h.008v.015h-.008V9.75z"></path>
                        </svg>
                        <svg v-else fill="none" stroke="rgb(209,213,219,0.8)" stroke-width="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M15.182 15.182a4.5 4.5 0 01-6.364 0M21 12a9 9 0 11-18 0 9 9 0 0118 0zM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75zm-.375 0h.008v.015h-.008V9.75zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75zm-.375 0h.008v.015h-.008V9.75z"></path>
                        </svg>
                    </GameButton>

                </div>
</template>

<script>
import GameButton from './GameButton.vue';


export default {
    components: { GameButton },
    props: {
        reviewMode: {
            default: false
        }
    },
    emits: ['reviewModeSwitch','nextWord','backWord','randomWord','flipCard'],
    methods: {
        reivewModeSwitchMethod() {
            this.$emit('reviewModeSwitch')
        },
        nextWordMethods() {
            this.$emit('nextWord')
            this.$emit('flipCard')
        },
        backWordMethods() {
            this.$emit('backWord')
            this.$emit('flipCard')
        },
        randomWordMethods() {
            this.$emit('randomWord')
            this.$emit('flipCard')
        }
    }
}

</script>