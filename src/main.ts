import { createApp } from "vue";
import App from "./App.vue";
import {
  BootstrapVue,
  BootstrapVueIcons,
  LayoutPlugin,
} from "bootstrap-vue";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";

createApp(App)
  .use(BootstrapVue)
  .use(BootstrapVueIcons)
  .use(LayoutPlugin)
  .mount('#app');
