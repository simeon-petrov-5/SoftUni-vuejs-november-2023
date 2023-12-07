import { createApp } from 'vue';
import PrimeVue from 'primevue/config';
import App from './App.vue';
import 'primevue/resources/themes/lara-light-green/theme.css';

const app = createApp(App);
app.use(PrimeVue);
app.mount('#app');
