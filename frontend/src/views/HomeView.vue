<script>
import CourseFolder from '../components/folder/CourseFolder.vue';



export default {
  components: {
    CourseFolder
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
      <CourseFolder></CourseFolder>
      <CourseFolder></CourseFolder>
      <CourseFolder></CourseFolder>
      <CourseFolder></CourseFolder>
      <CourseFolder></CourseFolder>
      <CourseFolder></CourseFolder>
    </div>
  </div>

  <div class="flex gap-8 2xl:flex-row md:flex-col ">
    <div class="recommendCourseWrap rounded-3xl moreGrayBG p-4 mt-12 w-fit h-fit pb-8">
      <div class="rounded-full bg-white w-fit py-0.5 px-2">
        <span class="font-bold text-sm text-gray-500">MAYBE YOU WILL LIKE THIS</span>
      </div>
      <div class="grid grid-cols-2 gap-4 pt-5">
        <CourseFolder notShowProgress="true"></CourseFolder>
        <CourseFolder notShowProgress="true"></CourseFolder>
        <CourseFolder notShowProgress="true"></CourseFolder>
        <CourseFolder notShowProgress="true"></CourseFolder>
        <CourseFolder notShowProgress="true"></CourseFolder>
        <CourseFolder notShowProgress="true"></CourseFolder>
      </div>
    </div>

    <div class="recommendCourseWrap rounded-3xl moreGrayBG p-4 mt-12 w-fit pb-8">
      <div class="rounded-full bg-white w-fit py-0.5 px-2">
        <span class="font-bold text-sm text-gray-500">OR TAKE A LOOK OF SOME CLASS</span>
      </div>
      <div class="grid grid-cols-2 gap-4 pt-5">
        <CourseFolder></CourseFolder>
<div class="flex -space-x-4">
    <img class="w-10 h-10 border-2 border-white rounded-full dark:border-gray-800" src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="">
    <img class="w-10 h-10 border-2 border-white rounded-full dark:border-gray-800" src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="">
    <img class="w-10 h-10 border-2 border-white rounded-full dark:border-gray-800" src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="">
    <a class="flex items-center justify-center w-10 h-10 text-xs font-medium text-white bg-gray-700 border-2 border-white rounded-full hover:bg-gray-600 dark:border-gray-800" href="#">+99</a>
</div>
      </div>
    </div>

    <div class="recommendCourseWrap rounded-3xl moreGrayBG p-4 mt-12 w-fit pb-8">
      <div class="rounded-full bg-white w-fit py-0.5 px-2">
        <span class="font-bold text-sm text-gray-500">GIVE US SOME FEEDBACK</span>
      </div>
      <div class="grid grid-cols-1 gap-4 pt-5">
        <CourseFolder></CourseFolder>
        <CourseFolder></CourseFolder>
        <CourseFolder></CourseFolder>
        <CourseFolder></CourseFolder>
        <CourseFolder></CourseFolder>
        <CourseFolder></CourseFolder>
      </div>
    </div>
  </div>

</div>

</template>
