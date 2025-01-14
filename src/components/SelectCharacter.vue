<script setup lang="ts">
import Button from './Button.vue';
import Title from './Title.vue';

</script>

<template>
  <Title title="一緒に成長していくキャラクターを選んでください。" />
  <img src="/images/choshi_1.png" alt="キャラクター1" class="character_image">
  <img src="/images/mark_face_hehe-removebg-preview.png" alt="キャラクター2" class="character_image">
  <img src="/images/image.png" alt="キャラクター3" class="character_image">
  <div class="button">
    <Button title="決定" background-color="black" color="white" type="button" padding="10px 150px" />
  </div>
</template>

<style>
.character_image {
  margin: 0 10px;
}

.button {
  margin: 50px 0 0 0;
}
</style>
