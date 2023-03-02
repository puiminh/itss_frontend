<template>
 <div class="w-full px-12 py-8 relative">
  <div class="absolute z-10 -top-2 bg-white px-3 rounded-t-lg">
    <SwitchButton
      @handleSwitch="handleSwitchP"
    ></SwitchButton>
  </div>
  <Transition name="course" mode="out-in">
    <CourseTable key="1"  v-if="searchObj == 'course'" :data="dataCourse" ref="coursetable"></CourseTable>    
    <CollectionTable key="2"  v-else :data="dataCollection" ref="collectiontable"></CollectionTable>
  </Transition>
  <Transition name="collection">
  </Transition>
 </div>
  </template>
  
  <script>
  import axios from 'axios';
  import { mapState } from 'pinia';
  import SwitchButton from '../../components/button/SwitchButton.vue';
  import CourseTable from '../../components/table/CourseTable.vue';
  import CollectionTable from '../../components/table/CollectionTable.vue';

  import { useCourseCollectionStore } from '../../stores/course';
  
  export default {
  data() {
      return {
        dataCourse: [],
        dataCollection: [],
        searchObj: 'course',
      };
  },
  computed: {
    ...mapState(useCourseCollectionStore, ['getCreatedCourse','getCreatedCollection']),

  },
  methods: {
      deleteMethod(data) {
          console.log(data);
      },
      handleSwitchP(value) {
            this.searchObj = value;
      },
  },
  mounted() {
    this.dataCourse = this.getCreatedCourse.map((e)=> e.course)
    this.dataCollection = this.getCreatedCollection.map((e)=> e.collection)
  },
  beforeRouteEnter(to, from, next) {
    const courseStore = useCourseCollectionStore();
    console.log(to);
    courseStore.getCreatedCourseCollectionAction().then((res)=>{
      console.log('getCreated:');
      next();
    })
  },
  components: { CourseTable, CourseTable, SwitchButton, CollectionTable }
}
  </script>

  <style scoped>
.course-enter-active,
.course-leave-active {
  transition: all 0.5s ease;
}

.course-enter-from,
.course-leave-to {
  opacity: 0;
  transform: translateY(50px);

}
  </style>