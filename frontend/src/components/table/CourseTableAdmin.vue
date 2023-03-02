<template>

    <CourseTable :data="data"></CourseTable>    

    </template>
    
    <script>
    import axios from 'axios';
    import CourseTable from './CourseTable.vue';
    
    export default {
    data() {
        return {
            data: []
        };
    },
    methods: {
        deleteMethod(data) {
            console.log(data);
        }
    },
    mounted() {
        axios.get("/courses").then((res) => {
            this.data = res.data.data;
        });
    },
    components: { CourseTable }
}
    </script>