<template>

    <CollectionTable :data="data"></CollectionTable>    

    </template>
    
    <script>
    import axios from 'axios';
    import { mapState } from 'pinia';
    import { useUserStore } from '../../stores/user';
    import CollectionTable from './CollectionTable.vue';
    
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
        axios.get("/collections/created/"+ this.getUser.id).then((res) => {
            this.data = res.data.data;
        });
    },
    components: { CollectionTable }
}
    </script>