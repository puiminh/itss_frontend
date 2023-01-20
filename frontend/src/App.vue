<script setup>
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
import Navbar from './components/navbar/Navbar.vue'
import Sidebar from './components/sidebar/Sidebar.vue'


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

  <Navbar></Navbar>

  <Sidebar>

    <RouterView class="pt-8 pl-16 overflow-hidden"/>

  </Sidebar>

</template>

<style>


@font-face {
  font-family: "Sagata";
  src: url('~@/assets/fonts/SagataNormalSansRegular.ttf');
}


</style>
