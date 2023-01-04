<template>
<div class="courseFolderWrap border border-gray-200 px-4 py-3 rounded-3xl shadow-md bg-white">
    <p class="font-bold">{{title}}</p>
    <div v-if="notShowImg=='true'" class="couse_image my-1">
        <img class="w-56 h-28 rounded-xl" :src="courseImg" alt="">
    </div>
    <div class="flex lessons_time justify-between">
        <div class="logo_lessons flex gap-1">
            <svg class="text-slate-500 lessons_icon w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 19a2 2 0 01-2-2V7a2 2 0 012-2h4l2 2h4a2 2 0 012 2v1M5 19h14a2 2 0 002-2v-5a2 2 0 00-2-2H9a2 2 0 00-2 2v5a2 2 0 01-2 2z"></path></svg>
            <p class="text-slate-500 text-sm">{{ numberVocab }} Vocabulary</p>
        </div>
        <div class="flex avatar_name items-center">
            <img class="inline-block h-5 w-5 rounded-full ring-2 ring-white shadow-lg" :src="authorAvatar" alt=""/>
            <p class="text-slate-500 text-sm ml-1 pb-0.5">{{ authorName }}</p>
        </div>
    </div>
    <div v-if="notShowProgress=='false'" class="progress mt-0.5 text-sm">
        <p class="text-slate-500 font-thin mb-1"><span class="text-sm text-blue-600">{{ progress }} of 20</span> progress</p>
        <div class="w-full bg-gray-200 rounded-full h-1 dark:bg-gray-600">
            <div class="bg-blue-600 h-1 rounded-full" :style="`width: ${progress/numberVocab * 100}%`"></div>
        </div>
    </div>
</div>
</template>

<script>

export default {
    props: {
        authorName: {
            default: 'Max Miliam',
        },
        authorAvatar: {
            default: "https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
        },
        title: {
            default: 'Course'
        },
        desc: '',
        numberVocab: {
            default: 50,
        },
        time: '',
        progress: {
            default: 0,
        },
        courseImg: {
            default: "https://incucdep.com/wp-content/uploads/2018/01/in-an-card-visit-ep-kim-min.jpg",
        },
        notShowProgress: {
            default: 'false'
        },
        notShowImg: {
            default: 'false'
        }
    }
}

</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;1,300;1,400;1,500;1,600;1,700;1,800&display=swap');

.textName {
    font-family: 'Oswald', sans-serif;
}

* {
    font-family: 'Open Sans', sans-serif;   
}

.text-sm {
    font-weight: 600;
    font-size: 11px;
}

.courseFolderWrap {
    max-width: 16rem;
    min-width: 14rem;
}
</style>