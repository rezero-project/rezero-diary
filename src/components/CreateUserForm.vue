<script setup lang="ts">
import { ref } from "vue";
import Button from "./Button.vue";
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
    console.log(response);

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
  <div class="create-user-form">
    <form class="create-user-form__body" @submit.prevent="onSubmit">
      <!-- 名前 -->
      <div class="create-user-form__group">
        <label class="create-user-form__label" for="name">名前</label>
        <input
          class="create-user-form__input"
          type="text"
          id="name"
          placeholder="山田太郎"
          v-model="formData.name"
        />
      </div>
      <!-- 誕生日 -->
      <div class="create-user-form__group">
        <label class="create-user-form__label" for="birthday">生年月日</label>
        <input
          class="create-user-form__input"
          type="date"
          id="birthday"
          v-model="formData.birthday"
        />
      </div>
      <!-- メールアドレス -->
      <div class="create-user-form__group">
        <label class="create-user-form__label" for="email"
          >メールアドレス</label
        >
        <input
          class="create-user-form__input"
          type="email"
          id="email"
          placeholder="example@example.com"
          v-model="formData.email"
        />
      </div>
      <!-- パスワード -->
      <div class="create-user-form__group">
        <label class="create-user-form__label" for="password">パスワード</label>
        <input
          class="create-user-form__input"
          type="password"
          id="password"
          placeholder=""
          v-model="formData.password"
        />
      </div>
      <!-- 確認用パスワード -->
      <div class="create-user-form__group">
        <label class="create-user-form__label" for="passwordrepeat"
          >パスワード（確認用）</label
        >
        <input
          class="create-user-form__input"
          type="password"
          id="passwordrepeat"
          v-model="formData.passwordrepeat"
        />
      </div>
      <div class="create-user-form__button">
        <Button
          background-color="black"
          title="登録"
          color="white"
          type="submit"
        />
      </div>
    </form>
  </div>
</template>

<style lang="scss" scoped>
.create-user-form {
  background-color: #f9f9f9;
  border-radius: 10px;
  padding: 2.5rem 5rem;
  max-width: 600px;
  margin: auto;

  &__body {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
  }

  &__group {
    display: flex;
    flex-direction: column;
  }
  &__label {
    font-size: 1rem;
    margin-bottom: 0.5rem;
  }
  &__input {
    font-size: 1rem;
    padding: 0.75rem;
    border: 1px solid #ccc;
    border-radius: 5px;
  }
  &__button {
    display: flex;
    justify-content: center;
    margin-top: 1.5rem;
  }
}
</style>
