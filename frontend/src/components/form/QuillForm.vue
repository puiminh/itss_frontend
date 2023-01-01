<script>
export default {
  inheritAttrs: false,
  components: {
  },
  props: ["content"],
  data() {
    return {
      courseDatas: [],
      contentQ: '',
    }
  },
  methods: {
    log() {
        console.log(this.contentQ);
    },
    changeFatherContent(data) {
        console.log("Change father content: ",data);
        this.$emit("changecontent",data)
    }
  },
  watch: {
    contentQ(newContent,oldContent) {
        console.log("Watch detect change: ",newContent, oldContent);
        this.changeFatherContent(newContent);
    }
  }
}

</script>

<template>
<quill-editor 
  theme="snow"
  v-model:content="contentQ"
  contentType="html"
  toolbar="full"
>
</quill-editor>

<div v-html="contentQ">
</div>

<button @click="log">LOG</button>   

</template>
