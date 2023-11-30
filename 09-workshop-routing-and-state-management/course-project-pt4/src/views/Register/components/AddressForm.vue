<script>
import { useVuelidate } from '@vuelidate/core';
import { minLength, required } from '@vuelidate/validators';
import FormItem from './FormItem.vue';

export default {
  components: { FormItem },
  props: {
    initialData: {
      type: Object,
      required: true,
      default: () => ({
        address1: '',
        address2: '',
        city: '',
      }),
    },
  },
  emits: ['onSubmit', 'onBack'],
  setup() {
    return { v$: useVuelidate() };
  },
  data() {
    return {
      formData: { ...this.initialData },
    };
  },
  validations() {
    return {
      formData: {
        address1: {
          required,
          minLength: minLength(5),
        },
        city: {
          required,
        },
      },
    };
  },
  methods: {
    async handleSubmit() {
      const isValid = await this.v$.$validate();
      console.log('Is form valid?', isValid);
      if (isValid) {
        this.$emit('onSubmit', this.formData);
      }
    },
  },
};
</script>

<template>
  <div>
    <h2>Step 2: Address Information</h2>

    <form action="" @submit.prevent="handleSubmit">
      <FormItem
        v-model="formData.address1"
        :v$="v$"
        class="fullRow"
        field="address1"
        label="Address Line 1"
        required
      />

      <FormItem
        v-model="formData.address2"
        field="address2"
        class="fullRow"
        label="Address Line 2"
      />

      <FormItem
        v-model="formData.city"
        :v$="v$"
        field="city"
        label="City"
        required
      />
      <!-- ToDo - add more fields -->
      <div />

      <button type="button" class="secondary" @click="$emit('onBack')">
        Go back
      </button>
      <button type="submit">
        Submit
      </button>
    </form>
  </div>
</template>

<style scoped>
form {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 1rem;
}

form .fullRow{
    grid-column: 1 / 3;
}
</style>
