<template>
    <CarouselComponent />
    <ProductListComponent />
    <ProductBundleListComponent />
    <AboutSectionComponent />
    <FooterComponent />
    <FooterNavigation />
</template>

<script>
import CarouselComponent from '@components/user/home/carousel.component.vue';
import ProductListComponent from '@components/user/home/product-list.component.vue';
import ProductBundleListComponent from '@components/user/home/product-bundle-list.component.vue';
import AboutSectionComponent from '@components/user/home/about-section.component.vue';
import FooterComponent from '@layouts/user/footer.layout.vue';
import FooterNavigation from '@layouts/user/footer.navigation.vue';
export default {
  name: 'Home',
  components: {
    CarouselComponent,
    ProductListComponent,
    ProductBundleListComponent,
    AboutSectionComponent,
    FooterNavigation,
    FooterComponent,
  }
}
</script>
