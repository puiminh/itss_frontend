<template>
    <RouterLink :to="`/collection/${id}`" class="courseFolderWrap border border-gray-200 px-4 py-3 rounded-md shadow-md bg-white">
        <div class="flex justify-between">
            <p class="font-bold text-base truncate">{{title}}</p>
            <div v-if="showStar=='true'" class="flex">
                <p class="font-black text-gray-600">4.5</p>
                <p class="font-black text-tiny pt-1.5 text-gray-300">/5</p>
                <svg class="h-5" fill="#FFDF00" stroke="#FDCC0D" stroke-width="0.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"></path>
                </svg>
            </div>
        </div>
        <div class="couse_image my-2">
            <img class="w-56 h-28 rounded-sm object-cover" :src="image" alt="">
        </div>
        <div class="flex lessons_time justify-between mt-1">
            <div class="logo_lessons flex gap-1">
                <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" height="16px" width="16px" version="1.1" id="Layer_1" viewBox="0 0 309.267 309.267" xml:space="preserve">
                <g>
                    <path style="fill:#D0994B;" d="M260.944,43.491H125.64c0,0-18.324-28.994-28.994-28.994H48.323c-10.67,0-19.329,8.65-19.329,19.329   v222.286c0,10.67,8.659,19.329,19.329,19.329h212.621c10.67,0,19.329-8.659,19.329-19.329V62.82   C280.273,52.15,271.614,43.491,260.944,43.491z"/>
                    <path style="fill:#E4E7E7;" d="M28.994,72.484h251.279v77.317H28.994V72.484z"/>
                    <path style="fill:#F4B459;" d="M19.329,91.814h270.609c10.67,0,19.329,8.65,19.329,19.329l-19.329,164.298   c0,10.67-8.659,19.329-19.329,19.329H38.658c-10.67,0-19.329-8.659-19.329-19.329L0,111.143C0,100.463,8.659,91.814,19.329,91.814z   "/>
                </g>
                </svg>
                <p class="text-slate-500 text-sm font-semibold">{{ numberVocab }} Courses</p>
            </div>
            <div class="flex avatar_name items-center">
                <img class="inline-block h-5 w-5 rounded-full ring-2 ring-white shadow-lg" :src="authorAvatar" alt=""/>
                <p class="text-slate-500 text-sm font-semibold ml-1 pb-0.5">{{ authorName }}</p>
            </div>
        </div>
        <div v-if="showProgress=='true'" class="progress  text-sm font-semibold">
            <p class="text-slate-500 font-thin mb-1"><span class="text-sm font-semibold text-blue-600">{{ progress }} of 20</span> progress</p>
            <div class="w-full bg-gray-200 rounded-full h-1 dark:bg-gray-600">
                <div class="bg-blue-600 h-1 rounded-full" :style="`width: ${progress/numberVocab * 100}%`"></div>
            </div>
        </div>
        <div v-if="showBookmark=='true'" class="flex gap-1.5 mt-1">
            <StackImage></StackImage>
            <span class="pt-1.5 text-sm font-semibold">has <a class="font-bold text-red-700 cursor-pointer">bookmark</a> this class</span>
        </div>
    </RouterLink>
    </template>
    
    <script>
import StackImage from '../stackimage/StackImage.vue';

    
    export default {
    props: {
        id: {
            default: 1,
        },
        authorName: {
            default: "Max Miliam",
        },
        authorAvatar: {
            default: "https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
        },
        title: {
            default: "Course"
        },
        desc: "",
        numberVocab: {
            default: 50,
        },
        time: "",
        progress: {
            default: 0,
        },
        image: {
            default: "https://incucdep.com/wp-content/uploads/2018/01/in-an-card-visit-ep-kim-min.jpg",
        },
        showProgress: {
            default: "false"
        },
        showStar: {
            default: "false"
        },
        showBookmark: {
            default: "false"
        }
    },
    components: { StackImage }
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
        font-size: 11px;
    }
    
    .text-tiny {
        font-size: 9px;
    }
    
    .courseFolderWrap {
        max-width: 15rem;
        min-width: 12rem;
    }
    </style>