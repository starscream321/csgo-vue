import {createRouter, createWebHashHistory} from 'vue-router'
import LoginPage from "@/page/LoginPage";
import MainPage from "@/page/MainPage";

const routes = [
    {
        path: '/',
        name: 'login',
        component: LoginPage
    },
    {
        path: '/server',
        name: 'server',
        component: MainPage
    }
]

const router = createRouter({
    history: createWebHashHistory(process.env.BASE_URL),
    routes
})


export default router
