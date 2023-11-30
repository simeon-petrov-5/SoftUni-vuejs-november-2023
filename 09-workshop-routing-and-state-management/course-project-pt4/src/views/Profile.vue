<script>
import { mapState } from 'pinia';
import { useUserStore } from '../store/userStore.js';

export default {
  computed: {
    ...mapState(useUserStore, ['profile', 'isAuthenticated']),
  },
};
</script>

<template>
  <h1>My profile</h1>
  <article v-if="profile" class="card">
    <img :src="profile.image" alt="">
    <h2>{{ profile.firstName }} {{ profile.lastName }}</h2>
    <ul>
      <li>
        <b>email: {{ profile.email }}</b>
      </li>
      <li>
        <b>Gender: {{ profile.gender }}</b>
      </li>
      <li>
        <b>Token: {{ profile.token }}</b>
      </li>
    </ul>
  </article>
</template>

<style  scoped>
.card{
    max-width: 720px;
    margin: 0 auto;
    text-align: center;
}

.card img{
  border-radius: 100%;
  overflow: hidden;
  border: 3px solid var(--primary);
  margin: 0 auto;
}
</style>
