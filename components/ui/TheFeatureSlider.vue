<template>
  <div class="flex w-full items-center justify-center relative z-20">
    <!-- Previous Button -->
    <div
      class="rounded-full h-16 xs:h-8 w-16 xs:w-8 flex items-center justify-center bg-primary mx-20 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110 cursor-pointer xs:absolute xs:z-30 xs:left-0 xs:top-0 xs:mt-16 xs:mx-1"
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
      class="flex flex-row w-8/12 xs:w-full sm:w-10/12 md:w-11/12 ml-auto xs:mx-auto justify-center xs:justify-start relative"
    >
      <!-- Preview -->
      <img
        class="absolute xs:hidden laboratory-preview unselectable z-30 left-0"
        :src="currentImage"
        alt="RoleEver App"
      />
      <!--Card -->

      <div
        class="flex flex-row xs:flex-col w-10/12 xs:w-11/12 xxl:w-9/12 rounded-xl bg-center bg-cover bg-view shadow-xl mt-56 xs:mt-10 sm:mt-40 md:mt-48 xs:mx-auto xs:py-10 xs:px-2 z-10"
      >
        <div class="w-2/12 xs:w-full md:w-1/12"></div>

        <div
          class="flex flex-col w-10/12 xs:w-full md:w-11/12 px-20 xs:px-2 pt-20 xs:pt-2 pb-10 xs:pb-2"
        >
          <transition name="fade" mode="out-in">
            <div
              v-for="i in [currentIndex]"
              :key="i"
              style="height: 200px"
              class="ml-10 xs:ml-0"
            >
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
          </transition>
          <div class="flex flex-row space-x-4 mt-16 xs:mt-24 justify-center">
            <div
              v-for="(i, index) in features"
              :key="index"
              class="flex items-center justify-center rounded-full h-2 w-2 bg-medium-shade"
              :class="{
                'bg-dark': index == currentIndex % features.length,
              }"
            ></div>
          </div>
        </div>
      </div>
    </div>

    <!-- Next Button -->
    <div
      class="rounded-full h-16 xs:h-8 w-16 xs:w-8 flex items-center justify-center bg-primary mx-20 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110 cursor-pointer xs:absolute xs:z-30 xs:right-0 xs:top-0 xs:mt-16 xs:mx-1"
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
    featuresList: { type: Array, required: true },
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
    currentImage() {
      return this.features[Math.abs(this.currentIndex) % this.features.length]
        .feature_preview.url
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
.component-fade-enter-active,
.component-fade-leave-active {
  transition: opacity 0.3s ease;
}
.component-fade-enter, .component-fade-leave-to
/* .component-fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}

.laboratory-preview {
  width: 300px;
  height: auto;
}

@media (max-width: 768px) {
  .laboratory-preview {
    width: 250px;
  }
}

@media (max-width: 1199px) {
  .laboratory-preview {
    width: 100px;
  }
}

@media (min-width: 1200px) {
  .laboratory-preview {
    width: 250px;
  }
}
</style>