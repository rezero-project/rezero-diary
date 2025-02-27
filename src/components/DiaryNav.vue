<script setup lang="ts">
import { ref } from 'vue';

defineProps<{
  handleImageChange: (e: Event) => void
  resetForm: () => void
}>()

const currentDate = ref(new Date())

const year = currentDate.value.getFullYear()
const month = String(currentDate.value.getMonth() + 1).padStart(2, "0")
const day = String(currentDate.value.getDate()).padStart(2, "0")

const daysOfWeek = ["日", "月", "火", "水", "木", "金", "土"]
const dayOfWeek = daysOfWeek[currentDate.value.getDay()]

const formattedDate = `${year} / ${month} / ${day} (${dayOfWeek})`

const inputOpenFile = () => {
  document.getElementById("image-input")?.click()
}
</script>

<template>
  <div class="DiaryDate">
    <div class="image-icon">
      <input type="file" id="image-input" hidden accept="image/*" @change="handleImageChange">
      <v-icon icon="mdi-image-outline" size="x-large" @click="inputOpenFile"></v-icon>
    </div>
    <p class="yearMonthDay">{{ formattedDate }}</p>
    <div class="arrow-icons">
      <v-icon icon="mdi-arrow-down-bold-circle-outline" size="x-large"></v-icon>
      <v-icon icon="mdi-arrow-left-top" size="x-large"></v-icon>
      <v-icon icon="mdi-arrow-right-top" size="x-large"></v-icon>
      <v-icon icon="mdi-trash-can-outline" size="x-large" @click="resetForm"></v-icon>
    </div>
  </div>
</template>

<style scoped>
.DiaryDate {
  background-color: #fcf1e2;
  height: 70px;
  width: 100%;
  padding: 6px 20px;
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

.yearMonthDay {
  color: black;
  font-size: 25px;
  text-align: center;
  flex-shrink: 0;
}

.image-icon {
  display: flex;
  align-items: center;
  margin-right: 90px;
}

.arrow-icons {
  display: flex;
  align-items: center;
}
</style>
