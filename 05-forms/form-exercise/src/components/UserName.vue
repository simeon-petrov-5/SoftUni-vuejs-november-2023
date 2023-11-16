<script>
export default {
  props: {
    firstName: {
      type: String,
    },
    lastName: {
      type: String,
    },
  },
  emits: [
    'update:firstName',
    'update:lastName',
  ],
  methods: {
    onInput(event, field) {
      const { value } = event.target;
      this.$emit(`update:${field}`, value);
    },
  },
};
</script>

<template>
  <div class="two-cols">
    <div>
      <label for="fname">First name</label>
      <input id="fname" type="text" :value="firstName" @input="onInput($event, 'firstName')">
    </div>
    <div>
      <label for="lname">Last name</label>
      <input id="lname" type="text" :value="lastName" @change="onInput($event, 'lastName')">
    </div>
  </div>
</template>
