<template>
    <nav :class="`bg-white border-b-[1px] border-gray-300 fixed top-0 z-[999] w-full md:relative transition-all duration-100 ease-in-out ${isVisible ? 'max-h-50 opacity-100' : 'max-h-0 opacity-0'}`">
        <div class="max-w-screen-xl flex flex-wrap flex-col md:flex-row items-center justify-between mx-auto p-4 relative">
            <div class="w-full flex flex-nowrap justify-between items-center md:w-[unset]">
                <router-link to="/" class="flex items-center space-x-3 rtl:space-x-reverse">
                    <img src="@assets/logo6.jpg" class="h-[100px]" alt="Love's Kitchen" />
                </router-link>

                <div class="flex gap-[10px]">
                    <!-- Cart -->
                    <router-link to="/cart" class="block md:hidden cursor-pointer rounded-md px-[8px] py-[5px] relative" :style="`background: ${mainColorClass};`">
                        <font-awesome-icon icon="basket-shopping" size="lg" color="white" />
                        <span v-show="cartCount > 0" class="absolute bg-red-800 text-white text-[12px] w-[15px] h-[15px] rounded-lg text-center right-0 leading-none pt-[2px]">{{ cartCount }}</span>
                    </router-link>
                    <!-- Login -->
                    <router-link to="" class="block md:hidden cursor-pointer rounded-md px-[8px] py-[5px] border-[1px] border-gray-300 whitespace-nowrap">
                        <span class="hidden md:block">Login / Signup</span>
                        <font-awesome-icon :icon="['fas', 'user-alt']" size="lg" color="black" />
                    </router-link>
                </div>
            </div>
            <div class="flex md:order-2 w-full md:w-[450px] ">
                <div class="md:flex items-center gap-[15px] w-full mt-4 md:mt-0">
                    <!-- Search -->
                    <div class="relative md:block w-full">
                        <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                            <svg class="w-4 h-4 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                            </svg>
                            <span class="sr-only">Search icon</span>
                        </div>
                        <input type="text" id="search-navbar" class="block w-full p-2 ps-10 text-sm text-gray-900 border rounded-md" placeholder="Discover your dish">
                        <div class="absolute inset-y-0 end-0 flex items-center ps-3 cursor-pointer" @click="test">
                            <button class="text-[12px] border-0 px-[10px] py-[8px] rounded-md mr-[3px] text-white" :style="`background: ${mainColorClass};`">Search</button>
                        </div>
                    </div>

                    <!-- Cart -->
                    <router-link to="/cart" class="hidden md:block cursor-pointer rounded-md px-[8px] py-[5px] relative" :style="`background: ${mainColorClass};`">
                        <font-awesome-icon icon="basket-shopping" size="lg" color="white" />
                        <span v-show="cartCount > 0" class="absolute bg-red-800 text-white text-[12px] w-[15px] h-[15px] rounded-lg text-center right-0 leading-none pt-[2px]">{{ cartCount }}</span>
                    </router-link>
                    <!-- Login -->
                    <router-link to="/login" class="hidden md:block cursor-pointer rounded-md px-[8px] py-[5px] border-[1px] border-gray-300 whitespace-nowrap">
                        Login / Signup
                    </router-link>
                </div>
            </div>
        </div>
    </nav>
</template>

<script>
    import { ACTIONS } from '@library/actions';
    export default {
        data () {
            return {
                isMenuOpen: false,
                isHamburgerOpen: false,
                isSearchOpen: false,
                isVisible: true,
            }
        },
        computed: {
            mainColorClass() {
                return this.$mainColorClass
            },
            cartCount() {
                return this.$store.getters[ACTIONS.CART.getCartCount]
            },
            testing(){
                return ACTIONS.CART.addToCart
            }
        },
        methods: {
            test () {
                alert('testing')
            },
            viewCart() {
                alert('In progress')
            },
            handleScroll() {
                const isMobile = window.innerWidth < 768;
                if (isMobile) {
                    const scrollTop = window.scrollY || document.documentElement.scrollTop;
                    this.isVisible = scrollTop < 200;
                }
            },
            initializeCart() {
                this.$store.dispatch(ACTIONS.CART.initializeCart)
            }
        },
        mounted() {
            this.initializeCart()
            window.addEventListener('scroll', this.handleScroll);
        },
        beforeDestroy() {
            window.removeEventListener('scroll', this.handleScroll);
        },
    }
</script>

<style scoped>
</style>
