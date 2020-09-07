<template>
  <div
    class="flex w-full bg-transparent xs:justify-center sm:justify-end md:justify-end lg:justify-end overflow-y-visible"
  >
    <div
      v-if="show"
      ref="card"
      :style="{ transform: transformString }"
      style="touch-action: none"
      class="flex xs:w-11/12 sm:w-5/12 md:w-4/12 lg:w-2/12 my-4 bg-medium-tint rounded-lg custom-shadow mx-4 py-1 text-dark justify-start space-x-3 align-middle sm:mr-4 md:mr-4 lg:mr-8 select-none xs:duration-500 duration-1000 cursor-default"
    >
      <div
        class="flex items-center w-full justify-center space-x-4 cursor-default"
      >
        <img
          class="h-16 w-auto"
          src="~/assets/images/cookie.png"
          alt="Cookie Cthlhu"
        />
        <div class="w-7/12">
          <p>Usiamo i Cookies.</p>
          <p class="underline text-dark-tint">Scopri di più</p>
        </div>
        <button class="focus:outline-none right-0" @click="bakeCookie()">
          <svg class="pointer-events-none" width="24px" height="24px">
            <path
              class="pointer-events-none"
              d="M10 0a10 10 0 1 1 0 20 10 10 0 0 1 0-20zM7.17 5.76a1 1 0 0 0-1.41 1.41L8.59 10l-2.83 2.83a1 1 0 0 0 1.41 1.41L10 11.41l2.83 2.83a1 1 0 0 0 1.41-1.41L11.41 10l2.83-2.83a1 1 0 1 0-1.41-1.41L10 8.59z"
            ></path>
          </svg>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import interact from 'interactjs'

export default {
  data() {
    return {
      show: true,
      interactPosition: {
        x: 0,
        y: 0,
      },
    }
  },
  computed: {
    transformString() {
      const { x, y } = this.interactPosition
      return `translate(${x}px, ${y}px)`
    },
  },
  mounted() {
    const element = this.$refs.card

    if (this.$device.isMobileOrTablet) {
      interact(element).draggable({
        inertia: {
          resistance: 30,
          minSpeed: 200,
          endSpeed: 100,
        },
        modifiers: [
          interact.modifiers.snap({
            targets: [interact.createSnapGrid({ x: 30, y: 30 })],
            range: Infinity,
            relativePoints: [{ x: 0, y: 0 }],
          }),
          interact.modifiers.restrict({
            restriction: element.parentNode,
            elementRect: { top: 0, left: 0, bottom: 1, right: 0 },
            endOnly: true,
          }),
        ],
        onmove: (event) => {
          const x = this.interactPosition.x + event.dx
          // const y = this.interactPosition.y + event.dy
          this.interactSetPosition({ x })
        },
        onend: () => {
          if (
            this.interactPosition.x < 0 ||
            this.interactPosition.x < window.innerWidth / 1.5
          ) {
            this.resetCardPosition()
          } else {
            const x = window.innerWidth + 100
            this.interactSetPosition({ x })
          }
        },
      })
    }
  },
  beforeDestroy() {
    interact(this.$refs.card).unset()
  },
  methods: {
    bakeCookie() {
      const x = window.innerWidth + 100
      this.interactSetPosition({ x })
      // this.show = false
      // this.$cookies.set('cookie-consent', 'cookie-value', {
      //   path: '/',
      //   maxAge: 60 * 60 * 24 * 7,
      // })
      console.log('closeButton')
    },
    interactSetPosition(coordinates) {
      const { x = 0, y = 0 } = coordinates
      this.interactPosition = { x, y }
    },

    resetCardPosition() {
      this.interactSetPosition({ x: 0, y: 0 })
    },
  },
}
</script>

<style>
.custom-shadow {
  box-shadow: 0px 3px 12px #0000004d;
}
</style>
