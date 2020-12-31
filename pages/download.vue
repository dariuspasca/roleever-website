<template>
  <div class="container h-screen xs:h-full sm:mx-auto md:mx-auto">
    <!-- Dungeon Background -->
    <span class="fixed dungeon w-full">
      <img
        class="w-full lg:w-8/12 unselectable mx-auto"
        src="~assets/images/dungeon.png"
        alt="dungeon"
    /></span>
    <div
      class="relative flex flex-row h-full w-full xs:flex-col sm:flex-col mx-auto space-x-10 xs:space-x-0 sm:space-x-0 items-center justify-center xs:pt-10 xs:pb-20"
    >
      <!-- Preview Section -->
      <div
        class="w-4/12 xs:w-full sm:w-full xs:order-last sm:order-last xs:py-10 sm:py-10"
      >
        <img
          src="https://roleever-app.imgix.net/roleEver.png"
          class="relative mx-auto unselectable preview-image img-shadow"
          width="429"
          height="818"
          loading="lazy"
          alt="RoleEver"
        />
      </div>
      <!-- Download Button Mobile -->
      <client-only>
        <div
          v-if="$device.isIos || $device.isAndroid"
          class="flex flex-col w-full justify-center items-center"
        >
          <h1
            class="text-2xl sm:text-3xl lg:text-4xl xxxl:text-6xl font-semibold subpixel-antialiased tracking-wide md:tracking-normal"
          >
            {{ page.title_first }}
          </h1>

          <p
            class="text-lg md:text-2xl xxxl:text-4xl mt-2 xs:px-2 text-center pb-2"
          >
            {{ page.heroe }}
          </p>
          <the-download-button class="justify-center py-4" />
        </div>
        <div
          v-else
          class="flex flex-col w-5/12 xs:w-full sm:w-full md:w-8/12 space-y-4"
        >
          <h2
            class="text-2xl sm:text-3xl lg:text-4xl font-base subpixel-antialiased text-center"
          >
            {{ page.header }}
          </h2>
          <p class="text-lg w-11/12 mx-auto">
            {{ page.description }}
          </p>
          <!-- QR Block -->
          <div
            class="flex flex-row bg-footer shadow-lg rounded-xl py-10 px-6 space-x-4 items-start w-11/12 mx-auto"
          >
            <img
              src="https://roleever-app.imgix.net/qr-code.jpeg"
              class="w-32 h-32 rounded-lg shadow-sm"
              width="512"
              height="512"
              loading="lazy"
              alt="RoleEver"
            />
            <div>
              <h3 class="text-xl text-black">
                {{ page.qr_header }}
              </h3>
              <p class="text-lg py-2">
                <i18n path="qr_description" tag="p">
                  <template v-slot:AppStore>
                    <a
                      class="text-primary-shade hover:underline"
                      target="_blank"
                      rel="noopener"
                      href="https://play.google.com/store/apps/details?id=com.RoleEver"
                    >
                      AppStore
                    </a>
                  </template>
                  <template v-slot:GooglePlay>
                    <a
                      class="text-primary-shade hover:underline"
                      target="_blank"
                      rel="noopener"
                      href="https://play.google.com/store/apps/details?id=com.RoleEver"
                      >Google Play</a
                    >
                  </template>
                </i18n>
              </p>
            </div>
          </div>
          <!-- OR -->

          <div class="flex items-center justify-center space-x-2">
            <span class="h-px bg-secondary w-full"></span>
            <span class="font-medium text-dark-tint pb-1"> {{ page.or }}</span>
            <span class="h-px bg-secondary w-full"></span>
          </div>

          <!-- SMS Block -->
          <div class="flex justify-center">
            <form
              class="px-8 xs:px-4 py-4 mb-4"
              method="post"
              @submit="submitForm"
            >
              <div class="flex flex-col pb-2 space-y-4">
                <MazPhoneNumberInput
                  fetch-country
                  color="grey"
                  :translations="translationsPhoneInput"
                  @update="results = $event"
                  @clear="reset()"
                  @change="reset()"
                />

                <button
                  v-if="showSubmitButton"
                  :disabled="canSubmit"
                  class="flex-grow bg-primary hover:shadow-xl hover:opacity-75 text-white font-normal font-gitan py-2 px-4 rounded focus:outline-none"
                  type="submit"
                >
                  <div v-show="isSubmitting" class="flex content-center">
                    <div class="loader"></div>
                    <p class="text-s ml-4">
                      {{ page.button_sending }}
                    </p>
                  </div>
                  <p v-show="!isSubmitting">
                    {{ page.button_send }}
                  </p>
                </button>

                <p
                  v-show="!isSubmitting && linkSent"
                  class="text-success text-lg"
                >
                  {{ page.success }}
                </p>
                <p
                  v-show="!isSubmitting && linkError"
                  class="text-danger text-lg"
                >
                  {{ page.error }}
                </p>
              </div>

              <p class="text-left text-sm text-dark mt-4">
                {{ page.information }}
              </p>
            </form>
          </div>
        </div>
      </client-only>
    </div>
  </div>
