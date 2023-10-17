import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router/router'
import store from './store'; // Import Vuex store instance

const app = createApp(App)

app.use(router)
app.use(store); // Register the store

app.mount('#app')

