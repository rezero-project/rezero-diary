<script setup lang="ts">
import AchievementItem from "../components/AchievementItem.vue";
import Title from "../components/Title.vue";
</script>

<template>
  <div class="achievements-view">
    <Title title="達成項目" class="achievements-view__title" />
    <div>
      <AchievementItem />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.achievements-view {
  display: flex;
  flex-direction: column;
  /* paddingをなくしてmarginで高さ方向に押し出せば見切れない */
  // タイトルと達成項目の間
  gap: 2rem;
  padding: 0;
  margin: 10rem 0;
  border: 0;
  &__title {
    font-size: 2rem;
    margin-bottom: 1rem;
  }
}
</style>
