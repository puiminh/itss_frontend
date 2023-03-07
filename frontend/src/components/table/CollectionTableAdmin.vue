<template>

    <CollectionTable :data="data"></CollectionTable>    

    </template>
    
    <script>
    import axios from 'axios';
    import CollectionTable from './CollectionTable.vue';
    
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
        axios.get("/collections/all_collection").then((res) => {
            this.data = res.data.data;
        });
    },
    components: { CollectionTable }
}
    </script>