import { defineStore } from 'pinia';

const useExampleStore = defineStore('example', {
  state: () => ({ products: [1, 2, 3, 4], name: 'Simeon' }),
  getters: {
    uppercaseName(state) {
      return state.name.toUpperCase();
    },
    nameAndRole() {
      return `Admin user is: ${this.uppercaseName}`;
    },
  },
  actions: {
    callMyAction(arg1, arg2) {
      console.log('doSomething', arg1, arg2);
      this.name = arg1 + arg2;
    },
  },
});

export default useExampleStore;
