<template>
  <div class="w-full">
    <div
      class="pt-12 md:pt-40 px-8 w-full bg-cover bg-top bg-[url('https://framerusercontent.com/images/rBVjyPoC7PBsJAawr0Prom5k0.png')]"
    >
      <div class="w-full flex justify-center">
        <div class="text-center">
          <h1 class="heading text-3xl md:text-4xl lg:text-6xl uppercase">
            Buy The Art <br />
            From The Artist
          </h1>
          <p class="text-md md:text-xl pt-4 md:pt-8">
            Get access like never before.
          </p>

          <div class="w-full flex justify-center py-10">
            <div class="flex items-center gap-4">
              <NuxtLink
                to="/"
                class="md:px-10 max-md:w-40 text-xl md:text-2xl bg-[#131313] py-2.5 font-bold md:font-medium hover:border-gray-500 rounded-full border-[1.8px] border-transparent"
              >
                For Artists
              </NuxtLink>
              <NuxtLink
                to="/explore"
                class="md:px-10 max-md:w-40 text-xl md:text-2xl bg-[#131313] hover:border-red-500 py-2.5 font-bold md:font-medium border-white rounded-full border-[1.8px] border-transparent"
              >
                Explore
              </NuxtLink>
            </div>
          </div>

          <div class="relative w-full h-full flex justify-center">
            <div class="h-full rounded-lg overflow-hidden">
              <img
                class="w-[250px] md:w-[400px]"
                src="https://framerusercontent.com/images/psyiUOuYoXODyqf1xisxzopqs.png"
                alt="Iphone"
              />
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="px-8 pt-16 md:pt-32">
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

      <marquee class="p-4 text-5xl tracking-[50px] py-24">
        LET'S GET EVEN • LET'S GET EVEN • LET'S GET EVEN • LET'S GET EVEN
      </marquee>

      <PayWhatYouWant />

      <div class="wrapper">
        <div
          v-for="(url, index) in imageUrls"
          :key="index"
          class="item"
          :style="{
            animationDelay: calcAnimationDelay(index),
          }"
        >
          <img :src="url" :alt="'Image ' + index" class="rounded-xl" />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import Carousel from "~/components/Carousel.vue";
import PayWhatYouWant from "~/components/PayWhatYouWant.vue";
import { imageUrls } from "~/assets/constants";

const calcAnimationDelay = (index: number) => {
  const delay = ((30 * (16 - (index + 1))) / 16) * -1;
  return `${delay}s`;
};
</script>

<style>
@keyframes marquee {
  0% {
    transform: translateX(-100%);
  }
  100% {
    transform: translateX(100%);
  }
}

.wrapper {
  width: 90%;
  max-width: 1536px;
  margin-inline: auto;
  position: relative;
  height: 200px;
  margin-top: 5rem;
  overflow: hidden;
  mask-image: linear-gradient(
    to right,
    rgba(0, 0, 0, 0),
    rgba(0, 0, 0, 1) 20%,
    rgba(0, 0, 0, 1) 80%,
    rgba(0, 0, 0, 0)
  );
}

@keyframes scrollLeft {
  to {
    left: -200px;
  }
}

.item {
  width: 200px;
  height: 200px;
  border-radius: 12px;
  position: absolute;
  left: max(calc(200px * 16), 100%);
  animation-name: scrollLeft;
  animation-duration: 30s;
  animation-timing-function: linear;
  animation-iteration-count: infinite;
}
</style>
