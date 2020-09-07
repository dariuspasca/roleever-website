<template>
  <div class="container mx-auto w-full py-10">
    <div class="prose prose-lg w-full mx-auto xs:px-2 lg:w-8/12">
      <prismic-rich-text
        class="text-center py-5"
        :field="content.data.header"
      />
      <prismic-rich-text :field="content.data.content" />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      pageType: 'cookies',
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
