<script>
// import HelloWorld from './components/HelloWorld.vue';
// import Products from './components/Products.vue';
// import { advancedColor, simpleColor } from './directives/color';

// export default {
//   components: {
//     HelloWorld,
//     Products,
//   },
//   directives: {
//     simpleColor,
//     advancedColor,
//   },
// };

export default {
  data() {
    return {
      pages: [{
        url: '/',
        text: 'Home',
      }, {
        url: '/products',
        text: 'Products',
      }, {
        url: '/directives',
        text: 'Directives',
      }, {
        url: '/contacts',
        text: 'Contacts',
      }, {
        url: '/profile',
        text: 'profile',
      }],
    };
  },
};
</script>

<template>
  <!-- <HelloWorld />

  <h2 v-simple-color="'red'">
    Directives example
  </h2>
  <p v-simple-color:background="'orange'">
    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perferendis similique a blanditiis explicabo. Beatae, dignissimos dolores! Quod aperiam quaerat non cumque eligendi accusantium, consequuntur quidem sed! Illum in aperiam soluta?
  </p>
  <input v-advanced-color.color.borderColor="'green'" type="text" style="border-width: 5px;">

  <Products /> -->

  <header>
    <nav>
      <ul>
        <li v-for="page in pages" :key="page.url">
          <router-link :to="page.url">
            {{ page.text }}
          </router-link>
        </li>
      </ul>
    </nav>
  </header>
  <router-view />

  <footer>
    <p>my footer</p>
  </footer>
</template>
