import homePage from '@pages/user/Home.page.vue';
import aboutPage from '@pages/user/About.page.vue';
import productDetailPage from '@pages/user/ProductDetail.page.vue';
import cartPage from '@pages/user/Cart.page.vue'
import productsPage from '@pages/user/Products.page.vue';
import checkoutPage from '@pages/user/Checkout.page.vue'
import notFound from '@pages/NotFoundPage.vue';

const userRouter = [
    {
        path: '/',
        component: homePage
    },
    {
        path: '/about',
        component: aboutPage
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
        component: productDetailPage
    },
    {
        path: '/cart',
        component: cartPage
    },
    {
        path: '/checkout',
        component: checkoutPage
    },
    {
        path: '/:pathMatch(.*)*',
        component: notFound
    },
]

export default userRouter
