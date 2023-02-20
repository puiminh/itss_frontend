<script>
import CollectionFolder from '../components/folder/CollectionFolder.vue';
import CourseFolder from '../components/folder/CourseFolder.vue';
import StackImage from '../components/stackimage/StackImage.vue';
import Block from '../components/block/Block.vue';
import Modal from '../components/modal/Modal.vue';
import Rating from '../components/rating/Rating.vue';
import gsap from 'gsap'



export default {
  components: {
    CourseFolder,
    CollectionFolder,
    StackImage,
    Block,
    Modal,
    Rating
  },
    data() {
        return {
            showModal: false,
        }
    },
    methods: {
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
    }
}

</script>

<template>
<div class="">
  <!-- <div class="">
      <h1 class="text-3xl font-semibold font-sans">Back to learning</h1>
  </div> -->
  <Transition appear class="recent" @before-enter="beforeEnterSlideIn" @enter="enterSlideIn" data-index="1" data-direct="" >
      <Block class="recentCourseWrap rounded-md moreGrayBG p-4 mt-5 w-fit pb-8" title="RECENT COURSE" explain="You have learned those course lately">

      <div
        class="grid 2xl:grid-cols-6 xl:grid-cols-3 md:grid-cols-3 gap-4 pt-5  "
      >
          <CourseFolder v-for="i in 6" :data-index="i" :key="i" showProgress="true"></CourseFolder>
      </div>


      </Block>
  </Transition>


  <div>
    <transition-group
      appear @before-enter="beforeEnterSlideIn" @enter="enterSlideIn"
      tag="div"
      class=" md:flex-col xl:flex xl:flex-row 2xl:flex-row 2xl:flex gap-8"
    >
      <Block key="1" data-index="1" data-direct="vertical" class="recommendCourseWrap rounded-md moreGrayBG p-4 mt-12 2xl:w-1/2 xl:w-full lg:w-full md:w-full h-fit pb-8" title="MAY BE YOU WILL LIKE THIS" explain="We base on your recent learning and bookmark">
        <div class="grid 2xl:grid-cols-3 xl:grid-cols-2 lg:grid-cols-3 gap-4 pt-5">
          <CourseFolder v-for="i in 6" showStar="true"></CourseFolder>
        </div>
      </Block>

      <Block key="2" data-index="2" data-direct="vertical" class="recommendClassWrap rounded-md moreGrayBG p-4 mt-12 2xl:w-fit xl:w-1/2 lg:w-fit md:w-fit pb-8" title="OR TAKE A LOOK AT SOME CLASS" explain="We base on your recent learning and bookmark">
        <div class="grid 2xl:grid-cols-2 xl:grid-cols-1 lg:grid-cols-2  gap-4 pt-5">
            <CollectionFolder v-for="i in 4"></CollectionFolder>
        </div>
      </Block>
    </transition-group>
  </div>

</div>

</template>

<style scoped>

</style>
