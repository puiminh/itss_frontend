<template>
  
  <div class="flex flex-col -mt-4 -ml-4">
    <SwitchButton></SwitchButton>
    <table-lite
      :is-static-mode="true"
      :grouping-key="table.groupingKey"
      :columns="table.columns"
      :rows="table.rows"
      :total="table.totalRecordCount"
      :sortable="table.sortable"

      class="!p-0 !mb-6 !-ml-0 !mr-6 !mt-2 bg-white !rounded-xl !border-8 !border-white shadow-md !font-sans"
    ></table-lite>
  </div>

</template>

<script>
import { defineComponent, reactive, computed } from "vue";
import TableLite from 'vue3-table-lite'
import SwitchButton from "../../components/button/SwitchButton.vue";
export default defineComponent({
  name: "App",
  components: { TableLite, SwitchButton },
  setup() {
    // Fake data
    const data = reactive([]);
    for (let i = 1; i < 126; i++) {
      data.push({
        id: i,
        name: "TEST" + i,
        email: "test" + i + "@example.com",
      });
    }
    data.push({
      id: 126,
      name: "TEST1",
      email: "test111@example.com",
    });
    data.push({
      id: 127,
      name: "TEST1",
      email: "test111111@example.com",
    });
    data.push({
      id: 128,
      name: "TEST2",
      email: "test222@example.com",
    });
    // Table config
    const table = reactive({
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
      totalRecordCount: computed(() => {
        return table.rows.length;
      }),
      sortable: {
        order: "id",
        sort: "asc",
      },
    });
    return {
      table,
    };
  },
});
</script>

<style scoped>
::v-deep(.vtl-paging-count-dropdown) {
  width: 50px;
}

::v-deep(.vtl-paging-page-dropdown) {
  width: 50px;
}
</style>