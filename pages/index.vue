<template>
  <div class="flex flex-grow align-middle bg-transparent mx-auto">
    <div></div>
    <!-- CONTAINER -->
    <div
      class="flex flex-col md:flex-row w-full my-3 md:my-8 justify-center bg-no-repeat bg-bottom md:bg-right bg-mobile md:bg-tablet lg:bg-desktop"
      style="
        background-image: url(https://storage.googleapis.com/roleever-public-assets/www/dungeon.png);
      "
    >
      <!-- CTA CONTAINER -->
      <div class="flex flex-col w-full md:w-6/12 my-auto">
        <!-- ROLEEVER -->
        <div class="flex flex-col text-center lg:text-left md:ml-3">
          <h1
            class="text-2xl md:text-5xl font-semibold subpixel-antialiased tracking-wide uppercase md:tracking-normal"
          >
            {{ content.data.title_first }}
          </h1>
          <h1
            class="text-2xl md:text-5xl font-semibold subpixel-antialiased tracking-wide uppercase md:tracking-normal"
          >
            {{ content.data.title_second }}
          </h1>
          <p class="text-lg md:text-2xl mt-2">
            {{ content.data.heroe_text }}
          </p>
        </div>
        <!-- CTA -->
        <TheDownloadButton class="justify-center lg:justify-start py-4" />
      </div>
      <!-- PREVIEW CONTAINER -->
      <div
        class="flex w-full md:w-6/12 justify-center pt-6 lg:my-auto md:pt-12"
      >
        <img
          class="object-contain w-4/5 md:w-4/6 wiggle"
          style="max-height: 500px"
          src="https://storage.googleapis.com/roleever-public-assets/www/mockup.png"
          alt="RoleEver App"
        />
      </div>
    </div>
    <!-- <h2>{{ content.data.titolo }}</h2>
    <p>{{ $prismic.asText(content.data.heroe_text) }}</p>  -->
  </div>
</template>

<script>
import TheDownloadButton from '@/components/ui/TheDownloadButton.vue'

export default {
  components: {
    TheDownloadButton,
  },
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
</style>
