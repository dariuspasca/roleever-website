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
    <div
      class="flex flex-row px-3 py-8"
      lazy-background="https://storage.googleapis.com/roleever-public-assets/www/background_desaturated.jpg"
    >
      <form
        class="contact-form flex flex-col w-full px-3"
        @submit.prevent="sendEmail"
      >
        <div class="flex flex-row xs:flex-col space-x-16 xs:space-x-0 xs:px-6">
          <div class="flex flex-col xs:flex-row w-5/12 xs:w-full xs:space-x-10">
            <div class="block">
              <label class="text-sm text-dark-tint">Nome</label>
              <div class="border-b-2 border-secondary">
                <input
                  type="text"
                  class="w-full py-1 focus:outline-none font-semibold"
                  name="user_name"
                />
              </div>
            </div>
            <div class="block">
              <label class="pt-6 text-sm text-dark-tint">Email</label>
              <div class="border-b-2 border-secondary">
                <input
                  type="email"
                  class="w-full py-1 focus:outline-none font-semibold"
                  name="user_email"
                />
              </div>
            </div>
          </div>
          <div class="flex flex-col w-7/12 xs:w-full xs:pt-8 h-full">
            <label class="text-sm text-dark-tint">Hai qualcosa da dirci?</label>
            <textarea
              name="message"
              class="resize-none h-full font-semibold focus:outline-none placeholder-dark-shade pt-1 xs:h-48"
              placeholder="Scrivi il tuo messaggio qui..."
            ></textarea>
          </div>
        </div>

        <input
          type="submit"
          class="bg-primary shadow-xl py-2 px-4 rounded items-center font-gitan focus:outline-none text-white w-6/12 mx-auto mt-12"
          value="Invia Messaggio"
        />
      </form>
    </div>
  </modal>
</template>

<script>
import emailjs from 'emailjs-com'

export default {
  data() {
    return {
      isSubmitting: false,
      messageSent: false,
    }
  },
  methods: {
    sendEmail: (e) => {
      emailjs
        .sendForm(
          'service_h5u262a',
          'template_gwhqrz4',
          e.target,
          'user_7lTAUfZbG9mNz9kjjslNw'
        )
        .then(
          (result) => {
            console.log('SUCCESS!', result.status, result.text)
          },
          (error) => {
            console.log('FAILED...', error)
          }
        )
    },
    submitForm(e) {
      this.isSubmitting = true
      e.preventDefault()
      // Disable submit button while submitting
      this.messageSent = false
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
            text: 'Qualcosa è andato storto! Riprova più tardi...',
            buttons: [
              {
                title: 'OK 💩',
              },
            ],
          })
        } else {
          this.phone = null
          this.linkSent = true
          this.$modal.hide('send-message')
        }
      })
    },
    beforeClose() {
      this.phone = null
      if (this.linkSent) {
        this.$toasted.show('🎉 &nbsp; Messaggio inviato', {
          className: 'myToast',
          theme: 'toasted-primary',
          position: 'bottom-right',
          duration: 5000,
        })
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
