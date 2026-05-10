<script setup>
  import { useRoute } from "vue-router";
  
  const route = useRoute();
</script>

<template>
  <head>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap" rel="stylesheet">
  </head>
  <div id="app" :class="route.name">
    <router-view />
  </div>
</template>

<style scoped></style>
