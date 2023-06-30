

import { createRouter, createWebHistory } from 'vue-router'

import Spa1 from '@/components/Spa1'
import Spa2 from '@/components/Spa2'

const routes = [
    { path: '/spa1', component: Spa1 },
    { path: '/spa2', component: Spa2 }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router