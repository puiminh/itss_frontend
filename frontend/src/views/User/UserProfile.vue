<template>
    <div class="flex justify-center gap-12 w-full">
        <div class="relative break-words bg-white mb-6 rounded-md mt-20 w-1/3 h-fit shadow-md">
            <div class="px-6">
                <div class="flex flex-wrap justify-center">
                    <div class="w-full flex justify-center">
                        <div class="relative">
                            <img
                                :src="getUser.avatar" 
                                class="object-cover shadow-xl rounded-full align-middle border-none -mt-8 w-40 h-40"/>
                        </div>
                    </div>
                    <div class="w-full text-center mt-2">
                        <div class="flex justify-center lg:pt-4 pt-8 pb-0">
                            <div class="p-3 text-center">
                                <span class="text-xl font-bold block uppercase tracking-wide text-slate-700">{{ getCreatedCourse?.length }}</span>
                                <span class="text-sm text-slate-400">Course</span>
                            </div>
                            <div class="p-3 text-center">
                                <span class="text-xl font-bold block uppercase tracking-wide text-slate-700">{{ getCreatedCollection?.length }}</span>
                                <span class="text-sm text-slate-400">Collection</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="flex flex-col justify-center items-center mt-2 w-full">
                    <div class="flex gap-4">
                        <h3 class="text-2xl text-slate-700 font-bold leading-normal mb-1">
                            {{ getUser.first_name + ' ' + getUser.last_name }}
                        </h3>
                    </div>
    
                    <div class="text-xs mt-0 mb-2 text-slate-400 font-bold" aria-label="You can only edit your name, description and avatar" data-cooltipz-dir="bottom">
                        {{ getUser.email }}
                    </div>
                </div>
                <div class="mt-6 py-6 border-t border-slate-200 text-center">
                    <div class="flex flex-wrap justify-center">
                        <div class="w-full px-4">
                            <p class="font-light leading-relaxed text-slate-600 mb-4">
                                An artist of considerable range, 
                                Mike is the name taken by Melbourne-raised, 
                                Brooklyn-based Nick Murphy writes, 
                                performs and records all of his own music, 
                                giving it a warm.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    
        <div class="mt-8 skeletonWhenRemove">
                <SwitchButton
                    @handleSwitch="handleSwitchP"></SwitchButton>
                <Transition name="listTop">
                    <div v-if="searchObj == 'collection'" class="grid grid-cols-2 gap-4 pt-5 h-52 pr-2">
                    <CollectionFolder 
                        v-for="i in getCreatedCollection"
                        :id="i.id"
                        :key="i.id"
                        :title="i.title"
                        :image="i.image"
                        :author="getUser"
                        :contain="i.contain"
                    >
                    </CollectionFolder>
                    </div>
    
                    <div v-else class="grid grid-cols-2 gap-4 pt-5 h-24 pr-2">
                    <CourseFolder 
                        v-for="i in getCreatedCourse" 
                        :key="i.id"
                        :id="i.id" 
                        :title="i.title" 
                        :author="getUser"
                        :contain="i.contain"
                        ></CourseFolder>
                    </div>
                </Transition>
        </div>
    </div>
    
    
    </template>
    
    <script>
    import gsap from 'gsap';
    import { openModal } from 'jenesius-vue-modal';
    import { mapActions, mapState } from 'pinia';
    import Block from '../../components/block/Block.vue';
    import CollectionFolder from '../../components/folder/CollectionFolder.vue';
    import CourseFolder from '../../components/folder/CourseFolder.vue';
    import ImageModal from '../../components/modal/ImageModal.vue';
    import { useUserStore } from '../../stores/user';
    import { useToast } from "vue-toastification";
    import { useCourseCollectionStore } from '../../stores/course';
    import SwitchButton from '../../components/button/SwitchButton.vue';
import axios from 'axios';
    
    
    export default {
        components: { Block, CollectionFolder, CourseFolder, ImageModal, SwitchButton },
        data() {
            const toast = useToast()
            return {
                toast,
                searchObj: 'course',
                getCreatedCollection: [],
                getCreatedCourse: [],
                getUser: {}
                
            }
        },
        props: ['user_id'],
        methods: {
            handleSwitchP(value) {
                this.searchObj = value;
            },
        },
        computed: {
        },
        async mounted() {
            const course = await axios.get('/courses/created/'+this.user_id)
            const collection = await axios.get('/collections/created/'+this.user_id)
            const user = await axios.get('/users/'+this.user_id)
            this.getCreatedCollection = collection.data.data
            this.getCreatedCourse = course.data.data
            this.getUser = user.data.data.user
            console.log(this.getCreatedCollection, this.getCreatedCourse, this.getUser);
        }
    }
    
    </script>