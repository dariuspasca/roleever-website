<template>
  <div class="container mx-auto py-20">
    <table class="table-fixed border-collapse border border-secondary">
      <tbody>
        <tr v-for="item in page.voci" :key="item.voce">
          <td class="border border-secondary w-4/12 pl-2 py-2">
            {{ item.voce }}
          </td>
          <td class="border border-secondary w-8/12 pl-2 py-2">
            {{ item.valore }}
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  async asyncData({ $content }) {
    const pages = []
    const pageEN = await $content(`en/pages/legal`).fetch()
    const pageIT = await $content(`it/pages/legal`).fetch()
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
