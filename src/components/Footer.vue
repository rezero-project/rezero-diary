<script setup lang="ts"></script>

<template>
  <footer class="footer">
    <img src="" alt="リゼロ画像" class="footer_image" />
    <p class="footer_paragraph">©︎Re:ゼロから始める人生日記</p>
  </footer>
</template>

<style>
.footer {
  display: flex;
  align-items: center;
  gap: 30px;
  background-color: #daefd1;
  width: 100%;
  height: 10%;
  position: fixed;
  left: 0;
  bottom: 0;
}

.footer_image {
  position: absolute;
}

.footer_paragraph {
  margin: 0 auto;
}
</style>
