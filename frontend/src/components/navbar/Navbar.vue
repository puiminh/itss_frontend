<template>


<nav class="flex justify-between px-10 py-4 items-center bg-white" >
    <div class="flex justify-around gap-28">

      <RouterLink to="/" class="flex justify-between">
        <h1 class="text-5xl text-gray-800 font-bold logoText">LABA</h1>
        <div class="text-3xl mx-4 pt-0.5">|</div>
        <p class="logoDescText pt-3"> FLASHCARD <br> LEARNING</p>
      </RouterLink>

      <Breadcumbs></Breadcumbs>
    </div>
    <div class="flex items-center">
      <ul class="flex items-center space-x-2">
        <li>
            <SearchButton></SearchButton>
        </li>
        <li>
            <div class="relative inline-block">
              <NoctiButton v-if="getLogin"></NoctiButton>

          </div>
        </li>
        <li v-if="isLogin" class="relative inline-block">
          <div class="relative z-10 block p-2 text-gray-700 bg-white border border-transparent rounded-md dark:text-white focus:border-blue-500 focus:ring-opacity-40 dark:focus:ring-opacity-40 focus:ring-blue-300 dark:focus:ring-blue-400 focus:ring dark:bg-gray-800 focus:outline-none">

        <button @click="openPersonal = !openPersonal" id="dropdownAvatarNameButton" data-dropdown-toggle="dropdownAvatarName" class="flex items-center text-sm font-medium text-gray-900 rounded-full hover:text-blue-600 dark:hover:text-blue-500 md:mr-0 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:text-white truncate" type="button">
            <span class="sr-only">Open user menu</span>
            <img class="w-8 h-8 mr-2 rounded-full" 
                 :src="getUser.avatar ? getUser.avatar : '' " alt="user photo">
              {{ getUser.first_name + ' ' + getUser.last_name  }}
            <svg class="w-4 h-4 mx-1.5" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
        </button>

        <!-- Dropdown menu -->
        <div v-if="openPersonal" id="dropdownAvatarName" class="z-10 bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600 absolute right-0  mt-2 overflow-hidden origin-top-right">
            <div class="px-4 py-3 text-sm text-gray-900 dark:text-white">
              <div class="font-medium "> {{ isAdmin ? 'Admin' : 'User'}} </div>
              <div class="truncate"> {{ getUser.email }} </div>
            </div>
            <ul class="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownInformdropdownAvatarNameButtonationButton">
              <li>
                <RouterLink to="/user/me" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Profile</RouterLink>
              </li>
              <li v-if="isAdmin">
                <RouterLink to="/admin" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Admin</RouterLink>
              </li>
              <li>
                <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Settings</a>
              </li>
              <li>
                <a @click="handleHideProgress" href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">{{ showProgress == 'Hide' ? 'Hide' : 'Show'}} progress</a>
              </li>
            </ul>
            <!-- <RouterLink to="/homepage" class="py-2"> -->
              <a @click="signOutMethod" href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Sign out</a>
            <!-- </RouterLink> -->
        </div>
          </div>

        </li>
        <li v-else class="relative inline-block">
          <div class="relative z-10 block p-2 text-gray-700 bg-white border border-transparent rounded-md dark:text-white focus:border-blue-500 focus:ring-opacity-40 dark:focus:ring-opacity-40 focus:ring-blue-300 dark:focus:ring-blue-400 focus:ring dark:bg-gray-800 focus:outline-none">
            <button @click="openModalMethod" class="flex items-center text-sm font-medium text-gray-900 rounded-full hover:text-blue-600 dark:hover:text-blue-500 md:mr-0 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:text-white truncate" type="button">
                <span class="sr-only">Open user menu</span>
                <img class="w-8 h-8 mr-2 rounded-full" 
                  src="../../assets/robot.jpg" alt="user photo">
                  GUEST
                <svg class="w-4 h-4 mx-1.5" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
            </button>
          </div>

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
import { mapActions, mapState } from 'pinia';
import Breadcumbs from '../breadcumbs/Breadcumbs.vue';
import SearchButton from '../button/SearchButton.vue';
import { useUserStore } from '../../stores/user'
import { openModal } from 'jenesius-vue-modal';
import SignInView from '../../views/User/SignInView.vue';
import NoctiButton from '../nocti/NoctiButton.vue';

export default {
 components: {
    SearchButton,
    Breadcumbs,
    NoctiButton
},
  data() {
    return {
      openPersonal: false,
      showProgress: false,
    }
  },
  computed: {
    ...mapState(useUserStore, ['getLogin', 'getUser', 'isAdmin', 'isLogin'])
  },
  methods: {
    ...mapActions(useUserStore,['signOut']),

    handleHideProgress() {
      if (localStorage.getItem('progressHide') == 'Hide') {
        localStorage.setItem('progressHide', 'Show');
      } else {
        localStorage.setItem('progressHide', 'Hide');
      }
      this.showProgress = localStorage.getItem('progressHide'); 
    },
    signOutMethod() {
      this.signOut().then(()=>{
        this.$router.go()
      })
    },
    openModalMethod() {
      openModal(SignInView)
    }
  },
  mounted() {
    this.showProgress = localStorage.getItem('progressHide');
  }
}

</script>