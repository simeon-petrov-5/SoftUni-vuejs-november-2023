<script>
export default {
  props: {
    modelValue: {
      type: String,
    },
    field: {
      type: String,
      required: true,
    },
    label: {
      type: String,
      required: true,
    },
    required: {
      type: Boolean,
    },
    v$: {
      type: Object,
    },
  },
  emits: ['update:modelValue'],
  computed: {
    hasErrors() {
      return this.v$?.formData[this.field]?.$errors.length;
    },
  },
  methods: {
    onChange(event) {
      this.$emit('update:modelValue', event.target.value);
    },
  },
};
</script>

<template>
  <div :class="{ hasError: hasErrors }">
    <label :for="field"> {{ label }} <strong v-if="required">*</strong></label>
    <slot>
      <input
        :id="field"
        :value="modelValue"
        type="text"
        @input="onChange"
      >
    </slot>
    <ul v-if="hasErrors" class="errorMsg">
      <li v-for="err in v$?.formData[field].$errors" :key="err.$uid">
        {{ err.$message }}
      </li>
    </ul>
  </div>
</template>

<style scoped>
.hasError> :deep(input),
.hasError> :deep(select),
.hasError> :deep(textarea) {
    border-color: red;
}

.hasError .errorMsg {
    color: red;
}
</style>
