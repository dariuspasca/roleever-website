<template>
  <div class="container mx-auto h-screen xs:min-h-full">
    <div
      class="flex flex-col w-full h-full items-center justify-center my-auto space-y-4 -mt-20 xs:-mt-4"
    >
      <picture>
        <source
          :srcset="page.nick + '?fm=webp&lossless=1&q=75'"
          type="image/webp"
        />
        <source :srcset="page.nick + '?fm=png&q=75'" type="image/png" />
        <img
          class="w-8/12 unselectable mx-auto"
          :src="page.nick"
          :alt="page.nick_title"
          width="789"
          height="1052"
        />
      </picture>
      <div class="flex flex-col space-y-2 text-center xs:px-1 pb-4">
        <h1 class="title xs:text-xl">{{ page.heroe }}</h1>
        <h2 class="text-2xl sm:text-xl lg:text-2xl xs:text-base font-medium">
          {{ page.message }}
        </h2>
      </div>
      <client-only>
        <a
          v-if="$device.isMobile"
          class="bg-primary text-white font-gitan xxxl:text-2xl py-2 px-8 lg:px-16 rounded shadow-lg"
          href="https://join.roleever.app"
          :aria-label="page.back"
        >
          {{ page.back }}
        </a></client-only
      >
    </div>
  </div>
</template>

<script>
export default {
  async asyncData({ $content }) {
    const pages = []
    const pageEN = await $content(`en/pages/verification`).fetch()
    const pageIT = await $content(`it/pages/verification`).fetch()
    pages.push(pageEN)
    pages.push(pageIT)

    return {
      pages,
    }
  },
  computed: {
    page() {
      if (this.$i18n.locale === 'en') {
        return this.pages[0]
      } else {
        return this.pages[1]
      }
    },
  },
  head() {
    return {
      title: this.page.meta_header,
      meta: [
        /* Do not index */
        {
          name: 'robots',
          content: 'noindex',
        },
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
