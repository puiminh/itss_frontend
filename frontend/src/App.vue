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
        }
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
            <component :is="Component" class="mt-8 mx-8"/>
            <widget-container-modal />

          </Sidebar>
    </div>
    <component v-else :is="Component" />
  </RouterView>

</template>

<style>


@font-face {
  font-family: "Sagata";
  src: url('~@/assets/fonts/SagataNormalSansRegular.ttf');
}


</style>
