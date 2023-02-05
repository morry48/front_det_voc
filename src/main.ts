import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { worker } from './mocks/browser'

import App from './App.vue'
import router from './router'

import "./assets/styles/tailwind.css";

if (import.meta.env.DEV) worker.start()

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')
