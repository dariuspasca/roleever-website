<template>
  <modal
    name="get-invite-m8"
    :min-width="200"
    :min-height="200"
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
          class="text-white float-right my-3 mr-3 focus:outline-none"
          @click="$modal.hide('get-invite-m8')"
        >
          <svg
            class="fill-current text-dark h-5 w-5"
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
      <div class="flex justify-center">
        <form class="px-8 py-4 mb-4" method="post" @submit="submitForm">
          <div class="flex pb-2">
            <input
              id="email"
              v-model="email"
              class="w-4/6 appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mr-4"
              type="email"
              name="email"
              autocomplete="email"
              pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
              placeholder="Your cool e-mail"
              title="Insert your email"
              required
            />
            <button
              class="flex-grow bg-primary hover:shadow-xl hover:opacity-75 text-white font-normal font-gitan py-2 px-4 rounded focus:outline-none"
              type="submit"
            >
              <div v-if="isSubmitting" class="flex content-center">
                <div class="loader"></div>
                <p class="text-s ml-4">Subscribing...</p>
              </div>
              <p v-else>Get invite</p>
            </button>
          </div>

          <p class="text-left text-sm text-dark">
            You will receive an invite when the open beta is ready. NO SPAM!
          </p>
        </form>
      </div>
    </div>
  </modal>
</template>

<script>
export default {
  data() {
    return {
      email: null,
      isSubmitting: false,
      linkSent: false,
    }
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
        body: JSON.stringify({ email: this.email }),
      }
      fetch(
        'https://ent24x6km30t5u8.m.pipedream.net?pipedream_response=1',
        requestOptions
      ).then((response) => {
        this.isSubmitting = false
        // check for error response
        if (response.status === 400) {
          // get error message from body or default to response status
          this.$modal.show('dialog', {
            text: 'Something unexpected occured!Try later...',
            buttons: [
              {
                title: 'OK 💩',
              },
            ],
          })
        } else {
          this.email = null
          this.linkSent = true
          this.$modal.hide('get-invite-m8')
        }
      })
    },
    beforeClose() {
      this.email = null
      if (this.linkSent) {
        this.$toasted.show('🎉 &nbsp; Link inviato', {
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
