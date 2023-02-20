<script>
import MainLayout from './layout/Main.vue'
import LandingLayout from './layout/Landing.vue'

export default {
}

</script>

<template>
  
<component :is="$route.meta.layout || 'div'"></component>
</template>

<style>


@font-face {
  font-family: "Sagata";
  src: url('~@/assets/fonts/SagataNormalSansRegular.ttf');
}


</style>
