<script setup lang="ts">
import Title from './Title.vue';
import Button from './Button.vue';
</script>

<template>
  <Title title="ニックネームの設定" />
  <form action="" class="form">
    <label for="name">ニックネーム</label>
    <input type="text" id="name" class="form_input">
    <Button title="ニックネームを決定する" type="submit" backgroundColor="black" color="white" to="/create-user" />
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
