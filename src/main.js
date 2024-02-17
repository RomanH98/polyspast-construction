import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import 'bootstrap/dist/css/bootstrap.css'
import bootstrap from 'bootstrap/dist/js/bootstrap.js'
import 'vue-final-modal/style.css'
import { createVfm } from 'vue-final-modal'

const app = createApp(App)
const vfm = createVfm()



app.use(router)
app.use(vfm)
app.use(bootstrap)

app.mount('#app')
