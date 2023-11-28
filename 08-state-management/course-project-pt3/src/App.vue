<script>
import AppHeader from './components/AppHeader.vue';
import AppFooter from './components/AppFooter.vue';
import Home from './views/Home.vue';
import About from './views/About.vue';
import Contacts from './views/Contacts.vue';
import Cart from './views/Cart.vue';
import Shop from './views/Shop/Shop.vue';
import Register from './views/Register/Register.vue';

export default {
  components: {
    AppHeader,
    Home,
    About,
    Contacts,
    Cart,
    Shop,
    AppFooter,
    Register,
  },
  data() {
    return {
      view: 'Shop',
    };
  },
  methods: {
    onNavSelect(selectedView) {
      this.view = selectedView;
    },
  },
};
</script>

<template>
  <AppHeader @on-select="onNavSelect" />
  <main>
    <component :is="view" />
  </main>
  <AppFooter />
</template>

<style scoped>
main {
  padding: 1rem 2rem;
}
</style>
