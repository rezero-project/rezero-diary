import { createMemoryHistory, createRouter } from "vue-router";
import NicknameForm from "../components/NicknameForm.vue";
import LoginPage from "../pages/LoginPage.vue";
import SettingPage from "../pages/SettingPage.vue";
import SelectCharacterPage from "../pages/SelectCharacterPage.vue";
import AnalysisResult from "../pages/AnalysisResult.vue";
import AchievementPage from "../pages/AchievementPage.vue";
import HomePage from "../pages/HomePage.vue";
import DiaryNav from "../components/DiaryNav.vue";
import CreateUserPage from "../pages/CreateUserPage.vue";
// パスとコンポーネントを登録
const routes = [
  { path: "/", component: HomePage },
  { path: "/create-user", component: CreateUserPage },
  { path: "/set-nickname", component: NicknameForm },
  { path: "/login-user", component: LoginPage },
  { path: "/setting", component: SettingPage },
  { path: "/select-character", component: SelectCharacterPage },
  { path: "/analysis-result", component: AnalysisResult },
  { path: "/achievements", component: AchievementPage },
  { path: "/diaries", component: DiaryNav },
];

const router = createRouter({
  history: createMemoryHistory(),
  routes,
});

export default router;
