<template>
    <div :class="containerClass">
        <h1 :class="`font-bold text-left my-3 md:mb-8 text-lg lg:text-[${jumboFont}]`">Food for you!</h1>
        <div class="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 grid-flow-row gap-4">
            <!-- Loop the number here -->
            <CardsComponent
                v-for="product in products"
                :key="product"
                :item="product"
                :goPath="`/product/detail/${product.id}`"
            />
        </div>
        <div class="flex w-full justify-center mt-6">
            <router-link to="" class="text-gray-900 bg-white border focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-full text-sm px-5 py-2.5 me-2 mb-2" :style="`border-color: ${mainColorClass};`">More foods for you!</router-link>
        </div>
    </div>
</template>

<script>
import CardsComponent from './cards.component.vue';
import beefImage from '../../../../../../assets/home/foods/beef.jpg';

export default {
    name: "Product List",
    data() {
        return {
            products: [
                {
                    "id": 1,
                    "name": "Humba",
                    "category": "Pork",
                    "description": "Some beautiful description",
                    "productCode": "h4123",
                    "servingSize": 2,
                    "comparePrice": 49.00,
                    "isActivePriceCompare": true,
                    "price": 39.00,
                    "image": beefImage,
                    "dishNote": "with mushroom gravy sauce"
                },
                {
                    "id": 2,
                    "name": "Adobo",
                    "category": "Chicken",
                    "description": "A savory chicken dish with a rich sauce.",
                    "productCode": "c5678",
                    "servingSize": 4,
                    "comparePrice": 49.00,
                    "isActivePriceCompare": true,
                    "price": 45.00,
                    "image": beefImage,
                    "dishNote": "with mushroom gravy sauce"
                },
                {
                    "id": 3,
                    "name": "Sinigang",
                    "category": "Seafood",
                    "description": "A tangy and sour soup made with shrimp.",
                    "productCode": "s8910",
                    "servingSize": 3,
                    "comparePrice": 68.00,
                    "isActivePriceCompare": true,
                    "price": 50.00,
                    "image": beefImage,
                    "dishNote": "with mushroom gravy sauce"
                },
                {
                    "id": 4,
                    "name": "Lechon",
                    "category": "Pork",
                    "description": "A whole roasted pig with crispy skin.",
                    "productCode": "l1112",
                    "servingSize": 10,
                    "comparePrice": 498.00,
                    "isActivePriceCompare": false,
                    "price": 500.00,
                    "image": beefImage,
                    "dishNote": "with mushroom gravy sauce"
                },
                {
                    "id": 5,
                    "name": "Kare-Kare",
                    "category": "Beef",
                    "description": "A rich peanut sauce stew with oxtail and vegetables.",
                    "productCode": "b1314",
                    "servingSize": 5,
                    "comparePrice": 80.00,
                    "isActivePriceCompare": true,
                    "price": 60.00,
                    "image": beefImage,
                    "dishNote": "with mushroom gravy sauce"
                },
                {
                    "id": 6,
                    "name": "Lumpia",
                    "category": "Appetizer",
                    "description": "Crispy spring rolls filled with meat and vegetables.",
                    "productCode": "a1516",
                    "servingSize": 8,
                    "comparePrice": 35.00,
                    "isActivePriceCompare": true,
                    "price": 20.00,
                    "image": beefImage,
                    "dishNote": "with mushroom gravy sauce"
                },
                {
                    "id": 7,
                    "name": "Pancit",
                    "category": "Noodles",
                    "description": "Stir-fried noodles with vegetables and meat.",
                    "productCode": "n1718",
                    "servingSize": 4,
                    "comparePrice": 35.00,
                    "isActivePriceCompare": false,
                    "price": 35.00,
                    "image": beefImage,
                    "dishNote": "with mushroom gravy sauce"
                },
                {
                    "id": 8,
                    "name": "Tinola",
                    "category": "Chicken",
                    "description": "A light soup with chicken, green papaya, and ginger.",
                    "productCode": "t1920",
                    "servingSize": 3,
                    "comparePrice": 45.00,
                    "isActivePriceCompare": true,
                    "price": 40.00,
                    "image": beefImage,
                    "dishNote": "with mushroom gravy sauce"
                },
                {
                    "id": 9,
                    "name": "Caldereta",
                    "category": "Beef",
                    "description": "A hearty beef stew with tomato sauce and vegetables.",
                    "productCode": "b2122",
                    "servingSize": 4,
                    "comparePrice": 45.00,
                    "isActivePriceCompare": false,
                    "price": 55.00,
                    "image": beefImage,
                    "dishNote": "with mushroom gravy sauce"
                },
                {
                    "id": 10,
                    "name": "Halo-Halo",
                    "category": "Dessert",
                    "description": "A refreshing dessert with mixed fruits, beans, and shaved ice.",
                    "productCode": "d2324",
                    "servingSize": 2,
                    "comparePrice": 30.00,
                    "isActivePriceCompare": true,
                    "price": 25.00,
                    "image": beefImage,
                    "dishNote": "with mushroom gravy sauce"
                }
            ]

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
