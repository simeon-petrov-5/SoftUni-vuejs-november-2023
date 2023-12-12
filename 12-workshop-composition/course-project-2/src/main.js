import { createApp } from 'vue';
import PrimeVue from 'primevue/config';
import App from './App.vue';
import 'primevue/resources/themes/lara-light-green/theme.css';
import 'primeicons/primeicons.css';
import router from './configs/router';
import { createPinia } from 'pinia';

const pinia = createPinia();
const app = createApp(App);
app.use(PrimeVue);
app.use(router);
app.use(pinia);
app.mount('#app');
