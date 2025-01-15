import { createMemoryHistory, createRouter } from "vue-router";
import CreateUserForm from "../components/CreateUserForm.vue";
import Home from "../components/Home.vue";
import NicknameForm from "../components/NicknameForm.vue";
import LoginPage from "../pages/LoginPage.vue";
import SettingPage from "../pages/SettingPage.vue";
import SelectCharacterPage from "../pages/SelectCharacterPage.vue";
import AnalysisResult from "../pages/AnalysisResult.vue";
import AchievementPage from "../pages/AchievementPage.vue";

// パスとコンポーネントを登録
const routes = [
  { path: "/", component: Home },
  { path: "/create-user", component: CreateUserForm },
  { path: "/set-nickname", component: NicknameForm },
  { path: "/login-user", component: LoginPage },
  { path: "/setting", component: SettingPage },
  { path: "/select-character", component: SelectCharacterPage },
  { path: "/analysis-result", component: AnalysisResult },
  { path: "/achievements", component: AchievementPage },
];

const router = createRouter({
  history: createMemoryHistory(),
  routes,
});

export default router;
