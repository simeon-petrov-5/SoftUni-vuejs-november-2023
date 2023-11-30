<script>
import { mapActions } from 'pinia';
import { getAllProducts } from '../../dataProviders/products';
import { getAllCategories } from '../../dataProviders/categories';

// import { products } from '../../constants/products';
import { useCartStore } from '../../store/cartStore';
import Loader from '../../components/Loader.vue';
import Filters from './components/Filters.vue';
import ProductCard from './components/ProductCard.vue';

export default {
  components: { Filters, ProductCard, Loader },
  data() {
    return {
      selectedFilter: '',
      products: [],
      categories: [],
      isLoading: true,
    };
  },
  computed: {
    displayProducts() {
      if (this.selectedFilter === '')
        return this.products;

      return this.products.filter(product => product.category === this.selectedFilter);
    },
  },
  async created() {
    const promises = await Promise.all([getAllProducts(), getAllCategories()]);
    this.products = promises[0].products;
    this.categories = promises[1];
    this.isLoading = false;
  },
  methods: {
    onFilterSelect(selected) {
      this.selectedFilter = selected;
    },
    ...mapActions(useCartStore, ['addToCart']),
  },
};
</script>

<template>
  <Filters :categories="categories" :active-item="selectedFilter" @on-select="onFilterSelect" />

  <Loader v-if="isLoading" />

  <div v-else class="products">
    <ProductCard
      v-for="product in displayProducts"
      :key="`products-${product.id}`"
      :product="product"
      @on-add-to-cart="addToCart"
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
  font-size: 1.25rem;
}

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
