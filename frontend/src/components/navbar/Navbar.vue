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
              <!-- Dropdown toggle button -->
              <button @click="openNotifi = !openNotifi" class="relative z-10 block p-2 text-gray-700 bg-white border border-transparent rounded-md dark:text-white focus:border-blue-500 focus:ring-opacity-40 dark:focus:ring-opacity-40 focus:ring-blue-300 dark:focus:ring-blue-400 focus:ring dark:bg-gray-800 focus:outline-none">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-5 h-5">
                <path stroke-linecap="round" stroke-linejoin="round" d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0" />
              </svg>

              </button>

              <!-- Dropdown menu -->
                <div v-if="openNotifi"
                    class="absolute right-0 z-20 w-64 mt-2 overflow-hidden origin-top-right bg-white rounded-md shadow-lg sm:w-80 dark:bg-gray-800"
                >
                    <div class="py-2">
                        <a href="#" class="flex items-center px-4 py-3 -mx-2 transition-colors duration-300 transform border-b border-gray-100 hover:bg-gray-50 dark:hover:bg-gray-700 dark:border-gray-700">
                            <img class="flex-shrink-0 object-cover w-8 h-8 mx-1 rounded-full" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80" alt="avatar" />
                            <p class="mx-2 text-sm text-gray-600 dark:text-white"><span class="font-bold" href="#">Sara Salah</span> replied on the <span class="text-blue-500 hover:underline" href="#">Upload Image</span> artical . 2m</p>
                        </a>
                        <a href="#" class="flex items-center px-4 py-3 -mx-2 transition-colors duration-300 transform border-b border-gray-100 hover:bg-gray-50 dark:hover:bg-gray-700 dark:border-gray-700">
                            <img class="flex-shrink-0 object-cover w-8 h-8 mx-1 rounded-full" src="https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80" alt="avatar" />
                            <p class="mx-2 text-sm text-gray-600 dark:text-white"><span class="font-bold" href="#">Slick Net</span> start following you . 45m</p>
                        </a>
                        <a href="#" class="flex items-center px-4 py-3 -mx-2 transition-colors duration-300 transform border-b border-gray-100 hover:bg-gray-50 dark:hover:bg-gray-700 dark:border-gray-700">
                            <img class="flex-shrink-0 object-cover w-8 h-8 mx-1 rounded-full" src="https://images.unsplash.com/photo-1450297350677-623de575f31c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80" alt="avatar" />
                            <p class="mx-2 text-sm text-gray-600 dark:text-white"><span class="font-bold" href="#">Jane Doe</span> Like Your reply on <span class="text-blue-500 hover:underline" href="#">Test with TDD</span> artical . 1h</p>
                        </a>
                        <a href="#" class="flex items-center px-4 py-3 -mx-2 transition-colors duration-300 transform hover:bg-gray-100 dark:hover:bg-gray-700">
                            <img class="flex-shrink-0 object-cover w-8 h-8 mx-1 rounded-full" src="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=398&q=80" alt="avatar" />
                            <p class="mx-2 text-sm text-gray-600 dark:text-white"><span class="font-bold" href="#">Abigail Bennett</span> start following you . 3h</p>
                        </a>
                    </div>
                  <a href="#" class="block py-2 font-bold text-center text-white bg-gray-800 dark:bg-gray-700 hover:underline">See all notifications</a>
              </div>
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

export default {
 components: {
    SearchButton,
    Breadcumbs
  },
  data() {
    return {
      openNotifi: false,
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
      this.signOut()
      this.$router.push('/landing')
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