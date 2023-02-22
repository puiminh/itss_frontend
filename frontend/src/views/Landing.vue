<template>
<!-- Container for demo purpose -->
<div class="mb-80">

<!-- Section: Design Block -->
<section class="mb-40 sessionWrap">
  <nav class="navbar navbar-expand-lg shadow-md py-2 bg-white relative flex items-center w-full justify-between">
    <div class="px-6 w-full flex flex-wrap items-center justify-between">
      <div class="flex items-center">
        <button
          class="navbar-toggler border-0 py-3 lg:hidden leading-none text-xl bg-transparent text-gray-600 hover:text-gray-700 focus:text-gray-700 transition-shadow duration-150 ease-in-out mr-2"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContentY"
          aria-controls="navbarSupportedContentY"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <svg
            aria-hidden="true"
            focusable="false"
            data-prefix="fas"
            class="w-5"
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 448 512"
          >
            <path
              fill="currentColor"
              d="M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z"
            ></path>
          </svg>
        </button>
        <a class="navbar-brand text-blue-600" href="#!">
          <svg class="w-5 h-5 ml-2 lg:ml-0 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
            <path fill="currentColor" d="M485.5 0L576 160H474.9L405.7 0h79.8zm-128 0l69.2 160H149.3L218.5 0h139zm-267 0h79.8l-69.2 160H0L90.5 0zM0 192h100.7l123 251.7c1.5 3.1-2.7 5.9-5 3.3L0 192zm148.2 0h279.6l-137 318.2c-1 2.4-4.5 2.4-5.5 0L148.2 192zm204.1 251.7l123-251.7H576L357.3 446.9c-2.3 2.7-6.5-.1-5-3.2z"></path>
          </svg>
        </a>
      </div>
      <div class="navbar-collapse collapse grow items-center" id="navbarSupportedContentY">
        <ul class="navbar-nav mr-auto lg:flex lg:flex-row">
          <li class="nav-item">
            <a class="nav-link block pr-2 lg:px-2 py-2 text-gray-600 hover:text-gray-700 focus:text-gray-700 transition duration-150 ease-in-out" href="#!" data-mdb-ripple="true" data-mdb-ripple-color="light">Dashboard</a>
          </li>
          <li class="nav-item">
            <a class="nav-link block pr-2 lg:px-2 py-2 text-gray-600 hover:text-gray-700 focus:text-gray-700 transition duration-150 ease-in-out" href="#!" data-mdb-ripple="true" data-mdb-ripple-color="light">Team</a>
          </li>
          <li class="nav-item mb-2 lg:mb-0">
            <a class="nav-link block pr-2 lg:px-2 py-2 text-gray-600 hover:text-gray-700 focus:text-gray-700 transition duration-150 ease-in-out" href="#!" data-mdb-ripple="true" data-mdb-ripple-color="light">Projects</a>
          </li>
        </ul>
      </div>
      <div class="flex items-center lg:ml-auto">
        <button
          @click="openModalMethod" 
          type="button" class="inline-block px-6 py-2.5 mr-2 bg-transparent text-blue-600 font-medium text-xs leading-tight uppercase rounded hover:text-blue-700 hover:bg-gray-100 focus:bg-gray-100 focus:outline-none focus:ring-0 active:bg-gray-200 transition duration-150 ease-in-out" data-mdb-ripple="true" data-mdb-ripple-color="light">Login</button>
        <button 
          @click="openModalMethod"
          type="button" class="inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out" data-mdb-ripple="true" data-mdb-ripple-color="light">Sign up for free</button>
      </div>
    </div>
  </nav>

  <svg
    data-name="Layer 1"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 1440 320"
    preserveAspectRatio="none"
    class="svg absolute hidden lg:block"
    style="height: 560px; width: 100%; z-index: -10; overflow: hidden"
  >
    <defs>
      <linearGradient id="sw-gradient-0" x1="0" x2="0" y1="1" y2="0">
        <stop stop-color="hsl(217, 102%, 99%)" offset="0%"></stop>
        <stop stop-color="hsl(217,88%, 93%)" offset="100%"></stop>
      </linearGradient>
    </defs>
    <path
      fill="url(#sw-gradient-0)"
      d="M 0.351 264.418 C 0.351 264.418 33.396 268.165 47.112 270.128 C 265.033 301.319 477.487 325.608 614.827 237.124 C 713.575 173.504 692.613 144.116 805.776 87.876 C 942.649 19.853 1317.845 20.149 1440.003 23.965 C 1466.069 24.779 1440.135 24.024 1440.135 24.024 L 1440 0 L 1360 0 C 1280 0 1120 0 960 0 C 800 0 640 0 480 0 C 320 0 160 0 80 0 L 0 0 L 0.351 264.418 Z"
    ></path>
  </svg>

  <div class="px-6 py-12 lg:my-12 md:px-12 text-gray-800 text-center lg:text-left">
    <div class="container mx-auto xl:px-32">
      <div class="grid lg:grid-cols-2 gap-12 flex items-center">
        <div class="mt-12 lg:mt-0">
          <h1 class="text-5xl md:text-6xl xl:text-7xl font-bold tracking-tight mb-12">The easiest way <br /><span class="text-blue-600">for your learning</span></h1>
          <a @click="openModalMethod" class="inline-block px-7 py-3 mr-2 bg-blue-600 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out" data-mdb-ripple="true" data-mdb-ripple-color="light" href="#!" role="button">Get started</a>
          <a @click="openModalMethod" class="inline-block px-7 py-3 bg-transparent text-blue-600 font-medium text-sm leading-snug uppercase rounded hover:text-blue-700 hover:bg-gray-100 focus:bg-gray-100 focus:outline-none focus:ring-0 active:bg-gray-200 transition duration-150 ease-in-out" data-mdb-ripple="true" data-mdb-ripple-color="light" href="#!" role="button">Learn more</a>
        </div>
        <div class="mb-12 lg:mb-0">
          <img
            src="https://mdbootstrap.com/img/new/standard/city/017.jpg"
            class="w-full rounded-lg shadow-lg"
            alt=""
          />
        </div>
      </div>
    </div>
  </div>
