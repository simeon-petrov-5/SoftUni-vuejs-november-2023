<script>
// import { categories } from '../../../constants/categories';

export default {
  props: {
    categories: {
      type: Array,
      default: () => [],
    },
    activeItem: {
      type: String,
      required: true,
    },
  },
  emits: ['onSelect'],
  methods: {
    onSelect(selected) {
      const val = this.activeItem === selected ? '' : selected;
      this.$emit('onSelect', val);
    },
  },
};
</script>

<template>
  <div>
    <ul role="list" class="categories">
      <li v-for="category in categories" :key="category">
        <!-- class="primary" -->
        <button class="btn" :class="[activeItem === category ? 'primary' : 'secondary outline']" @click="onSelect(category)">
          {{ category.toUpperCase() }}
        </button>
      </li>
    </ul>
  </div>
</template>

<style  scoped>
.categories {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 1rem;
}

.categories li{
  margin: 0;
}

.categories .btn{
  padding: 0.5rem 1rem;
  font-size: 1rem;
  margin: 0;
}
</style>
