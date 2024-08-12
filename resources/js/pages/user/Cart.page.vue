<template>
    <div :class="containerClass">
        <h1 class="uppercase mb-3" :style="`font-size: ${jumboFontClass};`">My Bag</h1>
        <NoteComponent />
        <AddressComponent />
        <CartListComponent />
    </div>
    <FooterComponent />
    <FooterNavigation />
</template>


<script>
import NoteComponent from '@components/user/cart/note.component.vue';
import AddressComponent from '@components/user/cart/address.component.vue';
import CartListComponent from '@components/user/cart/cart-list.component.vue';
import FooterNavigation from '@layouts/user/footer.navigation.vue';
import FooterComponent from '@layouts/user/footer.layout.vue';
export default {
  name: 'Cart',
  components: {
    FooterNavigation,
    FooterComponent,
    NoteComponent,
    AddressComponent,
    CartListComponent,
  },
  computed: {
    containerClass() {
        return this.$containerClass
    },
    jumboFontClass() {
        return this.$jumboFont
    }
  }
}
</script>
