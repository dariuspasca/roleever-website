<template>
  <div class="container mx-auto w-full py-10">
    <div class="prose prose-lg w-full mx-auto xs:px-2 lg:w-8/12">
      <h1 class="text-center py-5">{{ page.title }}</h1>
      <nuxt-content :document="page" />
    </div>
  </div>
</template>

<script>
export default {
  async asyncData(context) {
    const { $content, app } = context
    const page = await $content(`${app.i18n.locale}/pages/privacy`).fetch()

    return {
      page,
    }
  },
  head() {
    return {
      title: this.page.meta_header,
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
          content: this.page.twitter_card,
        },
        {
          name: 'twitter:site',
          content: this.page.twitter_site,
        },
        {
          name: 'twitter:title',
          content: this.page.twitter_title,
        },
        {
          name: 'twitter:description',
          content: this.page.twitter_description,
        },
        {
          name: 'twitter:image',
          content: this.page.twitter_image,
        },

        /* Open Graph */

        {
          name: 'og:title',
          content: this.page.og_title,
        },
        {
          name: 'og:type',
          content: this.page.og_type,
        },
        {
          name: 'og:description',
          content: this.page.og_description,
        },
        {
          name: 'og:locale',
          content: this.page.og_locale,
        },
        {
          name: 'og:locale:alternate',
          content: this.page.og_locale_alternate,
        },
        {
          name: 'og:locale:image',
          content: this.page.og_image,
        },
        {
          name: 'og:locale:url',
          content: this.page.og_url,
        },

        /* Google / Schema.org  */

        { itemprop: 'name', content: this.page.og_title },
        {
          itemprop: 'description',
          content: this.page.og_description,
        },
        {
          itemprop: 'image',
          content: this.page.og_image,
        },
      ],
    }
  },
}
</script>
