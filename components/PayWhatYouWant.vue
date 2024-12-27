<template>
  <div class="w-full flex justify-center">
    <div class="w-full max-w-screen-lg px-4 py-8">
      <div class="flex flex-col md:flex-row gap-8 items-start">
        <!-- Left Section (Text and Icons) -->
        <div class="flex-1">
          <!-- Title Section -->
          <div
            class="text-5xl font-bold leading-tight text-center md:text-left heading uppercase"
          >
            <h2 class="">
              Pay What <br class="hidden md:inline" />
              You Want,
            </h2>
            <h2 class="">
              Pay How <br class="hidden md:inline" />
              You Want.
            </h2>
          </div>

          <!-- Description Section -->
          <div class="mt-4">
            <p class="mb-2">
              EVEN makes it easy to buy the art directly from your favorite
              artists.
            </p>
            <p>
              We support 22 global payment methods, over 135 currencies, and
              flexible payment options, including:
            </p>
          </div>

          <!-- Payment Icons Section -->
          <div class="mt-8 flex flex-wrap gap-4">
            <div
              v-for="icon in paymentIcons"
              :key="icon.alt"
              class="flex items-center justify-center px-10 py-2 bg-[#131313] rounded-lg"
            >
              <img :src="icon.src" :alt="icon.alt" class="h-7 object-cover" />
            </div>
          </div>
        </div>

        <!-- Right Section (Video) -->
        <div class="flex-1">
          <video
            src="https://framerusercontent.com/assets/AvG3aTdw1fT08jNhfCykFCEyec.mp4"
            loop
            autoplay
            muted
            playsinline
            class="w-full rounded-lg"
            poster="https://framerusercontent.com/images/nFJVnt8czEbQpZZq3XHiMPORw.png"
          ></video>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      paymentIcons: [
        {
          src: "https://framerusercontent.com/images/hQOrXnaaLng4bEC4b6AjGYeHnoY.png",
          alt: "Mastercard",
        },
        {
          src: "https://framerusercontent.com/images/VEFmOMVNTiThXqGPclrHd7muQ8.png",
          alt: "Visa",
        },
        {
          src: "https://framerusercontent.com/images/r3DfuZfdis4hZdnTspjZEZqRog.png",
          alt: "American Express",
        },
        {
          src: "https://framerusercontent.com/images/dXLRjFAJmQaqNVLCo79IFRIx088.png",
          alt: "Cash App",
        },
        {
          src: "https://framerusercontent.com/images/dycvfQiaTm21dIXFiRFzeKnP1m8.png",
          alt: "Klarna",
        },
        {
          src: "https://framerusercontent.com/images/XVPORM7MeBayN9sE4VOqw344Fs.png",
          alt: "Apple Pay",
        },
        {
          src: "https://framerusercontent.com/images/oJejfJYc4auBfyNOYcKzNzPvQg.png",
          alt: "Google Pay",
        },
      ],
    };
  },
};
</script>
