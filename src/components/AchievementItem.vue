<script setup lang="ts">
import { onMounted, ref } from "vue";

interface AchievementItemType {
  id: number;
  title: string;
  progress: number;
  user_id: string;
}

const achievementItems = ref<AchievementItemType[]>([]);
const getAchievementItems = async () => {
  try {
    const response = await fetch(
      "http://localhost:3000/api/achievements/get-items"
    );
    if (!response.ok) {
      throw new Error("達成項目の取得に失敗しました。");
    }
    achievementItems.value = await response.json();
  } catch (error) {
    console.error("エラーが発生しました。", error);
  }
};

onMounted(() => {});
getAchievementItems();
</script>

<template>
  <div v-for="item in achievementItems" :key="item.id" class="achievement-item">
    <img src="/images/not_achieved.png" alt="" width="200px" height="200px" />
    <p>{{ item.title }}</p>
  </div>
</template>

<style scoped></style>
