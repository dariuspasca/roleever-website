<template>
  <div
    class="flex w-full bg-transparent xs:justify-center justify-end overflow-y-visible"
  >
    <div
      v-if="show"
      ref="card"
      :style="{ transform: transformString }"
      style="touch-action: none"
      class="flex flex-col w-full xs:w-10/12 my-4 px-4 bg-medium-tint rounded-lg custom-shadow mx-4 py-4 text-dark justify-start space-y-3 align-middle sm:mr-4 md:mr-4 lg:mr-8 select-none xs:duration-300 duration-1000 cursor-default"
    >
      <!-- Cookie Info -->
      <div class="flex w-full items-center space-x-4 cursor-default">
        <picture>
          <source
            srcset="
              https://roleever-app.imgix.net/cthulhuCookie.png?fm=webp&q=80
            "
            type="image/webp"
          />
          <source
            srcset="https://roleever-app.imgix.net/cthulhuCookie.png?q=80"
            type="image/jpeg"
          />
          <img
            class="w-48 h-auto"
            width="250"
            height="250"
            loading="lazy"
            alt="Cookie Cthlhu"
            src="https://roleever-app.imgix.net/cthulhuCookie.png?q=80"
          />
        </picture>
        <div>
          <p class="text-sm">{{ $t('cookies.inform') }}</p>
          <nuxt-link
            :to="localePath('cookie-policy')"
            :aria-label="$t('cookies.inform')"
            class="underline text-dark-tint hover:text-dark-shade cursor-pointer text-sm"
            exact-active-class
          >
            {{ $t('cookies.more') }}</nuxt-link
          >
        </div>
      </div>
      <!-- Cookie Manage/Accept Buttons -->
      <div v-show="!manageCookies" class="flex space-x-4 text-sm py-2">
        <button
          class="focus:outline-none bg-medium rounded-md w-6/12 px-2 py-1"
          :aria-label="$t('labels.close')"
          @click="manageCookies = !manageCookies"
        >
          {{ $t('cookies.manage') }}
        </button>
        <button
          class="focus:outline-none bg-primary rounded-md w-6/12 px-2 py-1 text-white"
          :aria-label="$t('labels.close')"
          @click="bakeCookie()"
        >
          {{ $t('cookies.accept') }}
        </button>
      </div>
      <!-- Manage Cookies -->
      <div
        v-show="manageCookies"
        class="flex flex-col w-full h-full space-y-4 pt-2"
      >
        <div class="flex w-full items-center justify-between">
          <h1 class="font-semibold">{{ $t('cookies.necessary') }}</h1>
          <Lock class="h-6 w-6" />
        </div>
        <p class="text-sm">
          {{ $t('cookies.necessary_description') }}
        </p>
        <div class="flex w-full items-center justify-between">
          <h1 class="font-semibold">{{ $t('cookies.analytics') }}</h1>

          <!-- Toggle Button -->
          <label for="toogleA" class="flex items-center cursor-pointer">
            <!-- toggle -->
            <div class="relative">
              <!-- input -->
              <input
                id="toogleA"
                v-model="enableAnalytics"
                type="checkbox"
                class="hidden"
              />
              <!-- line -->
              <div
                class="toggle__line w-10 h-4 bg-gray-400 rounded-full shadow-inner"
              ></div>
              <!-- dot -->
              <div
                class="toggle__dot absolute w-6 h-6 bg-white rounded-full shadow inset-y-0 left-0"
              ></div>
            </div>
          </label>
        </div>
        <p class="text-sm">
          {{ $t('cookies.analytics_description') }}
        </p>

        <button
          class="focus:outline-none bg-primary rounded-md w-full px-2 py-1 text-white"
          :aria-label="$t('labels.close')"
          @click="bakeCookie()"
        >
          {{ $t('cookies.save') }}
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import interact from 'interactjs'
import Lock from '@/assets/icons/lock.svg'

export default {
  components: {
    Lock,
  },
  data() {
    return {
      show: true,
      manageCookies: false,
      enableAnalytics: true,
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
            this.interactPosition.x < window.innerWidth / 1.7
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
      setTimeout(() => (this.show = false), 1500)

      let cookieValue = 'cookiez-no'
      if (this.enableAnalytics) {
        cookieValue = 'cookiez-yes'
        this.$gtm.init('GTM-57N685N')
      }
      this.$cookiz.set('cookiez', cookieValue, {
        path: '/',
        sameSite: true,
        maxAge: 60 * 60 * 24 * 7,
      })
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

.toggle__dot {
  top: -0.25rem;
  left: -0.25rem;
  transition: all 0.3s ease-in-out;
}

input:checked ~ .toggle__dot {
  transform: translateX(100%);
  background-color: #389809;
}
</style>
