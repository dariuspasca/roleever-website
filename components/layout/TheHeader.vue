<template>
  <nav class="flex bg-transparent w-full mt-2">
    <!--RoleEver Logo-->
    <div class="flex flex-col w-4/6">
      <transition name="fade">
        <div
          v-if="showLogo"
          class="flex font-semibold text-xl tracking-tight md:ml-5 lg:ml-10"
        >
          <nuxt-link
            :to="localePath('/')"
            aria-label="Home"
            class="inline-block"
            ><RoleEver class="w-40 md:w-48 xxxl:w-64"
          /></nuxt-link></div
      ></transition>
      <transition name="fade">
        <div
          v-if="showLogoDivider"
          class="w-11/12 sm:w-8/12 md:w-9/12 lg:w-6/12 xxxl:w-3/12 -ml-10 xs:-ml-1 sm:-ml-10 md:-ml-40 bg-auto xs:bg-cover sm:bg-cover bg-right xs:h-1 sm:h-1 h-2 xxxl:h-4 lineaDorata"
        ></div>
      </transition>
    </div>
    <div class="flex w-2/6 justify-end h-16 md:h-auto">
      <!--Mobile NavBar Button-->
      <button
        class="hidden xs:block px-3 mr-2 h-8 mt-2"
        :aria-label="$t('labels.menu')"
        @click="toggleMobileNav"
      >
        <Menu class="fill-current h-8 w-8" />

        <title>Menu</title>
      </button>
      <!--Desktop Vertical Menu-->
      <div
        class="xs:hidden flex flex-col space-y-2 xxxl:space-x-5 mt-5 mr-16 text-right"
      >
        <nuxt-link
          :to="localePath('/')"
          :aria-label="$t('header.home')"
          class="text-dark-shade hover:text-primary tracking-wider xxxl:text-3xl"
        >
          {{ $t('header.home') }}
        </nuxt-link>
        <nuxt-link
          :to="localePath('features')"
          :aria-label="$t('header.features')"
          class="text-dark-shade hover:text-primary tracking-wider xxxl:text-3xl"
        >
          {{ $t('header.features') }}
        </nuxt-link>
        <nuxt-link
          :to="localePath('about')"
          :aria-label="$t('header.about')"
          class="text-dark-shade hover:text-primary tracking-wider xxxl:text-3xl"
        >
          {{ $t('header.about') }}
        </nuxt-link>
      </div>
    </div>
  </nav>
</template>

<script>
import { mapState } from 'vuex'
import RoleEver from '@/assets/icons/RoleEver.svg'
import Menu from '@/assets/icons/menu.svg'

export default {
  components: {
    RoleEver,
    Menu,
  },
  data() {
    return {
      open: false,
      showLogo: true,
      showLogoDivider: true,
    }
  },
  computed: {
    availableLocales() {
      return this.$i18n.locales.filter((i) => i.code !== this.$i18n.locale)
    },
    ...mapState({
      menuItems(state) {
        return (
          state.navigation.header.find(
            (e) => e.language === this.$i18n.locale
          ) || state.navigation.header[0]
        ).data.items
      },
      menuItemsLinks(state) {
        return (
          state.navigation.header.find(
            (e) => e.language === this.$i18n.locale
          ) || state.navigation.header[0]
        ).data.items_links
      },
    }),
  },
  beforeMount() {
    window.addEventListener('scroll', this.handleScroll)
  },
  beforeDestroy() {
    window.removeEventListener('scroll', this.handleScroll)
  },
  methods: {
    toggleMobileNav() {
      this.open = !open
      this.$root.$emit('toggleMobileNav', open)
    },
    handleScroll(event) {
      // on mobile device hide header logo sooner
      let logoOffset = 80
      let logoDividerOffset = 50
      if (process.browser && this.$device.isDesktopOrTablet) {
        logoOffset = 100
        logoDividerOffset = 80
      }
      window.pageYOffset > logoOffset
        ? (this.showLogo = false)
        : (this.showLogo = true)

      window.pageYOffset > logoDividerOffset
        ? (this.showLogoDivider = false)
        : (this.showLogoDivider = true)
    },
  },
}
</script>

<style>
.fade-enter-active {
  transition: all 0.2s;
}
.fade-leave-active {
  transition: all 0.2s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
