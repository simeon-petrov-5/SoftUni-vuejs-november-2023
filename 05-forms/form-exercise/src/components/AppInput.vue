<script>
export default {
  props: {
    modelValue: {
      type: String,
    },
    id: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      default: 'text',
    },
  },
  emits: ['update:modelValue'],
  methods: {
    onInput($event) {
      const { value } = $event.target;
      this.$emit('update:modelValue', this.type === 'number' ? Number(value) : value);
    },
  },
};
</script>

<template>
  <div>
    <label :for="id">
      <slot />
    </label>
    <input :id="id" :type="type" :value="modelValue" @input="onInput">
  </div>
</template>
