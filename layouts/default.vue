<template>
  <div class="bg-black text-[#d4d4d4]">
    <Header />
    <div class="w-full">
      <slot />
    </div>
    <Footer />
  </div>
</template>

<script setup lang="ts">
import Header from "~/components/Header.vue";
import Footer from "~/components/Footer.vue";
</script>
