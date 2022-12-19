import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import "./assets/style/index.css"
import axios from "axios"
import VueAxios from 'vue-axios'
const app = createApp(App)
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component)
}
app.use(ElementPlus)
    .use(router)
    .use(VueAxios, axios)
    .provide('axios', app.config.globalProperties.axios)
    .mount('#app')

