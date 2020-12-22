<template>
  <div class="flex w-full">
    <client-only> <TheGetLinkModal /> </client-only>

    <button
      class="inline-flex items-center bg-primary shadow-xl hover:shadow-2xl text-white font-gitan xxxl:text-2xl py-4 px-8 lg:px-16 rounded xs:rounded-lg xs:min-w-8/12 focus:outline-none transition delay-150 duration-300 ease-in-out transform lg:hover:-translate-y-1 lg:hover:scale-100 scale"
      @click="downloadClick()"
    >
      <svg
        class="fill-current w-4 xxxl:w-6 h-4 mr-2 xxxl:h-6 lg:mr-4"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
      >
        <path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z" />
      </svg>
      <client-only>
        <p slot="placeholder">
          {{ $t('download_button.store') }}
        </p>
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
