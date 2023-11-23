<script>
import HelloWorld from '../components/HelloWorld.vue';

export default {
  components: {
    HelloWorld,
  },
  methods: {
    goToDirectives() {
      this.$router.push({ path: '/directives' });
    },
    goToIphone() {
      this.$router.push({ name: 'singleProduct', params: { id: 1 } });
    },
  },
};
</script>

<template>
  <h1>Home</h1>
  <HelloWorld />

  <button @click="goToDirectives">
    Go see my new custom directives :)
  </button>

  <button @click="goToIphone">
    Go see my new Iphone :)
  </button>
</template>
