<template>
  <div class="container h-screen">
    <div
      class="flex flex-row xs:flex-col mx-auto my-auto space-x-10 xs:space-x-0"
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
          class="text-2xl sm:text-3xl lg:text-4xl font-base subpixel-antialiased"
        >
          Scarica RoleEver
        </h2>
        <p>Chat, tiri e schede pg. Tutto in un'app.</p>
        <!-- QR Block -->
        <div
          class="flex flex-row bg-footer shadow-lg rounded-lg py-10 px-6 space-x-4 items-start"
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
        <!-- SMS Blcok -->
        <div class="flex justify-center">
          <form class="px-8 py-4 mb-4" method="post" @submit="submitForm">
            <div class="flex pb-2">
              <input
                id="phone"
                v-model="phone"
                class="w-4/6 appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mr-4"
                type="tel"
                name="phone"
                autocomplete="tel"
                pattern="^\+[1-9]\d{1,14}$"
                :placeholder="$t('download_modal.phone_placeholder')"
                :title="$t('download_modal.phone_placeholder')"
                required
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
