<template>
    <div class="bg-slate-100 h-full">
        <div :class="containerClass">
            <BreadCrumbsComponent
                :name="product.name"
            />
            <FoodDetailComponent
                :product="product"
            />
        </div>
    </div>
    <FooterComponent />
    <FooterNavigation />
</template>

<script>
import BreadCrumbsComponent from '@components/user/foods/details/BreadCrumbs.component.vue';
import FoodDetailComponent from '@components/user/foods/details/detail.component.vue';
import FooterComponent from '@layouts/user/footer.layout.vue';
import FooterNavigation from '@layouts/user/footer.navigation.vue';
import { BundleProducts, Products } from '../../mock/product';

export default {
    data() {
        return {
            product: {}
        }
    },
    components: {
        BreadCrumbsComponent,
        FoodDetailComponent,
        FooterNavigation,
        FooterComponent,
    },
    mounted() {
        this.getProductDetails()
    },
    computed: {
        containerClass() {
            return this.$containerClass
        }
    },
    methods: {
        getProductDetails() {
            let id = this.$route.params.id
            let type = this.$route.params.type

            if (type == this.$foodType) {
                this.product = Products.find((item) => item.id == id)
            } else if (type == this.$bundleType) {
                this.products = BundleProducts.find((item) => item.id == id)
            }
        }
    },
}
</script>