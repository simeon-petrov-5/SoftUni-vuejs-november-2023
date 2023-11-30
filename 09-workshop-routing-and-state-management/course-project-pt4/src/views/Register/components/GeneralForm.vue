<script>
import { useVuelidate } from '@vuelidate/core';
import { alphaNum, email, helpers, maxLength, minLength, numeric, required, sameAs } from '@vuelidate/validators';
import FormItem from './FormItem.vue';

function hasTwoNames(value) {
  if (!value.includes(' '))
    return false;

  const names = value.split(' ').filter(Boolean);
  if (names.length !== 2)
    return false;

  return true;
}

function namesAreCapitalized(value) {
  const regex = /^([A-Z][a-z]*\s*)+$/;
  return regex.test(value);
}

export default {
  components: { FormItem },
  props: {
    initialData: {
      type: Object,
      required: true,
      default: () => ({
        name: '',
        pass: '',
        confirmPass: '',
        phone: 0,
        email: '',
        gender: '',
        dateOfBirth: '',
      }),
    },
  },
  emits: ['onSubmit'],
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
        name: {
          required: helpers.withMessage('Полето е задължително', required),
          hasTwoNames: helpers.withMessage('Should contain two names separated by a space!', hasTwoNames),
          namesAreCapitalized: helpers.withMessage('Both names should start with a capital letter!', namesAreCapitalized),
        },
        pass: {
          required,
          alphaNum,
          minLength: minLength(3),
          maxLength: maxLength(16),
        },
        confirmPass: { required, sameAs: sameAs(this.formData.pass) },
        email: { required, email },
        phone: {
          required,
          numeric,
          maxLength: maxLength(9),
        },
        gender: {
          required,
        },
        dateOfBirth: {
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
    <h2>Step 1: General Information</h2>

    <form action="" @submit.prevent="handleSubmit">
      <FormItem
        v-model="formData.name"
        class="fullRow"
        :v$="v$"
        field="name"
        label="Name"
        required
      />

      <FormItem
        :v$="v$"
        field="pass"
        label="Password"
        required
      >
        <input id="pass" v-model="formData.pass" type="password">
      </FormItem>

      <FormItem
        :v$="v$"
        field="confirmPass"
        label="Confirm password"
        required
      >
        <input id="confirmPass" v-model="formData.confirmPass" type="password">
      </FormItem>

      <FormItem
        v-model="formData.email"
        :v$="v$"
        field="email"
        label="Email"
        required
      />

      <FormItem
        :v$="v$"
        field="phone"
        label="Phone number"
        required
      >
        <input id="phone" v-model="formData.phone" type="number">
      </FormItem>

      <FormItem
        :v$="v$"
        field="gender"
        label="Gender"
        required
      >
        <select id="gender" v-model="formData.gender">
          <option disabled value="">
            Select
          </option>
          <option value="Male">
            Male
          </option>
          <option value="Female">
            Female
          </option>
          <option value="Other">
            Other
          </option>
        </select>
      </FormItem>

      <FormItem
        :v$="v$"
        field="dateOfBirth"
        label="Date of birth"
        required
      >
        <input id="phone" v-model="formData.dateOfBirth" type="date">
      </FormItem>

      <button type="submit" class="fullRow">
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
