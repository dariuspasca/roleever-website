<template>
  <div class="container mx-5 md:mx-auto">
    <h1
      class="text-xl md:text-2xl font-semibold subpixel-antialiased tracking-wide uppercase md:tracking-normal"
    >
      {{ content.data.privacy_header }}
    </h1>
    <div class="flex-row">
      <prismic-rich-text :field="content.data.privacy_intro" class="prose" />
      <p>Di seguito i dati che raccogliamo e come vengono utilizzati:</p>
    </div>
    <!--- Privacy Policy -->
    <div
      v-for="(item, index) in content.data.policy_category"
      :key="'reference-item-' + index"
      class="flex flex-col mt-10"
    >
      <h2
        class="text-l md:text-xl font-normal subpixel-antialiased tracking-wide uppercase md:tracking-normal text-center py-1"
      >
        {{ item.policy_title }}
      </h2>
      <img
        class="h-2 md:h-4 w-5/6 md:w-2/6 mx-auto"
        src="~/assets/images/divider.png"
        alt="Linea Divisore"
      />
      <prismic-rich-text :field="item.policy_description" class="mt-6 prose" />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      pageType: 'privacy',
    }
  },
  computed: {
    content() {
      return this.$store.getters.getPageByType(
        this.pageType,
        this.$i18n.locale
      )[0]
    },
  },
}
</script>
