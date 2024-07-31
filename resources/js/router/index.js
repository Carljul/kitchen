import { createRouter, createWebHistory } from "vue-router";

import home from '../components/pages/user/Home.page.vue';
import about from '../components/pages/user/About.page.vue';
import notFound from '../components/NotFoundPage.vue';

const routes = [
    {
        path: '/',
        component: home
    },
    {
        path: '/about',
        component: about
    },
    {
        path: '/:pathMatch(.*)*',
        component: notFound
    },
]

const router = createRouter({
    history: createWebHistory(),
    linkExactActiveClass: 'active',
    routes,
});

export default router
