<template>
  <div
    class="relative flex flex-col w-full min-h-screen bg-fixed bg-cover bg-left-top bg-view font-gitan"
  >
    <!--The Cookie Snackbar-->
    <transition name="fade">
      <the-cookie-snack v-if="!showCookieBanner" class="fixed z-30 bottom-0" />
    </transition>

    <!--Mobile Menu-->
    <transition name="fade">
      <TheMobileMenu
        v-show="openMobileNav"
        class="fixed w-full h-full overflow-y-scroll inset-0 z-40"
      />
    </transition>

    <!--Header-->
    <div class="sticky h-16 w-full top-0 z-20">
      <TheHeader />
    </div>

    <!--Content-->
    <Nuxt class="z-10" />

    <!--Footer-->
    <TheFooter class="z-10" />
  </div>
</template>

<script>
import TheHeader from '@/components/layout/TheHeader.vue'
import TheMobileMenu from '@/components/layout/TheMobileMenu.vue'
import TheFooter from '@/components/layout/TheFooter.vue'
import TheCookieSnack from '@/components/ui/TheCookieSnack.vue'

export default {
  scrollToTop: true,
  components: {
    TheHeader,
    TheMobileMenu,
    TheFooter,
    TheCookieSnack,
  },
  data() {
    return {
      openMobileNav: false,
      scrollPositionX: 0,
      scrollPositionY: 0,
      showCookieBanner: false,
    }
  },
  computed: {
    cookieConsent() {
      const cookieRes = this.$cookies.get('cookie-consent')
      if (cookieRes === undefined) {
        return true
      } else {
        return false
      }
    },
  },
  mounted() {
    this.$root.$on('toggleMobileNav', (status) => {
      if (status) {
        if (process.browser) {
          this.scrollPositionY = window.pageYOffset
          this.scrollPositionX = window.pageXOffset
        }
        this.toggleBodyClass('addClass', 'modalOpen')
      } else {
        this.toggleBodyClass('removeClass', 'modalOpen')
        if (process.browser) {
          window.scrollTo(this.scrollPositionX, this.scrollPositionY)
        }
      }
      this.openMobileNav = status
    })
  },
  created() {
    setTimeout(() => (this.showCookieBanner = !this.cookieConsent), 1500)
  },
  methods: {
    toggleBodyClass(addRemoveClass, className) {
      const el = document.body

      if (addRemoveClass === 'addClass') {
        el.classList.add(className)
      } else {
        el.classList.remove(className)
      }
    },
  },
}
</script>

<style>
@media (max-width: 767px) {
  .bg-view {
    background-image: url('~assets/images/background_mobile.jpg');
  }
}

@media (min-width: 768px) {
  .bg-view {
    background-image: url('~assets/images/background.jpg');
  }
}
</style>
