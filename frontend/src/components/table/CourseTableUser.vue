<template>

    <CourseTable :data="data"></CourseTable>    

    </template>
    
    <script>
    import axios from 'axios';
    import { mapState } from 'pinia';
    import { useUserStore } from '../../stores/user';
    import CourseTable from './CourseTable.vue';
    
    export default {
    data() {
        return {
            data: []
        };
    },

    computed: {
        ...mapState(useUserStore, ['getUser'])
    },
    methods: {
        deleteMethod(data) {
            console.log(data);
        }
    },
    mounted() {
        axios.get("/courses/created/"+ this.getUser.id).then((res) => {
            this.data = res.data.data;
        });
    },
    components: { CourseTable }
}
    </script>