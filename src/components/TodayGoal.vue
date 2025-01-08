<script>
export default {
  data() {
    return {
      content: "",
    };
  },
  async mounted() {
    const res = await fetch("http://localhost:3000/api/goal/1")
    const data = await res.json()
    this.content = data.content
  },
};
</script>

<template>
  <div class="today-goal">
    <p>今日の目標：{{ content }}</p>
  </div>
</template>

<style>
.today-goal {
  font-size: 24px;
  font-weight: bold;
  top: 20px;
  position: absolute;
  left: 450px;
}
</style>
