import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { plugin, defaultConfig } from '@formkit/vue'
import { QuillEditor } from '@vueup/vue-quill'
import '@vueup/vue-quill/dist/vue-quill.snow.css';

import App from './App.vue'
import router from './router'

import './assets/main.css'
import Toast from "vue-toastification";
// Import the CSS or use your own!
import "vue-toastification/dist/index.css";
import SmartTable from 'vuejs-smart-table'

const options = {
    // You can set your default options here
};

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(plugin, defaultConfig)
app.use(Toast, options);
app.use(SmartTable)
app.component('QuillEditor', QuillEditor);
app.mount('#app')
