<script setup lang="ts">
import { onMounted, ref } from "vue";
import Button from "./Button.vue";
// import { initializeDarkMode } from "../utils/theme";

// onMounted(() => {
//   initializeDarkMode();
// });

//状態管理
const nickname = ref("");
const darkMode = ref(false);
const notification = ref(false);
const music = ref(false);
const backgroundMusic = ref<HTMLAudioElement | null>(null);

//localStorageに文字列化した設定を保存
const saveSetting = () => {
  localStorage.setItem(
    "settings",
    JSON.stringify({
      // nickname: nickname.value,
      darkMode: darkMode.value,
      notification: notification.value,
      music: music.value,
    })
  );
};
saveSetting();
//設定をlocalStorageから取得してrefに反映
const getSetting = () => {
  const settings = localStorage.getItem("settings");
  if (settings) {
    //JSON.parseで文字列をオブジェクトに直し、refに反映
    const parseSetting = JSON.parse(settings);
    // nickname.value = parseSetting.nickname || "";
    darkMode.value = parseSetting.darkMode || false;
    notification.value = parseSetting.notification || false;
    music.value = parseSetting.music || false;
  }
};

// ニックネームをデータベースに反映
const updateNickName = async () => {
  const res = await fetch(
    `http://localhost:3000/api/settingNewNickName/1/nickname`,
    {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ nickname: nickname.value }),
    }
  );
  if (res.ok) {
    alert("更新に成功しました。");
  } else {
    alert("更新に失敗しました。");
  }
};

// 音楽の再生、停止
const handleMusic = () => {
  if (backgroundMusic.value) {
    if (music.value) {
      backgroundMusic.value.play();
    } else {
      backgroundMusic.value.pause();
    }
  }
};

onMounted(() => {
  getSetting();
  // 初期化時に音楽の状態を反映
  backgroundMusic.value = document.getElementById(
    "background-music"
  ) as HTMLAudioElement | null;
  if (music.value && backgroundMusic.value) {
    backgroundMusic.value.pause();
  }
});
</script>

<!-- ニックネームはデータベースへ保存 -->
<template>
  <div :class="{ container: darkMode }">
    <form class="form" @submit.prevent="updateNickName">
      <div class="setting-nickname">
        <label for="name">ニックネームの変更</label>
        <input
          type="text"
          id="name"
          class="nickname-textbox"
          name="name"
          v-model="nickname"
        />
        <!-- valueに変更前のニックネーム入れたい -->
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
              v-model="notification"
              @change="saveSetting"
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
              v-model="music"
              @change="handleMusic"
            />
            <label for="music" class="toggle-label" />
            <audio
              id="background-music"
              src="background-music.mp3"
              loop
            ></audio>
          </div>
          <Button
            background-color="black"
            title="更新"
            color="#fff"
            type="submit"
          >
          </Button>
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
  z-index: 1;
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
