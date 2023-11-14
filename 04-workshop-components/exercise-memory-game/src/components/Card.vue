<script>
export default {
  props: {
    img: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      required: true,
    },
    idx: {
      type: Number,
      required: true,
    },
    activeItems: {
      type: Array,
    },
    guessedItems: {
      type: Array,
    },
  },
  emits: ['onClick'],
  computed: {
    isActive() {
      const selected = this.activeItems.map(i => i.idx);
      return this.guessedItems.includes(this.type) || selected.includes(this.idx);
    },
  },
  methods: {
    onSelect() {
      if (!this.isActive)
        this.$emit('onClick', this.idx, this.type);
    },
  },
};
</script>

<template>
  <article class="card" @click="onSelect">
    <template v-if="isActive">
      <img :src="img" alt="Logo">
      <h2>{{ type }}</h2>
    </template>
    <img v-else src="https://m.media-amazon.com/images/I/61AGZ37D7eL.jpg" alt="">
  </article>
</template>

<style scoped>
.card {
    margin: 0;
    text-align: center;
}
</style>
