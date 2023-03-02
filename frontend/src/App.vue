<script>
import MainLayout from './layout/Main.vue'
import LandingLayout from './layout/Landing.vue'
import SignInView from './views/User/SignInView.vue';

export default {
    computed: {
    },
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

.fixedMiddle {
  position: fixed !important;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    z-index: 1000;
}


</style>
