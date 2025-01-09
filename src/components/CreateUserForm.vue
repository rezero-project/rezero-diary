<script setup lang="ts">
import { ref } from "vue";
import Title from "./Title.vue";
const formData = ref({
  name: "",
  birthday: "",
  email: "",
  password: "",
  passwordrepeat: "",
});

const onSubmit = async () => {
  if (formData.value.password !== formData.value.passwordrepeat) {
    alert("パスワードが一致しません。");
    return;
  }
  try {
    const response = await fetch("http://localhost:3000/api/user/create", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: formData.value.name,
        birthday: formData.value.birthday,
        email: formData.value.email,
        password: formData.value.password,
      }),
    });
    if (response.ok) {
      alert("登録が成功しました。");
    } else {
      alert("登録が失敗しました。");
    }
  } catch (error) {
    console.error("エラーが発生しました。", error);
    alert("サーバーに接続できませんでした。");
  }
};
</script>
<template>
  <Title title="新規会員登録" />
  <div class="container">
    <form class="form" @submit.prevent="onSubmit">
      <!-- 名前 -->
      <div class="form-group">
        <label for="name">名前</label>
        <input
          type="text"
          id="name"
          placeholder="山田太郎"
          v-model="formData.name"
        />
      </div>
      <!-- 誕生日 -->
      <div class="form-group">
        <label for="bitrhday">生年月日</label>
        <input type="date" id="bitrhday" v-model="formData.birthday" />
      </div>
      <!-- メールアドレス -->
      <div class="form-group">
        <label for="email">メールアドレス</label>
        <input
          type="email"
          id="email"
          placeholder="example@example.com"
          v-model="formData.email"
        />
      </div>
      <!-- パスワード -->
      <div class="form-group">
        <label for="password">パスワード</label>
        <input
          type="password"
          id="password"
          placeholder=""
          v-model="formData.password"
        />
      </div>
      <!-- 確認用パスワード -->
      <div class="form-group">
        <label for="passwordrepeat">パスワード（確認用）</label>
        <input
          type="password"
          id="passwordrepeat"
          v-model="formData.passwordrepeat"
        />
      </div>
      <button type="submit">登録</button>
    </form>
  </div>
</template>

<style scoped>
.container {
  width: 500px;
  text-align: left;
}

.form {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.form-group {
  display: flex;
  flex-direction: column;
}
</style>
