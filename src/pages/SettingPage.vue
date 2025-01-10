<script setup lang="ts">
import Title from "../components/Title.vue";
import Setting from "../components/Setting.vue";
</script>

<template>
  <Title title="設定" class="title" />
  <Setting class="setting" />
</template>

<style scoped>
.title {
  margin-top: 100px;
}
.setting {
  margin-bottom: 70px;
}
</style>
