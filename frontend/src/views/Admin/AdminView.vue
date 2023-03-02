<template>
<!-- component -->
<body >
    <div class="flex h-screen w-full">
        <!--Start SideBar-->
        <aside class="w-20 relative z-20 flex flex-col flex-shrink-0  px-2 overflow-y-auto bg-indigo-600 h-full justify-between">   
            <div class="mb-6">
                <!--Start logo -->
                <div class="flex justify-center">
                  <div class="w-14 h-14 rounded-full bg-gray-300 border-2 border-white mt-2">
                    <img 
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVxhAxJ4D7MOeTTj6kR9PBeZonW5HM7giKjTbEmR-HMBwf3G1VqGnlwpO1kWrdyIZu8_U&usqp=CAU" 
                     class="rounded-full w-auto"
                    />
                  </div>
                </div>
                <!--End logo -->
                <!--Start NavItem -->
                <div>
                  <ul class="mt-6 leading-10 px-4">
                    <li class="mb-3 p-2 rounded-md flex items-center justify-center bg-green-400 cursor-pointer">
                        <svg fill="white" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                            <path d="M4.5 6.375a4.125 4.125 0 118.25 0 4.125 4.125 0 01-8.25 0zM14.25 8.625a3.375 3.375 0 116.75 0 3.375 3.375 0 01-6.75 0zM1.5 19.125a7.125 7.125 0 0114.25 0v.003l-.001.119a.75.75 0 01-.363.63 13.067 13.067 0 01-6.761 1.873c-2.472 0-4.786-.684-6.76-1.873a.75.75 0 01-.364-.63l-.001-.122zM17.25 19.128l-.001.144a2.25 2.25 0 01-.233.96 10.088 10.088 0 005.06-1.01.75.75 0 00.42-.643 4.875 4.875 0 00-6.957-4.611 8.586 8.586 0 011.71 5.157v.003z"></path>
                        </svg>
                    </li>
                    <li class="mb-3 p-2 rounded-md flex items-center justify-center bg-blue-400 cursor-pointer">
                        <svg fill="white" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                        <path d="M4.5 3.75a3 3 0 00-3 3v.75h21v-.75a3 3 0 00-3-3h-15z"></path>
                        <path clip-rule="evenodd" fill-rule="evenodd" d="M22.5 9.75h-21v7.5a3 3 0 003 3h15a3 3 0 003-3v-7.5zm-18 3.75a.75.75 0 01.75-.75h6a.75.75 0 010 1.5h-6a.75.75 0 01-.75-.75zm.75 2.25a.75.75 0 000 1.5h3a.75.75 0 000-1.5h-3z"></path>
                        </svg>
                    </li>
                    <li class="mb-3 p-2 rounded-md flex items-center justify-center bg-yellow-400 cursor-pointer">
                        <svg fill="white" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                            <path d="M19.5 21a3 3 0 003-3v-4.5a3 3 0 00-3-3h-15a3 3 0 00-3 3V18a3 3 0 003 3h15zM1.5 10.146V6a3 3 0 013-3h5.379a2.25 2.25 0 011.59.659l2.122 2.121c.14.141.331.22.53.22H19.5a3 3 0 013 3v1.146A4.483 4.483 0 0019.5 9h-15a4.483 4.483 0 00-3 1.146z"></path>
                        </svg>
                    </li>
                    <li class="mb-3 p-2 rounded-md flex items-center justify-center  bg-pink-400 cursor-pointer">
                        <svg fill="white" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                            <path clip-rule="evenodd" fill-rule="evenodd" d="M4.848 2.771A49.144 49.144 0 0112 2.25c2.43 0 4.817.178 7.152.52 1.978.292 3.348 2.024 3.348 3.97v6.02c0 1.946-1.37 3.678-3.348 3.97a48.901 48.901 0 01-3.476.383.39.39 0 00-.297.17l-2.755 4.133a.75.75 0 01-1.248 0l-2.755-4.133a.39.39 0 00-.297-.17 48.9 48.9 0 01-3.476-.384c-1.978-.29-3.348-2.024-3.348-3.97V6.741c0-1.946 1.37-3.68 3.348-3.97zM6.75 8.25a.75.75 0 01.75-.75h9a.75.75 0 010 1.5h-9a.75.75 0 01-.75-.75zm.75 2.25a.75.75 0 000 1.5H12a.75.75 0 000-1.5H7.5z"></path>
                        </svg>
                    </li>
                  </ul>
                </div>
                <!--End NavItem -->
            </div>
            <div class="justify-center items-center">
                <RouterLink to="/" class="mb-3 p-2 rounded-md flex items-center justify-center  bg-gray-400 cursor-pointer">
                    <svg class="w-4 h-4" fill="white" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                        <path clip-rule="evenodd" fill-rule="evenodd" d="M7.5 3.75A1.5 1.5 0 006 5.25v13.5a1.5 1.5 0 001.5 1.5h6a1.5 1.5 0 001.5-1.5V15a.75.75 0 011.5 0v3.75a3 3 0 01-3 3h-6a3 3 0 01-3-3V5.25a3 3 0 013-3h6a3 3 0 013 3V9A.75.75 0 0115 9V5.25a1.5 1.5 0 00-1.5-1.5h-6zm10.72 4.72a.75.75 0 011.06 0l3 3a.75.75 0 010 1.06l-3 3a.75.75 0 11-1.06-1.06l1.72-1.72H9a.75.75 0 010-1.5h10.94l-1.72-1.72a.75.75 0 010-1.06z"></path>
                    </svg>
                </RouterLink>
            </div>
        </aside>
        <!-- End Sidebar -->
        <div class="w-full overflow-y-auto">
            <!--Start Topbar -->
            <!--End Topbar -->
          <main class="relative z-0 px-6 bg-white">
              <div class="grid mt-4 ">
                  <!-- Start Content-->
                  <!-- <transition-group
                    appear 
                    @before-enter="beforeEnterSlideIn" @enter="enterSlideIn"
                    tag="div"
                    class="grid grid-cols-1 gap-2 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 2xl:grid-cols-4 mt-3"
                    > -->
                    <div
                    class="grid grid-cols-1 gap-2 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 2xl:grid-cols-4 mt-3"
                    >
                    <Transition appear @before-enter="beforeEnterSlideIn" @enter="enterSlideIn">
                        <DashboardDataBlock key="1" data-index="1" color="bg-green-600" :total="userTotal" :new="userNew" data="user" :select="select=='user'" @click="selectMethod('user')"></DashboardDataBlock>
                    </Transition>
                    <Transition appear @before-enter="beforeEnterSlideIn" @enter="enterSlideIn">
                        <DashboardDataBlock key="2" data-index="2" color="bg-blue-600" :total="courseTotal" :new="courseNew" data="course" :select="select=='course'" @click="selectMethod('course')">
                            <svg class="w-4 h-4 text-blue-600" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                            <path d="M4.5 3.75a3 3 0 00-3 3v.75h21v-.75a3 3 0 00-3-3h-15z"></path>
                            <path clip-rule="evenodd" fill-rule="evenodd" d="M22.5 9.75h-21v7.5a3 3 0 003 3h15a3 3 0 003-3v-7.5zm-18 3.75a.75.75 0 01.75-.75h6a.75.75 0 010 1.5h-6a.75.75 0 01-.75-.75zm.75 2.25a.75.75 0 000 1.5h3a.75.75 0 000-1.5h-3z"></path>
                            </svg>
                        </DashboardDataBlock>
                    </Transition>
                    <Transition appear @before-enter="beforeEnterSlideIn" @enter="enterSlideIn">
                        <DashboardDataBlock key="3" data-index="3" color="bg-yellow-600" :total="collectionTotal" :new="collectionNew" data="collection" :select="select=='collection'" @click="selectMethod('collection')">
                            <svg class="w-4 h-4 text-yellow-600" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                                <path d="M19.5 21a3 3 0 003-3v-4.5a3 3 0 00-3-3h-15a3 3 0 00-3 3V18a3 3 0 003 3h15zM1.5 10.146V6a3 3 0 013-3h5.379a2.25 2.25 0 011.59.659l2.122 2.121c.14.141.331.22.53.22H19.5a3 3 0 013 3v1.146A4.483 4.483 0 0019.5 9h-15a4.483 4.483 0 00-3 1.146z"></path>
                            </svg>
                        </DashboardDataBlock>
                    </Transition>
                    <Transition appear @before-enter="beforeEnterSlideIn" @enter="enterSlideIn">
                        <DashboardDataBlock key="4" data-index="4" color="bg-pink-600" :total="commentTotal" :new="commentNew" data="comment" :select="select=='comment'" @click="selectMethod('comment')">
                            <svg class="w-4 h-4 text-pink-600" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                                <path clip-rule="evenodd" fill-rule="evenodd" d="M4.848 2.771A49.144 49.144 0 0112 2.25c2.43 0 4.817.178 7.152.52 1.978.292 3.348 2.024 3.348 3.97v6.02c0 1.946-1.37 3.678-3.348 3.97a48.901 48.901 0 01-3.476.383.39.39 0 00-.297.17l-2.755 4.133a.75.75 0 01-1.248 0l-2.755-4.133a.39.39 0 00-.297-.17 48.9 48.9 0 01-3.476-.384c-1.978-.29-3.348-2.024-3.348-3.97V6.741c0-1.946 1.37-3.68 3.348-3.97zM6.75 8.25a.75.75 0 01.75-.75h9a.75.75 0 010 1.5h-9a.75.75 0 01-.75-.75zm.75 2.25a.75.75 0 000 1.5H12a.75.75 0 000-1.5H7.5z"></path>
                            </svg>
                        </DashboardDataBlock>
                    </Transition>
                    </div>
                  <!-- End Content-->
              </div>
          </main>

          <div class=" bg-white px-6 mt-12">
            <!-- <div class="border border-gray-200 w-full h-fit rounded-md">
                <table-lite
                :is-static-mode="true"
                :grouping-key="table.groupingKey"
                :columns="table.columns"
                :rows="table.rows"
                :total="table.totalRecordCount"
                :sortable="table.sortable"
            
                class="!p-0 !w-full bg-white !rounded-md !border-8 !border-white shadow-md !font-sans"
                ></table-lite>
            </div>  -->
            <!-- <CourseManagerTable v-if="select=='course'"></CourseManagerTable> -->
            <Transition name="table" mode="out-in">
                <CourseTableAdmin v-if="select=='course'"></CourseTableAdmin>
                <CollectionTableAdmin v-else-if="select=='collection'"></CollectionTableAdmin>
                <UserTable v-else-if="select=='user'"></UserTable>
                <CommentTableAdmin v-else-if="select=='comment'"></CommentTableAdmin>
            </Transition>"
          </div>

        </div>
    </div>

