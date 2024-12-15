import { createRouter, createWebHistory } from 'vue-router'
import AuthLogin from '@/pages/Auth/AuthLogin.vue';
import AdminDashboard from '@/pages/Logged/AdminDashboard.vue';
import AdminMenu from '@/pages/Logged/AdminMenu.vue';
import AdminMeuPerfil from '@/pages/Logged/AdminMeuPerfil.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {path: '/', redirect: '/login'},
    {path: '/login', component: AuthLogin},
    {path: '/dashboard', component: AdminDashboard},
    {path: '/menu', component: AdminMenu},
    {path: '/home', component: AdminDashboard},
    {path: '/settings', component: AdminDashboard},
    {path: '/perfil', component: AdminMeuPerfil},
  ],
})

export default router
