<template>
    <div :class="`block md:hidden fixed bottom-0 w-full z-[999] h-[55px] bg-white border-t-[0.8px] border-slate-800 border-black transition-all duration-100 ease-in-out ${isVisible ? 'max-h-50 opacity-100' : 'max-h-0 opacity-0'}`">
        <ul class="flex justify-around items-center h-full">
            <li>
                <router-link to="" class="flex flex-col">
                    <font-awesome-icon :icon="['fas', 'house']" color="#373737"/>
                    <span class="text-[14px]">Home</span>
                </router-link>
            </li>
            <li>
                <router-link to="" class="flex flex-col">
                    <font-awesome-icon :icon="['fas', 'magnifying-glass']" color="#373737"/>
                    <span class="text-[14px]">Search</span>
                </router-link>
            </li>
            <li>
                <router-link to="" class="flex flex-col">
                    <font-awesome-icon :icon="['fas', 'bowl-food']" color="#373737"/>
                    <span class="text-[14px]">Foods</span>
                </router-link>
            </li>
            <li>
                <router-link to="/cart" class="flex flex-col relative">
                    <font-awesome-icon icon="basket-shopping" color="#373737"/>
                    <span class="text-[14px]">Orders</span>
                    <span v-show="cartCount > 0" class="absolute bg-red-800 text-white text-[12px] w-[15px] h-[15px] rounded-lg text-center right-0 leading-none pt-[2px]">{{cartCount}}</span>
                </router-link>
            </li>
            <li>
                <router-link to="" class="flex flex-col">
                    <font-awesome-icon :icon="['fas', 'user']" color="#373737"/>
                    <span class="text-[14px]">Account</span>
                </router-link>
            </li>
        </ul>
    </div>
</template>

<script>
import { ACTIONS } from '@library/actions';
export default {
    data() {
        return {
            isVisible: false
        }
    },

    computed: {
        containerClass() {
            return this.$containerClass
        },
        cartCount() {
            return this.$store.getters[ACTIONS.CART.gettersCartCount]
        }
    },

    methods: {
        handleScroll() {
            const isMobile = window.innerWidth < 768;
            if (isMobile) {
                const scrollTop = window.scrollY || document.documentElement.scrollTop;
                this.isVisible = scrollTop >= 200;
            }
        },
    },

    mounted() {
        window.addEventListener('scroll', this.handleScroll);
    },
    beforeDestroy() {
        window.removeEventListener('scroll', this.handleScroll);
    },
}
</script>
