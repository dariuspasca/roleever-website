<template>
  <div
    class="relative flex flex-col w-full min-h-screen bg-fixed xs:bg-scroll bg-cover bg-center bg-view font-gitan"
  >
    <!--The Cookie Snackbar-->
    <transition name="fade">
      <the-cookie-snack
        v-if="showCookieBanner"
        class="fixed xs:w-full sm:w-5/12 md:w-4/12 lg:w-3/12 xxl:w-3/12 z-30 bottom-0 right-0 xs:mx-auto"
      />
    </transition>

    <!--Mobile Menu-->
    <transition name="fade">
      <TheMobileMenu
        v-show="openMobileNav"
        class="fixed w-full h-full inset-0 z-40"
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
      showCookieBanner: false,
    }
  },
  computed: {
    cookieConsent() {
      const cookieRes = this.$cookiz.get('cookiez')
      if (cookieRes === undefined) {
        return true
      } else {
        if (cookieRes === 'cookiez-yes') {
          this.$gtm.init('GTM-57N685N')
        }
        return false
      }
    },
  },
  mounted() {
    this.$root.$on('toggleMobileNav', (status) => {
      if (status) {
        this.toggleBodyClass('addClass', 'menuOpen')
      } else {
        this.toggleBodyClass('removeClass', 'menuOpen')
      }
      this.openMobileNav = status
    })
  },
  created() {
    if (this.cookieConsent) {
      setTimeout(() => (this.showCookieBanner = true), 1500)
    }
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
