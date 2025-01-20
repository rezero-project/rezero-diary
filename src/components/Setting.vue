<script setup="ts">
import { onMounted, ref } from "vue";

//状態管理
const darkMode = ref(false);
const notification = ref(false);
const music = ref(false);

//localStorage
//設定を保存
const saveSetting = () => {
  localStorage.setItem(
    "settings",
    JSON.stringify({
      darkMode: darkMode.value,
      notification: notification.value,
      music: music.value,
    })
  );
};

//設定を取得
const getSetting = () => {
  localStorage.getItem("setting");
  darkMode.value = settings.darkMode || false;
  notification.value = settings.notification || false;
  music.value = settings.music || false;
};

onMounted(() => {
  getSetting();
});

</script>

<template>
  <div class="container">
    <form action="" class="form">
      <div class="setting-nickname">
        <label for="name">ニックネームの変更</label>
        <input type="text" id="name" class="nickname-textbox" name="name" />
      </div>
      <div class="setting-other">
        <div class="setting-group">
          <label for="darkMode" class="label">ダークモード</label>
          <div class="toggle-button">
            <input
              type="checkbox"
              id="darkMode"
              class="toggle-input"
              name="darkMode"
            />
            <label for="darkMode" class="toggle-label" />
          </div>
        </div>
        <div class="setting-group">
          <label for="notification" class="label">通知</label>
          <div class="toggle-button">
            <input
              type="checkbox"
              id="notification"
              class="toggle-input"
              name="notification"
            />
            <label for="notification" class="toggle-label" />
          </div>
        </div>
        <div class="setting-group">
          <label for="music" class="label">音楽の有無</label>
          <div class="toggle-button">
            <input
              type="checkbox"
              id="music"
              class="toggle-input"
              name="music"
            />
            <label for="music" class="toggle-label" />
          </div>
        </div>
      </div>
    </form>
  </div>
</template>

<style>
.container {
  border: solid 1px black;
  padding: 120px 200px;
  border-radius: 10px;
  text-align: justify;
  /* background-color: #121212;
  color: #ffffff; */
}
.nickname-textbox {
  height: 20px;
  width: 250px;
  margin-top: 8px;
}
.setting-nickname {
  display: flex;
  flex-direction: column;
}
.setting-group {
  display: flex;
  flex-direction: column;
}
.setting-other {
  justify-content: space-between;
  display: flex;
  flex-direction: column;
  gap: 30px;
}
.form {
  display: flex;
  flex-direction: column;
  gap: 30px;
}
.toggle-input {
  position: absolute;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  z-index: 5;
  cursor: pointer;
  opacity: 0;
}
.toggle-label {
  width: 65px;
  height: 36px;
  position: relative;
  display: inline-block;
  border-radius: 40px;
  background-color: #b7b4b4;
  transition: 0.4s;
  box-sizing: border-box;
  margin-left: 80px;
  margin-top: -30px;
}
.toggle-label:after {
  content: "";
  position: absolute;
  width: 28px;
  height: 28px;
  border-radius: 100%;
  left: 3px;
  top: 3.2px;
  background-color: #fff;
  transition: 0.4s;
}
.toggle-input:checked + .toggle-label {
  background-color: black;
}

.toggle-input:checked + .toggle-label:after {
  left: 34px;
}
.toggle-button {
  position: relative;
  width: 65px;
  height: 36px;
  margin: auto;
}
</style>
