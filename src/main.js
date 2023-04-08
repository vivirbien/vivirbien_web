import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './rauts/router'
import { createHead } from "unhead"


const head = createHead()

createApp(App).use(router).use(head).mount('#app')
