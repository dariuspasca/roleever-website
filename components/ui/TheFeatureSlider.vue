<template>
  <div class="flex w-full items-center justify-center">
    <!-- Previous Button -->
    <div
      class="rounded-full h-16 w-16 flex items-center justify-center bg-primary ml-40 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110 cursor-pointer"
      @click="prev()"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="h-12 w-12 fill-current text-white"
        viewBox="0 0 24 24"
      >
        <path d="M0 0h24v24H0z" fill="none" />
        <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z" />
      </svg>
    </div>
    <!--Card Wrapper-->
    <div
      class="flex flex-row w-8/12 sm:w-full md:w-11/12 ml-auto justify-center relative"
    >
      <!-- Preview -->
      <img
        class="absolute laboratory-preview unselectable z-30 left-0"
        src="https://storage.googleapis.com/roleever-public-assets/www/mockup.png"
        alt="RoleEver App"
      />
      <!--Card -->
      <div
        class="flex w-9/12 rounded-xl bg-center bg-cover bg-view shadow-xl mt-56 sm:mt-40 md:mt-48"
      >
        <div class="w-2/12 md:w-3/12"></div>

        <div class="flex flex-row w-10/12 md:w-9/12 px-20 py-20">
          <div class="">
            <h3
              class="text-xl sm:text-xl lg:text-lg subpixel-antialiased uppercase"
            >
              {{ currentSubheader }}
            </h3>

            <h2
              class="text-2xl sm:text-xl lg:text-3xl font-medium subpixel-antialiased"
            >
              {{ currentHeader }}
            </h2>

            <p class="pt-6">
              {{ currentDescription }}
            </p>
          </div>
        </div>
      </div>
    </div>

    <!-- Next Button -->
    <div
      class="rounded-full h-16 w-16 flex items-center justify-center bg-primary mr-40 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110 cursor-pointer"
      @click="next()"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="h-12 w-12 fill-current text-white z-30"
        viewBox="0 0 24 24"
      >
        <path d="M0 0h24v24H0z" fill="none" />
        <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z" />
      </svg>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    featuresList: { type: Object, required: true },
  },
  data() {
    return {
      features: this.featuresList,
      currentIndex: 0,
      timer: null,
    }
  },
  computed: {
    currentHeader() {
      return this.features[Math.abs(this.currentIndex) % this.features.length]
        .feature_header
    },
    currentSubheader() {
      return this.features[Math.abs(this.currentIndex) % this.features.length]
        .feature_subheader
    },
    currentDescription() {
      return this.features[Math.abs(this.currentIndex) % this.features.length]
        .feature_description
    },
  },
  mounted() {
    this.startSlide()
  },
  methods: {
    next() {
      this.currentIndex += 1
    },
    prev() {
      this.currentIndex -= 1
    },
  },
}
</script>

<style>
.fade-enter-active,
.fade-leave-active {
  transition: all 0.9s ease;
  overflow: hidden;
  visibility: visible;
  position: absolute;
  width: 100%;
  opacity: 1;
}

.fade-enter,
.fade-leave-to {
  visibility: hidden;
  width: 100%;
  opacity: 0;
}
</style>
