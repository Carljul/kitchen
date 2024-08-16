<template>
    <div
        class="bg-white p-0 md:p-[20px] mt-3 rounded-md shadow-sm flex flex-col md:flex-row gap-0 md:gap-[20px]"
        v-show="Object.keys(product).length > 0"
    >
        <img :src="product.image" :alt="product.name" class="object-cover w-[400px] h-[300px] md:w-[400px] md:h-[400px]">
        <div class="p-[20px] md:p-0">
            <h1 class="text-[30px] font-700">{{product.name}}</h1>
            <p>{{ product.longDescription }}</p>
            <p>Category: {{ product.category }}</p>
            <p>Serving Size: Good for {{ product.servingSize }} people</p>
            <p>Price:
                <small class="text-mute">
                    <s>Php {{formatPrice(product.comparePrice)}}</s>
                </small>
                <b>
                    Php {{ formatPrice(product.price) }}
                </b>
            </p>
            <p>Preparation Time: {{ formatTime(product.preparingTimeInMins) }}</p>
            <p>Note: {{ product.dishNote }}</p>
            
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

            <div class="flex gap-5 mt-3">
                <button class="px-5 py-3 bg-orange-500 text-white rounded-md hover:bg-orange-700">
                    <span>Add To Cart</span>
                </button>
                <button class="px-5 py-3 bg-red-500 text-white rounded-md hover:bg-red-700">Checkout</button>
            </div>
        </div>
    </div>
</template>

<script>
import { mapActions } from 'vuex';
import { ACTIONS } from '@library/actions.js'
import { numberWithCommas, convertMinutes } from '@library/utils';

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
        formatTime(x) {
            return convertMinutes(x)
        }
    }
}
</script>