<template>
    <div class="wrapper px-20 mt-4 2xl:mt-12 w-full">
        <p class="font-bold text-2xl">Edit a collection</p>
        <div class="flex gap-5">
            <div class="w-4/5">
                <InputNoBorder title="TITLE" class="mt-8" v-model="collection.title"/>
                <InputNoBorder title="DESCRIPTION" class="mt-8" v-model="collection.desc"></InputNoBorder>
            </div>
            <div class="place-self-end">
                <GameButton class="!bg-yellow-400 !px-3 !py-2" @click="submit">
                    <p class="text-center pt-2 font-bold text-white">
                        Save
                    </p>
                </GameButton>
            </div>
        </div>
        <div class="mt-8 flex gap-8">
            <div class="w-fit">
                <p class="text-gray-600 font-semibold text-sm uppercase">Collection Image</p>
                <ImageModal class="!p-2 !w-full mt-3 mb-8 !h-fit" ref="image"></ImageModal>
            </div>
            <div class="w-full mr-64">
                <p class="text-gray-600 font-semibold text-sm uppercase">Add some courses</p>
                <MultiSelect :data="getCreatedCourse" :predata="getCollectionInfo" class="mt-3 w-full" ref="multiselect"></MultiSelect>
            </div>
        </div>
    </div>
    
    </template>
    <script>
    import GameButton from '../../components/button/GameButton.vue';
    import InputNoBorder from '../../components/input/InputNoBorder.vue';
    import TextAreaNoBorder from '../../components/input/TextAreaNoBorder.vue';
    import ImageModal from '../../components/modal/ImageModal.vue';
    import MultiSelect from '../../components/input/MultiSelect.vue'
import { useCourseCollectionStore } from '../../stores/course';
import { mapState } from 'pinia';
import { useUserStore } from '../../stores/user';
import axios from 'axios';
    
    
    export default {
        components: { InputNoBorder, GameButton, TextAreaNoBorder, ImageModal,  MultiSelect},
        data() {
            return {
                collection: {
                    desc: '',
                    courseList: [],
                    title: '',
                    image: '',
                    author_id: 0,
                }
            }
        },
        computed: {
            ...mapState(useCourseCollectionStore, ['getCreatedCollection','getCreatedCourse','getCollectionInfo']),
            ...mapState(useUserStore, ['getUser']),
        },
        methods: {

            async submit() {

                this.collection.author_id = this.getUser.id
                this.collection.image = this.$refs.image.imageLink

                console.log(this.collection, this.$refs.multiselect.taggingSelected, this.$refs.image.imageLink);

                let course_list = this.$refs.multiselect.taggingSelected.map((e)=> e.id)
                const response = await axios.put('/collections/courses/'+this.$route.params.id, {
                    collection: this.collection,
                    courses: course_list
                })

                console.log(response);

                this.$router.push(`/collection/${this.$route.params.id}`)
            }
        },
        mounted() {
            this.collection = this.getCollectionInfo.collection;
        },
        beforeRouteEnter(to, from, next) {
            const courseStore = useCourseCollectionStore()
            console.log(to);
            courseStore.getCreatedCourseCollectionAction().then((res)=>{
                courseStore.getCollectionInfoAction(to.params.id).then((res)=>{
                    // this.wordlist = res.data;
                    // this.totalword = this.wordlist.length
                    console.log('getCollectionInfo:', courseStore.getCollectionInfo);
                    next();
                })
            })
        },
    }
    </script>
    
    <style scoped>
    .ql-container {
        border: none;
    }
    </style>