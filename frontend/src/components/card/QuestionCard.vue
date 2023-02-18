<template>
    <div class="rounded-xl shadow bg-white card_wrap">
        <p class="text-gray-400 font-normal absolute top-6 right-6">{{ index }} of {{ total }}</p>
            <div class="p-9 flex flex-col w-1/2">
                <p class="text-gray-600 text-base h-12 font-medium">Term</p>
                <p class="font-bold text-4xl">
                    {{ term.word }}
                </p>
            </div>
        <div class="p-9">
            <p class="text-gray-600 text-base font-medium mb-4">Choose the answer </p>
            <div class="grid grid-cols-2 gap-8">                
                <!-- <label v-for="(answer,index) in mixingAnswers" class="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-4 px-6 border border-gray-200 rounded
                                 text-left">
                            <p class="font-semibold text-lg">
                                {{ answer.define }}
                            </p>
                </label> -->
                <div  v-for="(answer,index) in mixingAnswers">
                    <input type="radio" :name="'id' + term.id" :id="'id'+ term.id + answer.id + index" value="" class="hidden peer">
                    <label :for="'id'+ term.id + answer.id + index" class="inline-flex items-center justify-between w-full p-5 text-gray-900 bg-white border-2 border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 peer-checked:border-blue-600 hover:text-gray-600 dark:peer-checked:text-gray-300 peer-checked:text-gray-600 hover:bg-gray-50 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
                        <div class="block">
                            <div class="w-full text-lg font-semibold">
                                {{ answer.define }}
                            </div>
                        </div>
                    </label>
                </div>

            </div>

        </div>
    </div>

</template>

<style scoped>
.card_wrap {
    width: 50rem;
}
</style>

<script>
import GameButton from '../button/GameButton.vue';


export default {
    components: { GameButton },
    props: {
        term: {
            default: {
                word: '',
                define: '',
            }
        },
        answers: {
            default: [{
                word: '',
                define: '',
            }]
        },
        index: {
            default: 0,
        },
        total: {
            default: 0,
        }
    },
    computed: {
        mixingAnswers() {
            this.answers.push(this.term);
            return this.answers.sort(() => 0.5 - Math.random())
        }
    }
}

</script>