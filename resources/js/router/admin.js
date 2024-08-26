import LoginPage from '@pages/admin/Login.page.vue';
import DashboardPage from '@pages/admin/Dashboard.page.vue';

const adminRouter = [
    {
        path: '/admin',
        component: LoginPage
    },
    {
        path: '/admin/dashboard',
        component: DashboardPage
    },
]

export default adminRouter