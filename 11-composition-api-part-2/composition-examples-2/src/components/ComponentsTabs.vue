<script setup>
import { defineAsyncComponent, ref } from 'vue';
import ComponentA from './ComponentA.vue';

// import ComponentB from './ComponentB.vue';
// import ComponentC from './ComponentC.vue';
const ComponentB = defineAsyncComponent(() =>
  import('./ComponentB.vue'),
);
const ComponentC = defineAsyncComponent(() =>
  import('./ComponentC.vue'),
);

const activeComponent = ref('ComponentA');
function setActive(name) {
  activeComponent.value = name;
}
</script>

<template>
  <div>
    <button @click="setActive('ComponentA')">
      Show A
    </button>
    <button @click="setActive('ComponentB')">
      Show B
    </button>
    <button @click="setActive('ComponentC')">
      Show C
    </button>
  </div>
  <ComponentA v-if="activeComponent === 'ComponentA'" />
  <Suspense>
    <ComponentB v-if="activeComponent === 'ComponentB'" />
    <template #fallback>
      Loading B
    </template>
  </Suspense>
  <Suspense>
    <ComponentC v-if="activeComponent === 'ComponentC'" />
    <template #fallback>
      Loading C
    </template>
  </Suspense>
</template>

<style scoped></style>
