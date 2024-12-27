<template>
  <nav
    :class="showMenu && 'bg-[#131313] md:bg-black md:bg-opacity-40'"
    class="md:fixed w-full z-20 top-0 start-0 p-5 md:px-3.5 md:py-6 transition-all ease-in-out duration-700"
  >
    <div
      class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto transition-all ease-in-out duration-700"
    >
      <NuxtLink to="/" class="flex items-center space-x-10 rtl:space-x-reverse">
        <img
          src="data:image/svg+xml;utf8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20xmlns%3Axlink%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%22%20viewBox%3D%220%200%20121.143%2024%22%3E%3Cpath%20d%3D%22M%2086.963%205.49%20L%2086.963%200%20L%2063.34%200%20L%2063.34%2023.294%20L%2086.963%2023.294%20L%2086.963%2017.684%20L%2071.302%2017.684%20L%2071.302%2013.788%20L%2083.579%2013.788%20L%2083.579%209.106%20L%2071.302%209.106%20L%2071.302%205.49%20Z%22%20fill%3D%22rgb(224%2C48%2C38)%22%3E%3C%2Fpath%3E%3Cpath%20d%3D%22M%2044.395%2015.466%20L%2043.75%2015.466%20L%2036.975%200%20L%2027.823%200%20L%2038.519%2023.298%20L%2048.986%2023.269%20C%2049.119%2023.269%2049.248%2023.182%2049.31%2023.044%20L%2059.145%200%20L%2050.746%200%20Z%22%20fill%3D%22rgb(224%2C48%2C38)%22%3E%3C%2Fpath%3E%3Cpath%20d%3D%22M%20112.479%200.018%20L%20112.479%2013.24%20L%2099.919%200.026%20L%2091.162%200.026%20L%2091.162%2023.283%20L%2099.174%2023.283%20L%2099.174%209.166%20L%20112.708%2023.287%20L%20120.491%2023.287%20L%20120.491%200.018%20Z%22%20fill%3D%22rgb(224%2C48%2C38)%22%3E%3C%2Fpath%3E%3Cpath%20d%3D%22M%200%200%20L%200%2023.294%20L%2023.623%2023.294%20L%2023.623%2017.684%20L%207.962%2017.684%20L%207.962%2013.788%20L%2020.239%2013.788%20L%2020.239%209.106%20L%207.962%209.106%20L%207.962%205.49%20L%2023.623%205.49%20L%2023.623%200%20Z%22%20fill%3D%22rgb(224%2C48%2C38)%22%3E%3C%2Fpath%3E%3C%2Fsvg%3E"
          class="h-6 md:h-7"
          alt="Music app"
        />
        <ul class="max-md:hidden flex gap-9">
          <li class="group text-center font-medium">
            <NuxtLink to="/explore">
              <span>Explore</span>
              <div class="w-full flex justify-center">
                <span
                  class="hidden group-hover:block bg-red-500 h-[3px] w-10 rounded-full mt-[2px]"
                ></span>
              </div>
            </NuxtLink>
          </li>
          <li class="group text-center font-medium">
            <span>My Library</span>
            <div class="w-full flex justify-center">
              <span
                class="hidden group-hover:block bg-red-500 h-[3px] w-10 rounded-full mt-[2px]"
              ></span>
            </div>
          </li>
        </ul>
      </NuxtLink>

      <button
        type="button"
        class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden"
        @click="toggleMenu"
      >
        <div
          v-if="!showMenu"
          class="flex flex-col justify-between w-24 cursor-pointer"
        >
          <span class="block w-full h-[3px] bg-white rounded"></span>
          <span class="block w-full h-[3px] bg-white rounded mt-[5px]"></span>
        </div>
        <svg
          v-else
          xmlns="http://www.w3.org/2000/svg"
          width="40"
          height="40"
          viewBox="0 0 16 16"
        >
          <path
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="1.7"
            d="m11.25 4.75l-6.5 6.5m0-6.5l6.5 6.5"
          />
        </svg>
      </button>

      <div
        v-if="showMenu"
        class="w-full md:block md:w-auto overflow-hidden transition-all ease-in-out duration-200"
      >
        <ul
          class="font-medium md:flex md:items-center flex flex-col py-4 md:p-0 mt-4 rounded-lg md:flex-row md:space-x-6 rtl:space-x-reverse md:mt-0 md:border-0"
        >
          <li class="hidden max-md:block">
            <NuxtLink
              to="/explore"
              class="md:px-6 max-md:text-2xl md:bg-black py-[6px] font-bold md:font-medium hover:border-white rounded-full border-[1.8px] border-transparent"
            >
              Explore
            </NuxtLink>
          </li>
          <li class="hidden max-md:block my-4">
            <NuxtLink
              to="/"
              class="md:px-6 max-md:text-2xl md:bg-black py-[6px] font-bold md:font-medium hover:border-white rounded-full border-[1.8px] border-transparent"
            >
              My Library
            </NuxtLink>
          </li>
          <li>
            <NuxtLink
              to="/"
              class="md:px-6 max-md:text-2xl md:bg-black py-[6px] font-bold md:font-medium hover:border-white rounded-full border-[1.8px] border-transparent"
            >
              For Artists
            </NuxtLink>
          </li>
          <li
            class="h-5 hidden md:block bg-gray-50 w-[1.5px] bg-opacity-30"
          ></li>
          <li
            class="md:flex max-md:mt-5 md:items-center justify-center gap-3 max-md:mb-2"
          >
            <NuxtLink
              to="/auth"
              class="px-6 py-[6px] max-md:w-full font-medium hover:border-white bg-black nd:bg-transparent rounded-full border-[1.8px] border-transparent"
            >
              Log In
            </NuxtLink>
            <NuxtLink
              to="/auth"
              class="px-6 max-md:mt-3 py-[6px] max-md:w-full font-medium hover:border-white bg-black nd:bg-transparent rounded-full hover:border-[1.8px] border-[1.5px] border-gray-50 border-opacity-45"
            >
              Sign Up
            </NuxtLink>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from "vue";

// State
const showMenu = ref(true);
const screenWidth = ref(0);

// Methods
const handleResize = () => {
  screenWidth.value = window.innerWidth;
  if (
    (screenWidth.value > 767 && !showMenu.value) ||
    (screenWidth.value <= 767 && showMenu.value)
  ) {
    showMenu.value = !showMenu.value;
  }
};

const toggleMenu = () => {
  showMenu.value = !showMenu.value;
};

// Lifecycle Hooks
onMounted(() => {
  window.addEventListener("resize", handleResize);
  if (process.client && window.innerWidth <= 767) {
    showMenu.value = false;
  }
});

onBeforeUnmount(() => {
  window.removeEventListener("resize", handleResize);
});
</script>

<style scoped>
/* Add any additional custom styles here */
</style>
