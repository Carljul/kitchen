import { createRouter, createWebHistory } from "vue-router";

import home from '../components/pages/user/Home.page.vue';
import about from '../components/pages/user/About.page.vue';
import productDetail from '../components/pages/user/ProductDetail.page.vue';
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
