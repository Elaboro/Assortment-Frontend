import { createApp } from "vue";
import App from "./App.vue";
import {
  BootstrapVue,
  BootstrapVueIcons,
} from "bootstrap-vue";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";

createApp(App)
  .use(BootstrapVue)
  .use(BootstrapVueIcons)
  .mount('#app');
