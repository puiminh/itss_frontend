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

    <RouterView class="mt-12"/>

  </Sidebar>

</template>

<style scoped>
/* header {
  line-height: 1.5;
  max-height: 100vh;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

nav {
  width: 100%;
    font-size: 24px;
    text-align: center;
    margin-top: 2rem;
    margin-bottom: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
} */
</style>
