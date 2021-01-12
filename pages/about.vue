<template>
  <div>
    <client-only> <TheContactUsModal /> </client-only>
    <div class="lg:container xxxl:w-6/12 mx-auto sm:px-10 md:px-10">
      <div class="flex flex-col space-y-20">
        <!--Introduction Section-->
        <div class="block mx-auto text-center py-10 xxxl:py-20 xs:py-0 xs:pb-0">
          <h1 class="title xs:w-7/12 w-8/12 xs:pt-10">
            {{ page.header }}
          </h1>
          <p class="xs:w-11/12 w-8/12 mx-auto pt-4">
            {{ page.sub_header }}
          </p>
        </div>
        <!--About Section-->
        <div class="flex flex-row xs:flex-col my-auto">
          <!--About Photo-->
          <div class="w-6/12 xs:w-full my-auto pointer-events-none">
            <picture>
              <source
                :srcset="page.team_title + '?fm=webp&lossless=1&q=100'"
                type="image/webp"
              />
              <source
                :srcset="page.team_title + '?fm=jpg&q=100'"
                type="image/jpeg"
              />
              <img
                :src="page.team"
                class="shadow-xl mx-auto rounded-lg w-10/12 xs:11/12 h-auto my-auto"
                width="900"
                height="600"
                loading="lazy"
                :alt="page.team_title"
              />
            </picture>
          </div>
          <!--About Description-->
          <div
            class="w-6/12 xxxl:w-4/12 xs:w-full space-y-10 sm:space-y-2 text-base lg:text-lg my-auto xs:pt-8 xs:text-center xs:px-2"
          >
            <p>
              {{ page.team_bio_header }}
            </p>

            <p>
              {{ page.team_bio_sub_header }}
            </p>
            <!--Contact Button-->
            <button
              class="bg-primary hover:shadow-2xl transition delay-150 duration-300 ease-in-out transform lg:hover:-translate-y-1 lg:hover:scale-100 scale text-white font-normal py-2 xs:py-4 px-16 text-base rounded xs:rounded-lg font-gitan focus:outline-none xs:w-7/12 max-w-6/12"
              @click="$modal.show('send-message')"
            >
              {{ page.contact_button }}
            </button>
          </div>
        </div>
        <!--Nick Section-->
        <div class="flex flex-row xs:flex-col my-auto">
          <div class="w-6/12 xs:w-full space-y-10 text-lg my-auto">
            <!--Nick Bio-->
            <div
              class="w-8/12 xs:w-11/12 sm:w-10/12 md:w-9/12 h-full my-auto space-y-4 float-right xs:float-none xs:text-center xs:mx-auto"
            >
              <h1 class="text-4xl sm:text-2xl lg:text-3xl">Nick</h1>

              <p>
                {{ page.nick_the_dragon_bio }}
              </p>
            </div>
          </div>
          <!--Nick Image-->
          <div class="w-6/12 xs:w-full xs:order-first lg:-ml-16">
            <picture>
              <source
                :srcset="page.nick_the_dragon + '?fm=webp&lossless=1&q=100'"
                type="image/webp"
              />
              <source
                :srcset="page.nick_the_dragon + '?fm=jpg&q=100'"
                type="image/jpeg"
              />
              <img
                :src="page.nick_the_dragon"
                class="mx-auto w-5/12 xs:w-10/12 sm:w-7/12 md:w-7/12 xxxl:w-6/12 h-auto my-auto"
                width="307"
                height="410"
                loading="lazy"
                :alt="page.nick_the_dragon_title"
              />
            </picture>
          </div>
        </div>
        <!--Team Section-->
        <div
          class="flex flex-wrap xs:flex-col xxxl:w-10/12 xxxl:mx-auto justify-center"
        >
          <!--Team Header-->
          <h1 class="title w-full text-center pb-10 pt-4 xs:-mb-16">
            {{ page.party_header }}
          </h1>
          <!--Team Cards-->
          <div
            v-for="(item, index) in page.member_card"
            :key="'reference-item-' + index"
            class="space-y-1 mt-16 sm:px-4 md:px-8 px-16 xs:px-8"
          >
            <!--Card Illustration-->

            <picture>
              <source
                :srcset="
                  'https://roleever-app.imgix.net/about/' +
                  item.card_header +
                  '.png?fm=png&auto=format&lossless=1&q=75'
                "
                type="image/webp"
              />
              <source
                :srcset="
                  'https://roleever-app.imgix.net/about/' +
                  item.card_header +
                  '.png?fm=png&q=75'
                "
                type="image/jpeg"
              />
              <img
                :src="
                  'https://roleever-app.imgix.net/about/' +
                  item.card_header +
                  '.png?q=75'
                "
                class="w-9/12 h-auto mx-auto xs:pt-20"
                width="230"
                height="307"
                loading="lazy"
                :alt="item.card_header"
              />
            </picture>
            <!--Card Name-->
            <h2
              class="text-3xl font-medium subpixel-antialiased tracking-wider text-center w-full capitalize"
            >
              {{ item.card_header }}
            </h2>
            <!--Skills Section-->
            <div class="flex flex-col bg-frame bg-cover px-3 mx-auto">
              <div class="top-0 left-0 pt-4 pl-2 h-full">
                <ul class="list px-2 mt-2">
                  <li v-for="skill in item.skills" :key="skill">
                    {{ skill }}
                  </li>
                </ul>
              </div>
              <div class="uppercase text-center font-bold bottom-0 left-0 pb-3">
                {{ item.card_footer }}
              </div>
            </div>
          </div>
        </div>
        <!--Contact Button-->
        <div
          class="flex w-2/12 xs:w-8/12 mx-auto justify-center py-12 xs:py-0 xs:pt-12 xs:pb-20"
        >
          <button
            class="bg-primary shadow-xl hover:shadow-2xl transition delay-150 duration-300 ease-in-out transform lg:hover:-translate-y-1 lg:hover:scale-100 scale text-white font-normal py-2 xs:py-4 px-4 lg:px-16 text-base rounded xs:rounded-lg font-gitan focus:outline-none w-full"
            @click="$modal.show('send-message')"
          >
            {{ page.contact_button }}
          </button>
        </div>
      </div>
    </div>
    <!--Artits Section-->
    <div class="py-10 bg-cover bg-center bg-fantasy">
      <!--Artits Header-->
      <h1 class="title text-white w-full text-center pb-10 pt-4 text-shadow">
        {{ page.artists_header }}
      </h1>
      <div
        class="flex flex-wrap justify-center xs: space-x-12 xs:space-x-0 sm:space-x-4 md:space-x-4 w-6/12 xs:w-full sm:w-11/12 md:w-11/12 xxxl:w-4/12 mx-auto pt-2"
      >
        <!--Artists Cards-->
        <div
          v-for="(item, index) in page.artist_card"
          :key="'reference-item-' + index"
          class="flex flex-col justify-center pb-10 xs:w-4/12 w-2/12 sm:w-3/12 md:w-3/12 xxxl:w-3/12 cursor-pointer space-y-2"
          @click="openLink(item.artist_profile)"
        >
          <picture>
            <source
              :srcset="item.artist_image + '?fm=webp&q=65'"
              type="image/webp"
            />
            <source
              :srcset="item.artist_image + '?fm=jpg&q=65'"
              type="image/jpeg"
            />
            <img
              :src="item.artist_image"
              class="w-7/12 h-auto mx-auto transition delay-150 duration-300 ease-in-out transform lg:hover:-translate-y-3 lg:hover:scale-110"
              width="193"
              height="193"
              loading="lazy"
              :alt="item.artist_name"
            />
          </picture>
          <h2
            class="text-xl font-base subpixel-antialiased tracking-wider text-center w-full capitalize text-white text-shadow"
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
  async asyncData({ $content }) {
    const pages = []
    const pageEN = await $content(`en/pages/about`).fetch()
    const pageIT = await $content(`it/pages/about`).fetch()
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
  methods: {
    openLink(url) {
      window.open(url, '_blank', 'noopener')
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
list {
  list-style: none;
}

.list li:before {
  content: '•';
  font-size: 40px;
  padding-right: 5px;
  padding-top: 2px;
  line-height: 10px;
  vertical-align: top;
  position: absolute;
  left: -15px;
}

.list li {
  margin-bottom: 10px;
  position: relative;
  padding-left: 5px;
}

.bg-frame {
  background-image: url('/images/frameSkills.svg');
  -moz-background-size: 100% 100%;
  -webkit-background-size: 100% 100%;
  background-size: 100% 100%;

  height: 250px;
  width: 300px;
}

@media (max-width: 576px) {
  .bg-frame {
    height: 320px;
    max-width: 320px;
  }
}

@media (max-width: 374px) {
  .bg-frame {
    height: 320px;
    max-width: 250px;
  }
}
</style>
