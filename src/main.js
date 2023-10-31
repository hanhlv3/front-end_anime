import { createApp } from 'vue'
import App from './App.vue'
import './assets/css/tailwind.css'
import './assets/client/themify-icons/themify-icons.css'
// import './assets/client/css/layouts.css'
// import './assets/client/css/profile.css'
// import './assets/client/css/store.css'
// import './assets/client/css/viewfilm.css'
// import './assets/client/css/switalert.css'
// import './assets/client/css/swiper-bundle.min.css'

import router from './router/index.js'
import store from './store/index'

const app = createApp(App)

app.use(router)
app.use(store)
app.mount('#app')
