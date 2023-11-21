<script>
import AppHeader from './components/AppHeader.vue';
import AppFooter from './components/AppFooter.vue';
import Home from './views/Home.vue';
import About from './views/About.vue';
import Contacts from './views/Contacts.vue';
import Cart from './views/Cart.vue';
import Shop from './views/Shop/Shop.vue';

export default {
  components: {
    AppHeader,
    Home,
    About,
    Contacts,
    Cart,
    Shop,
    AppFooter,
  },
  data() {
    return {
      view: 'Home',
      cartProducts: [],
    };
  },
  methods: {
    onNavSelect(selectedView) {
      this.view = selectedView;
    },
    onAddToCart(productId) {
      this.cartProducts.push(productId);
    },
  },
};
</script>

<template>
  <AppHeader :cart-products="cartProducts" @on-select="onNavSelect" />
  <main>
    <component :is="view" :cart-products="cartProducts" @on-add-to-cart="onAddToCart" />
  </main>
  <AppFooter />
</template>

<style scoped>
main {
  padding: 1rem 2rem;
}
</style>
