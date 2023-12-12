import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useUserStore = defineStore('user', () => {
  const profile = ref(null);
  const isAuthenticated = ref(false);

  const setUser = (userData) => {
    profile.value = userData;
    isAuthenticated.value = true;
  };

  return {
    profile,
    isAuthenticated,
    setUser,
  };
});
