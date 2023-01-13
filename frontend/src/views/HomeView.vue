<script>
import ClassFolder from '../components/folder/ClassFolder.vue';
import CourseFolder from '../components/folder/CourseFolder.vue';
import StackImage from '../components/stackimage/StackImage.vue';
import Block from '../components/block/Block.vue';
import Modal from '../components/modal/Modal.vue';
import Rating from '../components/rating/Rating.vue';




export default {
  components: {
    CourseFolder,
    ClassFolder,
    StackImage,
    Block,
    Modal,
    Rating
  },
    data() {
        return {
            showModal: false,
        }
    }
}

</script>

<template>
<div class="px-12">
  <!-- <div class="">
      <h1 class="text-3xl font-semibold font-sans">Back to learning</h1>
  </div> -->
  <div class="recentCourseWrap rounded-3xl moreGrayBG p-4 mt-5 w-fit pb-8">
    <div class="rounded-full bg-white w-fit py-0.5 px-2">
      <span class="font-bold text-sm text-gray-500">RECENT COURSE</span>
    </div>
    <div class="grid 2xl:grid-cols-6 gap-4 pt-5 md:grid-cols-3">
      <CourseFolder showProgress="true"></CourseFolder>
      <CourseFolder showProgress="true"></CourseFolder>
      <CourseFolder showProgress="true"></CourseFolder>
      <CourseFolder showProgress="true"></CourseFolder>
      <CourseFolder showProgress="true"></CourseFolder>
      <CourseFolder showProgress="true"></CourseFolder>
    </div>
  </div>

  <div class="flex gap-8 2xl:flex-row md:flex-col ">
    <Block class="recommendCourseWrap rounded-3xl moreGrayBG p-4 mt-12 w-fit h-fit pb-8" title="MAY BE YOU WILL LIKE THIS" explain="We base on your recent learning and bookmark">
      <div class="grid grid-cols-2 gap-4 pt-5">
        <CourseFolder showStar="true"></CourseFolder>
        <CourseFolder showStar="true"></CourseFolder>
        <CourseFolder showStar="true"></CourseFolder>
        <CourseFolder showStar="true"></CourseFolder>
        <CourseFolder showStar="true"></CourseFolder>
        <CourseFolder showStar="true"></CourseFolder>
      </div>
    </Block>

    <Block class="recommendClassWrap rounded-3xl moreGrayBG p-4 mt-12 w-fit pb-8" title="OR TAKE A LOOK AT SOME CLASS" explain="We base on your recent learning and bookmark">
      <div class="grid grid-cols-2 gap-4 pt-5">
          <ClassFolder></ClassFolder>
          <ClassFolder></ClassFolder>
          <ClassFolder></ClassFolder>
          <ClassFolder></ClassFolder>
      </div>
    </Block>

    <Block class="recommendCourseWrap rounded-3xl moreGrayBG p-4 mt-12 w-fit pb-8" title="GIVE US SOME FEEDBACK" explain="Those courses you have learned before">
      <div class="grid grid-cols-1 gap-4 pt-5">
        <div class="flex">
          <CourseFolder></CourseFolder>
          <div class="flex flex-col gap-2">
            <button class="p-1.5 rounded-3xl bg-white" id="show-modal" @click="showModal = true">
              <svg class="h-5" fill="#FFDF00" stroke="black" stroke-width="1" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"></path>
              </svg>
            </button>
            <Modal v-if="showModal" @close="showModal = false">
              <template v-slot:body>
                <Rating></Rating>
              </template>
            </Modal>

            <button class="p-1.5 rounded-3xl bg-white">
              <svg class="h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" fill="none" stroke-width="1">
              <rect width="48" height="48" fill="white" fill-opacity="0.01"/>
              <rect width="48" height="48" fill="white" fill-opacity="0.01"/>
              <path d="M44 6H4V36H13V41L23 36H44V6Z" fill="#2F88FF" stroke="#000000" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M14 19.5V22.5" stroke="white" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M24 19.5V22.5" stroke="white" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M34 19.5V22.5" stroke="white" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
            </button>
          </div>

        </div>

        <CourseFolder></CourseFolder>
        <CourseFolder></CourseFolder>
        <CourseFolder></CourseFolder>
        <CourseFolder></CourseFolder>
        <CourseFolder></CourseFolder>
      </div>
    </Block>
  </div>

</div>

</template>
