<script setup lang="ts">
import TodayFace from "../components/TodayFace.vue";
import NickName from "../components/NickName.vue";
import TodayGoal from "../components/TodayGoal.vue";
import Date from "../components/Date.vue";
</script>

<template>
  <header class="header">
    <TodayFace />
    <NickName />
    <TodayGoal />
    <Date />
  </header>
</template>

<style scoped>
.header {
  background-color: #daefd1;
  height: 130px;
  width: 100%;
  padding: 10px 20px;
  display: inline-block;
  align-items: center;
  z-index: 10;
  position: fixed;
  box-sizing: border-box;
  left: 0;
  top: 0;
  right: 0;
}
</style>
