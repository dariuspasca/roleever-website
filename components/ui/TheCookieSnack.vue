<template>
  <div
    class="flex w-full bg-transparent xs:justify-center sm:justify-end md:justify-end lg:justify-end"
  >
    <div
      v-if="show"
      ref="card"
      :style="{ transform: transformString }"
      style="touch-action: none"
      class="flex xs:w-10/12 sm:w-5/12 md:w-4/12 lg:w-2/12 my-4 bg-white rounded-lg shadow-md px-2 py-4 text-dark-tint justify-start space-x-3 align-middle sm:mr-4 md:mr-4 lg:mr-8 select-none"
    >
      <button class="focus:outline-none" @click="bakeCookie()">
        <svg width="20px" height="20px">
          <path
            d="M10 0a10 10 0 1 1 0 20 10 10 0 0 1 0-20zM7.17 5.76a1 1 0 0 0-1.41 1.41L8.59 10l-2.83 2.83a1 1 0 0 0 1.41 1.41L10 11.41l2.83 2.83a1 1 0 0 0 1.41-1.41L11.41 10l2.83-2.83a1 1 0 1 0-1.41-1.41L10 8.59z"
          ></path>
        </svg>
      </button>
      <div>
        <span>Usiamo i</span>
        <nuxt-link :to="localePath('/cookie-policy')">Cookies</nuxt-link>
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
      return `translate3D(${x}px, ${y}px, 0)`
    },
  },
  mounted() {
    const element = this.$refs.card

    interact(element).draggable({
      inertia: true,
      onmove: (event) => {
        const x = this.interactPosition.x + event.dx
        console.log(x)
        // const y = this.interactPosition.y + event.dy
        this.interactSetPosition({ x })
      },
      onend: () => {
        this.resetCardPosition()
        console.log('end')
      },
    })
  },
  beforeDestroy() {
    interact(this.$refs.card).unset()
  },
  methods: {
    bakeCookie() {
      this.show = false
      // this.$cookies.set('cookie-consent', 'cookie-value', {
      //   path: '/',
      //   maxAge: 60 * 60 * 24 * 7,
      // })
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
