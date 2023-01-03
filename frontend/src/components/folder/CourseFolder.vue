<template>
<div class="courseFolderWrap border border-gray-200 p-4 rounded-3xl shadow-sm">
    <div class="flex avatar_name items-center">
        <img class="inline-block h-8 w-8 rounded-full ring-2 ring-white" :src="authorAvatar" alt=""/>
        <p class="ml-3 text-lg pb-0.5 textName">{{ authorName }}</p>
    </div>
    <div class="couse_image my-2">
        <img class="w-60 h-36 rounded-2xl" :src="courseImg" alt="">
    </div>
    <div class="flex lessons_time justify-between">
        <div class="logo_lessons flex gap-1">
            <svg class="text-slate-400 lessons_icon w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 19a2 2 0 01-2-2V7a2 2 0 012-2h4l2 2h4a2 2 0 012 2v1M5 19h14a2 2 0 002-2v-5a2 2 0 00-2-2H9a2 2 0 00-2 2v5a2 2 0 01-2 2z"></path></svg>
            <p class="text-slate-400 text-sm pt-0.5">{{ numberVocab }} Vocabulary</p>
        </div>
        <div class="time flex gap-1">
            <svg class="text-slate-400 w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
            <p class="text-slate-400 text-sm">{{ time}}</p>
        </div>
    </div>
    <div class="process mt-0.5 text-sm">
        <p class="text-slate-400 font-thin mb-1"><span class="text-blue-600">{{ process }} of 20</span> Process</p>
        <div class="w-full bg-gray-200 rounded-full h-1 dark:bg-gray-600">
            <div class="bg-blue-600 h-1 rounded-full" :style="`width: ${process/numberVocab * 100}%`"></div>
        </div>
    </div>
</div>
</template>

<script>

export default {
    props: {
        authorName: '',
        authorAvatar: {
            default: "https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
        },
        title: '',
        desc: '',
        numberVocab: '',
        time: '',
        process: {
            default: 0,
        },
        courseImg: {
            default: "https://images.ctfassets.net/hrltx12pl8hq/3j5RylRv1ZdswxcBaMi0y7/b84fa97296bd2350db6ea194c0dce7db/Music_Icon.jpg",
        }
    }
}

</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Anybody:ital,wght@0,100;0,200;0,300;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Bebas+Neue&family=Comic+Neue:ital,wght@0,300;0,400;0,700;1,300;1,400;1,700&family=Lilita+One&family=Oswald:wght@500&family=Ubuntu:ital,wght@0,300;0,400;0,500;0,700;1,300;1,400;1,500;1,700;1,900&display=swap');
.textName {
    font-family: 'Oswald', sans-serif;
}

* {
    font-family: 'Oswald', sans-serif;

}

</style>