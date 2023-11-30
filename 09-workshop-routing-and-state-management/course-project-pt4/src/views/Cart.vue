<script>
import { mapActions, mapState } from 'pinia';
import { useCartStore } from '../store/cartStore';
import { getProduct } from '../dataProviders/products';
import Loader from '../components/Loader.vue';

export default {
  components: { Loader },
  data() {
    return {
      productsInfo: {},
      isLoading: true,
    };
  },
  computed: {
    ...mapState(useCartStore, ['products']),
    totalSum() {
      let sum = 0;
      this.products.forEach((product) => {
        sum += (this.productsInfo[product.id]?.price ?? 0) * product.quantity;
      });
      return sum;
    },
  },
  async created() {
    const promises = [];
    this.products.forEach((product) => {
      promises.push(getProduct(product.id));
    });
    const allProducts = await Promise.all(promises);
    allProducts.forEach((product) => {
      this.productsInfo[product.id] = product;
    });
    this.isLoading = false;
  },
  methods: {
    ...mapActions(useCartStore, ['changeQuantity']),
  },

};
</script>

<template>
  <h1 style="text-align: center;">
    Cart
  </h1>
  <Loader v-if="isLoading" />
  <div v-else class="container">
    <article>
      <table>
        <thead>
          <tr>
            <th>Product</th>
            <th>Description</th>
            <th>Quantity</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="product in products" :key="product.id">
            <td>
              <div style="aspect-ratio: 1/1; width: 5rem; border-radius: 0.5rem; overflow: hidden;">
                <img
                  style="object-fit: cover; width: 100%; height: 100%;"
                  :src="productsInfo[product.id].thumbnail"
                  alt=""
                >
              </div>
            </td>
            <td>
              <p style="font-size: 1.25rem;">
                {{ productsInfo[product.id].title }}
              </p>
              <p style="font-size: 0.75rem;">
                Product price: {{ productsInfo[product.id].price }}$
              </p>
            </td>
            <td>
              <input
                type="number"
                :value="product.quantity"
                style="width: 5rem;"
                @input="changeQuantity(product.id, $event)"
              >
            </td>
            <td class="price">
              {{ productsInfo[product.id].price * product.quantity }}$
            </td>
          </tr>
        </tbody>
        <tfoot>
          <tr>
            <td colspan="3">
              Total:
            </td>
            <td class="price">
              {{ totalSum }}$
            </td>
          </tr>
        </tfoot>
      </table>
    </article>
  </div>
</template>

<style scoped>
table {
  max-width: 720px;
  margin: 0 auto;
}

.imgWrapper {
  width: 4rem;
  height: 4rem;
  border-radius: 100%;
  overflow: hidden;
}

.img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
</style>
