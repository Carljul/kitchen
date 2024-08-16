<template>
    <div class="my-10 w-full">
        <h1 class="font-bold text-[20px] mb-3">Order Details</h1>

        <ul v-show="cartItems.length > 0" class="flex flex-col gap-[15px]">
            <li
                class="flex gap-[10px] md:gap-[20px] border-[1px] border-slate-100 rounded-md shadow-md p-[10px] items-center"
                v-for="items in cartItems"
            >
                <div class="w-[80px] md:w-[200px] h-[55px] md:h-[135px] overflow-hidden rounded-md flex-[0.2]">
                    <img :src="items.image" :alt="items.name" class="object-contain">
                </div>
                <div class="flex-[0.4] md:flex-[0.6]">
                    <span class="font-bold">{{items.name}}</span>
                    <div class="hidden md:grid grid-cols-3">
                        <span v-for="product in items.dishes" class="border-[1px] border-slate-300 px-2 mr-2 rounded-md py-1 my-2 bg-white">{{ product.name }}</span>
                    </div>
                    <p v-show="!items.isBundle" class="hidden md:block">{{ items.longDescription }}</p>
                    <p class="block md:hidden">{{ items.shortDescription }}</p>
                </div>
                <div class="flex-[0.2] md:flex-[0.1]">
                    <div class="flex justify-between md:justify-evenly gap-0 md:gap-[10px] flex-col md:flex-row items-center">
                        <span class="relative">
                            <font-awesome-icon :icon="['fas', 'peso-sign']" class="absolute left-[-15px] top-[4px]" />
                            {{ priceFormat(items.subTotal.toFixed(2)) }}
                        </span>
                        <div><font-awesome-icon :icon="['fas', 'trash']" /></div>
                    </div>
                </div>
                <div class="flex-[0.2] md:flex-[0.1]">
                    <div class="border-[1px] border-slate-300 rounded-md flex items-center w-fit">
                        <button
                            class="p-2 text-[15px] font-bold"
                            @click="updateCart(items, items.quantity - 1)"
                        >
                            <font-awesome-icon icon="minus" />
                        </button>
                        <input
                            type="number"
                            class="w-[30px] text-center"
                            min="1"
                            :value="items.quantity"
                            @change="(e) => updateCart(items, e.target.value)"
                        >
                        <button
                            class="p-2 text-[15px] font-bold"
                            @click="updateCart(items, items.quantity + 1)"
                        >
                            <font-awesome-icon icon="add" />
                        </button>
                    </div>
                </div>
            </li>
        </ul>
        <div v-show="cartItems.length > 0"  class="my-3 flex flex-col md:flex-row justify-between gap-0 md:gap-[20px]">
            <div class="border-[1px] border-orange-600 bg-orange-100 flex flex-col gap-0 md:gap-[10px] rounded-md p-[10px] mb-4 flex-1">
                <b class="text-orange-600">Note:</b>
                <span>All orders here in Love's Kitchen should pay a downpayment of 50% of the total price, the balance should be paid after the item is delivered!</span>
            </div>
            <div class="border-[1px] border-slate-100 rounded-md shadow-md p-[10px]  flex-1">
                <h1 class="font-bold text-[20px] mb-3">Order Summary</h1>
                <div class="flex justify-between">
                    <div>
                        Subtotal ({{ cartCount }} item/s)
                    </div>
                    <div>
                        <span class="relative">
                            <font-awesome-icon :icon="['fas', 'peso-sign']" class="absolute left-[-15px] top-[4px]" />
                            {{ priceFormat((cartsTotal).toFixed(2)) }}
                        </span>
                    </div>
                </div>
                <div class="flex justify-between">
                    <div>
                        Shipping Fee
                    </div>
                    <div>
                        <span class="relative">
                            <font-awesome-icon :icon="['fas', 'peso-sign']" class="absolute left-[-15px] top-[4px]" />
                            {{ priceFormat((deliveryFeeAmount).toFixed(2)) }}
                        </span>
                    </div>
                </div>
                <hr class="my-2">
                <div class="flex justify-between">
                    <div>
                        Total
                    </div>
                    <div>
                        <span class="relative">
                            <font-awesome-icon :icon="['fas', 'peso-sign']" class="absolute left-[-15px] top-[4px]" />
                            {{ priceFormat((cartsTotal + deliveryFeeAmount).toFixed(2)) }}
                        </span>
                    </div>
                </div>
                <hr class="my-2">
                <div class="flex justify-between">
                    <div>
                        Downpayment Amount
                    </div>
                    <div>
                        <span class="relative">
                            <font-awesome-icon :icon="['fas', 'peso-sign']" class="absolute left-[-15px] top-[4px]" />
                            {{ priceFormat(((cartsTotal + deliveryFeeAmount) / 2).toFixed(2)) }}
                        </span>
                    </div>
                </div>
                <button class="mt-5 uppercase w-full p-[10px] text-[15px] font-bold bg-blue-800 text-white rounded-md text-center">Checkout</button>
            </div>
        </div>
        <div v-show="cartItems.length == 0" class="flex flex-col gap-[10px] items-center">
            <p>Your Bag is empty! Lets fill it up</p>
            <router-link to="/products" class="w-[200px] p-[10px] text-[15px] font-bold bg-[#f24f52] text-white rounded-md text-center">Order Now</router-link>
        </div>
    </div>
</template>

<script>
import { ACTIONS } from '@library/actions';
import {numberWithCommas} from '@library/utils'
import { mapActions } from 'vuex';

export default {
    computed: {
        cartCount() {
            return this.$store.getters[ACTIONS.CART.getCartCount]
        },
        cartItems() {
            return this.$store.getters[ACTIONS.CART.getCartItems]
        },
        cartsTotal() {
            return this.$store.getters[ACTIONS.CART.getCartsTotal]
        },
        deliveryFeeAmount() {
            return this.$defaultDeliveryFee
        }
    },
    methods: {
        ...mapActions({addToCart: ACTIONS.CART.addToCart}),
        updateCart(product, newQuantity) {
            if (newQuantity > 0) {
                this.addToCart({product: product, quantity: newQuantity})
            }
        },
        priceFormat(x) {
            return numberWithCommas(x)
        }
    }
}
</script>
