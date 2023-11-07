<script>
export default {
  data() {
    return {
      inputValue: '',
      isDay: false,
      weather: '',
      showMore: false,
      fruits: [
        'Apples',
        'Bananas',
        'Oranges',
        'Grapes',
        'Strawberries',
      ],
      inventory: [
        {
          id: 1,
          name: 'Electronics',
          products: [
            { id: 1, name: 'Smartphone', price: 499.99, quantity: 2 },
            { id: 2, name: 'Laptop', price: 999.99, quantity: 1 },
          ],
        },
        {
          id: 2,
          name: 'Audio',
          products: [
            { id: 3, name: 'Headphones', price: 79.99, quantity: 3 },
          ],
        },
      ],
      cartProducts: [
        { id: 1, name: 'Smartphone', price: 499.99, quantity: 2 },
        { id: 2, name: 'Laptop', price: 999.99, quantity: 1 },
        { id: 3, name: 'Headphones', price: 79.99, quantity: 3 },
        { id: 4, name: 'Tablet', price: 299.99, quantity: 2 },
      ],
      registerData: {
        name: '',
        age: 0,
      },
    };
  },
  computed: {
    cartTotal() {
      console.log('Was triggered: cartTotal');
      let totalSum = 0;
      this.cartProducts.forEach((prod) => {
        totalSum += prod.price * prod.quantity;
      });
      return totalSum;
    },
  },
  watch: {
    inputValue(newVal, prevVal) {
      console.log('WATCHER', newVal, prevVal);
    },
    'registerData.age': function (newVal) {
      console.log('registerData', newVal);
      if (Number(newVal) < 3) {
        // eslint-disable-next-line no-alert
        alert('Oops, you\'re too youyng!');
      }
    },
    'registerData': {
      handler(newVal, oldVal) {
        console.log('DEEP CHANGE', newVal, oldVal);
      },
      deep: true,
    },
  },
  methods: {
    getWeather(weather) {
      switch (weather) {
        case 'cloudy':
          return '⛅ Couldy';
        case 'rainy':
          return '🌧️ Rainy';
        case 'stormy':
          return '🌩️ Stormy';
        default:
          return '☀️ Sunny';
      }
    },
    onClick(name) {
      console.log('I was CLICKED and my name is ', name);
    },
    onInput(event) {
      // console.log('@input was triggered', event.target.value);
      this.inputValue = event.target.value;
    },
    getCartTotal() {
      console.log('Was triggered: getCartTotal');
      let totalSum = 0;
      this.cartProducts.forEach((prod) => {
        totalSum += prod.price * prod.quantity;
      });
      return totalSum;
    },
    onFormChange(field, event) {
      this.registerData[field] = event.target.value;
    },
  },
};
</script>

<template>
  <div>
    <button @click="isDay = !isDay">
      Toggle
    </button>

    <h1 v-if="isDay">
      ☀️ It's sunny outside!
    </h1>
    <h1 v-else>
      🌑 It's dark outside!
    </h1>
  </div>
  <hr>
  <div>
    <div v-if="weather === 'cloudy'">
      ⛅ Couldy
    </div>

    <div v-else-if="weather === 'rainy'">
      🌧️ Rainy
    </div>

    <div v-else-if="weather === 'stormy'">
      🌩️ Stormy
    </div>

    <div v-else>
      ☀️ Sunny
    </div>

    <h2>Example with function</h2>
    <p>Today's weather is: {{ getWeather(weather) }}</p>
  </div>
  <hr>
  <div>
    <h2>template example</h2>
    <ul>
      <li>Apples</li>
      <li>Bananas</li>
      <li>Oranges</li>
      <li>Grapes</li>
      <li>Strawberries</li>

      <li v-show="showMore">
        Watermelons123
      </li>

      <template v-if="showMore">
        <li>Pineapples</li>
        <li>Blueberries</li>
        <li>Mangoes</li>
        <li>Watermelons</li>
      </template>
    </ul>
  </div>

  <hr>
  <div>
    <h2>v-for examples</h2>
    <ul>
      <li v-for="fruit in fruits" :key="fruit">
        {{ fruit }}
      </li>
    </ul>

    <ul>
      <li v-for="category in inventory" :key="category.id">
        {{ category.name }}

        <ul>
          <li v-for="product in category.products" :key="`prod-${product.id}`">
            {{ product.name }} for {{ product.price }}
          </li>
        </ul>
      </li>
    </ul>

    <!-- <div v-for="n in 46" :key="`n-${n}`">
      {{ n }}
    </div> -->
  </div>

  <hr>
  <div>
    <h2>Events</h2>
    <p>inputValue: {{ inputValue }}</p>
    <input type="text" @input="onInput">
    <button @click="onClick('Simeon')">
      Click me
    </button>
  </div>

  <hr>
  <div>
    <h2>Computed example</h2>
    <ul>
      <li v-for="prod in cartProducts" :key="prod.name">
        {{ prod.quantity }} x {{ prod.name }} / {{ prod.price }}
      </li>
    </ul>
    <p>Total sum: <strong>{{ getCartTotal() }}$</strong></p>
    <p>COMPUTED Total sum: <strong>{{ cartTotal }}$</strong></p>
  </div>
  <hr>
  <div>
    <h2>Watcher example</h2>
    <label for="">Name</label>
    <input type="text" :value="registerData.name" @input="onFormChange('name', $event)">
    <label for="">Age</label>
    <input type="number" :value="registerData.age" @input="onFormChange('age', $event)">
  </div>
</template>
