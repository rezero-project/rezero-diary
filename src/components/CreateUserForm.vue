<script setup lang="ts">
import Title from "./Title.vue";
</script>
<template>
  <Title title="新規会員登録" />
  <div class="container">
    <form class="form">
      <!-- 名前 -->
      <div class="form-group">
        <label for="name">名前</label>
        <input type="text" id="name" placeholder="山田太郎" />
      </div>
      <!-- 誕生日 -->
      <div class="form-group">
        <label for="bitrhday">生年月日</label>
        <input type="date" id="bitrhday" />
      </div>
      <!-- メールアドレス -->
      <div class="form-group">
        <label for="email">メールアドレス</label>
        <input type="mail" id="email" placeholder="example@example.com" />
      </div>
      <!-- パスワード -->
      <div class="form-group">
        <label for="password">パスワード</label>
        <input type="password" id="password" placeholder="" />
      </div>
      <!-- 確認用パスワード -->
      <div class="form-group">
        <label for="passwordrepeat">パスワード（確認用）</label>
        <input type="password" id="passwordrepeat" />
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
