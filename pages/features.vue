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
    <!--CharacterSheets Section-->
    <div class="container mx-auto py-10">
      <div class="flex flex-row xs:flex-col">
        <!--CharacterSheets Text-->
        <div class="w-6/12 xs:w-11/12 xs:mx-auto my-auto">
          <div
            class="xs:w-full sm:w-10/12 md:w-9/12 w-7/12 float-right xs:float-none"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-16 w-16 text-primary-shade fill-current -mb-4"
              viewBox="0 0 48 48"
            >
              <path fill="none" d="M0 0h48v48H0z" />
              <path
                d="M7.7 15.5H2.1s.2-3.6 1.2-3.9c0 0 3.4 1.4 4.4 3.9zM28.7 35.3H16.3c0 .4 0 .8-.1 1.2 0 .2-.1.4-.2.6l15 .2h.7c.1 0 .2 0 .2-.1.3-.6.4-1.3.4-1.9h-3.6zM45.2 9.6c-.4 0-9.8 0-16 17.9v.1l1.5 3.4-.8 2.9 1.3-2.7 5.1-2.5L41 16.6l.5-.4.1-.1s1.9-4.4 3.8-5.9l.8-.6h-1zM41 15.8l-4.5 3.5 3.4-1.5-4.1 10.4-4.5 2.3-1.3-2.8c4.9-13.8 11.7-16.6 14.3-17.1-1.4 1.5-2.5 3.3-3.3 5.2z"
              />
              <path
                d="M25.3 11.7c-.6-.4-1.3-.6-2-.6h-19c1.3.4 7 2.9 4.6 11.3 0 0-4.7 13.3 2.9 15.4.7.2 1.4.1 2-.1.7-.1 1.3-.6 1.5-1.3.2-.7.1-1.3-.3-1.9h13.2c-2-4.6.6-12.1.6-12.1 1.8-6.3-1.7-9.5-3.5-10.7zm-12.9 4.6l-.3-1.5h7.4c.6 0 1 .4 1 1v6.3c0 .6-.4 1-1 1h-7.7l.4-1.8c.5-1.6.5-3.4.2-5zm11.5 14.2H11.7v-.9h12.2v.9zm0-3.3H11.8v-1h12.1v1z"
              />
            </svg>
            <h2
              class="text-2xl sm:text-3xl lg:text-4xl font-base subpixel-antialiased"
            >
              Schede PG
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
        <!--CharacterSheets Preview-->
        <div class="flex w-6/12 xs:w-full items-center">
          <img
            class="xs:w-11/12 sm:w-10/12 w-7/12 h-auto float-left xs:float-none ml-10 xs:mx-auto"
            src="https://storage.googleapis.com/roleever-public-assets/www/features/scheda-placeholder.png"
            alt="Chat Preview"
          />
        </div>
      </div>
    </div>
    <!--More Section-->
    <div class="flex w-full py-10">
      <div class="flex flex-col w-8/12 xs:w-11/12 sm:w-10/12 md:w-9/12 mx-auto">
        <!--Header-->
        <div class="flex w-8/12 xs:w-full mb-20 justify-end xs:justify-center">
          <h1
            class="text-3xl sm:text-3xl lg:text-5xl font-semibold subpixel-antialiased tracking-wide md:tracking-normal"
          >
            E tanto, ma TANTO altro!
          </h1>
        </div>
        <div class="flex flex-col space-y-20 xs:space-y-10">
          <!--First Column-->
          <div
            class="flex flex-row xs:flex-col w-full justify-center xs:justify-start space-x-20 xs:space-x-0 xs:space-y-10"
          >
            <!--Board Section-->
            <div class="w-4/12 xs:w-full float-right xs:float-none">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-16 w-16 text-primary-shade fill-current"
                viewBox="0 0 48 48"
              >
                <path fill="none" d="M0 0h48v48H0z" />
                <path
                  d="M12.1 18c-.3 0-.5.2-.5.5s.2.5.5.5.5-.2.5-.5-.2-.5-.5-.5zM23.3 11.2c-.2 0-.3.2-.3.3 0 .2.2.3.3.3.2 0 .3-.2.3-.3 0-.2-.1-.3-.3-.3zm0 .5c-.1 0-.1-.1-.1-.1 0-.1.1-.2.1-.2.1 0 .1.1.1.1 0 .1 0 .2-.1.2z"
                />
                <path
                  d="M15.3 25.4l.3-6.5c0-.2-.2-.4-.4-.4h-2c0 .6-.4 1-1 1s-1-.4-1-1H8.9s-.1 0-.1.1c.2.8.3 1.6.3 2.4l-.3 5.6c0 .2.2.3.3.3h6.2c.1 0 .2-.1.2-.2v-.1c-.2-.3-.3-.7-.2-1.2zM40.4 30.3h-8.7v-11c0-.5.4-.9.9-.9h7.8v11.9zm-8-.7h7.2V19.1h-7c-.1 0-.2.1-.2.1v10.4z"
                />
                <circle cx="36" cy="19.9" r=".5" />
                <path
                  d="M28.3 34.3h-9.5v-6.7h4.5v.1c.1.2.3.4.6.4s.5-.2.6-.4v-.1h4.2v6.3c0 .2-.2.3-.4.4zm-9-.4h9.1V28h-3.5c-.2.5-.8.7-1.3.5-.2-.1-.4-.3-.5-.5h-3.8v5.9z"
                />
                <path
                  d="M23.9 27.1c-.2 0-.4.2-.4.4s.2.4.4.4.4-.2.4-.4-.1-.4-.4-.4z"
                />
                <path
                  d="M45.3 26.2l-.1-1.5-.3-2.6c-.3-2.9-.2-5.9.3-8.8 0-.2-.1-.4-.4-.5-4 .4-8.1.4-12.1.1l-9.3-2.2h-.3l-6.2 2.2h-1c-4.1.4-8.2.4-12.2 0-.2 0-.4.3-.4.5.4 2.9.5 5.9.3 8.8l-.2 2.6-.1 1.5c-.2 2.5.5 5 .6 7.5 0 1.5-.6 3.1-.5 4.6 0 .2.1.4.4.5l6.5-.4h.6l5.5.4h.1l1.6-.2c1.3-.1 2.6-.1 3.9.2H26.6c1.3-.2 2.6-.3 3.9-.2l1.6.2h.1l5.5-.4h.6l6.5.4c.2 0 .4-.3.4-.5.2-1.8-.5-3.5-.5-5.3 0-2.4.7-4.6.6-6.9zM23.2 11l7.5 1.8H18.1l5.1-1.8zm19.1 25c0 .2-.2.4-.5.4H6.4c-.2 0-.4-.2-.5-.4V15.9c0-.2.2-.4.5-.4h35.5c.2 0 .4.2.5.4V36z"
                />
              </svg>
              <h3
                class="text-2xl sm:text-xl lg:text-2xl font-medium subpixel-antialiased"
              >
                Bacheca campagne
              </h3>
              <p class="mt-3">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                consectetur mi in faucibus malesuada.
              </p>
            </div>
            <!--Diary Section-->
            <div class="w-4/12 xs:w-full float-left xs:float-none">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-16 w-16 text-primary-shade fill-current"
                viewBox="0 0 48 48"
              >
                <path fill="none" d="M0 0h48v48H0z" />
                <path
                  d="M5.8 10.9v1.7H4.3c-.2 0-.3.1-.3.3v20.6c0 .2.1.3.3.3h19.2V10.9c-5.7-2.2-12-2.2-17.7 0zm3.7 8.8V19H20v.7H9.5zm8.8 4.7v.6h-7.2v-.6h7.2zm-7.1-10.1v-.6h7.2v.6h-7.2zm11.7 18.9H4.7V13.3h1.1v19.6c5.5-2.1 11.6-2.2 17.1-.2v.5zM44.2 12.6h-1.5v-1.7c-3-1.3-6.2-1.8-9.4-1.6-.1-.3-.4-.5-.9-.5h-2.5c-.5 0-1 .3-1 .7v.3c-1.4.3-2.7.6-4 1.1v22.9h4v4.9l2.2-2.9 2.2 2.9v-4.9h10.8c.2 0 .3-.1.3-.3V13c.1-.2 0-.3-.2-.4zM28.9 33.1h-3.3v-.5c1.1-.4 2.2-.7 3.3-.9v1.4zm4.2 4.8l-1.9-2.6-2 2.6V9.5c0-.2.3-.4.7-.4h2.5c.4 0 .7.2.7.4v28.4zm10.8-4.7H33.3v-1.9c3.2-.2 6.4.3 9.4 1.6V13.3h1.2v19.9z"
                />
                <path
                  d="M24.2 35c-1.1 0-2.2-.2-2.2-.7 0-.1.1-.3.5-.4.1-.1.3 0 .4.1.1.1 0 .2-.1.3s-.2.1-.2.1c.5.2 1 .3 1.6.3.5.1 1.1 0 1.6-.3 0 0-.1-.1-.2-.1s-.2-.2-.1-.3c.1-.1.3-.1.4-.1.4.1.5.3.5.4.1.5-1.1.7-2.2.7z"
                />
              </svg>
              <h3
                class="text-2xl sm:text-xl lg:text-2xl font-medium subpixel-antialiased"
              >
                Diario e appunti
              </h3>
              <p class="mt-3">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                consectetur mi in faucibus malesuada.
              </p>
            </div>
          </div>
          <!--Second Column-->
          <div
            class="flex flex-row xs:flex-col w-full justify-center xs:justify-start space-x-20 xs:space-x-0 xs:space-y-10"
          >
            <!--Turns Section-->
            <div class="w-4/12 xs:w-full float-right xs:float-none">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-16 w-16 text-primary-shade fill-current"
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
              <h3
                class="text-2xl sm:text-xl lg:text-2xl font-medium subpixel-antialiased"
              >
                Turni di gioco
              </h3>
              <p class="mt-3">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                consectetur mi in faucibus malesuada.
              </p>
            </div>
            <!--Reading Section-->
            <div class="w-4/12 xs:w-full float-left xs:float-none">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-16 w-16 text-primary-shade fill-current"
                viewBox="0 0 48 48"
              >
                <path fill="none" d="M0 0h48v48H0z" />
                <path
                  d="M12.6 37.3C9 37.3 6 34.4 6 30.7c0-1.4.4-2.7 1.3-3.9l.2.2c-2 2.8-1.4 6.7 1.4 8.7 1.1.8 2.3 1.2 3.6 1.2 2 0 3.8-.9 5-2.5l.2.2c-1 1.7-3 2.7-5.1 2.7zM19 32.2l-.3-.1c.1-.5.2-.9.2-1.4 0-.9-.2-1.7-.5-2.5l.3-.1c.5 1.3.6 2.8.3 4.1zM35.7 37.3c-3.6 0-6.6-2.9-6.6-6.6 0-1.4.4-2.7 1.3-3.9l.2.2c-2 2.8-1.4 6.7 1.4 8.7 1.1.8 2.3 1.2 3.6 1.2 2 0 3.9-1 5.1-2.6l.2.2c-1.1 1.8-3.1 2.8-5.2 2.8zM42.1 32.2l-.3-.1c.3-1.3.2-2.6-.3-3.9l.3-.1c.4.8.5 1.7.5 2.6 0 .6-.1 1-.2 1.5z"
                />
                <path
                  d="M44.9 29h1l-.9-1.2c-.7-2.3-2.1-4.3-4.2-5.6L33 11.6a3.4 3.4 0 00-3-1.3c-1.2.2-2.2 1-2.6 2.1v.1l1 .4v-.1c.3-.8 1-1.3 1.8-1.4.8-.1 1.5.2 2 .9l6.7 9c-1-.4-2.1-.5-3.2-.5-4.7 0-8.8 3.4-9.6 8.1-1.2-1-3-1-4.3 0-.8-4.5-4.6-7.7-9.2-7.7-1 0-2 .2-2.9.5l6.8-9.1c.5-.6 1.2-1 2-.9.8.1 1.5.7 1.8 1.4v.1l1-.4v-.1c-.4-1.1-1.4-1.9-2.6-2.1-1.2-.2-2.3.3-3 1.3L7.8 22.5c-2 1.3-3.5 3.3-4.1 5.6l-.8 1.1H4v2.5h-.5v.2c.9 5.1 5.7 8.5 10.7 7.6 4.4-.7 7.7-4.6 7.8-9.1v-.5c.9-1.1 2.5-1.3 3.6-.5.2.1.3.2.4.4v.5c0 5.4 4.3 9.7 9.7 9.7 4.9 0 9-3.6 9.6-8.4v-.2h-.4V29zm-32.2 9.4c-4.4 0-8-3.6-8-8s3.6-8 8-8 8 3.6 8 8-3.6 8-8 8zm23 .3c-4.6 0-8.3-3.7-8.3-8.3 0-4.6 3.7-8.3 8.3-8.3 4.6 0 8.3 3.7 8.3 8.3 0 4.6-3.7 8.3-8.3 8.3z"
                />
                <path d="M3.5 29.4H2.9v1.9H3.5v-1.9zM45.3 29.3h.6v2h-.6z" />
              </svg>
              <h3
                class="text-2xl sm:text-xl lg:text-2xl font-medium subpixel-antialiased"
              >
                Modalità letttore
              </h3>
              <p class="mt-3">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                consectetur mi in faucibus malesuada.
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
