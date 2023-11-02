import { createApp } from 'vue';
import './styles/reset.css';
import App from './App.vue';
import Ball from './8Ball.vue';

// const app = createApp(App);
const app = createApp(Ball);
app.mount('#app');
