<template>
    <router-link :to='goPath' class="bg-white w-[120px] md:w-[200px] rounded-md">
        <img :src="item.image" :alt="item.name" class="w-full h-[100px] md:h-[135px] rounded-t-md object-cover">
        <div class="flex flex-row relative px-2 pt-2">
            <p class="font-semibold">{{ item.name }}</p>
            <button
                class="absolute right-3 w-[30px] md:w-[40px] h-[30px] md:h-[40px] bg-yellow-400 rounded-[100%] text-white shadow-lg top-[-20px]"
                @click.stop="(e) => addItem(e, item)"
            >
                <font-awesome-icon icon="add" />
            </button>
        </div>
        <div class="flex flex-col px-2 pb-2">
            <small class="text-[12px] truncate-text">{{ item.shortDescription }}</small>
            <div class="flex gap-[10px] items-center">
                <small class="text-[10px] font-bold text-slate-600"><s>P{{item.comparePrice.toFixed(2)}}</s></small>
                <small class="text-[12px] font-bold">P{{item.price.toFixed(2)}}</small>
            </div>
        </div>
    </router-link>
</template>

<script>
import { ACTIONS } from '@library/actions';
import { mapActions } from 'vuex';

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
            console.log(['product', product])
            event.preventDefault();
            this.addToCart({ product })
            // this.$toast.success('Food added to cart')
        }
    }
}
</script>
<style scoped>
.truncate-text {
    display: -webkit-box;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
    line-height: 1.5;
    max-height: 3em;
}
</style>