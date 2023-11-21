<script>
import { products } from '../../constants/products';
import Filters from './components/Filters.vue';
import ProductCard from './components/ProductCard.vue';

export default {
  components: { Filters, ProductCard },
  emits: ['onAddToCart'],
  data() {
    return {
      selectedFilter: '',
      products,
    };
  },
  computed: {
    displayProducts() {
      if (this.selectedFilter === '')
        return this.products;

      return this.products.filter(product => product.category === this.selectedFilter);
    },
  },
  methods: {
    onFilterSelect(selected) {
      this.selectedFilter = selected;
    },
  },
};
</script>

<template>
  <Filters :active-item="selectedFilter" @on-select="onFilterSelect" />

  <div class="products">
    <ProductCard
      v-for="product in displayProducts"
      :key="`products-${product.id}`"
      :product="product"
      @on-add-to-cart="$emit('onAddToCart', $event)"
    >
      <template #title>
        <h2 class="title">
          {{ product.title }}
        </h2>
      </template>
    </ProductCard>
  </div>
</template>

<style scoped>
.products {
  display: grid;
  grid-template-columns: repeat(var(--product-cols, 1), 1fr);
  gap: 1rem;
}

.products .title{
  color: red;
  font-size: 1.25rem;
}

/* .products :deep(h2) {
  font-size: 16px;
} */

@media screen and (min-width: 560px) {
  .products {
    --product-cols: 2;
  }
}

@media screen and (min-width: 768px) {
  .products {
    --product-cols: 3;
  }
}

@media screen and (min-width: 1024px) {
  .products {
    --product-cols: 4;
  }
}
</style>
