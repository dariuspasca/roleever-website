<template>
  <div>
    <client-only> <TheContactUsModal /> </client-only>
    <div class="lg:container mx-auto sm:px-10 md:px-10">
      <div class="flex flex-col space-y-20">
        <div class="block mx-auto text-center py-10 xs:pb-0">
          <h1
            class="text-2xl sm:text-3xl lg:text-5xl font-semibold subpixel-antialiased tracking-wide md:tracking-normal xs:w-7/12 w-8/12 mx-auto"
          >
            {{ content.data.header }}
          </h1>
          <p class="xs:w-11/12 w-8/12 mx-auto pt-4">
            {{ content.data.sub_header }}
          </p>
        </div>
        <div class="flex flex-row xs:flex-col my-auto">
          <div class="w-6/12 xs:w-full my-auto">
            <img
              class="shadow-xl mx-auto rounded-lg w-10/12 xs:11/12 h-auto my-auto"
              :src="content.data.team.url"
              alt="RoleEver Team"
            />
          </div>
          <div
            class="w-6/12 xs:w-full space-y-10 sm:space-y-4 text-base lg:text-lg my-auto xs:pt-8 xs:text-center xs:px-2"
          >
            <p>
              {{ content.data.team_bio_header }}
            </p>

            <p>
              {{ content.data.team_bio_sub_header }}
            </p>
            <button
              class="bg-primary shadow-xl hover:shadow-2xl transition delay-150 duration-300 ease-in-out transform lg:hover:-translate-y-1 lg:hover:scale-100 scale text-white font-normal py-2 px-4 lg:px-16 text-base rounded inline-flex items-center font-gitan focus:outline-none"
              @click="$modal.show('send-message')"
            >
              {{ content.data.contact_button }}
            </button>
          </div>
        </div>
        <div class="flex flex-row xs:flex-col my-auto">
          <div class="w-6/12 xs:w-full space-y-10 text-lg my-auto">
            <div
              class="w-8/12 xs:w-11/12 sm:w-11/12 h-full my-auto space-y-4 float-right xs:float-none xs:text-center"
            >
              <h1 class="text-4xl sm:text-2xl lg:text-3xl">Nick</h1>

              <p>
                {{ $prismic.asText(content.data.nick_the_dragon_bio) }}
              </p>
            </div>
          </div>
          <div class="w-6/12 xs:w-full xs:order-first">
            <img
              class="mx-auto w-5/12 xs:w-9/12 sm:w-7/12 md:w-7/12 h-auto my-auto"
              :src="content.data.nick_the_dragon.url"
              alt="Nick The Dragon"
            />
          </div>
        </div>
        <div
          class="flex flex-wrap flex-row justify-center xs:flex-col pb-10 space-x-24 xs:space-x-0 sm:space-x-10 md:space-x-4 w-full"
        >
          <h1
            class="text-2xl sm:text-3xl lg:text-5xl font-medium subpixel-antialiased tracking-wider w-full text-center pb-10 pt-4"
          >
            {{ content.data.party_header }}
          </h1>
          <div
            v-for="(item, index) in content.data.member_card"
            :key="'reference-item-' + index"
            class="space-y-1 pb-20 xs:pb-40"
          >
            <img
              class="w-9/12 xs:w-7/12 h-auto mx-auto"
              :src="
                'https://storage.googleapis.com/roleever-public-assets/www/about/' +
                item.card_header +
                '.png'
              "
              :alt="item.card_header"
            />
            <h2
              class="text-xl sm:text-2xl lg:text-2xl font-medium subpixel-antialiased tracking-wider text-center w-full capitalize"
            >
              {{ item.card_header }}
            </h2>
            <div class="flex flex-col bg-frame bg-cover px-3 mx-auto">
              <div class="top-0 left-0 pt-4 pl-2 h-full">
                <prismic-rich-text :field="item.skills" class="text-sm" />
              </div>
              <div class="uppercase text-center font-bold bottom-0 left-0 pb-3">
                {{ item.card_footer }}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="py-10 bg-cover bg-center bg-fantasy">
      <div
        class="flex flex-wrap justify-center space-x-12 xs:space-x-4 sm:space-x-4 md:space-x-4 w-8/12 xs:w-11/12 sm:w-11/12 md:w-11/12 mx-auto"
      >
        <h1
          class="text-2xl sm:text-3xl lg:text-5xl font-medium subpixel-antialiased tracking-wider text-white w-full text-center pb-10 pt-4"
        >
          {{ content.data.artists_header }}
        </h1>
        <div
          v-for="(item, index) in content.data.artist_card"
          :key="'reference-item-' + index"
          class="flex flex-col justify-center pb-10"
        >
          <a :href="item.artist_profile.url">
            <img
              :src="item.artist_image.url"
              :alt="item.artist_name"
              class="w-7/12 xs:w-5/12 h-auto mx-auto py-4 transition delay-150 duration-300 ease-in-out transform lg:hover:-translate-y-3 lg:hover:scale-110"
          /></a>
          <h2
            class="text-xl font-base subpixel-antialiased tracking-wider text-center w-full capitalize text-white"
          >
            {{ item.artist_name }}
          </h2>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import TheContactUsModal from '@/components/ui/TheContactUsModal.vue'

export default {
  components: {
    TheContactUsModal,
  },
  data() {
    return {
      pageType: 'about',
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
    }
  },
}
</script>
