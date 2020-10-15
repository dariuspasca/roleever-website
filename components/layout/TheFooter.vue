<template>
  <footer class="py-5 border-t-2 border-medium bg-auto bg-center bg-footer">
    <div class="container mx-auto">
      <div
        class="flex flex-col sm:flex-row md:flex-row lg:flex-row px-5 mx-10 sm:mx-auto md:mx-auto lg:mx-auto"
      >
        <div class="flex flex-col w-full sm:w-3/6 md:w-2/6 lg:w-2/6 my-2">
          <div class="w-10/12 md:w-4/6 lg:w-3/6">
            <h2 class="font-semibold text-primary-shade text-2xl mb-4">
              Tutte le avventure nel tuo cellulare
            </h2>
            <the-language-picker />
            <div class="mt-4">
              <a
                href="https://www.facebook.com/RoleEverapp/"
                target="_blank"
                rel="noopener noreferrer"
                class="inline-block m-1 ml-0"
                ><img
                  src="data:image/png;base64,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"
                  alt="facebook page"
                  class="w-6"
                />
              </a>

              <a
                href="https://www.instagram.com/roleever.app/"
                target="_blank"
                rel="noopener noreferrer"
                class="inline-block m-1"
              >
                <img
                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFQAAABUCAMAAAArteDzAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAGeUExURUdwTAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAICZIE4AAACJdFJOUwDr6TIm7q4lrO3QQa0oLPqvsCRSX9UGWgvbpcn9TfIrq9phTgkbE1lyXrmC3MF8D+iN0QNLEFM8w8fxKSezaRguFTjODoQ6sqnqMX0MlDsz8HT1Vb+qcOMtOU9Y2b7PpDdzQLY0ygpv9hFl7Pxmunh55FbfKsSK0zDUfojmsZw9RIGTBQd/SmAiv5at1wAAAz9JREFUWMPtWPdXGkEQ5iAHUhVQQbBgxY6oiNhFVOyJxsREkxhbNKbY0ovpyf3Xudn14Aq53eN5P+S9+37gzcx977tjy+zMmkwGDBgw8H+i2d8dyq5HIpESBSKR9Wyo29+sVbKtvZQjobS9TYtkeT1Hh/pyWslKF0cPVyWVZsbBaUFvhkKzr+KKzVinG/qdM5aNOrfthgCbu27DMuPsb5i2Mle8ij6y6CymDgaCBGIwMIipn4iaa5jYSjVSrZi8RuLNIdoA5ZwO4IEisDYR6w6FnjsGv08Qf1Od2gUcB1ny1xuOfQ0GWipdqtxJ9OJGoqYF8T7wViOyJtXIfmCw5A/N4hk64k0WDL8auQMY1kJPmnweX1POe4VFfbxpBeOrmmgIGAuK8E48bOYfmMPxHdHLuY/fefM9WI/URNFr5UkiGhbtynAUQovvwP4C5m+wXqiJlgCjRhIaH5Vt9tFxPvrj5+xnC3peA7EUUdQpjmwzihTCbIsJTgg9VBNFSS8tCqxUC1I37bWCWb0iYtxDSYUoasn7LUNYxvEymVg8Wj7pxW5ti2zJdhInypP3H+BzYywXGMOnzO08xQP+XaLocM5Fk8CxEyLGBFrs3P1cYBjcHjXRMmC4c24nGsERCWXkGQSr8okFXDNR1CZ4SfRRz2WcpyiaFFwbMflJRb9Jv0lAFYSXJKIsvegUeLcUpMcQnpKI2qlFg2hhzitI8xAeChYn6gNnNaYgxVaFDFWEaB2aV2WxUGkWr2ayqFcs+gecw4SClDjU9qUS0eBQ4TF9q3FMvXrMvlR06XrWqZd6R13S7yivHnvfWyhL2SVZyq45S3n1yKdl8sxfK2T+5dhiYvnEUXTmF59RewXPqD3tZ5TkNE0fK07T43QRpynNuW+STmZKc4USkFQoAXl7RKxQ/lFLOeP7qJbajzsVzxaItRRt1Sf/cx3XUZ+KQK5PaSvpPCgqaeqaPweKmt8Upe5OMHB3EiWwGB36KNNZER3fGX1vekAgHgi96ayGLnrOhbtoz0W+jeab6AsP7qJdcxq6aFOm9/r7fX1uJvS5Q9Hptke4l9pNObbOT809DGvHYJke8+n5liO1W8y9lAEDBgxoxl9BjpMZS2FUMQAAAABJRU5ErkJggg=="
                  alt="instagram page"
                  class="w-6"
                />
              </a>

              <a
                href="https://discordapp.com/invite/xyBMAn9"
                target="_blank"
                rel="noopener noreferrer"
                class="inline-block m-1"
              >
                <img
                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFQAAABUCAMAAAArteDzAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAINUExURUdwTAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAKWkIe8AAACudFJOUwDvb9B4A+nqvc8EAfR7KXyH+gke4hZ07sHR8iAvCwX41q5coT+lt/OXwAbNM1MK42zw3Nu7LTROtrw7WGUSFYmUfn0m7ZUkxErkrDjZWWY6MaitVBAC5tVxY2jKsDfr0r65v0OcQPtbpznG4WsY3Y1dKzAdoGGbupPnmU+FS4wlDd75YBGIRqKBKLGrbUd5/v3g9SpRWtrshEhQdjWDxUzDPdeQ9pqejyxwCMiYX+MrotQAAAKXSURBVFjD7djlc9swFABwBbemgYahDTVpksLK7cpMa7syjZmZmdeOmZl509+4GeNsOVtS4+vdzu9Lnp7e/excHEsnAJRQQgklZIvAynCxNwsxNJpjHT3SZkMlxAyrWso8CAlCK27qykhQmCeKbiMy4XZRtIAMXSaKFpKhKlF0Ixm6VhRdTIYuUtD/Fx18knzMP2YEHc1//iLOjz69G7aE5okGZ/wjX6bjj2OJdq1J+zTyeur9BzPIi80H/fn9a+LH2K/cZMPEm89vCwZAdJoYHQIz4W+Bf5qW97+anOwlRL3g5Xj6tmd9oIcQfSTa6iFC3TrR1j4i9KzEcqYnQWsk0H0EaJXUwltLgLZKbhHK8NEoXyw1Jxvs9mS+GRtVFXE19QkY2sSktlGrtb+U/xNgoxu40hJ6yNxsNZXWczO52GgOV1pHDw9TaQkzNcBNVeKi+VxJRQ93Uul+ZuoIN7UaFy3hSln08CiVjjBTtdxUDiYa3MOVltLjTjqvo9I6vrscE92bzdeaHFCzhUkNEaPxigGkXg8dXSUoGgQvaWeLYGIHJlpIDy9fyk7b1txooz5qMNH1zB5Y7R1K03VbM05frBkTrWA3x41dF9rtKS2drV33omS/Pqw4wG7Yuy+q6i2nzE5/wO988PCqx+frYJtd+C+Urfzj76CGRv0uvZFK2tiq7STRGhU7Q9csqcv21DWq2FLuIF33Q4mmYfXf2xH3rTnXWFzZSirowqGehbzTu/cx0OOI6B1TBB1dg/qFr4MbyCgIo6oTwrMBCbSoGBG9CUA3KgoMbUEkdPDPgjKLigJwaIVJKxkml07wqpVGcWK3HCi7J8wwChp8MqDgXBWE+oyfOJ7vhW4ZDjKroRzHo6eVE2IlZI3fsjIKgIEgXaMAAAAASUVORK5CYII="
                  alt="discord channel"
                  class="w-6"
                />
              </a>
            </div>
          </div>
        </div>

        <div
          class="flex flex-col md:flex-row lg:flex-row w-full sm:w-3/6 md:w-4/6 lg:w-4/6"
        >
          <div
            class="flex flex-row w-full md:w-3/6 lg:w-3/6 my-4 space-x-10 md:space-x-0 lg:space-x-0"
          >
            <div class="w-1/2">
              <p class="font-semibold text-primary-shade text-sm">Sito</p>
              <ul class="text-sm">
                <nuxt-link
                  :to="localePath('/')"
                  class="block hover:text-primary my-2"
                  exact
                >
                  Home
                </nuxt-link>
                <nuxt-link
                  :to="localePath('features')"
                  class="block hover:text-primary my-2"
                  exact
                >
                  Features
                </nuxt-link>
                <nuxt-link
                  :to="localePath('about')"
                  class="block hover:text-primary my-2"
                  exact
                >
                  About Us
                </nuxt-link>
              </ul>
            </div>
            <div class="w-1/2">
              <p class="font-semibold text-primary-shade text-sm">Norme</p>
              <ul class="text-sm">
                <nuxt-link
                  :to="localePath('cookie-policy')"
                  class="block hover:text-primary my-2"
                  exact
                >
                  Cookie
                </nuxt-link>
                <nuxt-link
                  :to="localePath('privacy-policy')"
                  class="block hover:text-primary my-2"
                  exact
                >
                  Privacy
                </nuxt-link>
                <nuxt-link
                  :to="localePath('tos')"
                  class="block hover:text-primary my-2"
                  exact
                >
                  TOS
                </nuxt-link>
                <nuxt-link
                  :to="localePath('roleever-community-code')"
                  class="block hover:text-primary my-2"
                  exact
                >
                  Community Code
                </nuxt-link>
              </ul>
            </div>
          </div>

          <div
            class="flex flex-row w-full md:w-3/6 lg:w-3/6 mt-10 md:my-2 lg:my-2 space-x-10 md:space-x-0 lg:space-x-0"
          >
            <div class="w-1/2">
              <p class="font-semibold text-primary-shade text-sm">Risorse</p>
              <ul class="text-sm">
                <li class="my-2">Cartella Stampa</li>
                <li class="my-2">Brandbook</li>
                <li class="my-2">Loghi</li>
              </ul>
            </div>
            <div class="w-1/2">
              <p class="font-semibold text-primary-shade text-sm">Partner</p>

              <a
                href="https://www.almacube.com/"
                target="_blank"
                rel="noopener noreferrer"
                class="my-2 text-sm block hover:text-primary-shade"
                >AlmaCube</a
              >
              <a
                href="https://nanabianca.it/"
                target="_blank"
                rel="noopener noreferrer"
                class="my-2 text-sm block hover:text-primary-shade"
                >Nana Bianca</a
              >
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
import { mapState } from 'vuex'
import TheLanguagePicker from '@/components/ui/TheLanguagePicker.vue'

export default {
  components: {
    TheLanguagePicker,
  },
  data() {
    return {
      toggleLangDropdown: false,
    }
  },
  computed: {
    availableLocales() {
      return this.$i18n.locales.filter((i) => i.code !== this.$i18n.locale)
    },
    ...mapState({
      footerItems(state) {
        return (
          state.navigation.footer.find(
            (e) => e.language === this.$i18n.locale
          ) || state.navigation.footer[0]
        ).data.footer_items
      },
      copyrightText(state) {
        return (
          state.navigation.footer.find(
            (e) => e.language === this.$i18n.locale
          ) || state.navigation.footer[0]
        ).data.copyright
      },
      footerItemsLinks(state) {
        return (
          state.navigation.footer.find(
            (e) => e.language === this.$i18n.locale
          ) || state.navigation.footer[0]
        ).data.footer_links
      },
    }),
  },
}
</script>

<style>
@media (max-width: 767px) {
  .bg-footer {
    background-image: url(https://storage.googleapis.com/roleever-public-assets/www/bg_footer_mobile.jpg);
  }
}

@media (min-width: 768px) {
  .bg-footer {
    background-image: url(https://storage.googleapis.com/roleever-public-assets/www/bg_footer.jpg);
  }
}
</style>
