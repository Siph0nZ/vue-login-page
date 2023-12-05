import {createRouter, createWebHistory} from 'vue-router';
import register from '../components/register-page.vue';
const routes = [
    {
        path: '/register',
        component: register,
        name: 'Register'
    }
] 

const router = createRouter({history: createWebHistory(), routes})
export default router