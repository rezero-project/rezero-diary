<script>
export default {
  data() {
    return {
      image_path: "",
    };
  },
  async mounted() {
    const res = await fetch("http://localhost:3000/api/diary/1");
    const data = await res.json();
    this.image_path = data.image_path;
  },
};
</script>

<template>
  <img :src="`/images/${image_path}`" alt="今日の顔" class="todayFace" width="130px" height="90px" />
</template>

<style>
.todayFace {
  position: absolute;
  left: 50px;
  top: 20px;
}
</style>
