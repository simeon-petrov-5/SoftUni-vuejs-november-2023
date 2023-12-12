<script setup>
import { onMounted, ref, watch } from 'vue';
import DataTable from 'primevue/datatable';
import Column from 'primevue/column';
import Paginator from 'primevue/paginator';
import { useRoute, useRouter } from 'vue-router';
import { fetchAllProducts } from '../dataProvider/products';

const route = useRoute();
const router = useRouter();

const isLoading = ref(true);
const data = ref([]);
const pagination = ref({
  total: 100,
  skip: Number(route.query.skip ?? 0),
  limit: Number(route.query.limit ?? 0),
});

onMounted(async () => {
  const { products, ...pgn } = await fetchAllProducts(pagination.value.skip, pagination.value.limit);
  data.value = products;
  pagination.value = pgn;
  isLoading.value = false;
});

async function onPageChange(event) {
  isLoading.value = true;
  router.push({ ...route, query: { skip: event.first, limit: event.rows } });
  const { products, ...pgn } = await fetchAllProducts(event.first, event.rows);
  data.value = products;
  pagination.value = pgn;
  isLoading.value = false;
}
</script>

<template>
  <div>
    <h1>Products</h1>
    <DataTable :value="data" :loading="isLoading">
      <Column field="id" header="ID" />
      <Column field="title" header="Title" />
      <Column field="rating" header="Rating" />
      <Column field="price" header="Price" />
      <Column field="stock" header="Quantity" />
    </DataTable>
    <Paginator
      :first="pagination.skip"
      :rows="pagination.limit"
      :total-records="pagination.total"
      :rows-per-page-options="[10, 20, 30]"
      @page="onPageChange"
    />
  </div>
</template>

<style lang="scss" scoped></style>
