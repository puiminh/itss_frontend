<template>
    <div class="bg-white rounded-md flex w-full justify-center items-center py-8">
        <div class="flex border-b-blue-500 border-b-8 hover:border-b-yellow-300 cursor-pointer pb-3 border-width-custom">

            <p class="font-bold text-lg flex">
               <p class="font-black text-base pt-0.5">+</p> ADD CARD
            </p>
        </div>

    </div>
</template>

<script>
import InputNoBorder from '../input/InputNoBorder.vue';


export default {
    components: { InputNoBorder }
}
</script>

<style scoped>
.border-width-custom {
    border-bottom: 0.3125rem solid #3ccfcf;
    border-bottom-width: 0.3125rem;
    border-bottom-style: solid;
    border-bottom-color: rgb(60, 207, 207);
}

.border-width-custom:hover {
    border-bottom-color: #ffcd1f;
    color: #ffcd1f;
}


</style>