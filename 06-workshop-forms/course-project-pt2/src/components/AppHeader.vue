<script>
export default {
  props: {
    cartProducts: {
      type: Array,
      required: true,
      default: () => [],
    },
  },
  emits: ['onSelect'],
  methods: {
    onSelect(view) {
      this.$emit('onSelect', view);
    },
  },
};
</script>

<template>
  <header>
    <nav>
      <ul>
        <li>
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4Q0hUaUi7lLLC5UOslM9ul_B8NyXTKNn9BcBGtCXV&s"
            alt="logo"
          >
        </li>
      </ul>
      <ul>
        <li><a href="#" @click.prevent="onSelect('Home')">Home</a></li>
        <li><a href="#" @click.prevent="onSelect('Shop')">Shop</a></li>
        <li><a href="#" @click.prevent="onSelect('About')">About</a></li>
        <li><a href="#" @click.prevent="onSelect('Contacts')">Contacts</a></li>
        <li><a href="#" role="button" @click.prevent="onSelect('Cart')">Cart <span v-if="cartProducts.length">({{ cartProducts.length }})</span></a></li>
      </ul>
    </nav>
  </header>
</template>

<style  scoped>
nav {
    padding: 0.25rem 1rem;
}

nav img {
    height: 2rem;
}
</style>
