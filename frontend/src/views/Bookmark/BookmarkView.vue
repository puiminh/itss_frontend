<template>
  <div class="w-full">
    <table-lite
      :is-static-mode="true"
      :grouping-key="table.groupingKey"
      :columns="table.columns"
      :rows="table.rows"
      :total="table.totalRecordCount"
      :sortable="table.sortable"
  
      class="!p-2 !mb-6 !m-6 bg-white !rounded-xl !border-8 !border-white shadow-md !font-sans"
    ></table-lite>
  </div>

  </template>
  
  <script>
  import { mapState } from 'pinia';
import TableLite from 'vue3-table-lite'
import { useCourseCollectionStore } from '../../stores/course';
  export default {
    components: {
      TableLite,
    },
    data() {
      return {

      }
    },
    computed: {
      ...mapState(useCourseCollectionStore, ['getBookmarkCollectionCourse']),
      data() {
        const array = [];
        this.getBookmarkCollectionCourse.bookmark_courses.map((e)=>{
          array.push({
            ...e.course,
            type: 'course',
          })
        })
        this.getBookmarkCollectionCourse.bookmark_collections.map((e)=>{
          array.push({
            ...e.collection,
            type: 'collection',
          })
        })
        return array
      },
      table() {
        return {
        columns: [
          {
            label: "ID",
            field: "id",
            width: "3%",
            sortable: true,
            isKey: true,
          },
          {
            label: "Title",
            field: "title",
            width: "5%",
            sortable: true,
          },
          {
            label: "Type",
            field: "type",
            width: "5%",
            sortable: true,
          },
          {
            label: "Bookmark At",
            field: "created_at",
            width: "2%",
            sortable: true,
          },
          {
            label: "Control",
            headerClasses: ["bg-gold"],
            columnClasses: ["bg-gray"],
            field: "quick",
            width: "1%",
            display: function (row) {
              return (
                `
                <div class="flex gap-4 justify-center">
                  <a href="/${row.type}/${row.id}" type="button" data-id="' + row.id + '" class="hover:text-yellow-400">
                    <svg class="w-4 h-4" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"></path>
                      <path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
                    </svg>
                  </a>
                  <button type="button" data-id="' + row.id + '" class="hover:text-red-400 text-red-500">
                    <svg fill="currentColor" class="w-4 h-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!-- Font Awesome Pro 5.15.4 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) --><path d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zM124 296c-6.6 0-12-5.4-12-12v-56c0-6.6 5.4-12 12-12h264c6.6 0 12 5.4 12 12v56c0 6.6-5.4 12-12 12H124z"/></svg>
                  </button>            
                </div>
                `
  
              );
            },
          },
        ],
        rows: this.data,
        totalRecordCount: this.data.length,
        sortable: {
          order: "id",
          sort: "asc",
        },
      }      
      }
    },
    beforeRouteEnter(to, from, next) {
      const courseStore = useCourseCollectionStore();
      console.log(to);
      courseStore.getBookmarkCollectionCourseAction().then((res)=>{
        console.log("bookmark: ", courseStore.getBookmarkCollectionCourse);
        next()
      })

    }
  }
  </script>
  
  <style scoped>
  ::v-deep(.vtl-paging-count-dropdown) {
    width: 50px;
  }
  
  ::v-deep(.vtl-paging-page-dropdown) {
    width: 50px;
  }
  </style>