<script setup lang="ts">
import { toRefs } from 'vue';
import Button from './Button.vue';

const props = defineProps<{
  formData: {
    title: string
    content: string
    createdAt: string
    image_path: string
    user_id: string
  }
  selectedImage: string | null
}>()

const { title, content, createdAt, image_path, user_id } = toRefs(props.formData)

const emit = defineEmits(["update:selectedImage"])

const resetForm = () => {
  title.value = ""
  content.value = ""
  createdAt.value = new Date().toISOString()
  image_path.value = ""
  user_id.value = ""

  emit("update:selectedImage", null)
}

defineExpose({ resetForm })

const submitForm = async (e: Event) => {
  e.preventDefault();
  await fetch("http://localhost:3000/api/diaries", {
    method: "POST",
    headers: {
      "Content-type": "application/json"
    },
    body: JSON.stringify({
      title: title.value,
      content: content.value,
      createdAt: createdAt.value,
      image_path: image_path.value,
      user_id: user_id.value
    })
  })

  resetForm()
}

</script>

<template>
  <form class="diary-form" @submit.prevent="submitForm">
    <input type="text" class="diary-text" placeholder="タイトル" v-model="formData.title">
    <textarea name="diary-textarea" id="diary-textarea" class="diary-textarea" rows="7" cols="80" placeholder="日記入力"
      v-model="formData.content"></textarea>
    <div v-if="selectedImage">
      <img :src="selectedImage" alt="選択された画像" class="image-input">
    </div>
    <Button title="送信" background-color="black" color="white" type="submit" />
  </form>
</template>

<style scoped>
.diary-form {
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-top: 200px;
}

.diary-text {
  font-size: x-large;
  border: 1px solid black;
}

.diary-textarea {
  border: 1px solid black;
  border-radius: 5px;
}

.image-input {
  margin: 0 auto;
}
</style>
