<template>
    <div
        class="bg-white p-0 md:p-[20px] mt-3 rounded-md shadow-sm flex flex-col md:flex-row gap-0 md:gap-[20px]"
        v-show="Object.keys(product).length > 0"
    >
        <img :src="product.image" :alt="product.name" class="object-cover w-[400px] h-[300px] md:w-[400px] md:h-[400px]">
        <div class="p-[20px] md:p-0">
            <h1 class="text-[30px] font-700">{{product.name}}</h1>
            <p class="my-3">
                <span class="font-bold block mb-3">Description </span>
                {{ product.longDescription }}
            </p>
            <p class="my-3">
                <span class="font-bold mb-3 block">Category</span>
                {{ product.category }}
            </p>
            <p class="my-3">
                <span class="font-bold mb-3 block">Serving Size</span>
                Good for {{ product.servingSize }} people
            </p>
            <p class="my-3">
                <span class="font-bold mb-3 block">Price</span>
                <small class="text-mute">
                    <s>Php {{formatPrice(product.comparePrice)}}</s>
                </small>
                <b>
                    Php {{ formatPrice(product.price) }}
                </b>
            </p>
            <p class="my-3">
                <span class="font-bold mb-3 block">Preparation Time</span>
                {{ setUpPrepTime(product) }}
            </p>
            <p v-show="product.dishNote && product.dishNote != ''"><b>Note</b>: {{ product.dishNote }}</p>
            <hr v-show="product.isBundle" class="my-3">
            <div v-show="product.isBundle">
                <h1 class="font-bold">Dishes included in this bundle:</h1>
                <div class="flex-[0.4] md:flex-[0.6]">
                    <div class="grid grid-cols-2 md:grid-cols-4">
                        <router-link
                            v-for="food in product.dishes"
                            :to="`/products/foods/${cleanCategorySlug(food.category)}/${food.id}`"
                            @click="updateProduct"
                            class="border-[1px] border-slate-300 px-2 mr-2 rounded-md py-1 my-2 bg-white whitespace-nowrap flex gap-[10px]"
                        >
                            <img :src="food.image" :alt="food.name" class="w-[40px]">
                            <span>{{ food.name }}</span>
                        </router-link>
                    </div>
                </div>
            </div>

            <hr class="my-3">
            <div class="flex gap-[20px]">
                <div class="border-[1px] border-slate-300 rounded-md flex items-center w-fit">
                    <button
                        class="p-2 text-[15px] font-bold"
                        @click="updateQuantity(quantity - 1)"
                    >
                        <font-awesome-icon icon="minus" />
                    </button>
                    <input
                        type="number"
                        class="w-[30px] text-center"
                        min="1"
                        :value="quantity"
                    >
                    <button
                        class="p-2 text-[15px] font-bold"
                        @click="updateQuantity(quantity + 1)"
                    >
                        <font-awesome-icon icon="add" />
                    </button>
                </div>
    
                <div class="flex gap-5">
                    <button @click="addProductToCart" class="px-5 py-3 bg-orange-500 text-white rounded-md hover:bg-orange-700 whitespace-nowrap">
                        <span>Add To Cart</span>
                    </button>
                    <button class="px-5 py-3 bg-red-500 text-white rounded-md hover:bg-red-700">Checkout</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { mapActions } from 'vuex';
import { ACTIONS } from '@library/actions.js'
import { numberWithCommas, convertMinutes, cleanString } from '@library/utils';

export default {
    data() {
        return {
            quantity: 1
        }
    },
    props: {
        product: {
            type: Object,
            default: {}
        },
        getProductDetails: {
            type: Function,
            default: () => {}
        }
    },
    methods: {
        ...mapActions({addToCart: ACTIONS.CART.addToCart}),
        updateQuantity(newQuantity) {
            if (newQuantity > 0) {
                this.quantity = newQuantity
            }
        },
        formatPrice(x) {
            return numberWithCommas(x ? x.toFixed(2) : 0)
        },
        cleanCategorySlug(category) {
            return cleanString(category)
        },
        setUpPrepTime(product) {
            if (('isBundle' in product) && product.isBundle) {
                let time = product.dishes.reduce((accummulator, item) => {
                    return accummulator + item.preparingTimeInMins
                }, 0)

                time = time + product.additionalPreparingTimeInMins

                return this.formatTime(time)
            }

            return this.formatTime(product.preparingTimeInMins)
        },
        formatTime(x) {
            return convertMinutes(x)
        },
        addProductToCart() {
            this.addToCart({product: this.product, quantity: this.quantity})
            this.$toast.success(this.$FoodToCart)
        },
        updateProduct() {
            setTimeout(() => {
                this.getProductDetails()
            }, 300);
        }
    }
}
</script>