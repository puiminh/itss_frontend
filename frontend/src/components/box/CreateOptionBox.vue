<template>
<div class="w-40 text-gray-900 bg-white border border-gray-200 rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white">
    <div class="relative inline-flex items-center w-full px-4 py-2 text-sm font-medium border-b border-gray-200 rounded-t-lg bg-blue-600 text-white">
        Create
    </div>
    <RouterLink @click="closeModalMethod" to="/create/course" type="button" class="relative inline-flex items-center w-full px-4 py-2 text-sm font-medium border-b border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:border-gray-600 dark:hover:bg-gray-600 dark:hover:text-white dark:focus:ring-gray-500 dark:focus:text-white">
        <svg class="mr-2" width="16px" height="16px" viewBox="0 -3 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="48" height="48" fill="white" fill-opacity="0.01"/>
            <path d="M28 12V4L8 14V42L20 36" stroke="#000000" stroke-width="4" stroke-linejoin="round"/>
            <path d="M20 16L40 6V34L20 44V16Z" fill="#2F88FF" stroke="#000000" stroke-width="4" stroke-linejoin="round"/>
        </svg>
        Course
    </RouterLink>
    <RouterLink @click="closeModalMethod" to="/create/collection" type="button" class="relative inline-flex items-center w-full px-4 py-2 text-sm font-medium border-b border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:border-gray-600 dark:hover:bg-gray-600 dark:hover:text-white dark:focus:ring-gray-500 dark:focus:text-white">
        <svg class="mr-2" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" height="16px" width="16px" version="1.1" id="Layer_1" viewBox="0 0 309.267 309.267" xml:space="preserve">
            <g>
                <path style="fill:#D0994B;" d="M260.944,43.491H125.64c0,0-18.324-28.994-28.994-28.994H48.323c-10.67,0-19.329,8.65-19.329,19.329   v222.286c0,10.67,8.659,19.329,19.329,19.329h212.621c10.67,0,19.329-8.659,19.329-19.329V62.82   C280.273,52.15,271.614,43.491,260.944,43.491z"/>
                <path style="fill:#E4E7E7;" d="M28.994,72.484h251.279v77.317H28.994V72.484z"/>
                <path style="fill:#F4B459;" d="M19.329,91.814h270.609c10.67,0,19.329,8.65,19.329,19.329l-19.329,164.298   c0,10.67-8.659,19.329-19.329,19.329H38.658c-10.67,0-19.329-8.659-19.329-19.329L0,111.143C0,100.463,8.659,91.814,19.329,91.814z   "/>
            </g>
        </svg>
        Collection
    </RouterLink>
</div>

</template>

<script>
import { openModal, closeModal } from 'jenesius-vue-modal';

export default {
    methods: {
        closeModalMethod() {
            closeModal();
        }
    }
}

</script>