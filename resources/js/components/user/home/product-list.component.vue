<template>
    <div :class="containerClass">
        <h1 :class="`font-bold text-left my-3 md:mb-8 text-lg lg:text-[${jumboFont}]`">Food for you!</h1>
        <div class="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 grid-flow-row gap-4">
            <!-- Loop the number here -->
            <CardsComponent
                v-for="product in products"
                :key="product"
                :item="product"
                :goPath="`/products/${product.id}`"
            />
        </div>
        <div class="flex w-full justify-center mt-6">
            <router-link to="" class="text-gray-900 bg-white border focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-full text-sm px-5 py-2.5 me-2 mb-2" :style="`border-color: ${mainColorClass};`">More foods for you!</router-link>
        </div>
    </div>
</template>

<script>
import { Products } from '../../../mock/product';
import CardsComponent from './cards.component.vue';

export default {
    name: "Product List",
    data() {
        return {
            products: Products
        }
    },
    components: {
        CardsComponent
    },
    computed: {
        mainColorClass() {
            return this.$mainColorClass
        },
        containerClass() {
            return this.$containerClass
        },
        jumboFontClass() {
            return this.$jumboFont
        },
        containerClass() {
            return this.$containerClass
        },
        products() {
            return this.products;
        }
    }
}
</script>
