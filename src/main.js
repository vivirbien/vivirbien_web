import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './rauts/router'
import VueMeta from 'vue-meta'

createApp(App).use(router).use(VueMeta).mount('#app')
