<script>
import axios from 'axios';
import { ref } from 'vue';
import { RouterLink } from 'vue-router';
import FlipCard from '../components/card/FlipCard.vue';
import QuillForm from '../components/Form/QuillForm.vue';
import QNA from '../components/Q&A/QNA.vue';
import { mapActions, mapState } from 'pinia'
import { useCounterStoreT } from '../stores/counter'
import Record from '../components/Record/Record.vue';
import Modal from '../components/modal/Modal.vue';
import Search from '../components/search/Search.vue';
import CourseFolder from '../components/folder/CourseFolder.vue'


export default {
  components: {
    FlipCard: FlipCard,
    QNA: QNA,
    QuillForm,
    Record,
    Modal,
    Search,
    CourseFolder,
},
  data() {
    return {
      courseDatas: [],
      content: "",
      start: false,
      showModal: false,
    }
  },
  methods: {
    log() {
      console.log("Log from father: ",this.content)
    },
    handleChangeContent(data) {
      console.log("Data from father has been changed",data)
      this.content = data
    },
    ...mapActions(useCounterStoreT, ['increment']),
    startStatusChange() {
      this.start = !this.start
    }
  },
  mounted() {
    axios.get('http://localhost:3000/courses')
      .then((res)=>{
        console.log(res);
        // this.courseDatas = res.data.courses;
        this.courseDatas = res.data;
    })
  },
  computed: {
    ...mapState(useCounterStoreT, ['count']),
    ...mapState(useCounterStoreT, {
      doubleRename: 'doubleCount',
      // you can also write a function that gets access to the store
      doubleCustom: (store) => store.doubleCount+1,
    }),
  },
}

</script>

<template>
<div class="wrapper p-20 flex"  >
  <div v-for="course in courseDatas"  class="m-6 max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
    <a href="#">
        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{{course.name}}</h5>
    </a>
    <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">{{course.description}}</p>
    <RouterLink :to="('/course/'+course.course_id)" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
        Read more
        <svg aria-hidden="true" class="w-4 h-4 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
    </RouterLink>
  </div>
</div>
<FlipCard :vertical="true"></FlipCard>
<FlipCard :vertical="false"></FlipCard>

<QuillForm @changecontent="handleChangeContent"></QuillForm>

<button @click="log">Father Log</button>

<div v-html="content">

</div>

<p>{{ count }}</p>
<p>{{ doubleCustom }}</p>
<p>{{ doubleRename }}</p>

<button @click="increment">++++</button>

<Record :start="start"></Record>

<Search></Search>

<CourseFolder class="m-5" title="English Cooking" authorName="Minh Bui Hong" numberVocab="20" progress="10" time="1h23m"></CourseFolder>


</template>
