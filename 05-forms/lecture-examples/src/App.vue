<script>
export default {
  data() {
    return {
      name: '',
      age: null,
      carColor: ['Volvo'],
      seats: 'Leather',
      rims: null,
      terms: '',
    };
  },
};
</script>

<template>
  <h1>Input elements examples</h1>
  <form action="" class="container">
    <div>
      <label for="name">Name</label>
      <input id="name" v-model="name" type="text">
    </div>
    <div>
      <label for="age">Age</label>
      <input id="age" v-model="age" type="number">
    </div>
    <div>
      <label>Car color</label>
      <ul>
        <li>
          <label for="volvo">Volvo</label>
          <input id="volvo" v-model="carColor" value="Volvo" type="checkbox">
        </li>
        <li>
          <label for="bmw">BMW</label>
          <input id="bmw" v-model="carColor" value="BMW" type="checkbox">
        </li>
        <li>
          <label for="mercedes">Mercedes</label>
          <input id="mercedes" v-model="carColor" value="Mercedes" type="checkbox">
        </li>
      </ul>
    </div>

    <div>
      <label for="">Choose seats</label>
      <ul>
        <li>
          <label for="leather">Leather seats</label>
          <input id="leather" v-model="seats" type="radio" value="Leather">
        </li>
        <li>
          <label for="normal">Normal seats</label>
          <input id="normal" v-model="seats" type="radio" value="Normal">
        </li>
      </ul>
    </div>

    <div>
      <label for="rims">Rims size</label>
      <select id="rims" v-model="rims">
        <option disabled>
          Select
        </option>
        <option :value="16">
          16
        </option>
        <option :value="17">
          17
        </option>
        <option :value="{ size: 18 }">
          18
        </option>
      </select>
    </div>

    <div>
      <label for="terms">Accept our terms and conditions</label>
      <input id="terms" v-model="terms" type="checkbox" true-value="yes" false-value="no">
    </div>
  </form>
</template>
