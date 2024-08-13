<template>
    <div class="flex gap-[20px]">
        <!-- Filter -->
        <div class="w-[400px]">
            &nbsp;
            <div class="sticky top-3 w-full bg-white p-5 rounded-md">
                <ul>
                    <li>
                        <router-link to="/products">All</router-link>
                    </li>
                    <li>
                        <router-link to="/products/foods">Foods</router-link>
                        <ul :class="`${$route.params.type == 'foods' ? 'block':'hidden'}`">
                            <li v-for="foodCat in foodCategories">
                                <router-link :to="`/products/foods/${cleanCategorySlug(foodCat.category)}`">{{ readableCategorySlug(foodCat.category) }}</router-link>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <router-link to="/products/bundles">Bundles</router-link>
                        
                        <ul :class="`${$route.params.type == 'bundles' ? 'block':'hidden'}`">
                            <li v-for="bundleCat in bundleCategories">
                                <router-link :to="`/products/bundles/${cleanCategorySlug(bundleCat.category)}`">{{ readableCategorySlug(bundleCat.category) }}</router-link>
                            </li>
                        </ul>
                    </li>
                </ul>
            </div>
        </div>

        <!-- Food List -->
        <div>
            <!-- Foods -->
            <h1 :class="`font-bold text-left my-3 md:mb-8 text-lg lg:text-[${jumboFont}]`">Foods for you!</h1>
            <div class="grid grid-cols-3 md:grid-cols-3 lg:grid-cols-4 grid-flow-row gap-4">
                <!-- Loop the number here -->
                <FoodsComponent
                    v-for="product in products"
                    :key="product"
                    :item="product"
                    :goPath="`/products/foods/${product.id}`"
                />
            </div>

            <!-- Bundles -->
            <h1 :class="`font-bold text-left my-3 mt-8 md:mb-6 text-lg lg:text-[${jumboFont}]`">Eat with friends with our best food bundle!</h1>
            <div class="grid grid-cols-3 md:grid-cols-3 lg:grid-cols-4 grid-flow-row gap-4">
                <FoodsComponent
                    v-for="product in bundleProducts"
                    :key="product"
                    :item="product"
                    :goPath="`/products/bundles/${product.id}`"
                />
            </div>
        </div>
    </div>
</template>

<script>
import { cleanString, readableString } from '@library/utils';
import { BundleProducts, Categories, Products } from '../../../mock/product';
import FoodsComponent from './foods.component.vue';

export default {
    data() {
        return {
            products: Products,
            bundleProducts: BundleProducts,
            foodCategories: Categories.filter((item) => !item.isBundle),
            bundleCategories: Categories.filter((item) => item.isBundle),
        }
    },
    components: {
        FoodsComponent
    },
    methods: {
        cleanCategorySlug(category) {
            return cleanString(category)
        },
        readableCategorySlug(category) {
            return readableString(category)
        }
    }
}
</script>