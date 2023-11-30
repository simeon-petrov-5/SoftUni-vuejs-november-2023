<script>
import { mapActions, mapState } from 'pinia';
import { RouterLink } from 'vue-router';
import { useCartStore } from '../store/cartStore';
import { useUserStore } from '../store/userStore';

export default {
  components: {
    RouterLink,
  },
  computed: {
    ...mapState(useCartStore, ['products']),
    ...mapState(useUserStore, ['isAuthenticated', 'profile']),
  },
  methods: {
    ...mapActions(useUserStore, ['logout']),
  },
};
</script>

<template>
  <header>
    <nav>
      <ul>
        <li>
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4Q0hUaUi7lLLC5UOslM9ul_B8NyXTKNn9BcBGtCXV&s"
            alt="logo"
          >
        </li>
      </ul>
      <ul>
        <li>
          <RouterLink to="/">
            Home
          </RouterLink>
        </li>
        <li>
          <RouterLink to="/shop">
            Shop
          </RouterLink>
        </li>
        <li>
          <RouterLink to="/about">
            About
          </RouterLink>
        </li>
        <li>
          <RouterLink to="/contacts">
            Contacts
          </RouterLink>
        </li>
        <li v-if="isAuthenticated">
          <RouterLink to="/profile" class="profileLink">
            Profile <img :src="profile.image" alt="">
          </RouterLink>
        </li>
        <li v-if="isAuthenticated">
          <RouterLink to="/favourites">
            My favourites
          </RouterLink>
        </li>
        <li v-if="isAuthenticated">
          <RouterLink to="/" @click="logout">
            Logout
          </RouterLink>
        </li>
        <li v-else>
          <RouterLink to="/login">
            Login
          </RouterLink>
        </li>
        <li>
          <RouterLink to="/cart" role="button">
            Cart <span v-if="products.length">({{
              products.length }})</span>
          </RouterLink>
        </li>
      </ul>
    </nav>
  </header>
</template>

<style  scoped>
nav {
  padding: 0.25rem 1rem;
}

nav img {
  height: 2rem;
}

.profileLink{
  display: flex;
  gap: 0.25rem;
  align-items: center;
}
.profileLink img{
  width: 2rem;
  height: auto;
  border-radius: 100%;
  overflow: hidden;
  border: 1px solid var(--primary);
  margin: 0 auto;
}
</style>
