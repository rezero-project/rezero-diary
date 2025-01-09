<script setup lang="ts">
import { RouterLink, RouterView } from "vue-router";
import Footer from "./components/Footer.vue";
</script>

<template>
  <p><strong>現在のパス：</strong>{{ $route.fullPath }}</p>
  <nav>
    <RouterLink to="/">Go to Home</RouterLink><br>
    <RouterLink to="/create-user">Create User</RouterLink><br>
    <RouterLink to="set-nickname">Set Nickname</RouterLink>
  </nav>
  <main>
    <RouterView />
  </main>
  <Footer />
</template>

<style scoped></style>
