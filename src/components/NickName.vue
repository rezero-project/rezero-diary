<script setup lang="ts">
import { onMounted, ref } from "vue";

const nicknameData = ref("");
const errorMessage = ref("");

onMounted(async () => {
  try {
    const res = await fetch("http://localhost:3000/api/user/header/1/nickname");

    if (!res.ok) {
      throw new Error("ユーザー情報の取得に失敗しました。");
    }
    const data = await res.json();
    if (data && data.nickname) {
      nicknameData.value = data.nickname;
    } else {
      throw new Error("ニックネームが見つかりません。");
    }
  } catch (error) {
    console.error("エラー", error);

    errorMessage.value =
      error instanceof Error ? error.message : "不明なエラー";
  }
});
</script>

<template>
  <div class="nickname">
    <p>ユーザーネーム</p>
    <p>{{ nicknameData }}</p>
  </div>
</template>

<style scoped>
.nickname {
  position: absolute;
  left: 250px;
  font-weight: bold;
}
</style>
