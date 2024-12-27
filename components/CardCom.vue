<template>
  <div
    class="flex-shrink-0 p-4 snap-center rounded-xl hover:cursor-pointer w-full"
    :style="{ background: gradient }"
    @click="handleClick"
  >
    <div class="shadow-lg overflow-hidden">
      <img
        :src="card.image"
        alt="Card Image"
        class="w-full h-80 rounded-xl object-cover"
      />
      <div class="p-4">
        <div
          class="flex justify-between items-center font-bold card-title uppercase text-2xl md:text-3xl pb-2 pt-4"
        >
          <h3>{{ card.title }}</h3>
          <span class="text-xl md:text-2xl"> ${{ card.amount }} </span>
        </div>
        <p>{{ card.description }}</p>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { defineProps } from "vue";

// Define props for the card data and gradient
const props = defineProps<{
  card: {
    image: string;
    title: string;
    description: string;
    amount: number;
  };
  gradient: string;
}>();

// Emit a custom event when a card is clicked
const handleClick = () => {
  console.log("card-clicked", props.card);
};
</script>
