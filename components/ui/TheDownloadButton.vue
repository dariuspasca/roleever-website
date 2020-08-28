<template>
  <div class="flex w-full">
    <client-only> <TheGetLinkModal /> </client-only>

    <button
      class="bg-primary shadow-xl hover:shadow-2xl transition delay-150 duration-300 ease-in-out transform hover:-translate-y-3 hover:scale-110 text-white font-normal py-2 px-4 rounded inline-flex items-center font-gitan"
    >
      <svg
        class="fill-current w-4 h-4 mr-2"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
      >
        <path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z" />
      </svg>
      <client-only>
        <a slot="placeholder" href="www.google.com">
          {{ downloadButtonMobileText }}</a
        >
        <a v-if="$device.isAndroid" href="#">Scarica da Play Store</a>
        <a v-if="$device.isIos" href="#">Scarica da Apps Store</a>
        <a v-if="$device.isDesktop" @click="$modal.show('get-link-m8')"
          >Scarica dallo Store</a
        >
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
}
</script>
