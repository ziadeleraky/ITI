import { createApp } from "vue";
// import { createRouter, createWebHistory } from "vue-router";

// import components
import Home from "./components/Home.vue";
import App from "./App.vue";

// import styles
import "./style.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";

// const routes = [{ path: "/", component: Home }];

// const router = createRouter({
//   history: createWebHistory(),
//   routes,
// });

createApp(App).mount("#app");
