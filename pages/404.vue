<template>
  <div class="container mx-auto h-screen xs:min-h-full">
    <div
      class="flex flex-col w-full h-full items-center justify-center my-auto space-y-4 -mt-20 xs:-mt-4"
    >
      <picture>
        <img
          class="w-8/12 xs:w-10/12 unselectable mx-auto"
          src="/images/error404.png"
          alt="confused Nick error 404"
          width="400"
          height="400"
          loading="lazy"
        />
      </picture>
      <div class="flex flex-col space-y-2 text-center xs:px-1 pb-4">
        <h1 class="title xs:text-xl">{{ $t('404_message') }}</h1>
        <h2 class="text-2xl sm:text-xl lg:text-2xl xs:text-base font-medium">
          {{ $t('404_info') }}
        </h2>
      </div>
      <nuxt-link
        class="bg-primary text-white font-gitan xxxl:text-2xl py-2 px-8 lg:px-16 rounded shadow-lg"
        :to="localePath('/')"
        :aria-label="$t('footer.product_home')"
      >
        {{ $t('404_back') }}
      </nuxt-link>
    </div>
  </div>
</template>

<script>
export default {
  head() {
    return {
      title: 'Page not found | RoleEver',
      meta: [
        /* Do not index */
        {
          name: 'robots',
          content: 'noindex',
        },
      ],
    }
  },
}
</script>
