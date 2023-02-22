<script>
import CollectionFolder from '../components/folder/CollectionFolder.vue';
import CourseFolder from '../components/folder/CourseFolder.vue';
import StackImage from '../components/stackimage/StackImage.vue';
import Block from '../components/block/Block.vue';
import Modal from '../components/modal/Modal.vue';
import Rating from '../components/rating/Rating.vue';
import gsap from 'gsap'
import { useCourseCollectionStore } from '../stores/course';
import { mapActions, mapState } from 'pinia';
import RenderCourseFolder from '../components/folder/RenderCourseFolder.vue';
import RenderCollectionFolder from '../components/folder/RenderCollectionFolder.vue';



export default {
  components: {
    CourseFolder,
    CollectionFolder,
    StackImage,
    Block,
    Modal,
    Rating,
    RenderCourseFolder,
    RenderCollectionFolder
},
    data() {
        return {
            showModal: false,
            isLoadingCourse: false,
            isLoadingCollection: false,
            isLoadingRecent: false,
        }
    },

    computed: {
      ...mapState(useCourseCollectionStore, ['getRecentCourse','getRecommentCollection', 'getRecommentCourse'])
    },
    methods: {
      ...mapActions(useCourseCollectionStore,['getRecommentCollectionAction','getRecentCourseAction','getRecommentCourseAction']),
      beforeEnterSlideIn(el) {
        el.style.opacity = 0
        el.style.transform = (el.dataset.direct == 'vertical') ? 'translateY(100px)' : 'translateX(100px)'
      },
      enterSlideIn(el, done) {
        console.log(el.dataset);
        if(el.dataset.direct == 'vertical') {
          gsap.to(el, {
          opacity: 1,
          y: 0,
          duration: 0.8,
          onComplete: done,
          delay: el.dataset.index * 0.2
          })
        } else {
          gsap.to(el, {
          opacity: 1,
          x: 0,
          duration: 0.8,
          onComplete: done,
          delay: el.dataset.index * 0.2
          })
        }
      },
    },
    mounted() {
      const courseStore = useCourseCollectionStore();
      this.isLoadingCourse = true
      this.isLoadingCollection = true
      this.isLoadingRecent = true
      courseStore.getRecentCourseAction().then(()=> {
        this.isLoadingRecent = false
      })
      courseStore.getRecommentCollectionAction().then(()=>{
        this.isLoadingCollection = false
      });
      courseStore.getRecommentCourseAction().then(()=> {
        this.isLoadingCourse = false
      });
    }
}

</script>

<template>
  <div class="w-full flex justify-center">
    <div class="">
      <!-- <div class="">
          <h1 class="text-3xl font-semibold font-sans">Back to learning</h1>
      </div> -->
      <Transition appear class="recent" @before-enter="beforeEnterSlideIn" @enter="enterSlideIn" data-index="1" data-direct="" >
          <Block class="recentCourseWrap rounded-md moreGrayBG p-4 mt-5 w-fit pb-8" title="RECENT COURSE" explain="You have learned those course lately">

          <div
            class="grid 2xl:grid-cols-6 xl:grid-cols-3 md:grid-cols-3 gap-4 pt-5  "
          >
          <RenderCourseFolder :datalist="getRecentCourse" :total="6" :isLoading="isLoadingRecent"></RenderCourseFolder>    
          </div>

          <div v-if="getRecentCourse.length == 0 && !isLoadingRecent" class="flex justify-center  pt-5 px-8">
            <p class="text-2xl font-semibold text-center mx-auto text-slate-600">You haven't start learning yet!</p>
          </div>


          </Block>
      </Transition>


      <div>
        <transition-group
          appear @before-enter="beforeEnterSlideIn" @enter="enterSlideIn"
          tag="div"
          class=" md:flex-col xl:flex xl:flex-row 2xl:flex-row 2xl:flex gap-8"
        >
          <Block key="1" data-index="1" data-direct="vertical" class="recommendCourseWrap rounded-md moreGrayBG p-4 mt-12 2xl:w-1/2 xl:w-full lg:w-full md:w-full h-fit pb-8" title="Recommend Course" explain="We base on your recent learning and bookmark">
            <div class="grid 2xl:grid-cols-3 xl:grid-cols-2 lg:grid-cols-3 gap-4 pt-5">
              <RenderCourseFolder :datalist="getRecommentCourse" :total="6" :isLoading="isLoadingCourse"></RenderCourseFolder>
            </div>
          </Block>

          <Block key="2" data-index="2" data-direct="vertical" class="recommendClassWrap rounded-md moreGrayBG p-4 mt-12 2xl:w-fit xl:w-1/2 lg:w-fit md:w-fit pb-8" title="Recommend Collection" explain="We base on your recent learning and bookmark">
            <div class="grid 2xl:grid-cols-2 xl:grid-cols-1 lg:grid-cols-2  gap-4 pt-5">
              <RenderCollectionFolder :datalist="getRecommentCollection" :total="4" :isLoading="isLoadingCollection"></RenderCollectionFolder>  
            </div>
          </Block>
        </transition-group>
      </div>

    </div>
  </div>


</template>

<style scoped>

</style>
