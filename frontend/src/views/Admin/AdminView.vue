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

          <div class="grid grid-cols-1 bg-white px-6 mt-12">
            <div class="border border-gray-200 w-full h-fit rounded-md">
                <table-lite
                :is-static-mode="true"
                :grouping-key="table.groupingKey"
                :columns="table.columns"
                :rows="table.rows"
                :total="table.rows.length"
                :sortable="table.sortable"
            
                class="!p-0 !w-full bg-white !rounded-md !border-8 !border-white shadow-md !font-sans"
                ></table-lite>
            </div>

 
          </div>

        </div>
    </div>

</body>
</template>

<script>
import DashboardDataBlock from '../../components/block/DashboardDataBlock.vue';
import TableLite from 'vue3-table-lite'
import gsap from 'gsap';

export default {
    components: {
        DashboardDataBlock,
        TableLite
    },
    data() {
      const data = [];
      var table = {};
      for (let i = 1; i < 126; i++) {
        data.push({
          id: i,
          name: "TEST" + i,
          email: "test" + i + "@example.com",
        });
      }

      table =  {
        columns: [
          {
            label: "ID",
            field: "id",
            width: "3%",
            sortable: true,
            isKey: true,
          },
          {
            label: "Course name",
            field: "name",
            width: "10%",
            sortable: true,
          },
          {
            label: "Email",
            field: "email",
            width: "15%",
            sortable: true,
          },
          {
            label: "Control",
            headerClasses: ["bg-gold"],
            columnClasses: ["bg-gray"],
            field: "quick",
            width: "3%",
            display: function (row) {
              return (
                `
                <div class="flex gap-4 ml-2">
                  <button type="button" data-id="' + row.id + '" class="hover:text-green-500">
                    <svg class="w-4 h-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-6 h-6">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
                    </svg>
                  </button>
  
                  <button type="button" data-id="' + row.id + '" class="hover:text-yellow-400">
                    <svg class="w-4 h-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-6 h-6">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M11.35 3.836c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m8.9-4.414c.376.023.75.05 1.124.08 1.131.094 1.976 1.057 1.976 2.192V16.5A2.25 2.25 0 0118 18.75h-2.25m-7.5-10.5H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V18.75m-7.5-10.5h6.375c.621 0 1.125.504 1.125 1.125v9.375m-8.25-3l1.5 1.5 3-3.75" />
                    </svg>
  
                  </button>
  
                  <button type="button" data-id="' + row.id + '" class="hover:text-red-500">
                    <svg class="w-4 h-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-6 h-6">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
                    </svg>
  
                  </button>                
                </div>
                `
  
              );
            },
          },
        ],
        rows: data,
        sortable: {
          order: "id",
          sort: "asc",
        },
      }      

        return {
            userTotal: 120,
            userNew: 20,
            courseTotal: 200,
            courseNew: 30,
            collectionTotal: 30,
            collectionNew: 2,
            commentTotal: 300,
            commentNew: 50,
            table,
            data,
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