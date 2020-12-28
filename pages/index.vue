<template>
  <div
    class="relative flex flex-grow h-full lg:h-screen py-16 sm:py-40 md:py-0 lg:py-0 items-center justify-center xs:overflow-x-hidden sm:overflow-x-hidden"
  >
    <!-- Dungeon Background -->
    <div class="fixed dungeon bg-cover bg-no-repeat"></div>

    <div class="container sm:flex sm:w-11/12 xxxl:w-8/12 mx-auto my-auto">
      <div
        class="flex flex-col sm:flex-row md:flex-row lg:flex-row w-full justify-center md:px-5 lg:px-0 sm:space-x-10 md:space-x-32 lg:space-x-32"
      >
        <div class="xs:text-center sm:text-center text-left my-auto">
          <h1
            class="text-2xl sm:text-3xl lg:text-4xl xxxl:text-6xl font-semibold subpixel-antialiased tracking-wide md:tracking-normal"
          >
            {{ page.title_first }}
          </h1>

          <p class="text-lg md:text-2xl xxxl:text-4xl mt-2">
            {{ page.heroe }}
          </p>
          <the-download-button
            class="xs:justify-center sm:justify-center justify-start py-10 md:py-0 md:pt-10"
          />
        </div>
        <div>
          <img
            class="relative mx-auto unselectable preview-image img-shadow"
            :src="require('~/assets/images/roleEver.png')"
            alt="RoleEver App"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import TheDownloadButton from '@/components/ui/TheDownloadButton.vue'

export default {
  components: { TheDownloadButton },
  async asyncData({ $content }) {
    const pages = []
    const pageEN = await $content(`en/pages/home`).fetch()
    const pageIT = await $content(`it/pages/home`).fetch()
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

<style>
.dungeon {
  background-image: url('https://storage.googleapis.com/roleever-public-assets/www/dungeon.png');
  width: 70%;
  height: 80%;
  opacity: 0.6;
  top: 60%;
  right: 20%;
  transform: translate(50%, -50%);
}

@media (max-width: 767px) {
  .dungeon {
    width: 180%;
    height: 75%;
    right: 50%;
    transform: translate(35%, -15%);
  }
}

/* small smartphone */
@media (max-width: 375px) and (max-height: 736px) {
  .dungeon {
    top: 75%;
  }
}

@media (min-width: 768px) and (max-width: 1024px) {
  .dungeon {
    width: 70%;
    height: 50%;
    right: 25%;
    top: 55%;
    transform: translate(50%, -50%);
  }
}
</style>
