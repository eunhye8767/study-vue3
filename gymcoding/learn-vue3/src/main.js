import 'bootstrap/dist/css/bootstrap.min.css';
import { createApp } from 'vue';
import App from './App.vue';

// createApp(App).mount('#app');
const app = createApp(App);

app.provide('app-message', 'app message 입니다');

app.mount('#app');

import 'bootstrap/dist/js/bootstrap';
