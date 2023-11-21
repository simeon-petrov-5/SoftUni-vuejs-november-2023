<script>
import { categories } from '../../../constants/categories';

export default {
  props: {
    activeItem: {
      type: String,
      required: true,
    },
  },
  emits: ['onSelect'],
  data() {
    return {
      categories,
    };
  },
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
      <li v-for="cat in categories" :key="cat.value">
        <!-- class="primary" -->
        <button :class="[activeItem === cat.value ? 'primary' : 'secondary outline']" @click="onSelect(cat.value)">
          {{ cat.name }}
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
</style>
