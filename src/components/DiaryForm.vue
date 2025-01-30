<script setup lang="ts">
import { reactive, ref } from 'vue';
import Button from './Button.vue';

const selectedImage = ref<string | null>(null)
const formData = reactive({
  title: "",
  content: "",
  createdAt: new Date().toISOString(),
  image_path: "",
  user_id: ""
})

const handleImageChange = (ev: Event) => {
  const file = (ev.target as HTMLInputElement).files?.[0]
  if (file) {
    formData.image_path = file.name
    const reader = new FileReader()
    reader.onload = () => {
      selectedImage.value = reader.result as string
    }
    reader.readAsDataURL(file)
  }
}

const submitForm = async (e: Event) => {
  e.preventDefault();
  await fetch("http://localhost:3000/api/diaries", {
    method: "POST",
    headers: {
      "Content-type": "application/json"
    },
    body: JSON.stringify({
      title: formData.title,
      content: formData.content,
      createdAt: formData.createdAt,
      image_path: formData.image_path,
      user_id: formData.user_id
    })
  })

}

</script>

<template>
  <form class="diary-form" @submit.prevent="submitForm">
    <input type="text" class="diary-text" placeholder="タイトル" v-model="formData.title">
    <textarea name="diary-textarea" id="diary-textarea" class="diary-textarea" rows="7" cols="80" placeholder="日記入力"
      v-model="formData.content"></textarea>
    <input type="file" id="image-input" accept="image/*" @change="handleImageChange">
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
