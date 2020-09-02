<template>
  <div class="flex w-full">
    <client-only> <TheGetLinkModal /> </client-only>

    <button
      class="bg-primary shadow-xl hover:shadow-2xl transition delay-150 duration-300 ease-in-out transform lg:hover:-translate-y-3 lg:hover:scale-110 text-white font-normal py-2 px-4 lg:px-10 rounded inline-flex items-center font-gitan focus:outline-none"
      @click="downloadClick()"
    >
      <svg
        class="fill-current w-4 h-4 mr-2 lg:mr-4"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
      >
        <path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z" />
      </svg>
      <client-only>
        <a slot="placeholder" href="www.google.com">
          {{ downloadButtonMobileText }}</a
        >
        <p v-if="$device.isAndroid">Scarica da Play Store</p>
        <p v-if="$device.isIos">Scarica da Apps Store</p>
        <p v-if="$device.isDesktop" @click="$modal.show('get-link-m8')">
          Scarica dallo Store
        </p>
      </client-only>
    </button>
  </div>
</template>

<script>
import TheGetLinkModal from '@/components/ui/TheDownloadLinkModal.vue'

export default {
  components: {
    TheGetLinkModal,
  },
  data() {
    return {
      downloadButtonMobileText: 'Scarica dallo Store',
    }
  },
  methods: {
    downloadClick() {
      if (this.$device.isDesktop) {
        this.$modal.show('get-link-m8')
      } else {
        window.open(
          'https://join.roleever.app/94TIf7qms9',
          '_blank',
          'noopener'
        )
      }
    },
  },
}
</script>
