<template>
  <div class="flex w-full">
    <client-only> <TheGetLinkModal /> </client-only>

    <button
      class="bg-primary shadow-xl hover:shadow-2xl transition delay-150 duration-300 ease-in-out transform lg:hover:-translate-y-1 lg:hover:scale-100 scale text-white font-normal py-2 xs:py-4 px-4 lg:px-16 text-base rounded xs:rounded-lg xs:w-7/12 inline-flex items-center font-gitan focus:outline-none"
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
          {{ $t('download_button.store') }}</a
        >
        <p v-if="$device.isAndroid">
          {{ $t('download_button.playstore') }}
        </p>
        <p v-if="$device.isIos">{{ $t('download_button.appstore') }}</p>
        <p v-if="$device.isDesktop" @click="$modal.show('get-link-m8')">
          {{ $t('download_button.store') }}
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
