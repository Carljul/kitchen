<template>
    <div class="border-b-8 border-yellow-400" :style="`background-color: ${mainColorClassFade};`">
        <div :class="containerClass">
            <div class="flex flex-col md:flex-row mb-4 md:mb-0 items-center w-full justify-between">
                <h1 :class="`font-bold text-left my-3 md:mb-8 text-lg lg:text-[${jumboFont}]`">Eat with friends with our best food bundle!</h1>
                <router-link to="" class="font-bold flex items-center"><h1>VIEW ALL <font-awesome-icon icon="arrow-right"/></h1></router-link>
            </div>
            <div class="grid grid-cols-1 md:grid-cols-2 grid-flow-row gap-4">
                <CardsBundleComponent
                    v-for="product in bundleProducts"
                    :key="product"
                    :item="product"
                    :goPath="`/product/bundle/${product.id}`"
                />
            </div>
        </div>
    </div>
</template>


<script>
import { BundleProducts } from '../../../mock/product';
import CardsBundleComponent from './cards-bundle.component.vue';

export default {
    name: "Product List",
    data() {
        return {
            bundleProducts: BundleProducts
        }
    },
    components: {
        CardsBundleComponent
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
        bundleProducts() {
            return this.bundleProducts;
        },
        mainColorClassFade() {
            return this.$mainColorClassFade
        },
    }
}
</script>
