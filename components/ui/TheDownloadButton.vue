<template>
  <div class="flex w-full">
    <button
      class="inline-flex items-center bg-primary shadow-xl text-white font-gitan xxxl:text-2xl py-4 px-8 lg:px-16 rounded xs:rounded-lg xs:min-w-8/12 focus:outline-none transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110"
      :aria-label="$t('labels.download')"
      @click="downloadClick()"
    >
      <svg
        class="fill-current w-4 xxxl:w-6 h-4 mr-2 xxxl:h-6 lg:mr-4 z-10"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
      >
        <path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z" />
      </svg>
      <client-only>
        <p slot="placeholder">
          {{ $t('download_button.store') }}
        </p>
        <p v-if="$device.isAndroid" class="flex">
          {{ $t('download_button.playstore') }}
        </p>
        <p v-if="$device.isIos">{{ $t('download_button.appstore') }}</p>
        <nuxt-link
          v-if="$device.isDesktop"
          :aria-label="$t('download_button.store')"
          :to="localePath('download')"
        >
          {{ $t('download_button.store') }}
        </nuxt-link>
      </client-only>
    </button>
  </div>
</template>

<script>
export default {
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
