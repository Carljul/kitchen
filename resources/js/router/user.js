import home from '@pages/user/Home.page.vue';
import about from '@pages/user/About.page.vue';
import productDetail from '@pages/user/ProductDetail.page.vue';
import cart from '@pages/user/Cart.page.vue'
import productsPage from '@/pages/user/Products.page.vue';
import notFound from '@pages/NotFoundPage.vue';

const userRouter = [
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
        component: productsPage
    },
    {
        path: '/products/:type',
        component: productsPage
    },
    {
        path: '/products/:type/:category',
        component: productsPage
    },
    {
        path: '/products/:type/:category/:id',
        component: productDetail
    },
    {
        path: '/cart',
        component: cart
    },
    {
        path: '/:pathMatch(.*)*',
        component: notFound
    },
]

export default userRouter
