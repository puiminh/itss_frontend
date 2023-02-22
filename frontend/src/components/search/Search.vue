<template>

<div class="bg-white p-4 rounded-md modalWrap">
    <div class="relative w-full">
        <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none z-10">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-5 h-5 text-blue-500">
  			    <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
		    </svg>
        </div>
        <input 
            ref="searchinput"
            v-model="keyword"
            autocomplete="off"
            @keyup="handleInput"
            type="text" id="simple-search" 
            class=" font-mono text-md text-gray-500
            bg-gray-50 border border-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search" required>
    </div>

    <div class="hidden opacity-0" ref="searchresult">
        <div class="flex justify-between pr-4">
            <p class="text-md font-semibold text-blue-500 mt-4">
                {{capitalizeFirstLetter(searchObj)}} that match your search:
            </p>
            <SwitchButton 
                @handleSwitch="handleSwitchP"></SwitchButton>
        </div>

        <div v-if="!isLoading" class="grid grid-cols-2 gap-2 mt-2">
            <CourseFolder 
                v-if="searchObj=='course'" 
                v-for="i in resultList.data" 
                :key="i.course.id"
                :id="i.course.id"
                :title="i.course.title"
                :author="i.author"
                :contain="i.contain"
                ></CourseFolder>

                
            <CollectionFolder 
                v-else 
                v-for="i in resultList.data" 
                :id="i.collection.id"
                :key="i.collection.id"
                :title="i.collection.title"
                :image="i.collection.image"
                :author="i.author"
                :contain="i.contain"
                ></CollectionFolder>
        </div>    
        <div v-else class="grid grid-cols-2 gap-2 mt-2 animate-pulse">
            <SkeletonCourseFolder v-if="searchObj=='course'" v-for="i in 6"></SkeletonCourseFolder>
            <SkeletonCollectionFolder v-else v-for="i in 4"></SkeletonCollectionFolder>
        </div>
    </div>
</div>

</template>

<script>
import CourseFolder from '../folder/CourseFolder.vue'
import CollectionFolder from '../folder/CollectionFolder.vue'
import SwitchButton from '../button/SwitchButton.vue'
import SkeletonCourseFolder from '../folder/SkeletonCourseFolder.vue'
import SkeletonCollectionFolder from '../folder/SkeletonCollectionFolder.vue'

import gsap from 'gsap';
import axios from 'axios'


export default {
    components: {
    CourseFolder,
    CollectionFolder,
    SwitchButton,
    SkeletonCourseFolder,
    SkeletonCollectionFolder
},
    data() {
        return {
            timeOut: null,
            searchObj: 'course',
            isLoading: false,
            resultList: [],
            searching: false,
            keyword: '',
        }
    },

    watch: {
        searching(newSearch, oldSearch) {
            if(newSearch == true) {
                gsap.to(this.$refs.searchresult, {
                    display: 'block',
                    opacity: 1,
                    duration: 1,
                })
            }
        }
    },
    methods: {
        handleInput() {
            console.log('Handle input');
            if (this.keyword) {
                this.isLoading = true;
                clearTimeout(this.timeOut);

                this.timeOut = setTimeout(() => {
                    this.callAPI();
                }, 500);
                this.searching = true;
            }
        },
        callAPI() {
            this.$Progress.start();
            axios.get(`/courses_collections/${this.searchObj}/${this.keyword}`).then((res)=>{
                this.$Progress.finish();
                this.resultList = res.data;
                console.log(this.resultList);
                this.isLoading = false;
            })
        },
        handleSwitchP(value) {
            this.searchObj = value;
            this.handleInput();
        },
        capitalizeFirstLetter(string) {
            return string.charAt(0).toUpperCase() + string.slice(1);
        }
    },
    mounted() {
        this.$refs.searchinput.focus();
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