<template>
  <div class="relative w-full">
    <!-- Left Arrow -->
    <button
      v-if="!atStart"
      @click="scrollLeft"
      class="hidden sm:block absolute top-1/2 left-2 transform -translate-y-1/2 z-10 bg-black text-white p-2.5 rounded-full"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="32"
        height="32"
        viewBox="0 0 24 24"
      >
        <path
          fill="currentColor"
          d="m3.55 12l7.35 7.35q.375.375.363.875t-.388.875t-.875.375t-.875-.375l-7.7-7.675q-.3-.3-.45-.675T.825 12t.15-.75t.45-.675l7.7-7.7q.375-.375.888-.363t.887.388t.375.875t-.375.875z"
        />
      </svg>
    </button>

    <!-- Card Container -->
    <div
      ref="cardContainer"
      class="flex sm:flex-row gap-6 flex-col overflow-x-scroll scrollbar-hide scroll-smooth"
      @scroll="checkScroll"
    >
      <CardComponent
        v-for="(card, index) in cards"
        :key="index"
        :card="card"
        :gradient="gradients[index]"
        :isFullWidth="false"
      />
    </div>

    <!-- Right Arrow -->
    <button
      v-if="!atEnd"
      @click="scrollRight"
      class="hidden sm:block absolute top-1/2 right-2 transform -translate-y-1/2 z-10 bg-black text-white p-2.5 rounded-full"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="32"
        height="32"
        viewBox="0 0 24 24"
      >
        <path
          fill="currentColor"
          d="m14.475 12l-7.35-7.35q-.375-.375-.363-.888t.388-.887t.888-.375t.887.375l7.675 7.7q.3.3.45.675t.15.75t-.15.75t-.45.675l-7.7 7.7q-.375.375-.875.363T7.15 21.1t-.375-.888t.375-.887z"
        />
      </svg>
    </button>
  </div>
</template>

<script lang="ts" setup>
import { ref, onMounted, nextTick } from "vue";
import CardComponent from "@/components/CardComponent.vue";
import { cards, gradients } from "@/assets/constants";

// Refs and State
const cardContainer = ref<HTMLDivElement | null>(null);
const atStart = ref<boolean>(true);
const atEnd = ref<boolean>(false);

// Methods
const scrollLeft = (): void => {
  if (cardContainer.value) {
    const container = cardContainer.value;
    const cardWidth = container.firstElementChild?.clientWidth || 0;
    const scrollAmount = cardWidth * 2; // Move 2 full cards
    container.scrollBy({ left: -scrollAmount, behavior: "smooth" });
  }
};

const scrollRight = (): void => {
  if (cardContainer.value) {
    const container = cardContainer.value;
    const cardWidth = container.firstElementChild?.clientWidth || 0;
    const scrollAmount = cardWidth * 2; // Move 2 full cards
    container.scrollBy({ left: scrollAmount, behavior: "smooth" });
  }
};

const checkScroll = (): void => {
  if (cardContainer.value) {
    const container = cardContainer.value;
    atStart.value = container.scrollLeft === 0;
    atEnd.value =
      container.scrollLeft + container.offsetWidth >= container.scrollWidth - 1;
  }
};

// Lifecycle
onMounted(() => {
  nextTick(() => {
    checkScroll();
  });
});
</script>

<style>
.scrollbar-hide::-webkit-scrollbar {
  display: none;
}
.scrollbar-hide {
  -ms-overflow-style: none;
  scrollbar-width: none;
}
</style>