</section>

<section class="flex flex-col justify-center sessionWrap mb-20" ref="searchsession">
  <h1 class="mx-auto text-5xl md:text-6xl xl:text-7xl font-bold tracking-tight mb-12">
    Learn everything for 
      <span class="text-blue-600 font-bold">FREE</span></h1>
  <SearchButton class="mx-auto w-1/2 !border-4 !border-blue-400 !justify-between"></SearchButton>


</section>

<section class="w-full sessionWrap">
  <div class="w-full">
    <transition-group
      appear @before-enter="beforeEnterSlideIn" @enter="enterSlideIn"
      tag="div"
      class="flex gap-8 justify-between px-32"
    >
      <div key="1" data-index="1" data-direct="vertical" class="recommendCourseWrap mt-12 w-fit h-fit pb-8" title="MAY BE YOU WILL LIKE THIS" explain="We base on your recent learning and bookmark">
        <h1 class="mx-auto text-4xl font-bold tracking-tight mb-12">
          Our best
          <span class="text-blue-600 font-bold">Course</span></h1>
        <div class="grid 2xl:grid-cols-2 xl:grid-cols-2 lg:grid-cols-2 gap-4 pt-5 rounded-md bg-white border-blue-400 border-2 p-4">
          <RenderCourseFolder :datalist="getRecommentCourse" :total="6" :isLoading="isLoadingCourse"></RenderCourseFolder>
        </div>
      </div>

      <div key="2" data-index="2" data-direct="vertical" class="recommendClassWrap mt-12 w-fit pb-8" title="OR TAKE A LOOK AT SOME CLASS" explain="We base on your recent learning and bookmark">
        <h1 class="mx-auto text-4xl font-bold tracking-tight mb-12">
          Our best
          <span class="text-blue-600 font-bold">Collection</span></h1>
        <div class="grid 2xl:grid-cols-2 xl:grid-cols-1 lg:grid-cols-2  gap-4 pt-5 rounded-md bg-white border-blue-400 border-2 p-4">
           <RenderCollectionFolder :datalist="getRecommentCollection" :total="4" :isLoading="isLoadingCollection"></RenderCollectionFolder>
        </div>
      </div>


    </transition-group>
  </div>
</section>
</div>

</template>

<script>
import gsap from 'gsap';
import { openModal, closeModal } from 'jenesius-vue-modal';
import { mapState } from 'pinia';
import Block from '../components/block/Block.vue';
import SearchButton from '../components/button/SearchButton.vue';
import CollectionFolder from '../components/folder/CollectionFolder.vue';
import CourseFolder from '../components/folder/CourseFolder.vue';
import RenderCollectionFolder from '../components/folder/RenderCollectionFolder.vue';
import RenderCourseFolder from '../components/folder/RenderCourseFolder.vue';
import { useCourseCollectionStore } from '../stores/course';
import SignInView from './User/SignInView.vue';

export default {
    data() {
      return {
        isLoadingCourse: false,
        isLoadingCollection: false,
      };
    },
    components: {
    SignInView,
    SearchButton,
    CollectionFolder,
    CourseFolder,
    Block,
    RenderCourseFolder,
    RenderCollectionFolder
},
    computed: {
      ...mapState(useCourseCollectionStore, ['getRecommentCollection', 'getRecommentCourse'])
    },
    methods: {
      openModalMethod() {
        openModal(SignInView)          
      },
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
      scrollMethod() {
        console.log('scroll');
      }
    },
    mounted() {
      setTimeout(() => {
        openModal(SignInView)          
        }, 1000);

      const courseStore = useCourseCollectionStore();
      this.isLoadingCourse = true
      this.isLoadingCollection = true
      courseStore.getRecommentCollectionAction().then(()=>{
        this.isLoadingCollection = false
      });
      courseStore.getRecommentCourseAction().then(()=> {
        this.isLoadingCourse = false
      });
    }
  }
  
</script>

<style scoped>
.sessionWrap {
  height: 60vh;
}
</style>
  