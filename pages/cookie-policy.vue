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
      pageTag: 'cookie',
    }
  },
  computed: {
    content() {
      return this.$store.getters.getPageByTag(
        this.pageTag,
        this.$i18n.locale
      )[0]
    },
  },
  head() {
    return {
      title: this.$prismic.asText(this.content.data.title),
      link: [
        {
          rel: 'canonical',
          href: 'https://www.roleever.com' + this.$route.path,
        },
      ],
      meta: [
        /* Twitter Cards */

        {
          name: 'twitter:card',
          content: this.content.data.twitter_cards[0].twitter_card,
        },
        {
          name: 'twitter:site',
          content: this.content.data.twitter_cards[0].twitter_site,
        },
        {
          name: 'twitter:title',
          content: this.content.data.twitter_cards[0].twitter_title,
        },
        {
          name: 'twitter:description',
          content: this.content.data.twitter_cards[0].twitter_description,
        },
        {
          name: 'twitter:image',
          content: this.content.data.twitter_cards[0].twitter_image.url,
        },

        /* Open Graph */

        {
          name: 'og:title',
          content: this.content.data.og[0].og_title,
        },
        {
          name: 'og:type',
          content: this.content.data.og[0].og_type,
        },
        {
          name: 'og:description',
          content: this.content.data.og[0].og_description,
        },
        {
          name: 'og:locale',
          content: this.content.data.og[0].og_locale,
        },
        {
          name: 'og:locale:alternate',
          content: this.content.data.og[0].og_locale_alternate,
        },
        {
          name: 'og:locale:image',
          content: this.content.data.og[0].og_image.url,
        },
        {
          name: 'og:locale:url',
          content: this.content.data.og[0].og_url.url,
        },

        /* Google / Schema.org  */

        { itemprop: 'name', content: this.content.data.og[0].og_title },
        {
          itemprop: 'description',
          content: this.content.data.og[0].og_description,
        },
        {
          itemprop: 'image',
          content: this.content.data.og[0].og_image.url,
        },
      ],
    }
  },
}
</script>
