<script setup lang="ts">
import { ref } from 'vue';
import DiaryForm from '../components/DiaryForm.vue';
import DiaryNav from '../components/DiaryNav.vue';
import Title from '../components/Title.vue';
import { useImageUpload } from '../composables/useImageUpload';

const { selectedImage, formData, handleImageChange } = useImageUpload()
const diaryFormRef = ref()

const resetForm = () => {
  diaryFormRef.value?.resetForm()
}
</script>

<template>
  <Title title="日記" />
  <DiaryNav :handleImageChange="handleImageChange" :resetForm="resetForm" />
  <DiaryForm v-model:selectedImage="selectedImage" :formData="formData" ref="diaryFormRef" />
</template>

<style scoped></style>
