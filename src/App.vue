<script setup lang="ts">
import { RouterLink, RouterView } from "vue-router";
import Footer from "./components/Footer.vue";
</script>

<template>
  <p><strong>現在のパス：</strong>{{ $route.fullPath }}</p>
  <nav>
    <RouterLink to="/">Go to Home</RouterLink>
    <RouterLink to="/create-user">Create User</RouterLink>
  </nav>
  <main><RouterView /></main>
  <Footer />
</template>

<style scoped></style>
