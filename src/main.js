import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
const app = createApp(App)



app.use(router)
app.mount('#app')


router.isReady().then(() => {
  if(localStorage.getItem('jwt_token')){
    router.push('/dashboard')
  }else{
    router.push('/login')
  }
})
