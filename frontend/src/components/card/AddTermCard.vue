<template>
    <div ref="wrap" :class="['bg-white rounded-md flex flex-col divide-y ', errorTerm ? ' border-4 border-red-600': '']">
        <div class="flex justify-between pt-4 px-8 pb-2">
            <p class="font-black text-gray-400">
                1
            </p>
            <div class="hover:text-red-500 cursor-pointer">
                <svg class="h-5 w-5" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"></path>
                </svg>
            </div>
        </div>

        <div class="flex p-8 gap-6 items-center">
            <InputNoBorder class="w-2/3 !text-gray-400" title="TERM" v-model="vocab.word"></InputNoBorder>
            <InputNoBorder class="w-2/3 !text-gray-400" title="TERM" v-model="vocab.define"></InputNoBorder>
            <!-- <TextAreaNoBorder class="w-2/3" title="DEFINITION" placeholder="none"></TextAreaNoBorder> -->
            <div class="flex items-center justify-center">
                <div @click="openImageModal" for="dropzone-file" class="flex flex-col items-center w-16 h-16 justify-center border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100 hover:text-blue-600">
                    <svg v-if="!imageLink" class="w-5 h-5" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"></path>
                    </svg>
                    <img v-else :src="imageLink" alt="" class="w-full h-full object-cover">
                </div>
            </div> 
            <div class="flex items-center justify-center">
                <div @click="openRecordModal" class="flex flex-col items-center w-16 h-16 justify-center border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100 hover:text-red-600">
                    <svg v-if="!recordLink" class="w-5 h-5" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M12 18.75a6 6 0 006-6v-1.5m-6 7.5a6 6 0 01-6-6v-1.5m6 7.5v3.75m-3.75 0h7.5M12 15.75a3 3 0 01-3-3V4.5a3 3 0 116 0v8.25a3 3 0 01-3 3z"></path>
                    </svg>
                    <button v-else class="rounded-full p-3 text-white bg-blue-500 flex justify-center items-center">
                        <svg class="w-3 h-3 absolute" fill="currentColor" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.348a1.125 1.125 0 010 1.971l-11.54 6.347a1.125 1.125 0 01-1.667-.985V5.653z"></path>
                        </svg>
                    </button>
                </div>
            </div> 
        </div>
    </div>

    <!--             <div class="flex items-center justify-center">
                <label for="dropzone-file" class="flex flex-col items-center w-16 h-16 justify-center border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100 hover:text-blue-600">
                    <svg class="w-5 h-5" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"></path>
                    </svg>
                    <input id="dropzone-file" type="file" class="hidden" />
                </label>
            </div>  -->
            
</template>

<script>
import InputNoBorder from '../input/InputNoBorder.vue';
import TextAreaNoBorder from '../input/TextAreaNoBorder.vue';
import ImageModal from '../../components/modal/ImageModal.vue'
import { openModal } from 'jenesius-vue-modal';
import RecordModal from '../modal/RecordModal.vue';
import gsap from 'gsap';

export default {
    components: { InputNoBorder, TextAreaNoBorder, ImageModal, RecordModal },
    data() {
        return {
            vocab: {
                word: '',
                define: '',
                link: '',
                kind: 0,
            },
            imageLink: '',
            recordLink: '',
            errorTerm: false,
        }
    },
    emits: ['addVocabFromParent']
    ,
    methods: {
        async openImageModal() {
            const modal = await openModal(ImageModal, {imagePropLink: this.imageLink})

            modal.on('passImageLink', link => {
                console.log(link);
                this.imageLink = link;
                this.vocab.link = link;
                this.vocab.kind = 1;
            }) 
        },
        async openRecordModal() {
            const modal = await openModal(RecordModal, {recordPropLink: this.recordLink} )

            modal.on('passRecordLink', link => {
                console.log(link);
                this.recordLink = link;
                this.vocab.link = link;
                this.vocab.kind = 3;
            }) 
        },
        addVocabFromChildren() {
            if (this.vocab.word && this.vocab.define) {
                this.$emit('addVocabFromParent', this.vocab)
            } else {
                this.errorTerm = true;
                gsap.to(this.$refs.wrap,{
                    duration: 0.5,
                    right: '500px',
                    opacity: 0,
                    display: 'none',
                    ease: 'power3.inOut',
                })
            }
        }
    },
}
</script>