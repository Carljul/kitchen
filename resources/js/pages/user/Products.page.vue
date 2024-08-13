<template>
    <div class="bg-blue-100">
        <div :class="containerClass">
            <ProductListComponent />
        </div>
    </div>
    <FooterLayout />
</template>

<script>
import ProductListComponent from '@components/user/foods/product-list.component.vue';
import FooterLayout from '@layouts/user/footer.layout.vue'

export default {
    components: {
        ProductListComponent,
        FooterLayout
    },
    computed: {
        containerClass() {
            return this.$containerClass
        }
    }
}
</script>