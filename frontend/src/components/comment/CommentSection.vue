<template>

<section class="bg-white dark:bg-gray-900 py-8 lg:py-16 overflow-y-scroll max-h-96 p-8 rounded-lg">
  <div class="max-w-4xl mx-auto px-0">
      <div class="flex justify-between items-center mb-6">
        <h2 class="text-lg lg:text-2xl font-bold text-gray-900 dark:text-white">Discussion ({{ total }})</h2>
    </div>
    <form class="mb-6 flex flex-col">
        <div class="py-2 px-4 mb-4 bg-white rounded-lg rounded-t-lg border border-gray-200 dark:bg-gray-800 dark:border-gray-700">
            <label for="comment" class="sr-only">Your comment</label>
            <textarea id="comment" rows="3"
                class="px-0 w-full text-sm text-gray-900 border-0 focus:ring-0 focus:outline-none dark:text-white dark:placeholder-gray-400 dark:bg-gray-800"
                placeholder="Write a comment..." required></textarea>
        </div>
        <button 
            @click.prevent
            type="submit"
            class="w-fit self-end inline-flex items-center py-2.5 px-4 text-xs font-medium text-center text-white bg-blue-500 rounded-lg focus:ring-4 focus:ring-primary-200 dark:focus:ring-primary-900 hover:bg-primary-800">
            Post comment
        </button>
    </form>

    <Comment v-for="i in total"></Comment>

    <div class="w-full h-6 flex justify-center items-center">
        <p class="cursor-pointer font-semibold hover:text-gray-400">See more</p>
    </div>
  </div>
</section>

</template>

<script scoped>
import Comment from './Comment.vue';


export default {
    components: { Comment },
    props: {
        total: {
            default: 1,
        }
    },
    data() {
        return {
            
        }
    }
}
</script>