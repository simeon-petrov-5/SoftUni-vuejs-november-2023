<script>
export default {
  data() {
    return {
      isVisible: false,
      isDisabled: false,
      count: 0,
      user: {
        name: 'Simeon',
        hobby: 'Music',
      },
      hobbies: ['music', 'cards'],
    };
  },
  mounted() {
    console.log('My count is', this.count);
    this.changeMyName();
    this.changeMyHobby();
    this.changeCount();
  },
  methods: {
    changeMyName() {
      this.user.name = 'Simo';
    },
    changeMyHobby() {
      this.user.hobby = 'None';
    },
    changeCount() {
      this.count = 10;
    },
    toggleVisibility() {
      this.isVisible = !this.isVisible;
    },
  },
};
</script>

<template>
  <h1 :class="{ hasHoby: isVisible }">
    Hello, my name is {{ user.name }}
  </h1>
  <h2 v-if="isVisible">
    And my hobby is: {{ user.hobby }}
  </h2>
  <button :id="count" :disabled="isDisabled" @click="toggleVisibility">
    Toggle
  </button>
</template>

<style scoped>
.hasHoby {
  color: orange;
}
</style>
