<script>
    import {container} from "jenesius-vue-modal";

import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
import Navbar from './components/navbar/Navbar.vue'
import Sidebar from './components/sidebar/Sidebar.vue'

export default {
        components: {
          WidgetContainerModal: container,
          Navbar,
          Sidebar
        },
        name: "App",
        data() {
          return {

          }
        },
        mounted() {
        //  [App.vue specific] When App.vue is finish loading finish the progress bar
        this.$Progress.finish();
      },
      created() {
        //  [App.vue specific] When App.vue is first loaded start the progress bar
        this.$Progress.start();
        //  hook the progress bar to start before we move router-view
        this.$router.beforeEach((to, from, next) => {
          //  does the page we want to go to have a meta.progress object
          if (to.meta.progress !== undefined) {
            let meta = to.meta.progress;
            // parse meta tags
            this.$Progress.parseMeta(meta);
          }
          //  start the progress bar
          this.$Progress.start();
          //  continue to next page
          next();
        });
        //  hook the progress bar to finish after we've finished moving router-view
        this.$router.afterEach((to, from) => {
          //  finish the progress bar
          this.$Progress.finish();
        });
      },
}


</script>

<template>
  
  <!-- <header>
    <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/signup">Sign In</RouterLink>
        <RouterLink to="/createcourse">Create Course</RouterLink>
        <RouterLink to="/test/1">Test View</RouterLink>
    </nav>
  </header> -->

  <!-- <Navbar></Navbar>

  <Sidebar>

    <RouterView class="pt-8 pl-16 overflow-hidden"> 


    </RouterView>

  </Sidebar> -->


  <RouterView v-slot="{Component, route}">
    <!-- <component v-if="route.name === 'Login'" :is="Component" /> -->
    <div v-if="route.name !== 'Login' && route.name !== 'Admin' && route.name !=='Landing' ">
          <Navbar></Navbar>
          <Sidebar>
            <component :is="Component"/>
            <widget-container-modal />

          </Sidebar>
    </div>
    <component v-else :is="Component" />
    <vue-progress-bar></vue-progress-bar>
  </RouterView>

</template>

<style>


@font-face {
  font-family: "Sagata";
  src: url('~@/assets/fonts/SagataNormalSansRegular.ttf');
}


</style>
