<script setup lang="ts">
import { onMounted, ref } from "vue";

const characterImageUrl = ref<string | undefined>("");
const getCharacterImageUrl = async () => {
  try {
    const response = await fetch(
      "http://localhost:3000/api/user/header/1/diary"
    );
    if (!response.ok) {
      throw new Error("ユーザーのキャラクターURLを取得できませんでした。");
    }
    const data = await response.json();
    characterImageUrl.value = data.image_path;
  } catch (error) {
    console.error("エラーが発生しました。", error);
  }
};

onMounted(() => {
  getCharacterImageUrl();
});
</script>

<template>
  <img :src="`/images/${characterImageUrl}`" alt="キャラクター画像" />
</template>

<style scoped></style>
