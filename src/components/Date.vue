<script setup lang="ts">
import { onMounted, ref, onUnmounted } from "vue";

const time = ref("");
const date = ref("");
const weekday = ref("");

let timer: NodeJS.Timeout | null = null;

const updateDateTime = () => {
  const now = new Date();

  date.value = now.toLocaleDateString("ja-JP", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
  weekday.value = now.toLocaleDateString("ja-JP", {
    weekday: "short",
  });

  const options = { hour: "numeric", minute: "2-digit", hour12: true };
  const timeString = now.toLocaleTimeString("en-US", options);
  // AM,PMを時間の前に移動
  const ampm = timeString.slice(-2);
  const timeWithoutAmPm = timeString.slice(0, -3);
  time.value = `${ampm} ${timeWithoutAmPm}`;
};
onMounted(() => {
  updateDateTime();
  timer = setInterval(updateDateTime, 1000);
});
onUnmounted(() => {
  if (timer) {
    clearInterval(timer);
  }
});
</script>

<template>
  <div class="dateTime">
    <span class="time">{{ time }}</span
    ><br />
    <hr class="border" />
    <span class="date"
      >{{ date }}<span class="weekday-font">{{ weekday }}</span></span
    >
  </div>
</template>

<style scoped>
.time {
  font-weight: bold;
  font-size: 28px;
  position: absolute;
  right: 60px;
  top: 16px;
  z-index: 10;
  color: rgb(115, 65, 31);
}
.date {
  font-weight: bold;
  font-size: 20px;
  position: absolute;
  right: 70px;
  top: 80px;
  z-index: 10;
  color: rgb(115, 65, 31);
}
.weekday-font {
  background-color: rgb(115, 65, 31);
  color: #fff;
  border-radius: 20px;
  font-size: 12px;
  padding: 2px 10px;
  position: absolute;
  right: -40px;
  top: 4px;
}
.border {
  width: 200px;
  position: absolute;
  right: 14px;
  top: 58px;
  border: none;
  height: 3px;
  background-color: rgb(115, 65, 31);
}
</style>
