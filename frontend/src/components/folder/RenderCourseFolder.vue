<template>
            <CourseFolder 
                v-if="!isLoading"
                v-for="i in datalist" 
                :key="i.course.id"
                :id="i.course.id"
                :title="i.course.title"
                ></CourseFolder>
    
            <SkeletonCourseFolder v-else class="animate-pulse" v-for="i in total"></SkeletonCourseFolder>
</template>

<script>;
import CourseFolder from './CourseFolder.vue';
import SkeletonCourseFolder from './SkeletonCourseFolder.vue';


export default {
    components: { SkeletonCourseFolder, CourseFolder },
    props: {
        isLoading: {
            type: Boolean
        },
        datalist: {
            type: Array
        },
        total: 6,
    }
}

</script>