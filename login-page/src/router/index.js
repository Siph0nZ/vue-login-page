import {createRouter, createWebHistory} from 'vue-router';
import login from '../components/login-page.vue';
import create from "../components/create-page.vue";
import dash from "../components/dashboard-page.vue";

const routes = [
    {
        path: '/Login',
        component: login,
        name: 'Login'
    },
    {
        path: '/Register',
        component: create,
        name: 'Register'
    },
    {
        path: '/Dashboard',
        component: dash,
        name: 'Dashboard'
    }
] 

const router = createRouter({history: createWebHistory(), routes})
export default router