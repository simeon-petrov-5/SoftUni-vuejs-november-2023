<script>
import { useVuelidate } from '@vuelidate/core';
import GeneralForm from './components/GeneralForm.vue';
import AddressForm from './components/AddressForm.vue';

export default {
  components: { GeneralForm, AddressForm },
  setup() {
    return { v$: useVuelidate() };
  },
  data() {
    return {
      activeForm: 'general',
      data: {
        general: {
          name: 'Simeon',
          pass: '',
          confirmPass: '',
          phone: 0,
          email: '',
          gender: '',
          dateOfBirth: '',
        },
        address: {
          address1: '',
          address2: '',
          city: '',
        },
      },
    };
  },
  methods: {
    async onGeneralSubmit(generalData) {
      const isValid = await this.v$.$validate();
      if (isValid) {
        this.activeForm = 'address';
        this.data.general = { ...generalData };
      }
    },
    async onSubmit(addressData) {
      const isValid = await this.v$.$validate();
      if (isValid) {
        this.data.address = { ...addressData };
        // eslint-disable-next-line no-alert
        window.alert('Horay! All is valid');
        console.log('THE DATA', this.data);
      }
    },
    onBack() {
      this.activeForm = 'general';
    },
  },
};
</script>

<template>
  <GeneralForm v-if="activeForm === 'general'" :initial-data="data.general" @onSubmit="onGeneralSubmit" />
  <AddressForm
    v-else-if="activeForm === 'address'"
    :initial-data="data.address"
    @onSubmit="onSubmit"
    @onBack="onBack"
  />
</template>
