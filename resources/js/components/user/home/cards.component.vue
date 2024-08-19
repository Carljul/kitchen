<template>
    <router-link :to='goPath' class="w-[120px] md:w-[200px] rounded-md">
        <img :src="item.image" :alt="item.name" class="rounded-t-md">
        <div class="flex flex-row relative">
            <p class="font-semibold">{{ item.name }}</p>
            <button
                class="absolute right-3 w-[30px] md:w-[40px] h-[30px] md:h-[40px] bg-yellow-400 rounded-[100%] text-white shadow-lg top-[-20px]"
                @click.stop="(e) => addItem(e, item)"
            >
                <font-awesome-icon icon="add" />
            </button>
        </div>
        <div class="flex flex-col">
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
            event.preventDefault();
            this.addToCart({ product })
            this.$toast.success(this.$FoodToCart)
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
