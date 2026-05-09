import { createApp } from 'vue'
import App from './App.vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'
import axios from 'axios';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap';
import './assets/reset/reset.css'
import './assets/styles/theme.css'

const app = createApp(App)
const pinia = createPinia()

app.use(pinia)
app.use(router)
app.mount('#app')
