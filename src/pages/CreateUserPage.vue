<script setup lang="ts">
import CreateUserForm from "../components/CreateUserForm.vue";
import Title from "../components/Title.vue";
</script>

<template>
  <div class="create-user-form-view">
    <Title title="新規会員登録" class="create-user-form-view__title" />
    <CreateUserForm />
  </div>
</template>

<style lang="scss" scoped>
.create-user-form-view {
  border: 0;
  display: flex;
  flex-direction: column;
  padding: 0;
  margin: 10rem 0px;
  &__title {
    font-size: 2rem;
    margin-bottom: 1rem;
  }
}
</style>
