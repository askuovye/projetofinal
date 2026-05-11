import { createApp } from 'vue'
import App from './App.vue'
import { createPinia } from 'pinia'
import router from './router'

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './assets/reset/reset.css'
import './assets/styles/theme.css'

const app = createApp(App)
const pinia = createPinia()

app.use(pinia)
app.use(router)
app.mount('#app')
