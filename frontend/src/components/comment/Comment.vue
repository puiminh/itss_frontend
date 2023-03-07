<template>
    <article class="commentWrap relative p-6 mb-6 text-base bg-white rounded-lg dark:bg-gray-900">
        <button
          
            @click="saveComment"
            ref="savebtn"
            class="absolute opacity-0 hidden bottom-0 right-0
                    justify-center items-center  w-7  h-7 bg-green-400 hover:bg-green-300 rounded-full  shadow-md ">
            <i class="fas fa-save font-bold text-white text-xs"></i>
        </button>
        <footer class="flex justify-between items-center mb-2">
            <div class="flex items-center">
                <p class="inline-flex items-center mr-3 text-sm text-gray-900 dark:text-white"><img
                        class="mr-2 w-6 h-6 rounded-full"
                        :src="data.user.avatar"
                        alt="author">{{ data.user.first_name + ' ' + data.user.last_name }}</p>
                <p class="text-sm text-gray-600 dark:text-gray-400"><time pubdate datetime="2022-02-08"
                        title="February 8th, 2022">{{data.comment.updated_at}}</time></p>
            </div>
            <button
            v-if="getUser.id == data.user.id"  
                class="inline-flex items-center p-2 text-sm font-medium text-center text-gray-400 bg-white rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-50 dark:bg-gray-900 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                type="button"

                @click="openCommentSetting=true"
            >
                <svg class="w-5 h-5" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z">
                    </path>
                </svg>
                <span class="sr-only">Comment settings</span>
            </button>
            <!-- Dropdown menu -->
            <div id=""
                :class="[openCommentSetting ? '' : 'hidden', 'absolute right-0 top-0 z-10 w-36 bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700 dark:divide-gray-600']">
                <ul class="py-1 text-sm text-gray-700 dark:text-gray-200"
                    aria-labelledby="dropdownMenuIconHorizontalButton">
                    <li>
                        <a @click="changeToEditMode"
                            class="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Edit</a>
                    </li>
                    <li>
                        <a @click="deleteComment"
                            class="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Remove</a>
                    </li>
                </ul>
            </div>
        </footer>
        <p 
            :contenteditable="editing" @input="commentChange"
            class="text-gray-500 dark:text-gray-400 focus:outline-none focus:border-yellow-500 focus:ring-yellow-500 focus:ring-2"
        >
            {{ data.comment.content}}
        </p>
    </article>
</template>

<script>
import axios from 'axios';
import gsap from 'gsap';
import { mapState } from 'pinia';
import { closeModal } from 'jenesius-vue-modal';

import { useUserStore } from '../../stores/user';


export default {
    props: {
        data: {
            type: Object,
            required: true
        }
    },
    emits: ['close'],
    data() {
        return {
            openCommentSetting: false,
            editing: false,
            comment: {
                content: ''
            }
        }
    },
    computed: {
        ...mapState(useUserStore, ['getUser']),

    },
    methods: {
        changeToEditMode() {
            this.editing = true;
            this.openCommentSetting = false;
            gsap.to(this.$refs.savebtn, {
                right: '2rem',
                display: 'flex',
                opacity: 1,
                ease: 'ease-in',
                duration: 0.5
            })
        },
        async saveComment() {
            console.log(this.comment.content);

            await axios.put('/comments/'+this.comment.id, 
                this.comment
            )

            gsap.to(this.$refs.savebtn, {
                right: '0rem',
                display: 'hidden',
                opacity: 0,
                ease: 'ease-out',
                duration: 0.5
            })
            this.$emit('close',1)
            closeModal()
        },
        commentChange(evt) {
            this.comment.content = evt.target.textContent;
        },      
        async deleteComment() {
            const res = await axios.delete('/comments/'+this.comment.id+'/'+this.getUser.id)
            if (res.status) {
                this.$emit('close',this.comment.id)
                closeModal()
            }
        }  
    },
    mounted() {
        this.comment = this.data.comment;
    }
}

</script>

<style scoped>
.commentWrap {
    width: 500px;
}

</style>