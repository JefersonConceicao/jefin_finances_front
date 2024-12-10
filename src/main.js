import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
const app = createApp(App)

app.use(router)
app.mount('#app')


router.isReady().then(() => {
  const userLogged = JSON.parse(localStorage.getItem('data_user'));

  if(userLogged.access_token){
    router.push('/dashboard')
  }else{
    router.push('/login')
  }
})
