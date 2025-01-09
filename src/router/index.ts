import { createMemoryHistory, createRouter } from "vue-router";
import CreateUserForm from "../components/CreateUserForm.vue";
import Home from "../components/Home.vue";
import NicknameForm from "../components/NicknameForm.vue";

// パスとコンポーネントを登録
const routes = [
  { path: "/", component: Home },
  { path: "/create-user", component: CreateUserForm },
  { path: "/set-nickname", component: NicknameForm },
];

const router = createRouter({
  history: createMemoryHistory(),
  routes,
});

export default router;
