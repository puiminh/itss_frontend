<template>
  <div class="w-full">
    <table-lite
      :is-static-mode="true"
      :grouping-key="table.groupingKey"
      :columns="table.columns"
      :rows="table.rows"
      :total="table.rows.length"
      :sortable="table.sortable"
  
      class="!p-0 !mb-6 !ml-0 !mr-6 !mt-2 bg-white !rounded-xl !border-8 !border-white shadow-md !font-sans"
    ></table-lite>
  </div>

  </template>
  
  <script>
  import TableLite from 'vue3-table-lite'
  export default {
    components: {
      TableLite,
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
            width: "5%",
            sortable: true,
          },
          {
            label: "Author",
            field: "email",
            width: "5%",
            sortable: true,
          },
          {
            label: "Bookmark At",
            field: "",
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
                  <button type="button" data-id="' + row.id + '" class="hover:text-red-400 text-red-500">
                    <svg fill="currentColor" class="w-4 h-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!-- Font Awesome Pro 5.15.4 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) --><path d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zM124 296c-6.6 0-12-5.4-12-12v-56c0-6.6 5.4-12 12-12h264c6.6 0 12 5.4 12 12v56c0 6.6-5.4 12-12 12H124z"/></svg>
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
        table,
        data,
      }
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