<template>

<div class="bg-white p-4 rounded-md modalWrap">
    <div class="relative w-full">
        <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none z-10">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-5 h-5 text-blue-500">
  			    <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
		    </svg>
        </div>
        <input 
            @keyup="handleInput"
            type="text" id="simple-search" 
            class=" font-mono text-md text-gray-500
            bg-gray-50 border border-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search" required>
    </div>

    <div class="flex justify-between pr-4">
        <p class="text-md font-semibold text-blue-500 mt-4">
            {{searchObj}} that match your search:
        </p>
        <SwitchButton @handleSwitch="handleSwitchP"></SwitchButton>
    </div>


    <div v-if="!isLoading" class="grid grid-cols-2 gap-2 mt-2">
        <CourseFolder></CourseFolder>
        <CourseFolder></CourseFolder>
        <CourseFolder></CourseFolder>
        <CourseFolder></CourseFolder>
        <CourseFolder></CourseFolder>
        <CourseFolder></CourseFolder>
    </div>    
    <div v-else class="grid grid-cols-2 gap-2 mt-2 animate-pulse">
        <SkeletonCourseFolder></SkeletonCourseFolder>
        <SkeletonCourseFolder></SkeletonCourseFolder>
        <SkeletonCourseFolder></SkeletonCourseFolder>
        <SkeletonCourseFolder></SkeletonCourseFolder>
        <SkeletonCourseFolder></SkeletonCourseFolder>
        <SkeletonCourseFolder></SkeletonCourseFolder>

    </div>

    {{ testData }}
    <!-- <p class="text-md font-semibold text-blue-500 mt-4">
        Class that match your search:
    </p>

    <div class="grid grid-cols-2 gap-2 mt-2">
        <CollectionFolder class=""></CollectionFolder>
        <CollectionFolder class=""></CollectionFolder>

    </div> -->
</div>

</template>

<script>
import CourseFolder from '../folder/CourseFolder.vue'
import CollectionFolder from '../folder/CollectionFolder.vue'
import SwitchButton from '../button/SwitchButton.vue'
import SkeletonCourseFolder from '../folder/SkeletonCourseFolder.vue'
import axios from 'axios';


export default {
    components: {
    CourseFolder,
    CollectionFolder,
    SwitchButton,
    SkeletonCourseFolder
},
    data() {
        return {
            timeOut: null,
            searchObj: 'Course',
            isLoading: false,
            testData: ''
        }
    },
    methods: {
        handleInput() {
            console.log('Handle input');
            this.isLoading = true;
            clearTimeout(this.timeOut);

            this.timeOut = setTimeout(() => {
                this.callAPI();
            }, 500);
        },
        callAPI() {
            console.log('call');
            axios.get('https://www.superheroapi.com/api.php/3264999407146167/'+ Math.floor(Math.random() * 100)).then((res)=>{
                console.log(res.data.name);
                this.testData = res.data.name;
                this.isLoading = false;
            })
        },
        handleSwitchP(value) {
            this.searchObj = this.capitalizeFirstLetter(value);
        },
        capitalizeFirstLetter(string) {
            return string.charAt(0).toUpperCase() + string.slice(1);
        }
    }
}

</script>

<style scoped>
.modalWrap {
    min-width: 500px;
    max-height: 95vh;
    overflow-y: scroll;
}
</style>