<template>

<section class="bg-white dark:bg-gray-900 py-8 lg:py-16 overflow-y-scroll max-h-96 p-8 rounded-lg">
  <div class="max-w-4xl mx-auto px-0 wrap">
      <div class="flex justify-between items-center mb-6">
        <h2 class="text-lg lg:text-2xl font-bold text-gray-900 dark:text-white">Discussion ({{ total_comment }})</h2>
    </div>
    <form class="mb-6 flex flex-col">
        <div class="py-2 px-4 mb-4 bg-white rounded-lg rounded-t-lg border border-gray-200 dark:bg-gray-800 dark:border-gray-700">
            <label for="comment" class="sr-only">Your comment</label>
            <textarea 
                v-model="new_comment"
                id="comment" rows="3"
                class="px-0 w-full text-sm text-gray-900 border-0 focus:ring-0 focus:outline-none dark:text-white dark:placeholder-gray-400 dark:bg-gray-800"
                placeholder="Write a comment..." required></textarea>
        </div>
        <button 
            @click.prevent="submit"
            type="submit"
            class="w-fit self-end inline-flex items-center py-2.5 px-4 text-xs font-medium text-center text-white bg-blue-500 rounded-lg focus:ring-4 focus:ring-primary-200 dark:focus:ring-primary-900 hover:bg-primary-800">
            Post comment
        </button>
    </form>

    <Comment v-for="i in comments" :data="i" @close="closeThing"></Comment>

    <div class="w-full h-6 flex justify-center items-center">
        <p class="cursor-pointer font-semibold hover:text-gray-400">See more</p>
    </div>
  </div>
</section>

</template>

<script scoped>
import axios from 'axios';
import { closeModal } from 'jenesius-vue-modal';
import Comment from './Comment.vue';


export default {
    components: { Comment },
    props: ['user_id', 'course_id'],
    data() {
        return {
            total_comment: 0,
            comments: [],
            new_comment: '',
        }
    }, 
    methods: {
        async submit() {
            await axios.post('/comments', {
                user_id: this.user_id,
                course_id: this.course_id,
                content: this.new_comment,
            })
            this.closeThing()
            closeModal()
        },
        closeThing() {
            this.$emit('close',1)
        }
    },
    mounted() {
        axios.get('/comments/course/'+ this.course_id).then((res)=>{
            this.total_comment = res.data.total;
            this.comments = res.data.comments;
        })
    }
}
</script>

<style scoped>
.wrap {
    min-width: 500px;
}
</style>