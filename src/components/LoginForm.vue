<script setup lang="ts">
import Button from "./Button.vue";
</script>

<template>
  <div class="container">
    <form action="" class="form">
      <div class="form-group">
        <label for="email">メールアドレス</label>
        <input type="text" id="email" placeholder="example.com" />
      </div>
      <div class="form-group">
        <label for="password">パスワード</label>
        <input type="text" id="password" placeholder="" />
      </div>
      <Button
        class="login-button"
        title="ログイン"
        background-color="black"
        color="#fff"
        type="submit"
        to="/"
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
