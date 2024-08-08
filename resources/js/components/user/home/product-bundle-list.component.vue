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
import CardsBundleComponent from './cards-bundle.component.vue';
import bundle1 from '@assets/food-bundle/bundle1.jpeg';
import bundle2 from '@assets/food-bundle/bundle2.jpg';

export default {
    name: "Product List",
    data() {
        return {
            bundleProducts: [
                {
                    "id": 1,
                    "name": "Set A",
                    "category": "Pork",
                    "description": "Some beautiful description",
                    "productCode": "h4123",
                    "servingSize": 2,
                    "comparePrice": 3000,
                    "isActivePriceCompare": true,
                    "price": 2900,
                    "image": bundle1,
                    "bundle" : [
                        {
                            "id": 1,
                            "name": "Lechon Belly",
                            "category": "Pork",
                            "servingSize": 2,
                            "dishNote": "",
                            "variants": []
                        },
                        {
                            "id": 2,
                            "name": "Fried Chicken",
                            "category": "Chicken",
                            "servingSize": 2,
                            "dishNote": "with mushroom gravy sauce",
                            "variants": []
                        },
                        {
                            "id": 3,
                            "name": "Pancit Bam-e",
                            "category": "Pasta",
                            "servingSize": 2,
                            "dishNote": "",
                            "variants": []
                        },
                        {
                            "id": 4,
                            "name": "Stir Fry Vegetables",
                            "category": "Vegetables",
                            "servingSize": 2,
                            "dishNote": "",
                            "variants": []
                        },
                        {
                            "id": 5,
                            "name": "Kropek",
                            "category": "Vegetables",
                            "servingSize": 2,
                            "dishNote": "",
                            "variants": []
                        },
                        {
                            "id": 6,
                            "name": "Kropek",
                            "category": "Vegetables",
                            "servingSize": 2,
                            "dishNote": "",
                            "variants": ['Plain', 'Java']
                        },
                        {
                            "id": 6,
                            "name": "Sauces",
                            "category": "",
                            "servingSize": 2,
                            "dishNote": "",
                            "variants": ['Native Sauce', 'Pickled pumpkins']
                        },
                    ]
                },
                {
                    "id": 2,
                    "name": "Set B",
                    "category": "Chicken",
                    "description": "A savory chicken dish with a rich sauce.",
                    "productCode": "c5678",
                    "servingSize": 4,
                    "comparePrice": 49.00,
                    "isActivePriceCompare": true,
                    "price": 45.00,
                    "image": bundle2,
                    "bundle" : [
                        {
                            "id": 1,
                            "name": "Lechon Belly",
                            "category": "Pork",
                            "servingSize": 2,
                            "dishNote": "",
                            "variants": []
                        },
                        {
                            "id": 2,
                            "name": "Fried Chicken",
                            "category": "Chicken",
                            "servingSize": 2,
                            "dishNote": "with mushroom gravy sauce",
                            "variants": []
                        },
                        {
                            "id": 3,
                            "name": "Pancit Bam-e",
                            "category": "Pasta",
                            "servingSize": 2,
                            "dishNote": "",
                            "variants": []
                        },
                        {
                            "id": 4,
                            "name": "Stir Fry Vegetables",
                            "category": "Vegetables",
                            "servingSize": 2,
                            "dishNote": "",
                            "variants": []
                        },
                        {
                            "id": 5,
                            "name": "Kropek",
                            "category": "Vegetables",
                            "servingSize": 2,
                            "dishNote": "",
                            "variants": []
                        },
                        {
                            "id": 6,
                            "name": "Kropek",
                            "category": "Vegetables",
                            "servingSize": 2,
                            "dishNote": "",
                            "variants": ['Plain', 'Java']
                        },
                        {
                            "id": 6,
                            "name": "Sauces",
                            "category": "",
                            "servingSize": 2,
                            "dishNote": "",
                            "variants": ['Native Sauce', 'Pickled pumpkins']
                        },
                    ]
                },
            ]

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