</template>

<script>
import TheDownloadButton from '@/components/ui/TheDownloadButton.vue'

export default {
  components: { TheDownloadButton },
  async asyncData({ $content }) {
    const pages = []
    const pageEN = await $content(`en/pages/download`).fetch()
    const pageIT = await $content(`it/pages/download`).fetch()
    pages.push(pageEN)
    pages.push(pageIT)

    return {
      pages,
    }
  },
  data() {
    return {
      isSubmitting: false,
      linkSent: false,
      linkError: false,
      results: null,
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
    translationsPhoneInput() {
      return {
        countrySelectorLabel: this.page.phone_code,
        countrySelectorError: this.page.select_country,
        phoneNumberLabel: this.page.phone_label,
        example: this.page.example,
      }
    },
    canSubmit() {
      if (this.isSubmitting) {
        return false
      } else if (this.results && this.results.isValid) {
        return false
      } else {
        return true
      }
    },
    showSubmitButton() {
      if (this.linkSent || this.linkError) {
        return false
      } else {
        return true
      }
    },
  },
  methods: {
    submitForm(e) {
      this.isSubmitting = true
      e.preventDefault()

      // POST request using fetch with async/await
      const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        mode: 'cors',
        body: JSON.stringify({ To: this.results.formatInternational }),
      }
      fetch(
        'https://en2xtnm78plvhln.m.pipedream.net?pipedream_response=1',
        requestOptions
      ).then((response) => {
        this.isSubmitting = false
        // check for error response
        if (response.status === 400) {
          this.linkError = true
        } else {
          this.linkSent = true
        }
      })
    },
    reset() {
      if (this.linkSent) {
        this.linkSent = false
      } else if (this.linkError) {
        this.linkError = false
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
.myToast {
  background-color: #212121 !important;
  font-family: gitan;
  letter-spacing: 2px;
}
.loader {
  font-size: 10px;
  text-indent: -9999em;
  margin: auto 0;
  width: 1.5em;
  height: 1.5em;
  border-radius: 50%;
  background: #ffffff;
  background: -moz-linear-gradient(
    left,
    #ffffff 10%,
    rgba(255, 255, 255, 0) 42%
  );
  background: -webkit-linear-gradient(
    left,
    #ffffff 10%,
    rgba(255, 255, 255, 0) 42%
  );
  background: -o-linear-gradient(left, #ffffff 10%, rgba(255, 255, 255, 0) 42%);
  background: -ms-linear-gradient(
    left,
    #ffffff 10%,
    rgba(255, 255, 255, 0) 42%
  );
  background: linear-gradient(
    to right,
    #ffffff 10%,
    rgba(255, 255, 255, 0) 42%
  );
  position: relative;
  -webkit-animation: load3 1.4s infinite linear;
  animation: load3 1.4s infinite linear;
  -webkit-transform: translateZ(0);
  -ms-transform: translateZ(0);
  transform: translateZ(0);
}
.loader:before {
  width: 50%;
  height: 50%;
  background: #ffffff;
  border-radius: 100% 0 0 0;
  position: absolute;
  top: 0;
  left: 0;
  content: '';
}
.loader:after {
  background: #8e1500;
  width: 75%;
  height: 75%;
  border-radius: 50%;
  content: '';
  margin: auto;
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
}
@-webkit-keyframes load3 {
  0% {
    -webkit-transform: rotate(0deg);
    transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}
@keyframes load3 {
  0% {
    -webkit-transform: rotate(0deg);
    transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}
</style>
