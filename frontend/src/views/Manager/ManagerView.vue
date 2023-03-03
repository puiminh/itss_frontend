<template>
 <div class="w-full px-12 py-8 relative">
  <div class="absolute z-10 -top-2 bg-white px-3 rounded-t-lg">
    <SwitchButton
      @handleSwitch="handleSwitchP"
    ></SwitchButton>
  </div>
  <Transition name="course" mode="out-in">
    <CourseTableUser key="1"  v-if="searchObj == 'course'" ref="coursetable"></CourseTableUser>    
    <CollectionTableUser key="2"  v-else ref="collectiontable"></CollectionTableUser>
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
import CourseTableUser from '../../components/table/CourseTableUser.vue';
import CollectionTableUser from '../../components/table/CollectionTableUser.vue';
  
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
  components: { CourseTable, CourseTable, SwitchButton, CollectionTable, CourseTableUser, CollectionTableUser }
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