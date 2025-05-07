import './assets/main.css'

import { createApp } from 'vue'
import Editor from './views/Editor.vue'
import ElementPlus  from 'element-plus'
import 'element-plus/dist/index.css'

const app = createApp(Editor)
app.use(ElementPlus)
app.mount('#app')
