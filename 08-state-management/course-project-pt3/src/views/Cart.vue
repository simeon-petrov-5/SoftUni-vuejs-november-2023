<script>
import { mapActions, mapState } from 'pinia';

// import { products } from '../constants/products';
import useExampleStore from '../store/exampleStore';
import { useCartStore } from '../store/cartStore';
import { getProduct } from '../dataProviders/products';
import Loader from '../components/Loader.vue';

export default {
  setup() {
    const cartStore = useExampleStore();
    return { cartStore };
  },
  data() {
    return {
      productsInfo: [],
      isLoading: true,
    };
  },
  computed: {
    ...mapState(useExampleStore, ['name', 'products', 'uppercaseName', 'nameAndRole']),
    ...mapState(useCartStore, ['products']),
  },
  async created() {
    const promises = [];
    this.products.forEach((product) => {
      promises.push(getProduct(product.id));
    });
    this.productsInfo = await Promise.all(promises);
    this.isLoading = false;
  },
  mounted() {
    console.log(this.name);
    console.log(this.products);
  },
  methods: {
    getProductTitle(id) {
      const prod = this.productsInfo.find(product => product.id === id);
      return prod.title;
    },
    getThumbnail(id) {
      const prod = this.productsInfo.find(product => product.id === id);
      return prod.thumbnail;
    },
    testIt() {
      this.cartStore.name = 'Petrov';
    },
    resetIt() {
      this.cartStore.$reset();
    },
    ...mapActions(useExampleStore, ['callMyAction']),
    ...mapActions(useCartStore, ['changeQuantity']),
    // doTheThing() {
    //   this.cartStore.callMyAction('foo', 'bar');
    // },
  },
  components: { Loader },
};
</script>

<template>
  <div>
    <h2>Cart</h2>
    <h3>My name is: {{ uppercaseName }}</h3>
    <h4>{{ nameAndRole }}</h4>
    <button @click="testIt">
      Test me: {{ name }}
    </button>
    <button @click="resetIt">
      Reset
    </button>
    <button @click="callMyAction('foo', 'bar')">
      Call an action
    </button>

    <Loader v-if="isLoading" />
    <table v-else>
      <thead>
        <tr>
          <th>Thumbnail</th>
          <th>Product name</th>
          <th>Quantity</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="product in products" :key="product.id">
          <th>
            <div class="imgWrapper">
              <img :src="getThumbnail(product.id)" alt="thumbnail" class="img">
            </div>
          </th>
          <th>{{ getProductTitle(product.id) }}</th>
          <th>
            <input
              type="number"
              :value="product.quantity"
              min="0"
              @input="changeQuantity(product.id, $event)"
            >
          </th>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<style scoped>
table{
  max-width: 720px;
  margin: 0 auto;
}
.imgWrapper{
width: 4rem;
height: 4rem;
border-radius: 100%;
overflow: hidden;
}
.img{
  width: 100%;
  height: 100%;
  object-fit: cover;
}
</style>
