<template>
    <div class="rounded-xl shadow bg-white card_wrap">
        <p class="text-gray-400 font-normal absolute top-6 right-6">1 of 32</p>
        <div class="flex divide-x p-5">
            <div class="p-4 flex flex-col w-1/2">
                <p class="text-gray-600 text-base h-12 font-medium">Term</p>
                <p class="font-bold text-4xl">
                    Hello
                </p>
            </div>
            <div class="p-4 flex flex-col h-fit w-1/2">
                <p class="text-gray-600 text-base h-12 font-medium">Definition</p>
                <p class="font-semibold text-lg">
                            Xin chào, chào bạn. Ban va toi
                            <br>
                            Xin chào, chào bạn.
                            <br>
                            <br>
                            Xin chào, chào bạn.
                            <br>
                            Xin chào, chào bạn.
                            <br>
                            Xin chào, chào bạn.

                </p>
            </div>
        </div>
        <div class="p-9">
            <p class="text-gray-600 text-base font-medium mb-4">Choose the answer </p>
            <div class="flex justify-between gap-8">
                <button class="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-4 border border-gray-200 rounded
                                w-1/2">
                    True
                </button>
                <button class="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-4 border border-gray-200 rounded
                                w-1/2">
                    False
                </button>
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
    components: { GameButton }
}

</script>