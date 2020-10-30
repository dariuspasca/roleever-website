<template>
  <div class="flex flex-col w-full h-full">
    <!--Introduction Section-->
    <div class="container mx-auto text-center">
      <h1
        class="text-3xl sm:text-3xl lg:text-5xl font-semibold subpixel-antialiased tracking-wide md:tracking-normal mx-auto xs:pt-10"
      >
        Ruola come vuoi!
      </h1>
      <p class="xs:w-full sm:w-10/12 md:w-7/12 w-5/12 mx-auto pt-4">
        Con RoleEver hai una montagna di strumenti nel palmo della tua mano. Ti
        presentiamo l'app perfetta per giocare ai GdR dove vuoi!
      </p>
      <the-download-button class="justify-center py-10" />
    </div>
    <!--Chat Section-->
    <div class="container mx-auto py-10">
      <div class="flex flex-row xs:flex-col">
        <!--Chat Text-->
        <div class="w-6/12 xs:w-11/12 xs:mx-auto my-auto">
          <div
            class="xs:w-full sm:w-10/12 md:w-9/12 w-7/12 float-right xs:float-none"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 48 48"
              class="h-16 w-16 text-primary-shade fill-current -mb-4"
            >
              <path fill="none" d="M0 0h48v48H0z" />
              <path
                d="M15.6 22.3l-1.3-1.9 3-4.4h9.9l.7-.6-.9-2.5.5-2.4H3.2l-.2.8 1.3 2.3-1.4 2 1.4 2.2-.3 2.1.5 1.4L2.8 24l1.3.6h2.7l4.9 7.4v-6.8h2.2v-.1z"
              />
              <path
                d="M22.4 37.1v-6.5h-6.1l.6-2.6-.9-2.3 1.8-2.8-1.3-1.8 1.8-2.7h23.3l1.8 1.4-1.2 2.3.9 1.8-1 1.3.8 1.6-1.1 2.1.9 1.8h-14l-6.3 6.4zm-5.2-7.2h5.9v5.5l5.5-5.5h13.1l-.6-1.1 1.1-2.1-.8-1.6 1-1.3-.9-1.7 1.1-2.1-1.1-.9H18.8l-1.3 2 1.3 1.8-1.9 2.9.8 2.1-.5 2z"
              />
              <circle cx="24.9" cy="24" r="1.1" />
              <circle cx="29.9" cy="24" r="1.1" />
              <circle cx="34.8" cy="24" r="1.1" />
            </svg>
            <h2
              class="text-2xl sm:text-3xl lg:text-4xl font-base subpixel-antialiased"
            >
              Chat
            </h2>
            <p class="py-2 text-lg">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
              consectetur mi in faucibus malesuada. Suspendisse cursus eros in
              tincidunt finibus. Vestibulum ante ipsum primis in faucibus orci
              luctus et ultrices posuere cubilia curae; Curabitur ut tortor
              lorem.
            </p>
          </div>
        </div>
        <!--Chat Preview-->
        <div class="flex w-6/12 xs:w-full items-center">
          <img
            class="xs:w-11/12 sm:w-10/12 w-7/12 h-auto float-left xs:float-none ml-10 xs:mx-auto"
            src="https://storage.googleapis.com/roleever-public-assets/www/features/chat-placeholder.png"
            alt="Chat Preview"
          />
        </div>
      </div>
    </div>
    <!--DiceRolls Section-->
    <div class="flex w-full bg-cover bg-center bg-fantasy">
      <!--Card-->
      <div
        class="flex rounded-3xl xs:rounded-2xl shadow-2xl bg-cover bg-center bg-view my-20 py-10 xs:py-2 w-8/12 xs:w-11/12 sm:w-11/12 md:w-10/12 mx-auto"
      >
        <div class="flex flex-row xs:flex-col">
          <!--DiceRolls Preview-->
          <div
            class="flex w-6/12 xs:w-full xs:order-last xs:pt-6 items-center justify-center"
          >
            <img
              class="xs:w-11/12 sm:w-10/12 w-10/12 h-auto"
              src="https://storage.googleapis.com/roleever-public-assets/www/features/tiri-placeholder.png"
              alt="Chat Preview"
            />
          </div>
          <!--DiceRolls Text-->
          <div class="w-6/12 xs:w-11/12 xs:mx-auto my-auto">
            <div
              class="xs:w-full sm:w-10/12 md:w-9/12 w-10/12 float-left xs:float-none"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-16 w-16 text-primary-shade fill-current -mb-4"
                viewBox="0 0 48 48"
              >
                <path fill="none" d="M0 0h48v48H0z" />
                <path
                  d="M28.5 34.7l15-4.4-5.5-1.8zM38.2 27.7l5.9 1.9-6.3-15-5 8.2zM32.1 22.4l4.9-8.2-9.6 2.1 2.3 5.7 2.4.4zM37.3 28l-5-4.6-.1-.1L30 23l1.4 3.5-5 6.4.4 2L37.3 28zM23.9 14.8l-12.8-2L3.4 22l3.9 12.4 13 1.9 8-10.3-4.4-11.2zm-12.8-.9l1 2.8-7 4.5 6-7.3zm12.4 12.2L20 35.2l-8.3-4.7 11.8-4.4zm-12.3 3.8l1.6-12.4 10.5 7.9-12.1 4.5zm2.2-12.8l9.8-1.3.5 9-10.3-7.7zm-.6-.7l-1-2.8 10.1 1.6-9.1 1.2zm-.7 1.1l-1.6 12-5.9-7.2 7.5-4.8zm-1.3 13.3l8.1 4.6-10.6-1.5 2.5-3.1zm13.5-5l3 .4-6.3 8.1 3.3-8.5zm3.1-.3l-3-.4-.4-8.5 3.4 8.9zM4.5 23.3l5.8 7.1-2.6 3.1-3.2-10.2z"
                />
              </svg>
              <h2
                class="text-2xl sm:text-3xl lg:text-4xl font-base subpixel-antialiased"
              >
                Tiri di dado
              </h2>
              <p class="py-2 text-lg">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                consectetur mi in faucibus malesuada. Suspendisse cursus eros in
                tincidunt finibus. Vestibulum ante ipsum primis in faucibus orci
                luctus et ultrices posuere cubilia curae; Curabitur ut tortor
                lorem.
              </p>
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
}
</script>
