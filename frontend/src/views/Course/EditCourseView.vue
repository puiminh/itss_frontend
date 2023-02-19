<template>
    <div class="wrapper px-20 mt-4 xl:mt-20 w-full">
        <p class="font-bold text-2xl">Edit a course</p>
        <p class="font-medium text-sm text-gray-600 mt-2">Auto saved</p>
        <div class="flex gap-5">
            <div class="w-4/5">
                <InputNoBorder title="TITLE" class="mt-8"/>
                <TextAreaNoBorder title="DESCRIPTION" class="mt-8" v-model="desc"></TextAreaNoBorder>
            </div>
            <div class="place-self-end">
                <GameButton class="!bg-blue-600 !px-3 !py-2">
                    <p class="text-center pt-2 font-bold text-white">
                        Edit
                    </p>
                </GameButton>
            </div>
        </div>
    
        <div class="mr-32 mt-12 flex flex-col gap-8 pt-10">
            <AddTermCard></AddTermCard>
            <AddTermCard></AddTermCard>
            <AddTermCard></AddTermCard>
            <AddTermCard></AddTermCard>
    
            <AddNewCard></AddNewCard>
        </div>
    </div>
    
    </template>
    <script>
    import GameButton from '../../components/button/GameButton.vue';
    import AddNewCard from '../../components/card/AddNewCard.vue';
    import AddTermCard from '../../components/card/AddTermCard.vue';
    import InputNoBorder from '../../components/input/InputNoBorder.vue';
    import TextAreaNoBorder from '../../components/input/TextAreaNoBorder.vue';
    
    
    export default {
        components: { InputNoBorder, GameButton, AddTermCard, AddNewCard, TextAreaNoBorder },
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