<template>
    <CarouselComponent />
    <ProductListComponent />
</template>

<script>
import CarouselComponent from '../components/user/home/carousel.component.vue';
import ProductListComponent from '../components/user/home/product-list.component.vue';
export default {
  name: 'Home',
  components: {
    CarouselComponent,
    ProductListComponent,
  }
}
</script>
