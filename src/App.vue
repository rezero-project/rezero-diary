<script setup lang="ts">
import { RouterLink, RouterView } from "vue-router";
import Footer from "./components/Footer.vue";
import Header from "./components/Header.vue";
</script>

<template>
  <Header />
  <p><strong>現在のパス：</strong>{{ $route.fullPath }}</p>
  <nav>
    <RouterLink to="/">Go to Home</RouterLink><br />
    <RouterLink to="/create-user">Create User</RouterLink><br />
    <RouterLink to="set-nickname">Set Nickname</RouterLink><br />
    <RouterLink to="/login-user">Login</RouterLink><br />
    <RouterLink to="/setting">Setting</RouterLink><br />
    <RouterLink to="select-character">Select Character</RouterLink><br />
    <RouterLink to="/achievements">Achievements Page</RouterLink>
  </nav>
  <main>
    <RouterView />
  </main>
  <Footer />
</template>

<style scoped></style>
