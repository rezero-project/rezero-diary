<script setup lang="ts">
import { ref } from 'vue';
import Button from './Button.vue';
import Title from './Title.vue';

const selectedCharacter = ref<number | null>(null)

const userId = ref<number>(1)

const selectCharacter = (id: number) => {
  selectedCharacter.value = id
}

const handleSubmit = async () => {
  if (!selectedCharacter.value) {
    alert("キャラクターが選択されていません")
    return;
  }

  // 2桁のゼロ埋め形式でデータを保存
  const formattedCharacterId = selectedCharacter.value.toString().padStart(2, "0");

  await fetch("http://localhost:3000/api/user/character_id", {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ id: userId.value, character_id: formattedCharacterId })
  })
}

</script>

<!-- 手動でidを設定してUserのcharacter_idを書き換わるようにしている。キャラクターデータを保存したらidで取得するように変更 -->
<template>
  <Title title="一緒に成長していくキャラクターを選んでください。" />
  <form action="">
    <img src="/images/choshi_1.png" alt="キャラクター1" class="character_image" :class="{ selected: selectedCharacter === 1 }"
      @click="selectCharacter(1)">
    <img src="/images/mark_face_hehe-removebg-preview.png" alt="キャラクター2" class="character_image"
      :class="{ selected: selectedCharacter === 2 }" @click="selectCharacter(2)">
    <img src="/images/image.png" alt="キャラクター3" class="character_image" :class="{ selected: selectedCharacter === 3 }"
      @click="selectCharacter(3)">
    <div class="button">
      <Button title="決定" @click="handleSubmit" background-color="black" color="white" type="submit"
        padding="10px 150px" />
    </div>
  </form>
</template>

<style>
.character_image {
  margin: 0 10px;
}

.character_image.selected {
  border: 2px solid aqua;
}

.button {
  margin: 50px 0 0 0;
}
</style>
