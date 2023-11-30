<script>
import { mapActions } from 'pinia';
import { loginUser } from '../dataProviders/auth';
import { useUserStore } from '../store/userStore';

export default {
  data() {
    return {
      isLoading: false,
      user: {
        username: '',
        password: '',
      },
    };
  },
  methods: {
    ...mapActions(useUserStore, ['setProfile']),
    async onSubmit() {
      this.isLoading = true;
      const userData = await loginUser(this.user);
      console.log('userData', userData);
      if (userData) {
        this.setProfile(userData);
        this.$router.push('/profile');
      }
      // username: 'kminchelle',
      // password: '0lelplR',
      this.isLoading = false;
    },
  },
};
</script>

<template>
  <article class="card">
    <h1>Login</h1>

    <form @submit.prevent="onSubmit">
      <div>
        <label for="username">Username</label>
        <input
          id="username"
          v-model="user.username"
          required
          type="text"
          :disabled="isLoading"
        >
      </div>
      <div>
        <label for="password">Password</label>
        <input
          v-model="user.password"
          required="password"
          type="password"
          :disabled="isLoading"
        >
      </div>
      <button :disabled="isLoading">
        <span v-if="isLoading" class="loader" />
        <span v-else>Submit</span>
      </button>
    </form>

    <RouterLink to="/register">
      You don't have an account? Click here
    </RouterLink>
  </article>
</template>

<style  scoped>
.card {
    max-width: 640px;
    margin: 0 auto;
}

.card h1 {
    margin-bottom: 1rem;
    text-align: center;
}

.loader {
    width: 24px;
    height: 24px;
    border: 5px solid white;
    border-bottom-color: transparent;
    border-radius: 50%;
    display: inline-block;
    box-sizing: border-box;
    animation: rotation 1s linear infinite;
    }

    @keyframes rotation {
    0% {
        transform: rotate(0deg);
    }
    100% {
        transform: rotate(360deg);
    }
    }
</style>
