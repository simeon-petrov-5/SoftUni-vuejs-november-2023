<script setup>
import { computed, toRefs } from 'vue';

const props = defineProps({
  text: String,
  type: {
    type: String,
    default: 'secondary',
  },
  outline: Boolean,
});

const emit = defineEmits(['onClick']);

const { text, type, outline } = toRefs(props);

const upperName = computed(() => {
  return text.value.toUpperCase();
});
</script>

<template>
  <span>{{ upperName }}</span>
  <button :class="[type, outline ? 'outline' : '']" @click="emit('onClick')">
    Get {{ text }}'s data
  </button>
</template>

<style lang="scss" scoped>

</style>
