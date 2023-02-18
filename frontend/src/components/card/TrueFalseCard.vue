<template>
    <div class="rounded-xl shadow bg-white card_wrap">
        <p class="text-gray-400 font-normal absolute top-6 right-6"> {{ index }} of {{ total }}</p>
        <div class="flex divide-x p-5">
            <div class="p-4 flex flex-col w-1/2">
                <p class="text-gray-600 text-base h-12 font-medium">Term</p>
                <p class="font-bold text-4xl">
                    {{ term.word }}
                </p>
            </div>
            <div class="p-4 flex flex-col h-fit w-1/2">
                <p class="text-gray-600 text-base h-12 font-medium">Definition</p>
                <p class="font-semibold text-lg">
                    {{ answer.define }}
                </p>
            </div>
        </div>
        <div class="p-9">
            <p class="text-gray-600 text-base font-medium mb-4">Choose the answer </p>
            <div class="flex justify-between gap-8">
                <div class="w-full">
                    <input type="radio" :name="'id' + term.id" :id="'idtrue'+ term.id" value="" class="hidden peer">
                    <label :for="'idtrue'+ term.id" class="inline-flex items-center justify-between w-full p-5 text-gray-900 bg-white border-2 border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 peer-checked:border-blue-600 hover:text-gray-600 dark:peer-checked:text-gray-300 peer-checked:text-gray-600 hover:bg-gray-50 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
                        <div class="block">
                            <div class="w-full text-lg font-semibold">
                                True
                            </div>
                        </div>
                    </label>
                </div>

                <div class="w-full">
                    <input type="radio" :name="'id' + term.id" :id="'idfalse'+ term.id" value="" class="hidden peer">
                    <label :for="'idfalse'+ term.id" class="inline-flex items-center justify-between w-full p-5 text-gray-900 bg-white border-2 border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 peer-checked:border-blue-600 hover:text-gray-600 dark:peer-checked:text-gray-300 peer-checked:text-gray-600 hover:bg-gray-50 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
                        <div class="block">
                            <div class="w-full text-lg font-semibold">
                                False 
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
        answer: {
            default: {
                word: '',
                define: '',
            }
        },
        index: {
            default: 0,
        },
        total: {
            default: 0,
        }
    }
}

</script>