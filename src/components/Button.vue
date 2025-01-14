<script setup lang="ts">

defineProps<{ title: string, to?: string, backgroundColor?: string, color?: string, padding?: string, type?: "button" | "submit" | "reset" }>()

</script>

<template>
  <button :type="type || 'button'" class="button" :style="{ backgroundColor, padding }">
    <span :style="{ color }">{{ title }}</span>
  </button>
</template>

<style scoped>
.button {
  border-radius: 10px;
  border: none;
}
</style>
