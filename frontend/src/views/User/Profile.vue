<template>
<div class="flex justify-center gap-12 w-full">
    <div class="relative break-words bg-white mb-6 rounded-md mt-20 w-1/3 h-fit shadow-md">
        <div class="px-6">
            <div class="flex flex-wrap justify-center">
                <div class="w-full flex justify-center">
                    <div class="relative">
                        <img
                            @click="handleClickImage"
                            :src="userUpdate.avatar ? userUpdate.avatar : getUser.avatar" 
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
                    <h3 class="text-2xl text-slate-700 font-bold leading-normal mb-1" :contenteditable="editing" @input="firstnameChange">
                        {{ userUpdate.first_name ? userUpdate.first_name : getUser.first_name }}
                    </h3>
                    <h3 class="text-2xl text-slate-700 font-bold leading-normal mb-1" :contenteditable="editing" @input="lastnameChange">
                        {{ userUpdate.last_name ? userUpdate.last_name : getUser.last_name }}

                    </h3>
                </div>

                <div v-if="editing" class="text-xs mt-0 mb-2 text-slate-400 font-bold" aria-label="You can only edit your name, description and avatar" data-cooltipz-dir="bottom">
                    {{ getUser.email }}
                </div>
                <div v-else class="text-xs mt-0 mb-2 text-slate-400 font-bold" >
                    {{ getUser.email }}
                </div>
            </div>
            <div class="mt-6 py-6 border-t border-slate-200 text-center">
                <div class="flex flex-wrap justify-center">
                    <div class="w-full px-4">
                        <p class="font-light leading-relaxed text-slate-600 mb-4" :contenteditable="editing" @input="descChange">
                            An artist of considerable range, 
                            Mike is the name taken by Melbourne-raised, 
                            Brooklyn-based Nick Murphy writes, 
                            performs and records all of his own music, 
                            giving it a warm.</p>
                    </div>
                </div>
            </div>
        </div>
        <button
            @click="changeToEditMode" 
            class="absolute flex justify-center items-center  w-9  h-9 bg-yellow-400 hover:bg-yellow-300 rounded-full -bottom-2 -right-2 shadow-md ">
            <i class="fas fa-edit font-bold text-white"></i>
        </button>
        <button
            @click="saveProfile"
            ref="savebtn"
            class="absolute opacity-0 hidden -bottom-2 -right-2
                    justify-center items-center  w-7  h-7 bg-green-400 hover:bg-green-300 rounded-full  shadow-md ">
            <i class="fas fa-save font-bold text-white text-xs"></i>
        </button>
    </div>

    <div class="mt-8 skeletonWhenRemove w-1/3">
            <SwitchButton
                @handleSwitch="handleSwitchP"></SwitchButton>
            <Transition name="listTop" mode="out-in">
                <div v-if="searchObj == 'collection'" class="grid grid-cols-2 gap-4 pt-5 h-52 pr-2">
                <CollectionFolder 
                    v-for="i in getCreatedCollection"
                    :id="i.collection.id"
                    :key="i.collection.id"
                    :title="i.collection.title"
                    :image="i.collection.image"
                    :author="getUser"
                    :contain="i.contain"
                >
                </CollectionFolder>
                </div>

                <div v-else class="grid grid-cols-2 gap-4 pt-5 h-24 pr-2">
                <CourseFolder 
                    v-for="i in getCreatedCourse" 
                    :key="i.course.id"
                    :id="i.course.id" 
                    :title="i.course.title" 
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


export default {
    components: { Block, CollectionFolder, CourseFolder, ImageModal, SwitchButton },
    data() {
        const toast = useToast()
        return {
            editing: false,
            userUpdate: {},
            toast,
            searchObj: 'course',
            
        }
    },
    methods: {
        ...mapActions(useUserStore, ['changeInfoUser', 'update']),

        changeToEditMode() {
            this.editing = true;

            gsap.to(this.$refs.savebtn, {
                right: '2rem',
                display: 'flex',
                opacity: 1,
                ease: 'ease-in',
                duration: 0.5
            })
        },
        firstnameChange(evt) {
            this.userUpdate.first_name = evt.target.textContent
        },
        lastnameChange(evt) {
            this.userUpdate.last_name = evt.target.textContent
        },
        handleSwitchP(value) {
            this.searchObj = value;
        },
        // descChange(evt) {
        //     this.desc = evt.target.textContent;
        // },
        async saveProfile() {
            console.log(this.userUpdate, this.getUser)
            this.userUpdate = {
                ...this.getUser,
                ...this.userUpdate,
            }
            const response = await this.update(
                this.getUser.id,
                this.userUpdate
            )
            if (response) {
                this.toast.success("Update user's info success!", {
                    timeout: 2000
                });
            }
        },
        async handleClickImage() {
            if (this.editing) {
                const modal = await openModal(ImageModal, {imagePropLink: this.getUser.avatar})
                modal.on('passImageLink', link => {
                    console.log(link);
                    this.userUpdate.avatar = link;
                }) 
            }
        }    
    },
    computed: {
        ...mapState(useUserStore, ['getUser']),
        ...mapState(useCourseCollectionStore, ['getCreatedCollection','getCreatedCourse'])
    },
    beforeRouteEnter(to, from, next) {
        const courseStore = useCourseCollectionStore();
        console.log(to);
        courseStore.getCreatedCourseCollectionAction().then((e)=> {
            console.log('getCourseInfo (created):', courseStore.getCreatedCourse, courseStore.getCreatedCollection);
            next();
        })
    },
}

</script>