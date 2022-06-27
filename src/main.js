import { createApp } from 'vue'
import App from './App.vue'
import Layui from '@layui/layui-vue'
import store from './store/index'

import '../index.css'
import '@layui/layui-vue/lib/index.css'

const app = createApp(App)
app.use(Layui).use(store).mount('#app')
