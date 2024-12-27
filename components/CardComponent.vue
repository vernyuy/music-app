<template>
  <div
    class="flex-shrink-0 p-4 snap-center rounded-xl hover:cursor-pointer"
    :class="{
      'w-full': isFullWidth,
      'sm:w-1/2 md:w-[calc((100%-32px)/2.5)] lg:w-[calc((100%-32px)/3.5)]':
        !isFullWidth,
    }"
    :style="{ background: gradient }"
    @click="stripePayment"
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
import Stripe from "stripe";

// Define props for the card data and gradient
const props = defineProps<{
  card: {
    image: string;
    title: string;
    description: string;
    amount: number;
  };
  gradient: string;
  isFullWidth: boolean;
}>();

const stripePayment = async () => {
  console.log("card-clicked", props.card);

  const stripe = new Stripe(
    "sk_test_51NVJ4RECpTjJRRCodmsyMIK613vbK0ElhyUwMReszzx6qs8FzZQDdi8VtZ5DjYkn5gNQryjTDMNkf01QLKVwxwTP00DT8HavNL",
    {
      typescript: true,
      //   apiVersion: "2023-10-16",
    }
  );

  const items = [
    {
      quantity: 1,
      price_data: {
        currency: "usd",
        unit_amount: props.card.amount * 100,
        product_data: {
          name: props.card.title,
          description: props.card.description,
          images: [props.card.image],
        },
      },
    },
  ];

  const session = await stripe.checkout.sessions.create({
    payment_method_types: ["card"],
    line_items: items,
    mode: "payment",
    success_url: "http://localhost:3000",
  });
  if (session.url) {
    console.log("Success");
    window.open(session.url, "_blank");
  } else {
    console.log("failed");
  }
};
</script>
