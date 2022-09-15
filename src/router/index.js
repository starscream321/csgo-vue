import {createRouter, createWebHistory} from 'vue-router'
import LoginPage from "@/page/LoginPage";
import MainPage from "@/page/MainPage";

const routes = [
    {
        path: '/',
        component: LoginPage
    },
    {
        path: '/server',
        name: 'server',
        component: MainPage
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})


export default router
