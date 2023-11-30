<script>
import { RouterView } from 'vue-router';
import AppHeader from './components/AppHeader.vue';
import AppFooter from './components/AppFooter.vue';

export default {
  components: {
    AppHeader,
    AppFooter,
    RouterView,
  },
  data() {
    return {

    };
  },
};
</script>

<template>
  <AppHeader />
  <main>
    <RouterView />
  </main>
  <AppFooter />
</template>

<style scoped>
main {
  padding: 1rem 2rem;
}
</style>
