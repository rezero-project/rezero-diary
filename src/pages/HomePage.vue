<script setup lang="ts">
import HomeCharacter from "../components/HomeCharacter.vue";

interface HomeLinkType {
  path: string;
  label: string;
  color: string;
}
const homeLinks: HomeLinkType[] = [
  { path: "/create-user", label: "新規会員登録", color: "blue" },
  { path: "/login-user", label: "ログイン", color: "red" },
  { path: "/select-character", label: "キャラクター選択", color: "green" },
  { path: "/analysis-result", label: "感情分析結果", color: "pink" },
  { path: "/achievements", label: "達成項目一覧", color: "yellow" },
  { path: "/setting", label: "設定", color: "gray" },
];
</script>

<template>
  <div class="bg">
    <div class="character-image">
      <HomeCharacter />
    </div>
    <div class="nav-container">
      <nav class="nav">
        <RouterLink
          v-for="(homeLink, index) in homeLinks"
          :to="homeLink.path"
          :key="index"
          :style="{ borderColor: homeLink.color }"
          class="link"
          >{{ homeLink.label }}
        </RouterLink>
      </nav>
    </div>
  </div>
</template>

<style scoped>
.bg {
  /* リンクボタンやキャラクターを重ねて表示したいので */
  position: relative;
  background-image: url("/images/homepage_background1.jpeg");
  width: 100vw;
  height: 100vh;
  background-size: cover;
  background-position: center;
}
.character-image {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
.nav-container {
  position: absolute;
  /* nav要素の位置調整 */
  top: 75%;
  left: 50%;
  transform: translate(-50%, -50%);
}
.nav {
  /* background-color: #fff; */
  /* border: 2px dotted rgb(96 139 168); */
  display: grid;
  /* 1行3つずつで、超えた分は次の行に折り返す */
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
  text-align: center;
}
.link {
  color: black;
  background-color: #ffff;
  padding: 20px;
  border: 5px solid rgb(28, 226, 24);
  /* 長方形に対してborder-radius: 9999pxにすると、側面だけ丸くできる */
  border-radius: 9999px;
}
</style>
