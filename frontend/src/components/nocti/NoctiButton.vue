<template>
    <!-- Dropdown toggle button -->
  <button @click="openNotifiMethod" class="relative z-10 block p-2 text-gray-700 bg-white border border-transparent rounded-md dark:text-white focus:border-blue-500 focus:ring-opacity-40 dark:focus:ring-opacity-40 focus:ring-blue-300 dark:focus:ring-blue-400 focus:ring dark:bg-gray-800 focus:outline-none">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-5 h-5">
          <path stroke-linecap="round" stroke-linejoin="round" d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0" />
      </svg>
      <div v-if="newMess" class="w-3 h-3 bg-red-500 rounded-full absolute right-0 bottom-0">
      </div>

    </button>

    <div v-if="openNotifi"
                    class="absolute right-0 z-20 w-96 overflow-hidden mt-2 origin-top-right bg-white rounded-md shadow-lg dark:bg-gray-800"
                >
                    <div class="py-2">
                        <a v-for="i in noctilist.slice().reverse().slice(0,all)" href="#" class="flex items-center px-6 py-3 -mx-2 transition-colors duration-300 transform border-b border-gray-100 hover:bg-gray-50 dark:hover:bg-gray-700 dark:border-gray-700">
                            <img class="object-cover w-8 h-8 mx-1 rounded-full" 
                                :src="i.user.avatar" alt="avatar" />
                            <p class="mx-2 text-sm text-gray-600 dark:text-white">
                                <!-- <span class="font-bold" href="#">{{ i.user.first_name + ' ' + i.user.last_name }}</span>  -->
                                {{ i.notice.message }}
                            </p>
                            <p class="text-sm text-gray-400 font-semibold w-1/4">
                                {{ moment(i.notice.created_at).startOf('hour').fromNow() }}
                            </p>
                        </a>
                    </div>
                  <a @click="all=10" class="block py-2 font-bold text-center text-white bg-gray-800 hover:underline hover:text-black">See all notifications</a>
              </div>
</template>
<script>
import axios from 'axios'
import { mapState } from 'pinia'
import Pusher from 'pusher-js'
import { useUserStore } from '../../stores/user'
import moment from 'moment'
export default {
    data() {
        return {
            openNotifi: false,
            messages: [],
            newMess: false,
            noctilist: [],
            moment: null,
            all: 3,
        }
    },

    computed: {
        ...mapState(useUserStore, ['getUser'])
    },

    methods: {
        subscribe () {
            let pusher = new Pusher('86cbd0ad0b7f0ee7471e', { cluster: 'ap1' })
            pusher.subscribe('user'+this.getUser.id)
            pusher.bind('nocti', data => {
                this.newMess = true
            })
        },
        async openNotifiMethod() {            
            await axios.get('/notices/user/'+ this.getUser.id).then((res)=>{
                this.noctilist = res.data.notices
            })

            this.openNotifi = !this.openNotifi
            this.newMess = false
            
        }
    },
    mounted() {
        this.moment = moment;
        this.subscribe()
        Pusher.logToConsole = true;
        axios.get('/notices/user/'+ this.getUser.id).then((res)=>{
            this.noctilist = res.data.notices
        })
    }
}

</script>