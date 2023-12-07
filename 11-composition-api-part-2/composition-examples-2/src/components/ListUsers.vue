<script setup>
import { useFetch } from '../composables/useFetch';

const { data, isLoading, hasError } = useFetch('https://dummyjson.com/users');
</script>

<template>
  <h1>Our users</h1>
  <h2 v-if="isLoading">
    Loading
  </h2>
  <ul v-else class="grid">
    <li v-for="user in data.users" :key="user.id">
      {{ user.firstName }} {{ user.lastName }}
    </li>
  </ul>
  <h2 v-if="hasError">
    Oops, we ahve a problem!
  </h2>
</template>

<style>
.grid {
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  padding: 0;
  margin: 0;
}

.grid li {
  list-style: none;
}
</style>
