import { createRouter, createWebHistory } from "vue-router";
import userRouter from './user'
import adminRouter from './admin'

const routes = [
    ...userRouter,
    ...adminRouter
]

const router = createRouter({
    history: createWebHistory(),
    linkExactActiveClass: 'active',
    routes,
});

export default router
