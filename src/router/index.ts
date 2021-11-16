import { RouteRecordRaw, createRouter, createWebHistory } from "vue-router";
import Blog from "@/views/Blog.vue"
import About from "@/views/About.vue"
import Start from "@/views/Start.vue"

const routes: Array<RouteRecordRaw> = [
    {
        path: '/start',
        name: 'Start here',
        component: Start
    },
    {
        path: '/',
        name: 'Blog',
        component: Blog
    },
    {
        path: '/about',
        name: 'About',
        component: About
    }
]

export const router = createRouter({
    history: createWebHistory(),
    routes,
})