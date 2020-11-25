<template>
  <modal
    name="send-message"
    :min-width="400"
    :min-height="400"
    :delay="100"
    :adaptive="true"
    :scrollable="true"
    height="auto"
    @before-close="beforeClose"
  >
    <v-dialog />
    <div
      class="flex flex-col"
      lazy-background="https://storage.googleapis.com/roleever-public-assets/www/background_desaturated.jpg"
    >
      <div slot="top-right">
        <button
          class="text-dark float-right my-3 mr-3 focus:outline-none"
          @click="$modal.hide('send-message')"
        >
          <svg
            class="fill-current text-primary-shade h-5 w-5"
            style="enable-background: new 0 0 512 512"
            viewBox="0 0 512 512"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M443.6,387.1L312.4,255.4l131.5-130c5.4-5.4,5.4-14.2,0-19.6l-37.4-37.6c-2.6-2.6-6.1-4-9.8-4c-3.7,0-7.2,1.5-9.8,4  L256,197.8L124.9,68.3c-2.6-2.6-6.1-4-9.8-4c-3.7,0-7.2,1.5-9.8,4L68,105.9c-5.4,5.4-5.4,14.2,0,19.6l131.5,130L68.4,387.1  c-2.6,2.6-4.1,6.1-4.1,9.8c0,3.7,1.4,7.2,4.1,9.8l37.4,37.6c2.7,2.7,6.2,4.1,9.8,4.1c3.5,0,7.1-1.3,9.8-4.1L256,313.1l130.7,131.1  c2.7,2.7,6.2,4.1,9.8,4.1c3.5,0,7.1-1.3,9.8-4.1l37.4-37.6c2.6-2.6,4.1-6.1,4.1-9.8C447.7,393.2,446.2,389.7,443.6,387.1z"
            />
          </svg>
        </button>
      </div>
    </div>

    <div class="flex flex-row px-3 pb-6 pt-2">
      <form
        id="contactForm"
        class="contact-form flex flex-col w-full px-3"
        lazy-background="https://storage.googleapis.com/roleever-public-assets/www/background_desaturated.jpg"
        @submit.prevent="submit"
      >
        <div class="flex flex-row xs:flex-col space-x-16 xs:space-x-0 xs:px-6">
          <div class="flex flex-col xs:flex-row w-5/12 xs:w-full xs:space-x-10">
            <div class="block">
              <label class="text-sm text-dark-tint">{{
                $t('contact_form.name')
              }}</label>
              <div class="border-b-2 border-secondary">
                <input
                  type="text"
                  class="w-full py-1 focus:outline-none font-semibold"
                  name="user_name"
                  required
                />
              </div>
            </div>
            <div class="block">
              <label class="pt-6 text-sm text-dark-tint">{{
                $t('contact_form.email')
              }}</label>
              <div class="border-b-2 border-secondary">
                <input
                  type="email"
                  class="w-full py-1 focus:outline-none font-semibold"
                  name="user_email"
                  required
                />
              </div>
            </div>
          </div>
          <div class="flex flex-col w-7/12 xs:w-full xs:pt-8 h-full">
            <label class="text-sm text-dark-tint">{{
              $t('contact_form.message')
            }}</label>
            <textarea
              name="message"
              class="resize-none h-full font-semibold focus:outline-none placeholder-dark-shade pt-1 xs:h-64"
              :placeholder="$t('contact_form.message_placeholder')"
              required
            ></textarea>
          </div>
        </div>
        <vue-hcaptcha
          ref="invisibleHcaptcha"
          sitekey="ef906615-f50d-42fd-9f1a-388521a03406"
          size="invisible"
          @verify="onCaptchaVerified"
          @expired="onCaptchaExpired"
          @error="onCaptchaExpired"
        ></vue-hcaptcha>
        <button
          type="submit"
          class="bg-primary shadow-xl py-2 px-4 rounded items-center font-gitan focus:outline-none text-white w-6/12 mx-auto mt-12"
        >
          <div v-if="isSubmitting" class="flex content-center">
            <div class="loader"></div>
            <p class="text-s ml-4">
              {{ $t('contact_form.button_sending') }}
            </p>
          </div>
          <p v-else>
            {{ $t('contact_form.button_send') }}
          </p>
        </button>
      </form>
    </div>
  </modal>
</template>

<script type="module">
import emailjs from 'emailjs-com'

export default {
  data() {
    return {
      isSubmitting: false,
      messageSent: false,
      hCaptcha: {
        token: null,
        verified: false,
      },
    }
  },
  methods: {
    onCaptchaVerified(response) {
      this.hCaptcha.token = response
      const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ token: response }),
      }
      fetch(
        'https://havytm2s25.execute-api.eu-central-1.amazonaws.com/prod/validate-hcaptach',
        requestOptions
      )
        .then(async (response) => {
          const data = await response.json()

          // check for error response
          if (!response.ok) {
            // get error message from body or default to response status
            const error = (data && data.message) || response.status
            return Promise.reject(error)
          }
          if (data.body === true) {
            this.hCaptcha.verified = true
            this.submit()
          }
        })
        .catch((error) => {
          this.errorMessage = error
          // eslint-disable-next-line no-console
          console.error('There was an error!', error)
          this.hCaptcha.verified = false
        })
    },
    onCaptchaExpired() {
      this.isSubmitting = false
      this.hCaptcha = {
        token: null,
        verified: false,
      }
    },
    submit() {
      if (this.hCaptcha.verified === true && this.hCaptcha.token != null) {
        this.sendEmail()
      } else {
        this.$refs.invisibleHcaptcha.execute()
      }
    },
    sendEmail() {
      if (!this.isSubmitting) {
        this.isSubmitting = true
        emailjs
          .sendForm(
            'service_h5u262a',
            'template_gwhqrz4',
            'contactForm',
            'user_7lTAUfZbG9mNz9kjjslNw'
          )
          .then(
            (result) => {
              this.isSubmitting = false
              this.messageSent = true
              this.$modal.hide('send-message')
            },
            (error) => {
              // eslint-disable-next-line no-console
              console.log(
                'Message failed to be sent with internal error:',
                error
              )
              this.isSubmitting = false
              this.$modal.show('dialog', {
                text: this.$t('error_generic'),
                buttons: [
                  {
                    title: 'OK 💩',
                  },
                ],
              })
            }
          )
      }
    },
    beforeClose() {
      if (this.messageSent) {
        this.$toasted.show(this.$t('contact_form.message_sent'), {
          className: 'myToast',
          theme: 'toasted-primary',
          position: 'bottom-right',
          duration: 5000,
        })
        this.messageSent = false
      }
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
