import { createApp } from 'vue'
// iview
import ViewUIPlus from 'view-ui-plus'
import 'view-ui-plus/dist/styles/viewuiplus.css'
// pinia
import { createPinia } from 'pinia'
import router from './router'
import './style.css'
import App from './App.vue'

const app = createApp(App)
// 使用vue-router
app.use(router)
// pinia
app.use(createPinia())
app.use(ViewUIPlus)
// 挂载
app.mount('#app')
