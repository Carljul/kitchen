<template>
    <div class="bg-slate-100 h-full">
        <div :class="containerClass">
            <BreadCrumbsComponent
                :key="product.id"
                :name="product.name"
            />
            <FoodDetailComponent
                :key="product.id"
                :product="product"
                :getProductDetails="getProductDetails"
            />
            <OtherFoodsComponent
                :getProductDetails="getProductDetails"
            />
        </div>
    </div>
    <FooterComponent />
    <FooterNavigation />
</template>

<script>
import BreadCrumbsComponent from '@components/user/foods/details/BreadCrumbs.component.vue';
import FoodDetailComponent from '@components/user/foods/details/detail.component.vue';
import OtherFoodsComponent from '@components/user/foods/details/OtherFoods.component.vue';
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
        OtherFoodsComponent,
        FooterNavigation,
        FooterComponent,
    },
    computed: {
        containerClass() {
            return this.$containerClass
        }
    },
    mounted() {
        this.getProductDetails()
    },
    methods: {
        getProductDetails() {
            let id = this.$route.params.id
            let type = this.$route.params.type

            if (type == this.$foodType) {
                this.product = Products.find((item) => item.id == id)
            } else if (type == this.$bundleType) {
                this.product = BundleProducts.find((item) => item.id == id)
            }
        }
    },
}
</script>