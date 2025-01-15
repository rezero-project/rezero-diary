<script>
export default {
  data() {
    return {
      date: new Date(),
    };
  },
  computed: {
    // フォーマット
    formattedDate() {
      const year = this.date.getFullYear();
      const month = String(this.date.getMonth() + 1).padStart(2, "0");
      return `${year} / ${month}`;
    },
  },
  methods: {
    changeMonth(step) {
      const newDate = new Date(this.date);
      newDate.setMonth(newDate.getMonth() + step); //月の増減
      this.date = newDate;
    },
  },
};
</script>

<template>
  <div class="date-pagination">
    <button class="left-change" @click="changeMonth(-1)">&lang;</button>
    <span class="yearMonth">
      {{ formattedDate }}
    </span>
    <button class="right-change" @click="changeMonth(1)">&rang;</button>
  </div>
</template>

<style>
.date-pagination {
  background-color: #fcf1e2;
  height: 70px;
  width: 100%;
  padding: 6px 20px;
  display: inline-block;
  align-items: center;
  z-index: 10;
  position: fixed;
  box-sizing: border-box;
  left: 0;
  right: 0;
  top: 130px;
  display: flex;
  justify-content: space-between;
}
.yearMonth {
  color: black;
  font-size: 25px;
}
.left-change,
.right-change {
  background-color: #fcf1e2;
  padding-top: 15px;
  font-weight: bold;
  font-size: 25px;
  outline: none;
  border: none;
  cursor: pointer;
}
.left-change:focus,
.right-change:focus {
  outline: none;
  border: none;
}
.left-change:hover,
.right-change:hover {
  color: gray;
}
</style>
