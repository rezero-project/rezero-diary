<script setup lang="ts">
import Button from "./Button.vue";
import { ref } from "vue";

const formData = ref({
  email: "",
  password: "",
});

const onSubmit = async () => {
  try {
    const res = await fetch("http://localhost:3000/api/user/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email: formData.value.email,
        password: formData.value.password,
      }),
    });
    if (!res.ok) {
      const error = await res.json();
      alert(error.error || "ログインに失敗しました。");
      return;
    }
    const data = await res.json();
    console.log("ログイン成功:", data);
    alert("ログインに成功しました！");
  } catch (error) {
    console.error("エラー:", error);
    alert("エラーが発生しました。");
  }
};
</script>

<template>
  <div class="container">
    <form action="" class="form" @submit.prevent="onSubmit">
      <div class="form-group">
        <label for="email">メールアドレス</label>
        <input
          type="email"
          id="email"
          placeholder="example.com"
          v-model="formData.email"
        />
      </div>
      <div class="form-group">
        <label for="password">パスワード</label>
        <input
          type="password"
          id="password"
          placeholder=""
          v-model="formData.password"
        />
      </div>
      <Button
        class="login-button"
        title="ログイン"
        background-color="black"
        color="#fff"
        type="submit"
      />
    </form>
    <a href="/" class="forget-password">パスワードをお忘れですか？</a>
  </div>
  <Button
    title="新規会員登録はこちら"
    background-color="black"
    color="#fff"
    type="button"
    to="/create-user"
  />
</template>

<style scoped>
.container {
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
.create-user {
  margin-bottom: 70px;
}
.forget-password {
  color: black;
  border-bottom: 1px solid black;
}
</style>
