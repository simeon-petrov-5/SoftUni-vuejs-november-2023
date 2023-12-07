<script setup>
import ComponentsTabs from './components/ComponentsTabs.vue';
import HelloWorld from './components/HelloWorld.vue';
import ListTodos from './components/ListTodos.vue';
import ListUsers from './components/ListUsers.vue';
import { useFetch } from './composables/useFetch';

const { data, isLoading, hasError } = useFetch('https://dummyjson.com/posts');
</script>

<template>
  <ComponentsTabs />
  <Suspense>
    <ListTodos />
    <template #fallback>
      Loading...
    </template>
  </Suspense>

  <h1>Our latest posts</h1>
  <h2 v-if="isLoading">
    Loading
  </h2>
  <ul v-else class="grid">
    <li v-for="post in data.posts" :key="post.id">
      {{ post.title }}
    </li>
  </ul>
  <h2 v-if="hasError">
    Oops, we ahve a problem!
  </h2>
  <HelloWorld />

  <ListUsers />
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
