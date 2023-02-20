import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { plugin, defaultConfig } from '@formkit/vue'
import { QuillEditor } from '@vueup/vue-quill'
import '@vueup/vue-quill/dist/vue-quill.snow.css';
import '@vueup/vue-quill/dist/vue-quill.bubble.css';


import App from './App.vue'
import router from './router'

import './assets/main.css'
import Toast from "vue-toastification";
// Import the CSS or use your own!
import "vue-toastification/dist/index.css";
import SmartTable from 'vuejs-smart-table'

//axios
import './api-axios'

import VueProgressBar from "@aacassandra/vue3-progressbar";

const options = {
  color: "#000",
  failedColor: "#000",
  thickness: "4px",
  transition: {
    speed: "1s",
    opacity: "0.6s",
    termination: 300,
  },
  autoRevert: true,
  location: "top",
  inverse: false,
};

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(plugin, defaultConfig)
app.use(Toast, options);
app.use(SmartTable);
app.use(VueProgressBar, options)
app.component('QuillEditor', QuillEditor);
app.mount('#app')

export default app;
