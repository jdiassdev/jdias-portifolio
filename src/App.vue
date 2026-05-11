<script setup>
import { RouterView } from 'vue-router';
import LHeader from './components/layout/LHeader.vue';
import LFooter from './components/layout/LFooter.vue';
</script>

<template>
  <div class="min-h-screen flex flex-col">
    <div class="noise-overlay"></div>

    <LHeader />

    <main class="flex-1">
      <RouterView />
    </main>

    <LFooter />
  </div>
</template>