</body>
</template>

<script>
import DashboardDataBlock from '../../components/block/DashboardDataBlock.vue';
import gsap from 'gsap';
import { useCourseCollectionStore } from '../../stores/course';
import { mapState } from 'pinia';
import UserTable from '../../components/table/UserTableAdmin.vue';
import CourseTable from '../../components/table/CourseTable.vue';
import CourseTableAdmin from '../../components/table/CourseTableAdmin.vue';
import CollectionTableAdmin from '../../components/table/CollectionTableAdmin.vue';
import CommentTableAdmin from '../../components/table/CommentTableAdmin.vue';




export default {
    components: {
    DashboardDataBlock,
    UserTable,
    CourseTable,
    CourseTableAdmin,
    CollectionTableAdmin,
    CommentTableAdmin
},
    data() {    
        return {
            userTotal: 120,
            userNew: 20,
            courseTotal: 200,
            courseNew: 30,
            collectionTotal: 30,
            collectionNew: 2,
            commentTotal: 300,
            commentNew: 50,
            select: 'user', 
        }
    }, 
    methods: {
        selectMethod(data) {
            this.select = data;
            console.log(data, this.select); 

        },
        beforeEnterSlideIn(el) {
        el.style.opacity = 0
        el.style.transform = 'translateX(100px)'
        },
        enterSlideIn(el, done) {
          console.log(el.dataset);
            gsap.to(el, {
            opacity: 1,
            x: 0,
            duration: 0.8,
            onComplete: done,
            delay: (el.dataset.index - 1) * 0.2
            })
        },
    }
}

</script>

<style scoped>
.table-enter-active,
.table-leave-active {
  transition: all 0.2s ease;
}

.table-enter-from,
.table-leave-to {
  opacity: 0;
  transform: translateY(50px);

}
</style>