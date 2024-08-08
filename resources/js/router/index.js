import { createRouter, createWebHistory } from "vue-router";

import home from '../pages/user/Home.page.vue';
import about from '../pages/user/About.page.vue';
import productDetail from '../pages/user/ProductDetail.page.vue';
import notFound from '../pages/NotFoundPage.vue';

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
        path: '/products',
        component: productDetail
    },
    {
        path: '/products/:id',
        component: productDetail
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
