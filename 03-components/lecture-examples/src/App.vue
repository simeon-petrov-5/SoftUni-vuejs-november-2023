<script>
import MyButton from './components/MyButton.vue';

export default {
  components: {
    MyButton,
  },
  data() {
    return {
      selectedComponent: 'MyButton',
      btnColor: 'purple',
      countText: 0,
      authorName: 'Simeon',
    };
  },
  beforeCreate() {
    console.log('In beforeCreate cycle', this.btnColor);
  },
  created() {
    console.log('In created cycle', this.btnColor);
  },
  mounted() {
    console.log('In mounted cycle', this.selectedComponent);
  },
  methods: {
    handleClick(count, name) {
      this.countText = count;
      console.log(name);
    },
    capitalize(string) {
      return string.toUpperCase();
    },
  },
};
</script>

<template>
  <h1>Hello components. We have {{ countText }} clicks</h1>
  <!-- <MyButton :btn-color="btnColor" text="alabala" @on-click="handleClick" /> -->
  <MyButton text="alabala">
    <p>The author of the next bestseller is {{ capitalize(authorName) }}</p>
    <span>Hello world</span>
    <input>

    <template #footer>
      <h3>I'm the footer</h3>
    </template>
  </MyButton>
  <!-- <GlobHelloWorld /> -->

  <!-- <component :is="selectedComponent" /> -->
</template>
