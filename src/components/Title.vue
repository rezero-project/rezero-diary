<script setup lang="ts">
defineProps<{ title: string }>();
</script>

<template>
  <div class="title-container">
    <h1 class="title-text">{{ title }}</h1>
  </div>
</template>

<style scoped>
.title-container {
  text-align: center;
  margin-bottom: 20px;
  padding: 10px;
}

.title-text {
  font-size: 24px;
  color: black;
}
</style>
