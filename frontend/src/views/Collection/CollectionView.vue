
import StackImage from '../../components/stackimage/StackImage.vue';

<template>
<div class="pt-12">
    <div class="flex gap-6 w-fit px-8">
        <img class="w-1/6 rounded-md border-2 border-black " :src="collection.image" alt="">
        <div class="w-4/6 pt-3">
            <div class="flex gap-2">
                <h1 class="font-bold text-3xl">{{ collection.title }}</h1>
            </div>

            <div class="flex w-full mt-5 gap-8">
                <div class="logo_lessons flex gap-1">
                <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" height="16px" width="16px" version="1.1" id="Layer_1" viewBox="0 0 309.267 309.267" xml:space="preserve">
                <g>
                    <path style="fill:#D0994B;" d="M260.944,43.491H125.64c0,0-18.324-28.994-28.994-28.994H48.323c-10.67,0-19.329,8.65-19.329,19.329   v222.286c0,10.67,8.659,19.329,19.329,19.329h212.621c10.67,0,19.329-8.659,19.329-19.329V62.82   C280.273,52.15,271.614,43.491,260.944,43.491z"/>
                    <path style="fill:#E4E7E7;" d="M28.994,72.484h251.279v77.317H28.994V72.484z"/>
                    <path style="fill:#F4B459;" d="M19.329,91.814h270.609c10.67,0,19.329,8.65,19.329,19.329l-19.329,164.298   c0,10.67-8.659,19.329-19.329,19.329H38.658c-10.67,0-19.329-8.659-19.329-19.329L0,111.143C0,100.463,8.659,91.814,19.329,91.814z   "/>
                </g>
                </svg>
                <p class="text-slate-500 text-sm font-semibold"> {{ courses.length }} Courses</p>
            </div>
            
            <div class="flex gap-1">
                <StackImage></StackImage>
                <p class="font-semibold text-slate-500 text-sm">has bookmarked this class</p>
            </div>

            </div>

            <p class="pt-4 text-base text-gray-800">
                {{ collection.desc }}
            </p>
        </div>
        <div class="w-1/6 flex gap-2 pt-4 flex-col">
            <div>
                <p class="text-gray-500">Create by</p>
                <RouterLink :to="'/user/view/'+author.id" class="font-bold text-gray-600">{{ author.first_name + ' ' + author.last_name }}</RouterLink>
            </div>
            <img class="w-10 h-10 border-2 border-white dark:border-gray-800" 
                :src="author.avatar" alt="">
        </div>
    </div>


    <div class="moreGrayBG p-6 rounded-2xl mt-12">
        <Block title="All courses in this collection" explain="This collection contain this courses" class="">
            <div class="grid 2xl:grid-cols-4 xl:grid-cols-3 md:grid-cols-3 gap-3 py-4">
                <CourseFolder 
                    class="mr-4" v-for="i in courses"
                    :key="i.course.id"
                    :id="i.course.id"
                    :title="i.course.title" 
                    :author="author"
                    :contain="i.total_vocabularies"
                    showProgress="true"></CourseFolder>

            </div>
        </Block>
    </div>


</div>

</template>

<script>
import { mapState } from 'pinia';
import Block from '../../components/block/Block.vue';
import BookmarkButton from '../../components/button/BookmarkButton.vue';
import CourseFolder from '../../components/folder/CourseFolder.vue';
import ProgressBar from '../../components/progress/ProgressBar.vue';
import StackImage from '../../components/stackimage/StackImage.vue';
import { useCourseCollectionStore } from '../../stores/course';


export default {
    components: { StackImage, ProgressBar, CourseFolder, Block, BookmarkButton },
    computed: {
        ...mapState(useCourseCollectionStore, ['getCollectionInfo']),
        collection() {
            return this.getCollectionInfo.collection;
        },
        courses() {
            return this.getCollectionInfo.courses;
        },
        author() {
            return this.getCollectionInfo.author;
        }
    },

    beforeRouteEnter(to, from, next) {
        const courseStore = useCourseCollectionStore()
        console.log(to);
        courseStore.getCollectionInfoAction(to.params.id).then((res)=>{
            // this.wordlist = res.data;
            // this.totalword = this.wordlist.length
            console.log('getCollectionInfo:', courseStore.getCollectionInfo);
            next();
        })
    },
}

</script>