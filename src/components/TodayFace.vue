<script setup lang="ts">
import { onMounted, ref } from "vue";

//リアクティブに管理（リアルタイム更新）
const imagePath = ref("");

onMounted(async () => {
  const res = await fetch("http://localhost:3000/api/user/header/1/diary");
  const data = await res.json();
  imagePath.value = data.image_path;
  console.log(imagePath.value); // レスポンスの中身を確認
});
</script>
<template>
  <img
    :src="`/images/${imagePath}`"
    alt="今日の顔"
    class="todayFace"
    width="130px"
    height="90px"
  />
</template>

<style>
.todayFace {
  position: absolute;
  left: 50px;
  top: 20px;
}
</style>
