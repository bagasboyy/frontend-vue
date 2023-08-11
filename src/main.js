import Vue, { createApp } from "@vue/compat";
import App from "./App.vue";
import router from "./router/Index";
import * as Bootstrap from "bootstrap";

// Import Bootstrap and BootstrapVue CSS files (order is important)
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";

// Make BootstrapVue available throughout your project
Vue.use(Bootstrap);

const app = createApp(App);

// Use the Vue router
app.use(router);

// Mount the app
app.mount("#app");
