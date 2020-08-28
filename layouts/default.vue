<template>
  <div
    class="relative flex flex-col w-full h-full md:min-h-screen bg-fixed bg-cover font-gitan"
    style="
      background-image: url(https://storage.googleapis.com/roleever-public-assets/www/background.jpg);
    "
  >
    <!--Mobile Menu-->
    <transition name="fade">
      <TheMobileMenu
        v-show="openMobileNav"
        class="fixed w-full h-full overflow-y-scroll inset-0 z-30"
      />
    </transition>

    <!--Header-->
    <div class="sticky h-16 w-full top-0 z-20">
      <TheHeader />
    </div>

    <!--Content-->
    <router-view class="z-10" />

    <!--Footer-->
    <TheFooter class="z-10" />
  </div>
</template>

<script>
import TheHeader from '@/components/layout/TheHeader.vue'
import TheMobileMenu from '@/components/layout/TheMobileMenu.vue'
import TheFooter from '@/components/layout/TheFooter.vue'

export default {
  components: {
    TheHeader,
    TheMobileMenu,
    TheFooter,
  },
  data() {
    return {
      openMobileNav: false,
      scrollPositionX: 0,
      scrollPositionY: 0,
    }
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
.modalOpen {
  overflow: hidden;
  position: fixed;
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}

.fullScreen {
  height: calc(100vh - 64px);
}
</style>
