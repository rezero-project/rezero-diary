<script setup lang="ts">
import { useRouter } from 'vue-router';

const props = defineProps<{ title: string, to?: string, backgroundColor?: string, color?: string, padding?: string, type?: "button" | "submit" | "reset" }>()

const router = useRouter()

const handleClick = (ev: Event) => {
  ev.preventDefault()
  if (props.to) {
    router.push(props.to)
  }
}
</script>

<template>
  <button :type="type" @click="handleClick" class="button" :style="{ backgroundColor, padding }">
    <span :style="{ color }">{{ title }}</span>
  </button>
</template>

<style scoped>
.button {
  border-radius: 10px;
  border: none;
}
</style>
