/*
<template>
  <div class="flex flex-col w-full items-center pt-10">
    <client-only> <TheContactUsModal /> </client-only>
    <h2 class="text-2xl sm:text-3xl lg:text-4xl font-base subpixel-antialiased">
      Come possiamo aiutarti?
    </h2>

    <h3
      class="text-2xl sm:text-xl lg:text-xl font-medium subpixel-antialiased pt-20 pb-10"
    >
      Scegli una categoria per ricevere assistenza
    </h3>

    <div
      class="flex flex-row w-10/12 mx-auto align-middle space-x-2 justify-center pb-24 cursor-pointer"
    >
      <div
        v-for="item in items"
        :key="item.message"
        class="flex flex-col w-64 h-32 place-content-center text-center border-solid border-2 border-dark-tint hover:border-primary hover:text-primary duration-500 ease-in-out"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-12 w-12 text-dark fill-current mx-auto"
          viewBox="0 0 48 48"
        >
          <path fill="none" d="M0 0h48v48H0z" />
          <path
            d="M15.8 7L14 6.3c-1.5-.5-5.1 6-8 14.6S2 37 3.6 37.4l1.8.6c.5.2 1.1-.1 1.3-.6l4.9-14.6 4.9-14.6c.1-.5-.2-1-.7-1.2zM10.925 26.734l2.133-6.352 1.516.51-2.132 6.351zM35.6 12.9l-.1.2-.1.2-.2-.1-2.5-.8-.2-.1.1-.2v-.2l-.1-.1-.2.8-.2.3 3.2 1.1.2-.4.2-.7zM33.2 11.2l-.1.2-.1.3 2.4.8.1-.2.1-.3zM36.6 8.2l-2.1-.7c-.2-.1-.3 0-.4.2l-.3.9 2.6.9.3-.9c.2-.2.1-.4-.1-.4z"
          />
          <path
            d="M36.9 4.3c-1-.3-2.1-.5-3.2-.5-1.9 0-3.4.7-3.8 1.8-.4 1.3.5 2.8 2.2 3.9l-.2.7.6.2 4.1 1.4.5.2.2-.7h.5c1.9 0 3.4-.7 3.8-1.8.7-1.8-1.5-4.1-4.7-5.2zm3.8 4.9c-.2.7-1.3 1.1-2.8 1.1h-.4l-4.8-1.6c-.4-.3-.8-.6-1.1-.9-.5-.5-.8-1.2-.7-1.9.2-.7 1.3-1.1 2.8-1.1 1 0 2 .2 2.9.5 2.8.9 4.5 2.8 4.1 3.9zM24.153 40.824l.542-1.611.948.318-.542 1.612zM16.102 24.816l.322-.947 1.61.548-.322.946zM31.907 17.599l.554-1.607.946.326-.555 1.607zM39.34 32.608l.321-.946 1.61.547-.322.946zM35.1 28.7l-5.4-.4c-.1-.3-.3-.5-.5-.7l3-9.1-.2-.1-3 9.1c-.6-.1-1.2.2-1.3.8-.1.6.2 1.2.8 1.3.5.1 1-.1 1.2-.6l5.3.4.1-.7z"
          />
          <path
            d="M36.4 14.1l-.2.5-.1.3-.3-.1-4.5-1.5-.3-.1.1-.3.2-.5c-6.3-1-12.7 1.7-16.3 7.1l.3.1.3.1-.1.3-2.8 8.5-.1.3-.3-.1c.1 9.1 7.5 16.3 16.6 16.2s16.3-7.5 16.2-16.6c-.1-5.9-3.4-11.4-8.7-14.2zm5.7 19c-2.5 7.4-10.5 11.4-17.9 8.9s-11.4-10.5-8.9-17.9 10.5-11.4 17.9-8.9c7.4 2.5 11.4 10.5 8.9 17.9z"
          />
        </svg>

        <p class="text-lg">{{ item.message }}</p>
      </div>
    </div>
    <div class="flex flex-col w-full py-10">
      <div class="w-3/12 mx-auto text-center">
        <h2
          class="text-2xl sm:text-3xl lg:text-4xl font-base subpixel-antialiased leading-tight"
        >
          Non riesci a trovare quello che stai cercando?
        </h2>
        <p class="mt-10">
          Che siano problemi tecnici o di tilt, siamo pronti ad aiutarti! Se non
          viene risucchiato da un portale, ti risponderemo al più presto.
        </p>
        <!--Contact Button-->
        <div
          class="flex w-7/12 xs:w-8/12 mx-auto justify-center py-12 xs:py-0 xs:pt-12 xs:pb-20"
        >
          <button
            class="bg-primary shadow-xl hover:shadow-2xl transition delay-150 duration-300 ease-in-out transform lg:hover:-translate-y-1 lg:hover:scale-100 scale text-white font-normal py-2 xs:py-4 px-4 lg:px-16 text-base rounded xs:rounded-lg font-gitan focus:outline-none w-full"
            @click="$modal.show('send-message')"
          >
            Contattaci
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import TheContactUsModal from '@/components/ui/TheContactUsModal.vue'
export default {
  components: {
    TheContactUsModal,
  },
  data() {
    return {
      items: [
        { message: 'Le basi di RoleEver' },
        { message: 'Il Laboratorio' },
        { message: 'Sistemi di gioco' },
        { message: 'Account' },
      ],
    }
  },
}
</script>
