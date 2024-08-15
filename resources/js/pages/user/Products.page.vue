<template>
    <div class="bg-blue-100">
        <div :class="containerClass">
            <ProductListComponent />
        </div>
    </div>
    <FooterLayout />
    <FooterNavigation />
</template>

<script>
import ProductListComponent from '@components/user/foods/product-list.component.vue';
import FooterLayout from '@layouts/user/footer.layout.vue';
import FooterNavigation from '@layouts/user/footer.navigation.vue'

export default {
    components: {
        ProductListComponent,
        FooterLayout,
        FooterNavigation,
    },
    computed: {
        containerClass() {
            return this.$containerClass
        }
    }
}
</script>