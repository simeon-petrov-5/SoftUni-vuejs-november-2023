<script>
export default {
  props: {
    btnColor: {
      type: String,
      default: 'blue',
    },
    text: {
      type: String,
      required: true,
    },
  },
  emits: ['onClick'],
  data() {
    return {
      count: 0,
    };
  },
  methods: {
    onClick() {
      this.count += 1;
      // this.btnColor = 'red';
      this.$emit('onClick', this.count, 'Simeon');
    },
  },
};
</script>

<template>
  <button :style="{ background: btnColor }" @click="onClick">
    <p class="">
      <slot>HELLO</slot>
    </p><br>
    I've been clicked {{ count }} times

    <footer>
      <slot name="footer" />
    </footer>
  </button>
</template>

<style scoped></style>
