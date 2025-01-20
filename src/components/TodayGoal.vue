<script setup lang="ts">
import { onMounted, ref } from "vue";

const content = ref("");

onMounted(async() => {
  const res = await fetch("http://localhost:3000/api/user/header/1/goal");
  const data = await res.json();
  content.value = data.content;
});
</script>

<template>
  <div class="today-goal">
    <p>今日の目標：{{ content }}</p>
  </div>
</template>

<style scoped>
.today-goal {
  font-size: 24px;
  font-weight: bold;
  top: 20px;
  position: absolute;
  left: 450px;
}
</style>
