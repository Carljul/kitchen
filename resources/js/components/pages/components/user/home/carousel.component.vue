<template>
    <div :style="`background: ${mainColorClassFade}; border-bottom: 8px solid #dedede;`">
        <div class="max-w-screen-xl flex flex-wrap flex-col md:flex-row justify-between mx-auto p-4 relative flex w-full flex-col md:flex-row gap-[20px]">
            <!-- Carousel -->
            <div id="default-carousel" class="relative w-full flex-[0.8]" data-carousel="slide">
                <!-- Carousel wrapper -->
                <div class="relative h-56 overflow-hidden rounded-lg md:h-[322px]">
                    <!-- Item 1 -->
                    <div class="hidden duration-700 ease-in-out" data-carousel-item>
                        <img src="../../../../../../assets/home/banner/beef.jpg" class="object-cover absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="...">
                    </div>
                    <!-- Item 2 -->
                    <div class="hidden duration-700 ease-in-out" data-carousel-item>
                        <img src="../../../../../../assets/home/banner/chicken.jpg" class="object-cover absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="...">
                    </div>
                    <!-- Item 3 -->
                    <div class="hidden duration-700 ease-in-out" data-carousel-item>
                        <img src="../../../../../../assets/home/banner/pork.jpg" class="object-cover absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="...">
                    </div>
                    <!-- Item 4 -->
                    <div class="hidden duration-700 ease-in-out" data-carousel-item>
                        <img src="../../../../../../assets/home/banner/pasta.jpg" class="object-cover absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="...">
                    </div>
                    <!-- Item 5 -->
                    <div class="hidden duration-700 ease-in-out" data-carousel-item>
                        <img src="../../../../../../assets/home/banner/pastries.jpg" class="object-cover absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="...">
                    </div>
                </div>
                <!-- Slider indicators -->
                <div class="absolute z-30 flex -translate-x-1/2 bottom-5 left-1/2 space-x-3 rtl:space-x-reverse">
                    <button type="button" class="w-3 h-3 rounded-full" aria-current="true" aria-label="Slide 1" data-carousel-slide-to="0"></button>
                    <button type="button" class="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 2" data-carousel-slide-to="1"></button>
                    <button type="button" class="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 3" data-carousel-slide-to="2"></button>
                    <button type="button" class="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 4" data-carousel-slide-to="3"></button>
                    <button type="button" class="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 5" data-carousel-slide-to="4"></button>
                </div>
                <!-- Slider controls -->
                <button type="button" class="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-prev>
                    <span class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                        <svg class="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 1 1 5l4 4"/>
                        </svg>
                        <span class="sr-only">Previous</span>
                    </span>
                </button>
                <button type="button" class="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-next>
                    <span class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                        <svg class="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4"/>
                        </svg>
                        <span class="sr-only">Next</span>
                    </span>
                </button>
            </div>

            <div id="scrollable" class="flex-[0.2] h-auto md:h-[322px] w-full overflow-x-scroll md:overflow-y-scroll">
                <ul class="flex flex-row md:flex-col gap-[10px]">
                    <li class="w-full h-[54px] shadow-sm rounded-md bg-white flex items-center border-b-2 md:border-b-0 md:border-l-4 border-orange-700">
                        <router-link to="#" class="w-[120px] md:w-full flex flex-1 px-3 h-full items-center">Beef</router-link>
                    </li>
                    <li class="w-full h-[54px] shadow-sm rounded-md bg-white flex items-center border-b-2 md:border-b-0 md:border-l-4 border-green-700">
                        <router-link to="#" class="w-[120px] md:w-full flex flex-1 px-3 h-full items-center">Chicken</router-link>
                    </li>
                    <li class="w-full h-[54px] shadow-sm rounded-md bg-white flex items-center border-b-2 md:border-b-0 md:border-l-4 border-blue-700">
                        <router-link to="#" class="w-[120px] md:w-full flex flex-1 px-3 h-full items-center">Pork</router-link>
                    </li>
                    <li class="w-full h-[54px] shadow-sm rounded-md bg-white flex items-center border-b-2 md:border-b-0 md:border-l-4 border-yellow-700">
                        <router-link to="#" class="w-[120px] md:w-full flex flex-1 px-3 h-full items-center">Pasta</router-link>
                    </li>
                    <li class="w-full h-[54px] shadow-sm rounded-md bg-white flex items-center border-b-2 md:border-b-0 md:border-l-4 border-grey-700">
                        <router-link to="#" class="w-[120px] md:w-full flex flex-1 px-3 h-full items-center">Pastries</router-link>
                    </li>
                    <li class="w-full h-[54px] shadow-sm rounded-md bg-white flex items-center border-b-2 md:border-b-0 md:border-l-4 border-orange-700">
                        <router-link to="#" class="w-[120px] md:w-full flex flex-1 px-3 h-full items-center">Vegetables</router-link>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'Carousel Component',
  computed: {
    mainColorClassFade() {
        return this.$mainColorClassFade
    }
  }
}
</script>

<style scoped>
#scrollable::-webkit-scrollbar {
    display: none
}
</style>
