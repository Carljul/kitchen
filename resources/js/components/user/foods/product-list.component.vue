<template>
    <div class="flex flex-col md:flex-row gap-[20px]">
        <!-- Filter -->
        <div class="w-[400px]">
            &nbsp;
            <div class="sticky top-3 w-full bg-white p-5 rounded-md">
                <h1 :class="`font-bold text-left my-3 md:mb-8 text-lg lg:text-[${jumboFont}]`">Categories</h1>
                <ul class="flex flex-col gap-[10px]">
                    <li>
                        <router-link
                            to="/products"
                            @click="filterProducts(undefined)"
                            :class="`${$route.params.type === undefined ? 'bg-blue-500 text-white' : ''} flex p-3 border-[1px] border-slate-200 rounded-md shadow-lg mb-3 hover:bg-blue-500 hover:text-white justify-between items-center`"
                        >All</router-link>
                    </li>
                    <li>
                        <router-link
                            :to="`${$route.params.type == 'foods' ? '/products' : '/products/foods'}`"
                            :class="`${$route.params.type == 'foods' ? 'bg-blue-500 text-white' : ''} flex p-3 border-[1px] border-slate-200 rounded-md shadow-lg mb-3 hover:bg-blue-500 hover:text-white justify-between items-center`"
                        >
                            <span>Foods</span>
                            <font-awesome-icon :icon="['fas', 'chevron-up']" :class="`${$route.params.type == 'foods' ? 'block':'hidden'}`"/>
                            <font-awesome-icon :icon="['fas', 'chevron-down']"  :class="`${$route.params.type == 'foods' ? 'hidden':'block'}`"/>
                        </router-link>
                        <ul :class="`${$route.params.type == 'foods' ? 'block':'hidden'} flex flex-row md:flex-col gap-[10px] float-right w-full md:w-[90%] overflow-scroll md:overflow-auto`">
                            <li v-for="foodCat in foodCategories">
                                <router-link
                                    :to="`/products/foods/${cleanCategorySlug(foodCat.category)}`"
                                    @click="filterProducts(foodCat.category)"
                                    :class="`${$route.params.category == cleanCategorySlug(foodCat.category) ? 'bg-blue-500 text-white' : ''} block border-[1px] border-slate-200 p-3 rounded-md shadow-lg hover:bg-blue-500 hover:text-white whitespace-nowrap md:whitespace-normal`"
                                >
                                    {{ readableCategorySlug(foodCat.category) }}
                                </router-link>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <router-link
                            to="/products/bundles"
                            :class="`${$route.params.type == 'bundles' ? 'bg-blue-500 text-white' : ''} flex p-3 border-[1px] border-slate-200 rounded-md shadow-lg mb-3 hover:bg-blue-500 hover:text-white justify-between items-center`"
                        >
                            <span>Bundles</span>
                            <font-awesome-icon :icon="['fas', 'chevron-up']" :class="`${$route.params.type == 'bundles' ? 'block':'hidden'}`"/>
                            <font-awesome-icon :icon="['fas', 'chevron-down']"  :class="`${$route.params.type == 'bundles' ? 'hidden':'block'}`"/>
                        </router-link>
                        
                        <ul :class="`${$route.params.type == 'bundles' ? 'block':'hidden'} flex flex-row md:flex-col gap-[10px] float-right w-full md:w-[90%] overflow-scroll md:overflow-auto`">
                            <li v-for="bundleCat in bundleCategories">
                                <router-link
                                    :to="`/products/bundles/${cleanCategorySlug(bundleCat.category)}`"
                                    @click="filterProducts(bundleCat.category)"
                                    :class="`${$route.params.category == cleanCategorySlug(bundleCat.category) ? 'bg-blue-500 text-white' : ''} block border-[1px] border-slate-200 p-3 rounded-md shadow-lg hover:bg-blue-500 hover:text-white whitespace-nowrap md:whitespace-normal`"
                                >{{ readableCategorySlug(bundleCat.category) }}</router-link>
                            </li>
                        </ul>
                    </li>
                </ul>
            </div>
        </div>

        <!-- Food List -->
        <div>
            <!-- Foods -->
            <div v-show="$route.params.type == 'foods' || $route.params.type == undefined">
                <h1 :class="`font-bold text-left my-3 md:mb-8 text-lg lg:text-[${jumboFont}]`">Foods for you!</h1>
                <div class="grid grid-cols-3 md:grid-cols-3 lg:grid-cols-4 grid-flow-row gap-4">
                    <!-- Loop the number here -->
                    <FoodsComponent
                        v-for="product in products"
                        :key="product"
                        :item="product"
                        :goPath="`/products/foods/${product.id}`"
                    />
                    <h1 v-show="products.length == 0">No food found!</h1>
                </div>
            </div>

            <!-- Bundles -->
            <div v-show="$route.params.type == 'bundles' || $route.params.type == undefined">
                <h1 :class="`font-bold text-left my-3 mt-8 md:mb-6 text-lg lg:text-[${jumboFont}]`">Eat with friends with our best food bundle!</h1>
                <div class="grid grid-cols-3 md:grid-cols-3 lg:grid-cols-4 grid-flow-row gap-4">
                    <FoodsComponent
                        v-for="product in bundleProducts"
                        :key="product"
                        :item="product"
                        :goPath="`/products/bundles/${product.id}`"
                    />
                    <h1 v-show="bundleProducts.length == 0">No food found!</h1>
                </div>
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
    mounted() {
        this.filterProducts(this.$route.params.category)
    },
    methods: {
        cleanCategorySlug(category) {
            return cleanString(category)
        },
        readableCategorySlug(category) {
            return readableString(category)
        },
        filterProducts(category) {
            this.products = Products
            this.bundleProducts = BundleProducts
            if (category !== undefined) {
                if (this.$route.params.type == 'foods') {
                    this.products = this.products.filter((item) => item.category == category || this.cleanCategorySlug(item.category) == category)
                } else if (this.$route.params.type == 'bundles') {
                    this.bundleProducts = this.bundleProducts.filter((item) => item.category == category || this.cleanCategorySlug(item.category) == category)
                }
            }
        }
    }
}
</script>