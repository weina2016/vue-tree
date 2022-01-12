import { createApp } from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";
import "primevue/resources/themes/vela-purple/theme.css";
import "primeicons/primeicons.css";
import "primevue/resources/primevue.css";
import "@/assets/css/global.css";

const app = createApp(App);
app.use(store);
app.use(router);
app.mount("#app");
