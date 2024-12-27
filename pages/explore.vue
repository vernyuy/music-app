<template>
  <div class="w-full px-8 pt-12 md:pt-32">
    <div class="w-full">
      <div class="w-full flex justify-center">
        <div class="text-center">
          <h1 class="heading text-3xl md:text-4xl lg:text-6xl uppercase">
            Explore
          </h1>
          <p class="text-xl pt-7">
            Discover the hottest music releases of the year!
          </p>
        </div>
      </div>

      <div class="w-full flex items-center justify-center pt-14 md:pt-20">
        <!-- Grid Container -->
        <div
          class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-7xl px-4"
        >
          <CardComponent
            v-for="(card, index) in cards"
            :key="index"
            :card="card"
            :gradient="gradients[index]"
            :isFullWidth="true"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import CardComponent from "@/components/CardComponent.vue";
import { cards, gradients } from "@/assets/constants";
</script>
