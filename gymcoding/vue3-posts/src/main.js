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
