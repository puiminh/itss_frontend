<template>
    <CollectionFolder 
        v-if="!isLoading"
        v-for="i in datalist" 
        :id="i.collection.id"
        :key="i.collection.id"
        :title="i.collection.title"
        :image="i.collection.image"
    ></CollectionFolder>

    <SkeletonCollectionFolder v-else class="animate-pulse" v-for="i in total"></SkeletonCollectionFolder>
</template>

<script>;
import CollectionFolder from './CollectionFolder.vue';
import CourseFolder from './CourseFolder.vue';
import SkeletonCollectionFolder from './SkeletonCollectionFolder.vue';
import SkeletonCourseFolder from './SkeletonCourseFolder.vue';


export default {
components: { SkeletonCourseFolder, CourseFolder, CollectionFolder, SkeletonCollectionFolder },
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