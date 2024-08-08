<template>
    <div class="bg-green-800 border-b-8 border-[#f24f52]">
        <div :class="`${containerClass} text-white `">
            <div class="flex justify-between items-center flex-col-reverse md:flex-row">
                <div class="flex-[0.7] text-center md:text-start">
                    <h1 class="text-[50px] uppercase">Meet our Chef</h1>
                    <span class="text-[25px]">Great food comes from a great chef, where passion meets perfection.</span>
                    <p><router-link to="" class="underline">Find out more!</router-link></p>
                </div>
                <div class="w-[200px]">
                    <img src="@assets/chef.jpg" alt="Chef" class="rounded-lg">
                </div>
            </div>
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
