import {createRouter, createWebHistory} from 'vue-router';
import login from '../components/login-page.vue';
import create from "../components/create-page.vue";

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
    }
] 

const router = createRouter({history: createWebHistory(), routes})
export default router