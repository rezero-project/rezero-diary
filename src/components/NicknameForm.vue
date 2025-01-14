<script setup lang="ts">
import Title from './Title.vue';
import Button from './Button.vue';
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const nickname = ref("")
const router = useRouter()

const handleSubmit = async () => {
  console.log("イベントが発火しました")
  const res = await fetch("http://localhost:3000/api/user/nickname", {
    method: "PATCH",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ id: 1, nickname: nickname.value })
  });

  if (res.ok) {
    router.push("/home")
  } else {
    console.error("ニックネームの保存に失敗")
  }
}
</script>

<template>
  <Title title="ニックネームの設定" />
  <form class="form" @submit.prevent="handleSubmit">
    <label for="name">ニックネーム</label>
    <input type="text" id="name" class="form_input" v-model="nickname">
    <Button title="ニックネームを決定する" type="submit" backgroundColor="black" color="white" />
  </form>
</template>

<style scoped>
.form {
  text-align: left;
  display: flex;
  flex-direction: column;
  width: 500px;
}

.form_input {
  margin-bottom: 20px;
}
</style>
