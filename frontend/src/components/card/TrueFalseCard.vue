<template>
    <div class="rounded-xl shadow bg-white card_wrap border-2" ref="wrap">
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
                    <input :disabled="disabled" type="radio" :name="idname" :id="idtrue" :value="true" v-model="truefalse" class="hidden peer">
                    <label :ref="idtrue" :for="idtrue" class="inline-flex items-center justify-between w-full p-5 text-gray-900 bg-white border-2 border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 peer-checked:border-blue-600 hover:text-gray-600 dark:peer-checked:text-gray-300 peer-checked:text-gray-600 hover:bg-gray-50 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
                        <div class="block">
                            <div class="w-full text-lg font-semibold">
                                True
                            </div>
                        </div>
                    </label>
                </div>

                <div class="w-full">
                    <input :disabled="disabled" type="radio" :name="idname" :id="idfalse" :value="false" v-model="truefalse" class="hidden peer">
                    <label :ref="idfalse" :for="idfalse" class="inline-flex items-center justify-between w-full p-5 text-gray-900 bg-white border-2 border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 peer-checked:border-blue-600 hover:text-gray-600 dark:peer-checked:text-gray-300 peer-checked:text-gray-600 hover:bg-gray-50 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
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

.correct {
    border-color: rgb(14 159 110)
}

.incorrect {
    border-color: rgb(240 82 82)
}

</style>

<script>
import GameButton from '../button/GameButton.vue';


export default {
    components: { GameButton },
    data() {
        return {
            truefalse: null,
            testresult: null,
            disabled: false,
        }
    },
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
    },
    methods: {
        submit() {
            // this.$refs[this.idfalse]
            if (this.testresult) {
                this.$refs.wrap.classList.add("correct")
            } else {
                this.$refs.wrap.classList.add("incorrect")
            }
            this.disabled = true;
        }
    },
    watch: {
        truefalse(newValue, oldValue) {
            this.testresult = ((this.term.vocabulary_id == this.answer.vocabulary_id) == newValue)
            console.log(this.term.word, this.answer.word, newValue, this.testresult);      
        }
    },
    computed: {
        idtrue() {
            return 'idtrue'+ this.term.vocabulary_id
        },
        idfalse() {
            return 'idfalse'+ this.term.vocabulary_id
        },
        idname() {
            return 'id'+ this.term.vocabulary_id
        }
    }
}

</script>