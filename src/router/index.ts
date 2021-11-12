import { RouteRecordRaw, createRouter, createWebHashHistory } from "vue-router";
import Home from "@/views/Home.vue"
import About from "@/views/About.vue"

const routes: Array<RouteRecordRaw> = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/about',
        name: 'About',
        component: About
    }
]

export const router = createRouter({
    history: createWebHashHistory(),
    routes,
})