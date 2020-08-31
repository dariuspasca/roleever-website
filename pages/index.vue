<template>
  <div
    class="flex flex-grow h-full lg:h-screen bg-no-repeat bg-cover bg-bottom sm:bg-center md:bg-center lg:bg-center py-20 sm:my-40 md:py-0 lg:my-0 bg-dungeon items-center justify-center overflow-x-hidden"
  >
    <div class="container mx-auto my-auto">
      <div
        class="flex flex-col sm:flex-row md:flex-row lg:flex-row w-full justify-center md:px-5 lg:px-0 sm:space-x-20 md:space-x-32 lg:space-x-32"
      >
        <div class="text-center md:text-left my-auto">
          <h1
            class="text-2xl sm:text-3xl lg:text-4xl font-semibold subpixel-antialiased tracking-wide uppercase md:tracking-normal"
          >
            {{ content.data.title_first }}
          </h1>
          <h1
            class="text-2xl sm:text-3xl lg:text-4xl font-semibold subpixel-antialiased tracking-wide uppercase md:tracking-normal"
          >
            {{ content.data.title_second }}
          </h1>
          <p class="text-lg md:text-2xl mt-2">
            {{ content.data.heroe_text }}
          </p>
          <the-download-button
            class="justify-center md:justify-start py-10 md:py-0 md:pt-10"
          />
        </div>
        <div>
          <img
            class="object-contain wiggle mx-auto"
            style="max-height: 500px"
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
  data() {
    return {
      pageType: 'homepage',
      hellooo: false,
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
      bodyAttrs: {
        class: 'flex flex-col h-full',
      },
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

.bg-dungeon {
  background-image: url(https://storage.googleapis.com/roleever-public-assets/www/dungeon.png);
  background-attachment: fixed;
}

@media (max-width: 767px) {
  .bg-dungeon {
    background-size: 120% 50%;
  }
}

@media (min-width: 768px) {
  .bg-dungeon {
    background-size: 110% 75%;
  }
}

@media (min-width: 1024px) {
  .bg-dungeon {
    background-size: 75% 50%;
  }
}
</style>
