<template>
    <div class="border-t-8 border-[#f24f52]">
        <div :class="containerClass">
            <div class="grid grid-cols-1 md:grid-cols-3 items-start gap-[30px] md:gap-0">
                <div class="flex flex-col items-center md:items-start">
                    <h1 class="mb-3 text-[30px]">Quick Links</h1>
                    <ul class="text-center md:text-left">
                        <li><router-link to="">About Us</router-link></li>
                        <li><router-link to="">FAQs</router-link></li>
                        <li><router-link to="">Contact Us</router-link></li>
                    </ul>
                </div>
                <div class="flex flex-col items-center md:items-start">
                    <h1 class="mb-3 text-[30px]">Keep Connected</h1>
                    <ul class="flex flex-row gap-[20px] md:gap-[10px]">
                        <li><router-link to=""><img src="@assets/facebook.webp" alt="facebook" class="w-[30px]"></router-link></li>
                        <li><router-link to=""><img src="@assets/tiktok.webp" alt="tiktok" class="w-[30px]"></router-link></li>
                        <li><router-link to=""><img src="@assets/twitter.jpg" alt="twitter" class="w-[30px]"></router-link></li>
                    </ul>
                </div>
                <div class="flex flex-col items-center md:items-start mt-[20px] md:mt-0">
                    <button class="w-[200px] p-[10px] text-[15px] font-bold bg-[#f24f52] text-white rounded-md">Order Now</button>
                </div>
            </div>
        </div>
        <div :class="`flex justify-between ${containerClass}`">
            <span>© 2024</span>
            <router-link to="">Terms and Conditions</router-link>
        </div>
    </div>
</template>

<script>
export default {
    computed: {
        containerClass() {
            return this.$containerClass
        }
    }
}
</script>
