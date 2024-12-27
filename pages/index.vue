<template>
  <div class="w-full pt-32">
    <div class="w-full">
      <div class="w-full flex justify-center">
        <div class="text-center">
          <h1 class="heading text-2xl md:text-3xl lg:text-5xl uppercase">
            Get <br class="max-md:block hidden" />Rewarded <br />
            With Access
          </h1>
          <p class="text-xl pt-7">
            Connect with your favorite artists and other fans.
          </p>
        </div>
      </div>
      <div class="md:ml-5 lg:ml-32 pt-10 md:pt-16">
        <Carousel />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import Carousel from "~/components/Carousel.vue";
</script>
