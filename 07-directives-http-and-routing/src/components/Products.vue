<script>
import { getAllProducts } from '../dataProviders/product';

export default {
  data() {
    return {
      products: [],
      isLoading: true,
    };
  },
  async created() {
    this.products = await getAllProducts();
    this.isLoading = false;
  },
};
</script>

<template>
  <section>
    <p v-if="isLoading">
      Is loading ...
    </p>
    <ul v-else>
      <li v-for="prod in products.products" :key="prod.id">
        <h2>{{ prod.title }}</h2>
        <p>{{ prod.description }}</p>
      </li>
    </ul>
  </section>
</template>

<style lang="scss" scoped></style>
