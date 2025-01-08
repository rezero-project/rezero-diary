<script>
export default {
  data() {
    return {
      nickname: "",
    };
  },
  async mounted() {
    const res = await fetch("http://localhost:3000/api/nickname/1")
    const data = await res.json()
    this.nickname = data.nickname
  }
};
</script>

<template>
  <div class="nickname">
    <p>ユーザーネーム</p>
    <p>{{ nickname }}</p>
  </div>
</template>

<style>
.nickname {
  position: absolute;
  left: 250px;
  font-weight: bold;
}
</style>
