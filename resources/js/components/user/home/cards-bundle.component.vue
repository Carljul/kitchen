<template>
    <router-link :to='goPath' class="w-full h-auto md:h-[350px] rounded-md flex flex-col md:flex-row gap-[10px] shadow-lg bg-white">
        <data class="w-full h-[350px] overflow-hidden rounded-l-sm">
            <img :src="item.image" :alt="item.name" class="h-full w-full md:w-auto object-cover rounded-l-sm">
        </data>
        <div class="flex-1 flex flex-col p-3">
            <div class="flex-1 flex flex-col">
                <p class="font-semibold">{{ item.name }}</p>
                <small class="text-[12px] truncate-text">{{ item.shortDescription }}</small>
                <div class="flex gap-[10px] items-center">
                    <small class="text-[10px] font-bold text-slate-600"><s>P{{priceFormat(item.comparePrice.toFixed(2))}}</s></small>
                    <small class="text-[12px] font-bold">P{{priceFormat(item.price.toFixed(2))}}</small>
                </div>
                <hr>
                <!-- Bundles -->
                <ul class="list-disc ml-4">
                    <li v-for="product in item.dishes">
                        {{ product.name }}
                        <small class="text-blue-950">{{ product.dishNote }}</small>
                        <small class="text-blue-950" v-for="variant in product.variants">{{ variant }},</small>
                    </li>
                </ul>
            </div>

             <div class="flex justify-around items-center mt-2 md:mt-0">
                <button
                    class="text-white whitespace-nowrap bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    @click.stop="(e) => addItem(e, item)"
                >Add to Order</button>
                <button class="text-white whitespace-nowrap bg-green-700 hover:bg-green-800 focus:outline-none focus:ring-4 focus:ring-green-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">Check out now!</button>
             </div>
        </div>
    </router-link>
</template>

<script>
import { ACTIONS } from '@library/actions';
import { mapActions } from 'vuex';
import { numberWithCommas } from '@library/utils';

export default {
    props: {
        item: {
            type: Object,
            reqiured: true
        },
        goPath: {
            type: String,
            reqiured: false
        }
    },
    methods: {
        ...mapActions({addToCart: ACTIONS.CART.addToCart}),
        addItem(event, product) {
            event.preventDefault();
            this.addToCart({ product })
            this.$toast.success(this.$FoodToCart)
        },
        priceFormat(x) {
            return numberWithCommas(x)
        }
    }
}
</script>
<style scoped>
.truncate-text {
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
    line-height: 1.5;
    max-height: 3em;
}
</style>
