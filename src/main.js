import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './assets/main.css'
import'jquery/dist/jquery.slim'
import'bootstrap/dist/css/bootstrap.css'
import 'element-plus/dist/index.css'
import ElementPlus from'element-plus'
import axios from 'axios'
import VueAxios from 'vue-axios'



const app = createApp(App)
app.use(ElementPlus)
app.use(VueAxios,axios)
app.use(router)
app.mount('#app')
