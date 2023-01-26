<template>
<div class="wrapper px-20 mt-4">
    <p class="font-bold text-2xl">Create a course</p>
    <p class="font-medium text-sm text-gray-600 mt-2">Auto saved</p>
    <div class="flex gap-5">
        <div class="w-4/5">
            <InputNoBorder title="TITLE" class="mt-8"/>
            <InputNoBorder title="DESCRIPTION" class="mt-4"/>
        </div>
        <div class="place-self-end">
            <GameButton class="!bg-blue-600 !px-3 !py-2">
                <p class="text-center pt-2 font-bold text-white">
                    Create
                </p>
            </GameButton>
        </div>
    </div>

    <div class="mr-32 mt-12 flex flex-col gap-8">
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


export default {
    components: { InputNoBorder, GameButton, AddTermCard, AddNewCard },
    data() {
        return {
            content: '',
        }
    },
    methods: {
        log() {
            console.log(this.content);
        }
    }
}
</script>

<style scoped>
.ql-container {
    border: none;
}
</style>