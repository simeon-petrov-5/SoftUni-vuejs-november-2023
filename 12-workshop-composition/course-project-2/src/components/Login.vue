<script setup>
import useVuelidate from '@vuelidate/core';
import { required } from '@vuelidate/validators';
import { computed, reactive, ref } from 'vue';
import InputText from 'primevue/inputtext';
import Button from 'primevue/button';
import { useRouter } from 'vue-router';
import Card from 'primevue/card';
import Message from 'primevue/message';
import { loginUser } from '../dataProvider/user';
import { useUserStore } from '../store/userStore';

const router = useRouter();
const userStore = useUserStore();
const data = reactive({
  username: '',
  password: '',
});
const isLoading = ref(false);

const rules = computed(() => ({
  username: { required },
  password: { required },
}));

const v$ = useVuelidate(rules, data);

async function onSubmit() {
  isLoading.value = true;
  const isValid = await v$.value.$validate();
  if (isValid) {
    const userData = await loginUser(data);
    console.log(userData);
    if (userData) {
      userStore.setUser(userData);
      router.push('/');
    }
  }
  isLoading.value = false;
};
</script>

<template>
  <Card class="card">
    <template #title>
      Login
    </template>
    <template #content>
      <Message>
        <p>Login credentials</p>
        <ul>
          <li>username: kminchelle</li>
          <li>password: 0lelplR</li>
        </ul>
      </Message>
      <form action="" :disabled="isLoading" @submit.prevent="onSubmit">
        <InputText v-model="v$.username.$model" type="text" placeholder="username" />
        <ul v-if="v$.username.$errors.length">
          <li v-for="error in v$.username.$errors" :key="error.$uid">
            {{ error.$message }}
          </li>
        </ul>
        <InputText v-model="v$.password.$model" type="text" placeholder="password" />
        <ul v-if="v$.password.$errors.length">
          <li v-for="error in v$.password.$errors" :key="error.$uid">
            {{ error.$message }}
          </li>
        </ul>

        <div>
          <Button
            type="submit"
            :loading="isLoading"
            label="Submit"
            icon="pi pi-send"
          />
        </div>
      </form>
    </template>
  </Card>
</template>

<style scoped>
.card {
  max-width: 600px;
  margin: 4rem auto;
}

form {
  display: grid;
  gap: 1rem;
}

form>div {
  display: flex;
  justify-content: flex-end;
  gap: 1rem;
}
</style>
