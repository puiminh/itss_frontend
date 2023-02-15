<template>
<div class="flex justify-center gap-12 w-full">
<div class="relative break-words bg-white mb-6 rounded-md mt-20 w-1/3 h-fit shadow-md">
    <div class="px-6">
        <div class="flex flex-wrap justify-center">
            <div class="w-full flex justify-center">
                <div class="relative">
                    <img
                        @click="handleClickImage"
                        :src="imageLink" 
                        class="object-cover shadow-xl rounded-full align-middle border-none -mt-8 w-40 h-40"/>
                </div>
            </div>
            <div class="w-full text-center mt-2">
                <div class="flex justify-center lg:pt-4 pt-8 pb-0">
                    <div class="p-3 text-center">
                        <span class="text-xl font-bold block uppercase tracking-wide text-slate-700">20</span>
                        <span class="text-sm text-slate-400">Course</span>
                    </div>
                    <div class="p-3 text-center">
                        <span class="text-xl font-bold block uppercase tracking-wide text-slate-700">5</span>
                        <span class="text-sm text-slate-400">Collection</span>
                    </div>
                </div>
            </div>
        </div>
        <div class="text-center mt-2">
            <h3 class="text-2xl text-slate-700 font-bold leading-normal mb-1" :contenteditable="editing" @input="nameChange">Mike Thompson</h3>
            <div v-if="editing" class="text-xs mt-0 mb-2 text-slate-400 font-bold uppercase" aria-label="You can only edit your name, description and avatar" data-cooltipz-dir="bottom">
                <i class="fas fa-map-marker-alt mr-2 text-slate-400 opacity-75"></i>Paris, France
            </div>
            <div v-else class="text-xs mt-0 mb-2 text-slate-400 font-bold uppercase" >
                <i class="fas fa-map-marker-alt mr-2 text-slate-400 opacity-75"></i>Paris, France
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

<div class="">
    <Block key="2" data-index="2" data-direct="vertical" class=" rounded-md moreGrayBG p-4 mt-8 w-fit h-fit pb-8" title="CLASS CREATED BY Mike Thompson" explain="We base on your recent learning and bookmark">
        <div class="grid grid-cols-2 gap-4 pt-5 2xl:h-80 h-52 pr-2 overflow-y-scroll">
            <CollectionFolder v-for="i in 4"></CollectionFolder>
        </div>
    </Block>

    <Block key="1" data-index="1" data-direct="vertical" class=" rounded-md moreGrayBG p-4 mt-4 w-fit h-fit pb-8" title="MAY BE YOU WILL LIKE THIS" explain="We base on your recent learning and bookmark">
        <div class="grid grid-cols-2 gap-4 pt-5 2xl:h-44 h-36 pr-2 overflow-y-scroll">
          <CourseFolder v-for="i in 6" showStar="true"></CourseFolder>
        </div>
    </Block>
</div>
</div>


</template>

<script>
import gsap from 'gsap';
import { openModal } from 'jenesius-vue-modal';
import Block from '../../components/block/Block.vue';
import CollectionFolder from '../../components/folder/CollectionFolder.vue';
import CourseFolder from '../../components/folder/CourseFolder.vue';
import ImageModal from '../../components/modal/ImageModal.vue';


export default {
    components: { Block, CollectionFolder, CourseFolder, ImageModal },
    data() {
        return {
            editing: false,
            name: '',
            desc: '',
            imageLink: 'https://github.com/creativetimofficial/soft-ui-dashboard-tailwind/blob/main/build/assets/img/team-2.jpg?raw=true'
        }
    },
    methods: {
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
        nameChange(evt) {
            this.name = evt.target.textContent
        },
        descChange(evt) {
            this.desc = evt.target.textContent;
        },
        saveProfile() {
            console.log(this.name, this.desc, this.imageLink)
        },
        async handleClickImage() {
            if (this.editing) {
                const modal = await openModal(ImageModal, {imagePropLink: this.imageLink})

                modal.on('passImageLink', link => {
                    console.log(link);
                    this.imageLink = link;
                }) 
            }
        }    
    }
}

</script>