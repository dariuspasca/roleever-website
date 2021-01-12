<template>
  <div class="flex flex-col w-full h-full">
    <!--Introduction Section-->
    <div class="container mx-auto text-center">
      <h1 class="title pt-10">
        {{ page.introduction_title }}
      </h1>
      <p class="xs:w-full sm:w-10/12 md:w-7/12 w-5/12 mx-auto pt-4">
        {{ page.introduction_subtitle }}
      </p>
      <the-download-button class="justify-center py-10" />
    </div>
    <!--Chat Section-->
    <div class="container mx-auto xxxl:w-6/12 xxxl:mx-auto py-20">
      <div class="flex flex-row xs:flex-col">
        <!--Chat Text-->
        <div class="w-6/12 xs:w-11/12 xs:mx-auto my-auto">
          <div
            class="xs:w-full sm:w-10/12 md:w-9/12 w-7/12 float-right xs:float-none"
          >
            <Chat class="h-16 w-16 text-primary-shade fill-current -mb-4" />
            <h2
              class="text-2xl sm:text-3xl lg:text-4xl font-base subpixel-antialiased"
            >
              {{ page.chat_title }}
            </h2>
            <p class="py-2 text-lg">
              {{ page.chat_description }}
            </p>
          </div>
        </div>
        <!--Chat Preview-->
        <div class="flex w-6/12 xs:w-full items-center">
          <img
            :src="page.chat_preview"
            class="xs:w-full sm:w-10/12 w-7/12 h-auto float-left xs:float-none ml-4 xs:mx-auto"
            width="835"
            height="1022"
            loading="lazy"
            :alt="page.chat_title"
          />
        </div>
      </div>
    </div>
    <!--DiceRolls Section-->
    <div class="flex w-full bg-cover bg-center bg-fantasy py-10">
      <!--Card-->
      <div
        class="flex rounded-3xl xs:rounded-2xl shadow-2xl bg-cover bg-center bg-view my-20 py-16 xs:py-2 w-8/12 xs:w-11/12 sm:w-11/12 md:w-10/12 xxxl:w-5/12 mx-auto"
      >
        <div class="flex flex-row xs:flex-col">
          <!--DiceRolls Preview-->
          <div
            class="flex w-6/12 xs:w-full xs:order-last xs:pt-6 items-center justify-center"
          >
            <picture>
              <source
                :srcset="page.dicerolls_preview + '?fm=webp&lossless=1&q=80'"
                type="image/webp"
              />
              <source
                :srcset="page.dicerolls_preview + '?fm=png&q=80'"
                type="image/png"
              />
              <img
                :src="page.dicerolls_preview"
                class="xs:w-11/12 sm:w-10/12 w-10/12"
                width="931"
                height="889"
                loading="lazy"
                :alt="page.dicerolls_title"
              />
            </picture>
          </div>
          <!--DiceRolls Text-->
          <div class="w-6/12 xs:w-11/12 xs:mx-auto my-auto">
            <div
              class="xs:w-full sm:w-10/12 md:w-9/12 w-10/12 float-left xs:float-none"
            >
              <Dice class="h-16 w-16 text-primary-shade fill-current -mb-4" />

              <h2
                class="text-2xl sm:text-3xl lg:text-4xl font-base subpixel-antialiased"
              >
                {{ page.dicerolls_title }}
              </h2>
              <p class="py-2 text-lg">
                {{ page.dicerolls_description }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!--CharacterSheets Section-->
    <div class="container mx-auto xxxl:w-6/12 py-32 xxxl:py-20">
      <div
        class="flex flex-row xs:flex-col space-x-10 xs:space-x-0 xs:space-y-10"
      >
        <!--CharacterSheets Text-->
        <div class="w-6/12 xs:w-11/12 xs:mx-auto my-auto">
          <div
            class="xs:w-full sm:w-10/12 md:w-9/12 w-7/12 float-right xs:float-none"
          >
            <Character
              class="h-16 w-16 text-primary-shade fill-current -mb-4"
            />

            <h2
              class="text-2xl sm:text-3xl lg:text-4xl font-base subpixel-antialiased"
            >
              {{ page.sheets_title }}
            </h2>
            <p class="py-2 text-lg">
              {{ page.sheets_description }}
            </p>
          </div>
        </div>
        <!--CharacterSheets Preview-->
        <div class="flex w-6/12 xs:w-full items-center">
          <picture>
            <source
              :srcset="page.sheets_preview + '?fm=webp&lossless=1&q=100'"
              type="image/webp"
            />
            <source
              :srcset="page.sheets_preview + '?fm=png&q=100'"
              type="image/png"
            />
            <img
              :src="page.sheets_preview"
              class="xs:w-10/12 sm:w-10/12 w-7/12 h-auto float-left xs:float-none ml-10 xs:mx-auto img-shadow"
              width="415"
              height="730"
              loading="lazy"
              :alt="page.sheets_title"
            />
          </picture>
        </div>
      </div>
    </div>

    <!--Laboratory Section-->
    <div
      class="flex flex-col w-full bg-footer bg-center bg-cover border-t-2 border-b-2 border-medium pb-20 pt-40 justify-center items-center"
    >
      <div
        class="flex flex-col w-6/12 mx-auto items-center -mt-24 pb-16 xs:pb-8 -space-y-6"
      >
        <Laboratory class="h-24 w-24 text-primary-shade fill-current" />
        <h1 class="title">
          {{ page.laboratory_title }}
        </h1>
      </div>
      <the-feature-slider
        :features-list="page.laboratory_features"
        class="w-full xxxl:w-6/12 xxxl:mx-auto"
      />
    </div>
    <!--More Section-->
    <div class="flex flex-col w-full py-20 space-y-4 relative">
      <!--Nick Section-->
      <picture>
        <source
          :srcset="page.more_nick + '?fm=webp&lossless=1&q=75'"
          type="image/webp"
        />
        <source :srcset="page.more_nick + '?fm=png&q=75'" type="image/png" />
        <img
          class="w-3/12 xs:w-8/12 sm:w-5/12 xxxl:w-3/12 h-auto float-left -ml-24 absolute xs:relative sm:relative md:mt-48 xs:mx-auto sm:mx-auto xxxl:ml-0"
          :src="page.more_nick"
          :alt="page.more_nick_title"
          width="789"
          height="1052"
        />
      </picture>
      <div
        class="flex flex-col w-8/12 xs:w-11/12 sm:w-10/12 md:w-9/12 xxxl:w-6/12 mx-auto"
      >
        <!--Header-->
        <div
          class="flex flex-row w-full sm:w-full mb-20 justify-start xs:justify-center sm:justify-center xs:text-center sm:text-center"
        >
          <div class="w-2/12 xs:hidden"></div>
          <h1
            class="text-5xl xs:text-3xl sm:text-3xl md:text-4xl font-semibold subpixel-antialiased tracking-wide md:tracking-normal -ml-10 xs:ml-0"
          >
            {{ page.more_title }}
          </h1>
        </div>
        <div class="flex flex-col space-y-10 xs:space-y-10">
          <!--First Column-->
          <div
            class="flex flex-row xs:flex-col w-full justify-center xs:justify-start xxxl:justify-center space-x-20 xs:space-x-0 xs:space-y-10"
          >
            <!--Board Section-->
            <div class="w-4/12 xs:w-full float-right xs:float-none">
              <StoriesBoard class="h-12 w-12 text-primary-shade fill-current" />
              <h1
                class="text-2xl sm:text-xl lg:text-2xl font-medium subpixel-antialiased"
              >
                {{ page.lobby_title }}
              </h1>
              <p class="mt-3">
                {{ page.lobby_description }}
              </p>
            </div>
            <!--Diary Section-->
            <div class="w-4/12 xs:w-full float-left xs:float-none">
              <Diary class="h-12 w-12 text-primary-shade fill-current" />
              <h1
                class="text-2xl sm:text-xl lg:text-2xl font-medium subpixel-antialiased"
              >
                {{ page.diary_title }}
              </h1>
              <p class="mt-3">
                {{ page.diary_description }}
              </p>
            </div>
          </div>
          <!--Second Column-->
          <div
            class="flex flex-row xs:flex-col w-full justify-center xs:justify-start xxxl:justify-center space-x-20 xs:space-x-0 xs:space-y-10"
          >
            <!--Turns Section-->
            <div class="w-4/12 xs:w-full float-right xs:float-none">
              <GameTurns class="h-12 w-12 text-primary-shade fill-current" />
              <h1
                class="text-2xl sm:text-xl lg:text-2xl font-medium subpixel-antialiased"
              >
                {{ page.turns_title }}
              </h1>
              <p class="mt-3">
                {{ page.turns_description }}
              </p>
            </div>
            <!--Reading Section-->
            <div class="w-4/12 xs:w-full float-left xs:float-none">
              <ReadingMode class="h-12 w-12 text-primary-shade fill-current" />
              <h1
                class="text-2xl sm:text-xl lg:text-2xl font-medium subpixel-antialiased"
              >
                {{ page.reader_title }}
              </h1>
              <p class="mt-3">
                {{ page.reader_description }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!--Roadmap Section-->
    <div class="flex flex-col w-full pt-20 space-y-20">
      <div
        class="lineaDorata bg-cover bg-center w-8/12 xs:w-11/12 xxxl:w-6/12 h-2 xs:h-1 mx-auto"
      ></div>
      <h1 class="title">
        {{ page.inprogress_title }}
      </h1>
      <div
        class="flex flex-col w-7/12 xs:w-full sm:w-11/12 md:w-10/12 xxxl:w-4/12 mx-auto -space-y-16"
      >
        <!--Map Card-->
        <div class="flex w-full justify-start">
          <div
            class="flex flex-col w-7/12 xs:w-full sm:w-9/12 rounded-3xl shadow-xl xs:shadow-2xl bg-view bg-cover py-8 items-center space-y-4"
            style="height: 300px"
          >
            <Spinner class="h-8 w-8" />
            <h1
              class="text-xl sm:text-xl lg:text-lg font-bold subpixel-antialiased text-secondary"
            >
              {{ page.map_title }}
            </h1>
            <p class="text-left py-2 px-6">
              {{ page.map_description }}
            </p>
          </div>
        </div>
        <!--NPCs Card-->
        <div class="flex w-full justify-end">
          <div
            class="flex flex-col w-7/12 xs:w-full sm:w-9/12 rounded-3xl shadow-xl xs:shadow-2xl bg-footer bg-cover py-8 items-center space-y-4"
            style="height: 300px"
          >
            <Spinner class="h-8 w-8" />
            <h1
              class="text-xl sm:text-xl lg:text-lg font-bold subpixel-antialiased text-secondary"
            >
              {{ page.png_title }}
            </h1>
            <p class="text-left py-2 px-6">
              {{ page.png_description }}
            </p>
          </div>
        </div>
        <!--Multi-Chat Card-->
        <div
          class="flex flex-col w-full justify-center pb-20 bg-view-card-container xs:rounded-2xl xs:rounded-b-none"
        >
          <div
            class="flex flex-col w-7/12 xs:w-full sm:w-9/12 rounded-3xl shadow-xl xs:shadow-none bg-view-card bg-cover py-8 items-center space-y-4"
            style="height: 300px"
          >
            <Spinner class="h-8 w-8" />
            <h1
              class="text-xl sm:text-xl lg:text-lg font-bold subpixel-antialiased text-secondary"
            >
              {{ page.multichat_title }}
            </h1>
            <p class="text-left py-2 px-6">
              {{ page.multichat_description }}
            </p>
          </div>
          <div class="flex flex-col w-full items-center mt-32 xs:mt-10">
            <h1 class="title">
              {{ page.are_you_in_title }}
            </h1>
            <p class="text-xl">{{ page.are_you_in_description }}</p>
            <the-download-button class="justify-center pt-12" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import TheDownloadButton from '@/components/ui/TheDownloadButton.vue'
import TheFeatureSlider from '@/components/ui/TheFeatureSlider.vue'

import Chat from '@/assets/icons/chat.svg'
import Dice from '@/assets/icons/dadi.svg'
import Character from '@/assets/icons/scheda_giocatore.svg'
import Laboratory from '@/assets/icons/laboratorio.svg'

import StoriesBoard from '@/assets/icons/lobby_campagne.svg'
import ReadingMode from '@/assets/icons/modalita_lettura.svg'
import Diary from '@/assets/icons/diario.svg'
import GameTurns from '@/assets/icons/turni_di_gioco.svg'

import Spinner from '@/assets/icons/loading.svg'

export default {
  components: {
    TheDownloadButton,
    TheFeatureSlider,
    Chat,
    Dice,
    Character,
    Laboratory,
    StoriesBoard,
    ReadingMode,
    Diary,
    GameTurns,
    Spinner,
  },
  async asyncData({ $content }) {
    const pages = []
    const pageEN = await $content(`en/pages/features`).fetch()
    const pageIT = await $content(`it/pages/features`).fetch()
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
