import { createMemoryHistory, createRouter } from "vue-router";
import CreateUserForm from "../components/CreateUserForm.vue";
import Home from "../components/Home.vue";

// パスとコンポーネントを登録
const routes = [
  { path: "/", component: Home },
  { path: "/create-user", component: CreateUserForm },
];

const router = createRouter({
  history: createMemoryHistory(),
  routes,
});

export default router;
