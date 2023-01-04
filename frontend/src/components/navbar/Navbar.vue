<template>


<nav class="flex justify-between px-10 pt-8 pb-6 items-center bg-white">
    <div class="flex justify-around gap-28">
      <div class="flex justify-between">
        <h1 class="text-5xl text-gray-800 font-bold logoText">LABA</h1>
        <div class="text-3xl mx-4 pt-0.5">|</div>
        <p class="logoDescText pt-3"> FLASHCARD <br> LEARNING</p>
      </div>
      <div class="flex text-base statusRouterBar pt-2">
        <p> Home </p>
        <p class="text-sm mx-3 pt-0.5 oswald"> > </p>
        <p> English Class </p>
        <p class="text-sm mx-3 pt-0.5 oswald"> > </p>
        <p> English Course </p>
      </div>
    </div>
    <div class="flex items-center">
      <ul class="flex items-center space-x-8">
        <li>
          <div class="flex items-center">
            <SearchButton></SearchButton>
          </div>
        </li>
        <li>
          <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
          </svg>
        </li>
        <li>
          <img class="inline-block h-10 w-10 rounded-full ring-2 ring-white" src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt=""/>
        </li>
        <li>
          <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
        </li>
      </ul>
    </div>
</nav>

</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Lilita+One&family=Oswald:wght@500&family=Ubuntu:ital,wght@0,300;0,400;0,500;0,700;1,300;1,400;1,500;1,700&display=swap');
.logoText, .lilita {
  font-family: 'Lilita One', cursive;
}

.oswald {
  font-family: 'Oswald', sans-serif!important;
}

.logoDescText {
  font-family: 'Lilita One', cursive;
  font-size: 12px;
  line-height: 12px;
}

.statusRouterBar p{
  color: #96a0a7;
  cursor: pointer;
  font-family: 'Ubuntu', sans-serif;
}
.statusRouterBar p:last-child {
  color: #545454;
}

</style>

<script>
import SearchButton from '../searchbutton/SearchButton.vue';

export default {
 components: {
  SearchButton
 }
}

</script>