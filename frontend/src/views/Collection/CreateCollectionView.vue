<template>
    <div class="wrapper px-20 mt-4 2xl:mt-12 w-full">
        <p class="font-bold text-2xl">Create a collection</p>
        <div class="flex gap-5">
            <div class="w-4/5">
                <InputNoBorder title="TITLE" class="mt-8"/>
                <TextAreaNoBorder title="DESCRIPTION" class="mt-8" v-model="desc"></TextAreaNoBorder>
            </div>
            <div class="place-self-end">
                <GameButton class="!bg-yellow-400 !px-3 !py-2">
                    <p class="text-center pt-2 font-bold text-white">
                        Create
                    </p>
                </GameButton>
            </div>
        </div>
        <div class="mt-8 flex gap-8">
            <div class="w-fit">
                <p class="text-gray-600 font-semibold text-sm uppercase">Collection Image</p>
                <ImageModal class="!p-2 !w-full mt-3 mb-8 !h-fit"></ImageModal>
            </div>
            <div class="w-full mr-64">
                <p class="text-gray-600 font-semibold text-sm uppercase">Add some courses</p>
                <MultiSelect class="mt-3 w-full"></MultiSelect>
            </div>
        </div>
    </div>
    
    </template>
    <script>
    import GameButton from '../../components/button/GameButton.vue';
    import InputNoBorder from '../../components/input/InputNoBorder.vue';
    import TextAreaNoBorder from '../../components/input/TextAreaNoBorder.vue';
    import ImageModal from '../../components/modal/ImageModal.vue';
    import MultiSelect from '../../components/input/MultiSelect.vue'
    
    
    export default {
        components: { InputNoBorder, GameButton, TextAreaNoBorder, ImageModal,  MultiSelect},
        data() {
            return {
                desc: '',
            }
        },
        methods: {
            log() {
                console.log(this.desc);
            }
        }
    }
    </script>
    
    <style scoped>
    .ql-container {
        border: none;
    }
    </style>