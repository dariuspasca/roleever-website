<template>
  <div
    class="relative flex flex-grow h-full md:h-screen lg:h-screen py-16 sm:py-40 lg:py-0 items-center justify-center xs:overflow-x-hidden sm:overflow-x-hidden"
  >
    <!-- Dungeon Background -->
    <span class="fixed dungeon w-full">
      <picture>
        <source
          srcset="https://roleever-app.imgix.net/dungeon.png?fm=webp&q=75"
          type="image/webp"
        />
        <source
          srcset="https://roleever-app.imgix.net/dungeon.png?fm=png&q=75"
          type="image/png"
        />
        <img
          class="w-full lg:w-8/12 unselectable mx-auto"
          src="https://roleever-app.imgix.net/dungeon.png"
          alt="dungeon"
          width="1920"
          height="1000"
          loading="lazy"
        /> </picture
    ></span>

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

          <p class="text-lg md:text-2xl xxxl:text-4xl mt-2 xs:mx-1">
            {{ page.heroe }}
          </p>
          <the-download-button
            class="xs:justify-center sm:justify-center justify-start py-10 md:py-0 md:pt-10"
          />
        </div>
        <div>
          <div class="relative mx-auto img-shadow" style="width: 275px">
            <div class="mx-auto whatIsRoleEver px-1">
              <!-- <player /> -->
              <video
                muted
                playsinline
                autoplay
                loop
                width="828"
                height="1624"
                poster="/images/whatIsRoleEverCover.jpg"
              >
                <source
                  src="/media/video/whatIsRoleEver.mp4"
                  type="video/mp4"
                />
              </video>
            </div>
          </div>
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
.whatIsRoleEver {
  width: 275px;
  -webkit-clip-path: inset(0 0 0 0 round 33.5px);
  clip-path: inset(0 0 0 0 round 33.5px);
}

.whatIsRoleEver:after {
  content: '';
  display: block;
  position: absolute;
  bottom: 0;
  right: 0;
  left: 0;
  top: 0;
  background-image: url('/images/mobile-frame.svg');
  background-repeat: no-repeat;
  background-size: 100% 100%;
}
</style>
