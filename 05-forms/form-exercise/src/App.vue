<script>
import { useVuelidate } from '@vuelidate/core';
import { email, required } from '@vuelidate/validators';
import AppInput from './components/AppInput.vue';
import UserName from './components/UserName.vue';

export default {
  components: { AppInput, UserName },
  setup() {
    return { v$: useVuelidate() };
  },
  data() {
    return {
      data: {
        fName: '',
        lName: '',
        email: '',
        age: null,
        skills: [],
        gender: '',
        country: '',
      },
      formData: null,
    };
  },
  methods: {
    async onSubmit() {
      const isValid = await this.v$.$validate();
      console.log('isValid', isValid, this.v$);
      if (isValid) {
        this.formData = JSON.stringify(this.data, null, 4);
      }
    },
  },
  validations() {
    return {
      data: {
        fName: { required },
        lName: { required },
        email: { required, email },
      },
    };
  },
};
</script>

<template>
  <form class="form" action="" @submit.prevent="onSubmit">
    <!-- <UserName v-model:firstName="data.fName" v-model:lastName="data.lName" />
    <AppInput id="email" v-model="data.email" type="email">
      Email
    </AppInput> -->
    <div class="two-cols">
      <div>
        <label for="fname">First name</label>
        <input id="fname" v-model="v$.data.fName.$model" type="text">
        <div v-for="error of v$.data.fName.$errors" :key="error.$uid" class="input-errors">
          <div class="error-msg">
            {{ error.$message }}
          </div>
        </div>
      </div>
      <div>
        <label for="lname">Last name</label>
        <input id="lname" v-model="v$.data.lName.$model" type="text">
        <div v-for="error of v$.data.lName.$errors" :key="error.$uid" class="input-errors">
          <div class="error-msg">
            {{ error.$message }}
          </div>
        </div>
      </div>
    </div>
    <div>
      <label for="email">Email</label>
      <input id="email" v-model="v$.data.email.$model" type="email">
      <div v-for="error of v$.data.email.$errors" :key="error.$uid" class="input-errors">
        <div class="error-msg">
          {{ error.$message }}
        </div>
      </div>
    </div>
    <AppInput id="age" v-model="data.age" type="email">
      Age
    </AppInput>

    <div>
      <p>Skillset</p>
      <label>
        <input v-model="data.skills" type="checkbox" value="webDevelopment">
        Web Development
      </label>
      <label>
        <input v-model="data.skills" type="checkbox" value="graphicDesign"> Graphic Design
      </label>
      <label>
        <input v-model="data.skills" type="checkbox" value="projectManagement"> Project Management</label>
      <label>
        <input v-model="data.skills" type="checkbox" value="communication"> Communication
      </label>
    </div>

    <div>
      <p>Gender</p>
      <label>
        <input v-model="data.gender" type="radio" value="male">
        Male
      </label>
      <label>
        <input v-model="data.gender" type="radio" value="female"> Female
      </label>
      <label>
        <input v-model="data.gender" type="radio" value="other"> Other</label>
    </div>

    <div>
      <label for="country">Country</label>
      <select id="country" v-model="data.country">
        <option disabled value="">
          Select
        </option>
        <option value="bulgaria">
          Bulgaria
        </option>
        <option value="canada">
          Canada
        </option>
        <option value="uk">
          United Kingdom
        </option>
        <option value="australia">
          Australia
        </option>
        <option value="germany">
          Germany
        </option>
      </select>
    </div>

    <button>Submit</button>
  </form>

  <pre v-if="formData">
    <code>{{ formData }}</code>
  </pre>
</template>

<style>
.form {
  max-width: 520px;
  margin: 3rem auto;
}

.form .two-cols {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
}
</style>
