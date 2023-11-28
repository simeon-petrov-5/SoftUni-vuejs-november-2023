<script>
import { mapState } from 'pinia';
import { useCartStore } from '../../../store/cartStore';

export default {
  props: {
    product: {
      type: Object,
      required: true,
      default: () => ({
        id: -1,
        title: 'DEFAULT ITEM',
        description: 'DEFAULT ITEM',
        price: 0,
        discountPercentage: 0,
        rating: 0,
        stock: 0,
        brand: 'DEFAULT ITEM',
        category: 'womens-dresses',
        thumbnail: 'https://i.dummyjson.com/data/products/41/thumbnail.webp',
        images: [
          'https://i.dummyjson.com/data/products/41/1.jpg',
        ],
      }),
    },
  },
  emits: ['onAddToCart'],
  computed: {
    ...mapState(useCartStore, ['getProduct']),
    isDisabled() {
      const current = this.getProduct(this.product.id);
      if (!current)
        return false;

      return current.quantity >= this.product.stock;
    },
  },
};
</script>

<template>
  <article>
    <img :src="product.thumbnail" alt="img">
    <slot name="title">
      <h2>{{ product.title }}</h2>
    </slot>
    <p>
      {{ product.description }}
    </p>
    <p><b>Price</b>: {{ product.price }}$</p>
    <footer>
      <button class="secondary outline" :disabled="isDisabled" @click="$emit('onAddToCart', product.id)">
        Add to cart 🛒
      </button>
    </footer>
  </article>
</template>

<style scoped></style>
