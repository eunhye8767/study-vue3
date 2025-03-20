import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";

import "primevue/resources/themes/aura-light-green/theme.css";

import "@/assets/custom.css";

import { createApp } from "vue";
import App from "./App.vue";

import PrimeVue from "primevue/config";
import Dropdown from "primevue/dropdown";

import router from "@/router";

// createApp(App).use(router).use(PrimeVue).mount("#app");

const app = createApp(App);

app.use(router);
app.use(PrimeVue);

app.component("Dropdown", Dropdown);

app.mount("#app");

import "bootstrap/dist/js/bootstrap.bundle.min.js";

console.log("MODE: ", import.meta.env.MODE);
console.log("BASE_URL: ", import.meta.env.BASE_URL);
console.log("PROD: ", import.meta.env.PROD); // 실제 운영
console.log("DEV: ", import.meta.env.DEV); // 개발 모드
console.log("VITE_APP_API_URL: ", import.meta.env.VITE_APP_API_URL);
