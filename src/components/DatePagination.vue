<script setup lang="ts">
import { ref, computed } from "vue";

const date = ref(new Date());

// フォーマット
const formattedDate = computed(() => {
  const year = date.value.getFullYear();
  const month = String(date.value.getMonth() + 1).padStart(2, "0");
  return `${year} / ${month}`;
});

const changeMonth = (step: number) => {
  const newDate = new Date(date.value);
  newDate.setMonth(newDate.getMonth() + step); //月の増減
  date.value = newDate;
};
</script>

<template>
  <div class="date-pagination">
    <button class="left-change" @click="changeMonth(-1)">&lang;</button>
    <span class="yearMonth">
      {{ formattedDate }}
    </span>
    <button class="right-change" @click="changeMonth(1)">&rang;</button>
  </div>
</template>

<style>
.date-pagination {
  background-color: #fcf1e2;
  height: 70px;
  width: 100%;
  padding: 6px 20px;
  display: inline-block;
  align-items: center;
  z-index: 10;
  position: fixed;
  box-sizing: border-box;
  left: 0;
  right: 0;
  top: 130px;
  display: flex;
  justify-content: space-between;
}
.yearMonth {
  color: black;
  font-size: 25px;
}
.left-change,
.right-change {
  background-color: #fcf1e2;
  padding-top: 15px;
  font-weight: bold;
  font-size: 25px;
  outline: none;
  border: none;
  cursor: pointer;
}
.left-change:focus,
.right-change:focus {
  outline: none;
  border: none;
}
.left-change:hover,
.right-change:hover {
  color: gray;
}
</style>
