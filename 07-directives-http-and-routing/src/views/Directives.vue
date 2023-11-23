<script>
import { advancedColor, simpleColor } from '../directives/color';

export default {
  directives: {
    simpleColor,
    advancedColor,
  },
};
</script>

<template>
  <h1>Directives</h1>

  <h2 v-simple-color="'red'">
    Directives example
  </h2>
  <p v-simple-color:background="'orange'">
    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perferendis similique a blanditiis explicabo. Beatae, dignissimos dolores! Quod aperiam quaerat non cumque eligendi accusantium, consequuntur quidem sed! Illum in aperiam soluta?
  </p>
  <input v-advanced-color.color.borderColor="'green'" type="text" style="border-width: 5px;">
</template>
