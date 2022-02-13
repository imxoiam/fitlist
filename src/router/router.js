import MainPage from '@/pages/MainPage'
import WeightPage from '@/pages/WeightPage'
import AboutPage from '@/pages/AboutPage'
import { createRouter, createWebHashHistory, createWebHistory } from 'vue-router'
const routes = [
    {
        path: '/',
        component: MainPage
    },
    {
        path: '/weight',
        component: WeightPage
    },
    {
        path: '/about',
        component: AboutPage
    }
]

const router = createRouter({
    routes,
    history: createWebHistory(process.env.BASE_URL)
})

export default router;