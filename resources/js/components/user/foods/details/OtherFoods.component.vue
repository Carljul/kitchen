<template>
    <div
        v-show="carouselItems.length > 0"
        :class="`${containerClass} mx-auto my-3 overflow-hidden`"
        @touchstart="startTouch"
        @touchmove="moveTouch"
        @touchend="endTouch"
    >
        <h1 class="mb-3 font-bold text-[20px]">Other Foods you might want!</h1>
        <div class="flex justify-center">
            <div id="recipeCarousel" class="relative w-full">
                <div class="carousel-inner w-full flex transition-transform duration-500 ease-in-out" :style="{ transform: `translateX(-${activeIndex * 100}%)` }">
                    <div v-for="(group, index) in groupedItems" :key="index" class="carousel-item flex-shrink-0 w-full px-1 md:px-4">
                        <div class="grid grid-cols-3 gap-1 md:gap-4">
                            <router-link
                                v-for="item in group"
                                :to="`/products/${item.isBundle ? 'bundles':'foods'}/${cleanCategorySlug(item.category)}/${item.id}`"
                                :key="item.src"
                                @click="updateProduct"
                                class="card p-1 md:p-4 bg-white shadow-md h-[144px] md:h-[500px] relative"
                            >
                                <img :src="item.image" :alt="'Slide ' + (index + 1)" class="w-full h-full object-cover">
                                <div class="absolute top-[50%] left-[50%] transform translate-x-[-50%] translate-y-[-50%] bg-white p-3 whitespace-nowrap rounded-md">{{ item.name }}</div>
                            </router-link>
                        </div>
                    </div>
                </div>
                <button v-if="!isMobile" @click="prevSlide" class="w-[40px] absolute left-[-16px] top-1/2 transform -translate-y-1/2 z-10 bg-gray-800 text-white p-2 rounded-full">
                    <span class="sr-only">Previous</span>
                    &#10094;
                </button>
                <button v-if="!isMobile" @click="nextSlide" class="w-[40px] absolute right-[-16px] top-1/2 transform -translate-y-1/2 z-10 bg-gray-800 text-white p-2 rounded-full">
                    <span class="sr-only">Next</span>
                    &#10095;
                </button>
            </div>
        </div>
    </div>
</template>

<script>
import { Products, BundleProducts } from '../../../../mock/product';
import {cleanString} from '@library/utils.js'
export default {
    props: {
        getProductDetails: {
            type: Function,
            default: () => {}
        }
    },
    data() {
        return {
            activeIndex: 0,
            carouselItems: [],
            isMobile: false,
            touchStartX: 0,
            touchEndX: 0,
        };
    },
    computed: {
        containerClass() {
            return this.$containerClass
        },
        groupedItems() {
            // Group items into arrays of three
            const groups = [];
            for (let i = 0; i < this.carouselItems.length; i += 3) {
                groups.push(this.carouselItems.slice(i, i + 3));
            }
            return groups;
        }
    },
    mounted() {
        // Detect mobile devices based on screen width
        this.isMobile = window.innerWidth <= 768;
        window.addEventListener('resize', this.updateIsMobile);
        this.otherProducts()
    },
    beforeDestroy() {
        window.removeEventListener('resize', this.updateIsMobile);
    },
    methods: {
        nextSlide() {
            this.activeIndex = (this.activeIndex + 1) % this.groupedItems.length;
        },
        prevSlide() {
            this.activeIndex = (this.activeIndex - 1 + this.groupedItems.length) % this.groupedItems.length;
        },
        updateIsMobile() {
            this.isMobile = window.innerWidth <= 768;
        },
        startTouch(event) {
            this.touchStartX = event.changedTouches[0].screenX;
        },
        moveTouch(event) {
            this.touchEndX = event.changedTouches[0].screenX;
        },
        endTouch() {
            if (this.touchStartX - this.touchEndX > 50) {
                // Swipe left -> move to the next slide
                this.nextSlide();
            }
            if (this.touchStartX - this.touchEndX < -50) {
                // Swipe right -> move to the previous slide
                this.prevSlide();
            }
        },
        otherProducts() {
            let products = [...Products, ...BundleProducts]
            let id = this.$route.params.id;
            let isBundle = this.$route.params.type == this.$bundleType;

            // Filter out same product with the current display
            products = products.filter((item) => item.id != id && item.isBundle != isBundle)

            // Shuffle the items
            products = this.shuffleArray(products)

            // Get only 9 products to display
            products = products.slice(0, 9)
            this.carouselItems = products
        },
        shuffleArray(array) {
            for (let i = array.length - 1; i > 0; i--) {
                const j = Math.floor(Math.random() * (i + 1));
                [array[i], array[j]] = [array[j], array[i]];
            }
            return array;
        },
        cleanCategorySlug(category) {
            return cleanString(category)
        },
        updateProduct() {
            setTimeout(() => {
                this.getProductDetails()
                this.otherProducts()
            }, 300);
        }
    },
};
</script>

<style scoped>
.carousel-inner {
    display: flex;
}

.carousel-item {
    flex: 1 0 100%;
}

@media (min-width: 768px) {
    .carousel-item {
        flex: 1 0 100%;
    }
}
</style>
