import { createApp } from 'vue'
import App from './App.vue'
import './assets/css/tailwind.css'
import './assets/client/themify-icons/themify-icons.css'
import './assets/client/css/layouts.css'

import router from './router/index.js'
import store from './store/index'

const app = createApp(App)

app.use(router)
app.use(store)
app.mount('#app')
