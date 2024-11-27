import { createRouter, createWebHistory } from 'vue-router'
import AuthLogin from '@/pages/Auth/AuthLogin.vue';
import AdminDashboard from '@/pages/Logged/AdminDashboard.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {path: '/', redirect: '/login'},
    {path: '/login', component: AuthLogin},
    {path: '/dashboard', component: AdminDashboard}
  ],
})

export default router
