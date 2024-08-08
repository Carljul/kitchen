<template>
    <UserAppVue v-if="isShowPage == 'user'" />
    <AdminAppVue v-if="isShowPage == 'admin'"/>
</template>


<script>
import UserAppVue from '@pages/user/app.vue';
import AdminAppVue from '@pages/admin/app.vue';
export default {
    data() {
        return {
            currentPath: ''
        }
    },
    components: {
        UserAppVue,
        AdminAppVue,
    },
    computed: {
        isShowPage() {
            return this.$route.path.includes('admin') ? 'admin':'user';
        }
    }
}
</script>
