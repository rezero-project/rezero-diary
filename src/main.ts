import { createApp } from "vue";
import "./style.scss";
import App from "./App.vue";
import router from "./router/index.ts";
import vuetify from "./plugins/vuetify";

const app = createApp(App);
app.use(vuetify);
app.use(router);
app.mount("#app");
