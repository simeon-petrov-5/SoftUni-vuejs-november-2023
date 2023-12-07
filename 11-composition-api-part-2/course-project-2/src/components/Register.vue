<script setup>
import useVuelidate from '@vuelidate/core';
import { minValue, required } from '@vuelidate/validators';
import { computed, reactive } from 'vue';
import InputText from 'primevue/inputtext';
import InputNumber from 'primevue/inputnumber';
import Button from 'primevue/button';
import { createUser } from '../dataProvider/user';

const data = reactive({
  firstName: '',
  lastName: '',
  maidenName: '',
  age: 0,
});

const rules = computed(() => ({
  firstName: { required },
  lastName: { required },
  maidenName: { required },
  age: { required, minValue: minValue(9) },
}));

const v$ = useVuelidate(rules, data);

async function onSubmit() {
  const isValid = await v$.value.$validate();
  if (isValid) {
    const hasPassed = await createUser(data);
    console.log('hasPassed?', hasPassed);
  }
};
</script>

<template>
  <form action="" @submit.prevent="onSubmit">
    <InputText v-model="v$.firstName.$model" type="text" placeholder="firstName" />
    <ul v-if="v$.firstName.$errors.length">
      <li v-for="error in v$.firstName.$errors" :key="error.$uid">
        {{ error.$message }}
      </li>
    </ul>
    <InputText v-model="v$.lastName.$model" type="text" placeholder="lastName" />
    <ul v-if="v$.lastName.$errors.length">
      <li v-for="error in v$.lastName.$errors" :key="error.$uid">
        {{ error.$message }}
      </li>
    </ul>
    <InputText v-model="v$.maidenName.$model" type="text" placeholder="maidenName" />
    <ul v-if="v$.maidenName.$errors.length">
      <li v-for="error in v$.maidenName.$errors" :key="error.$uid">
        {{ error.$message }}
      </li>
    </ul>

    <InputNumber v-model="v$.age.$model" />
    <ul v-if="v$.age.$errors.length">
      <li v-for="error in v$.age.$errors" :key="error.$uid">
        {{ error.$message }}
      </li>
    </ul>
    <div>
      <Button outlined severity="secondary" type="button">
        Cancel
      </Button>
      <Button type="submit">
        Submit
      </Button>
    </div>
  </form>
</template>

<style scoped>
form {
    display: grid;
    gap: 1rem;
    max-width: 600px;
    margin: 4rem auto;
    border-radius: 1rem;
    padding: 1.5rem 0.75rem;
    border: 1px solid gray;
}

form>div {
    display: flex;
    justify-content: flex-end;
    gap: 1rem;
}
</style>
