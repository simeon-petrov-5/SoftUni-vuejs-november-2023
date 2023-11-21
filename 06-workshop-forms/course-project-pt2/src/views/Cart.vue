<script>
import { products } from '../constants/products';

export default {
  props: {
    cartProducts: {
      type: Array,
      required: true,
      default: () => [],
    },
  },
  methods: {
    getProduct(id) {
      const prod = products.find(product => product.id === id);

      return prod.title;
    },
  },
};
</script>

<template>
  <div>
    <h2>Cart</h2>
    <ul>
      <li v-for="productId in cartProducts" :key="productId">
        {{ productId }} | {{ getProduct(productId) }}
      </li>
    </ul>
  </div>
</template>

<style lang="scss" scoped></style>
