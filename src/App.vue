<template>
  <RouterView class="flex-1" />

  <footer class="flex justify-between window title-bar">
    <img src="@/assets/gnome-panel.png" />

    <div
      class="h-full w-20 bg-blue-v-3 shadow-blue-inner-light border-l border-black"
    ></div>
  </footer>
</template>

<script setup lang="ts">
import { RouterView } from 'vue-router'
</script>

<style scoped></style>
