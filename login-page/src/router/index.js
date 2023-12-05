import {createRouter, createWebHistory} from 'vue-router';
import login from '../components/login-page.vue';
const routes = [
    {
        path: '/Login',
        component: login,
        name: 'Login'
    }
] 

const router = createRouter({history: createWebHistory(), routes})
export default router