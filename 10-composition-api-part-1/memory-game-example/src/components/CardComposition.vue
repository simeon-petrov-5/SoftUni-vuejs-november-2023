<script setup>
import { computed } from 'vue';

const props = defineProps({
  card: {
    type: Object,
    required: true,
    default: () => ({ idx: 0, type: '', img: '' }),
  },
  activeItems: {
    type: Array,
  },
  guessedItems: {
    type: Array,
  },
});

const emit = defineEmits(['onClick']);

const isActive = computed(() => {
  const selected = props.activeItems.map(i => i.idx);
  return props.guessedItems.includes(props.card.type) || selected.includes(props.card.idx);
});

function onSelect() {
  if (!isActive.value)
    emit('onClick', props.card.idx, props.card.type);
}
</script>

<template>
  <article class="card" @click="onSelect">
    <template v-if="isActive">
      <img :src="props.card.img" alt="Logo">
      <h2>{{ props.card.type }}</h2>
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
