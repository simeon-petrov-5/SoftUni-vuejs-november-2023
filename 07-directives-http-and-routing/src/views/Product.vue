<script>
import { getProduct } from '../dataProviders/product';

export default {
  data() {
    return {
      product: [],
      isLoading: true,
    };
  },
  async created() {
    this.product = await getProduct(this.$route.params.id);
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
      <li>
        <h1>{{ product.id }}</h1>
        <h2>{{ product.title }}</h2>
        <p>{{ product.description }}</p>
      </li>
    </ul>
  </section>
</template>

<style lang="scss" scoped></style>
