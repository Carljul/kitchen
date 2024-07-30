<template>
    <nav class="bg-white border-b-[1px] border-gray-300">
        <div class="max-w-screen-xl flex flex-wrap flex-col md:flex-row items-center justify-between mx-auto p-4 relative">
            <div class="w-full flex flex-nowrap justify-between items-center md:w-[unset]">
                <router-link to="/" class="flex items-center space-x-3 rtl:space-x-reverse">
                    <img src="../../../assets/logo2.png" class="h-[100px]" alt="Love's Kitchen" />
                </router-link>
                
                <!-- Cart -->
                <div @click="viewCart" class="block md:hidden cursor-pointer bg-[#c77a10] rounded-md px-[8px] py-[5px]">
                    <font-awesome-icon icon="basket-shopping" size="lg" color="white" />
                </div>
            </div>
            <div class="flex md:order-2 w-full md:w-[400px] ">
                <div class="md:flex items-center gap-[15px] w-full">
                    <!-- Search -->
                    <div class="relative md:block w-full">
                        <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                            <svg class="w-4 h-4 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                            </svg>
                            <span class="sr-only">Search icon</span>
                        </div>
                        <input type="text" id="search-navbar" class="block w-full p-2 ps-10 text-sm text-gray-900 border rounded-md" placeholder="Search...">
                        <div class="absolute inset-y-0 end-0 flex items-center ps-3 cursor-pointer" @click="test">
                            <button class="text-[10px] bg-[#c77a10] border-0 px-[10px] py-[8px] rounded-md mr-[3px] text-white">Search</button>
                        </div>
                    </div>

                    <!-- Cart -->
                    <div @click="viewCart" class="hidden md:block cursor-pointer bg-[#c77a10] rounded-md px-[8px] py-[5px]">
                        <font-awesome-icon icon="basket-shopping" size="lg" color="white" />
                    </div>
                </div>
            </div>
        </div>
    </nav>
</template>

<script>
    export default {
        data () {
            return {
                isMenuOpen: false,
                isHamburgerOpen: false,
                isSearchOpen: false
            }
        },
        methods: {
            toggleMenu(type) {
                this.isMenuOpen = !this.isMenuOpen

                switch (type) {
                    case 'search':
                        this.isHamburgerOpen = false
                        this.isSearchOpen = !this.isSearchOpen
                        break;
                    case 'hamburger':
                        this.isHamburgerOpen = !this.isHamburgerOpen
                        this.isSearchOpen = !this.isSearchOpen
                        break;
                }
            },
            test () {
                alert('testing')
            },
            viewCart() {
                alert('In progress')
            }
        },
    }
</script>

<style scoped>
</style>