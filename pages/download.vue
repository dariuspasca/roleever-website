<template>
  <div class="container h-screen">
    <div class="fixed dungeon bg-cover bg-no-repeat"></div>
    <div
      class="relative flex flex-row h-full w-full xs:flex-col mx-auto space-x-10 xs:space-x-0 items-center justify-center"
    >
      <!-- Preview Section -->
      <div class="w-4/12">
        <img
          class="unselectable preview-image img-shadow float-right"
          src="https://storage.googleapis.com/roleever-public-assets/www/roleEver.png"
          alt="RoleEver App"
        />
      </div>
      <div class="flex flex-col w-5/12 space-y-4 xs:space-y-0 xs:space-x-10">
        <h2
          class="text-2xl sm:text-3xl lg:text-4xl font-base subpixel-antialiased text-center"
        >
          Scarica RoleEver
        </h2>
        <p class="text-lg w-11/12 mx-auto">
          Chat, tiri e schede pg. Tutto in un'app.
        </p>
        <!-- QR Block -->
        <div
          class="flex flex-row bg-footer shadow-lg rounded-xl py-10 px-6 space-x-4 items-start w-11/12 mx-auto"
        >
          <img
            class="h-32 w-32 rounded-lg shadow-sm"
            src="https://storage.googleapis.com/roleever-public-assets/www/qr-code.jpeg"
            alt="QR Code Download"
          />
          <div>
            <h3 class="text-xl text-black">Get RoleEver</h3>
            <p class="text-lg py-2">
              Scan the QR code with your phone to install the Grammarly
              Keyboard. Or, get it through the AppStore or Google Play
            </p>
          </div>
        </div>
        <!-- OR -->

        <div class="flex items-center justify-center space-x-2">
          <span class="h-px bg-secondary w-full"></span>
          <span class="font-medium text-dark-tint pb-1">
            {{ $t('download_modal.or') }}</span
          >
          <span class="h-px bg-secondary w-full"></span>
        </div>

        <!-- SMS Blcok -->
        <div class="flex justify-center">
          <form class="px-8 py-4 mb-4" method="post" @submit="submitForm">
            <div class="flex flex-col pb-2 space-y-4">
              <MazPhoneNumberInput
                v-model="phoneNumber"
                fetch-country
                color="grey"
                :translations="translationsPhoneInput"
                @update="results = $event"
              />

              <button
                class="flex-grow bg-primary hover:shadow-xl hover:opacity-75 text-white font-normal font-gitan py-2 px-4 rounded focus:outline-none"
                type="submit"
              >
                <div v-if="isSubmitting" class="flex content-center">
                  <div class="loader"></div>
                  <p class="text-s ml-4">
                    {{ $t('download_modal.button_sending') }}
                  </p>
                </div>
                <p v-else>{{ $t('download_modal.button_send') }}</p>
              </button>
            </div>

            <p class="text-left text-sm text-dark">
              {{ $t('download_modal.information') }}
            </p>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import TheFeatureSliderVue from '~/components/ui/TheFeatureSlider.vue'
export default {
  data() {
    return {
      isSubmitting: false,
      linkSent: false,
      phoneNumber: null,
      results: null,
    }
  },
  computed: {
    translationsPhoneInput() {
      return {
        countrySelectorLabel: this.$t('download_modal.phone_code'),
        countrySelectorError: this.$t('download_modal.select_country'),
        phoneNumberLabel: this.$t('download_modal.phone_label'),
        example: this.$t('download_modal.example'),
      }
    },
  },
  methods: {
    submitForm(e) {
      this.isSubmitting = true
      e.preventDefault()
      // Disable submit button while submitting
      this.linkSent = false
      // POST request using fetch with async/await
      const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        mode: 'cors',
        body: JSON.stringify({ To: this.phone }),
      }
      fetch(
        'https://en2xtnm78plvhln.m.pipedream.net?pipedream_response=1',
        requestOptions
      ).then((response) => {
        this.isSubmitting = false
        // check for error response
        if (response.status === 400) {
          // get error message from body or default to response status
          this.$modal.show('dialog', {
            text: this.$t('error_generic'),
            buttons: [
              {
                title: 'OK 💩',
              },
            ],
          })
        } else {
          this.phone = null
          this.linkSent = TheFeatureSliderVue
        }
      })
    },
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
