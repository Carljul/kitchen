<template>
    <div :class="containerClass">
        <h1 class="font-bold text-left mb-3 text-lg">Food for you</h1>
        <div class="grid grid-cols-3 md:grid-cols-5 grid-flow-row gap-4">
            <!-- Loop the number here -->
            <CardsComponent v-for="product in products" :key="product">
                Food Item {{ product }}
            </CardsComponent>
        </div>
    </div>
</template>

<script>
import CardsComponent from './cards.component.vue';
export default {
    name: "Product List",
    data() {
        return {
            productCount: 10
        }
    },
    components: {
        CardsComponent
    },
    computed: {
        containerClass() {
            return this.$containerClass
        },
        products() {
            return Array.from({ length: this.productCount }, (v, k) => k + 1);
        }
    }
}
</script>
