<template>
  <div
    class="flex flex-grow h-full lg:h-screen py-16 sm:py-40 md:py-0 lg:py-0 bg-dungeon items-center justify-center xs:overflow-x-hidden sm:overflow-x-hidden"
  >
    <span class="fixed i-hate-css">
      <img
        class="w-full lg:w-8/12 unselectable mx-auto"
        src="https://storage.googleapis.com/roleever-public-assets/www/dungeon.png"
        alt="dungeon"
    /></span>

    <div class="container sm:flex sm:w-11/12 xxxl:w-8/12 mx-auto my-auto">
      <div
        class="flex flex-col sm:flex-row md:flex-row lg:flex-row w-full justify-center md:px-5 lg:px-0 sm:space-x-20 md:space-x-32 lg:space-x-32"
      >
        <div class="xs:text-center sm:text-center text-left my-auto">
          <h1
            class="text-2xl sm:text-3xl lg:text-4xl xxxl:text-6xl font-semibold subpixel-antialiased tracking-wide uppercase md:tracking-normal"
          >
            {{ page.title_first }}
          </h1>
          <h1
            class="text-2xl sm:text-3xl lg:text-4xl xxxl:text-6xl font-semibold subpixel-antialiased tracking-wide uppercase md:tracking-normal"
          >
            {{ page.title_second }}
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
            class="object-contain wiggle mx-auto unselectable preview-image"
            src="https://storage.googleapis.com/roleever-public-assets/www/mockup.png"
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
  async asyncData(context) {
    const { $content, app } = context
    const page = await $content(`${app.i18n.locale}/pages/home`).fetch()

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
          content: this.page.og_url.url,
        },

        /* Google / Schema.org  */

        { itemprop: 'name', content: this.page.og_title },
        {
          itemprop: 'description',
          content: this.page.og_description,
        },
        {
          itemprop: 'image',
          content: this.page.og_image.url,
        },
      ],
    }
  },
}
</script>

<style>
@keyframes wiggle {
  0% {
    transform: rotate(0deg);
  }
  80% {
    transform: rotate(0deg);
  }
  85% {
    transform: rotate(5deg);
  }
  95% {
    transform: rotate(-5deg);
  }
  100% {
    transform: rotate(0deg);
  }
}

.wiggle {
  animation: wiggle 4.5s infinite;
}

.unselectable {
  -moz-user-select: none;
  -webkit-user-select: none;
  -ms-user-select: none; /* From IE10 only */
  user-select: none;

  -webkit-user-drag: none; /* Prevents dragging of images/divs etc */
}

.i-hate-css {
  width: 100%;
}

@media (max-width: 897px) {
  .i-hate-css {
    width: 180%;
  }
}

.preview-image {
  max-width: 270px;
}

@media (min-width: 2160px) {
  .preview-image {
    max-width: 800px;
  }
}
</style>
