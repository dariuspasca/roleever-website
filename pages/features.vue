<template>
  <div class="flex flex-col w-full h-full">
    <!--Introduction Section-->
    <div class="container mx-auto text-center">
      <h1 class="title pt-10">
        {{ page.introduction_title }}
      </h1>
      <p class="xs:w-full sm:w-10/12 md:w-7/12 w-5/12 mx-auto pt-4">
        {{ page.introduction_subtitle }}
      </p>
      <the-download-button class="justify-center py-10" />
    </div>
    <!--Chat Section-->
    <div class="container mx-auto xxxl:w-6/12 xxxl:mx-auto py-20">
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
              {{ page.chat_title }}
            </h2>
            <p class="py-2 text-lg">
              {{ page.chat_description }}
            </p>
          </div>
        </div>
        <!--Chat Preview-->
        <div class="flex w-6/12 xs:w-full items-center">
          <img
            src="~/assets/images/Chat-Features.svg"
            class="xs:w-full sm:w-10/12 w-7/12 h-auto float-left xs:float-none ml-4 xs:mx-auto"
            width="835"
            height="1022"
            loading="lazy"
            :alt="page.chat_title"
          />
        </div>
      </div>
    </div>
    <!--DiceRolls Section-->
    <div class="flex w-full bg-cover bg-center bg-fantasy py-10">
      <!--Card-->
      <div
        class="flex rounded-3xl xs:rounded-2xl shadow-2xl bg-cover bg-center bg-view my-20 py-16 xs:py-2 w-8/12 xs:w-11/12 sm:w-11/12 md:w-10/12 xxxl:w-5/12 mx-auto"
      >
        <div class="flex flex-row xs:flex-col">
          <!--DiceRolls Preview-->
          <div
            class="flex w-6/12 xs:w-full xs:order-last xs:pt-6 items-center justify-center"
          >
            <img
              :src="page.dicerolls_preview"
              class="xs:w-11/12 sm:w-10/12 w-10/12 h-auto"
              width="931"
              height="889"
              loading="lazy"
              :alt="page.dicerolls_title"
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
                {{ page.dicerolls_title }}
              </h2>
              <p class="py-2 text-lg">
                {{ page.dicerolls_description }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!--CharacterSheets Section-->
    <div class="container mx-auto xxxl:w-6/12 py-32 xxxl:py-20">
      <div
        class="flex flex-row xs:flex-col space-x-10 xs:space-x-0 xs:space-y-10"
      >
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
              {{ page.sheets_title }}
            </h2>
            <p class="py-2 text-lg">
              {{ page.sheets_description }}
            </p>
          </div>
        </div>
        <!--CharacterSheets Preview-->
        <div class="flex w-6/12 xs:w-full items-center">
          <img
            :src="page.sheets_preview"
            class="xs:w-10/12 sm:w-10/12 w-5/12 h-auto float-left xs:float-none ml-10 xs:mx-auto img-shadow"
            width="415"
            height="730"
            loading="lazy"
            :alt="page.sheets_title"
          />
        </div>
      </div>
    </div>

    <!--Laboratory Section-->
    <div
      class="flex flex-col w-full bg-footer bg-center bg-cover border-t-2 border-b-2 border-medium pb-20 pt-40 justify-center items-center"
    >
      <div
        class="flex flex-col w-6/12 mx-auto items-center -mt-24 pb-16 xs:pb-8 -space-y-6"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-24 w-24 text-primary-shade fill-current"
          viewBox="0 0 48 48"
        >
          <path fill="none" d="M0 0h48v48H0z" />
          <path
            d="M18 25.3c-.6 0-1-.4-1-1s.4-1 1-1 1 .4 1 1-.4 1-1 1zm0-1.9c-.5 0-.8.4-.8.8s.4.8.8.8.8-.4.8-.8-.3-.8-.8-.8zM16.8 26.8c-.4 0-.6-.3-.6-.6 0-.4.3-.6.6-.6.4 0 .6.3.6.6.1.4-.2.6-.6.6zm0-1c-.3 0-.5.2-.5.5s.2.5.5.5.5-.2.5-.5-.2-.5-.5-.5zM15.5 24.4c-.8 0-1.4-.6-1.4-1.4 0-.8.6-1.4 1.4-1.4.7 0 1.4.6 1.4 1.3.1.8-.5 1.4-1.3 1.5h-.1zm0-2.6h-.1c-.7.1-1.2.6-1.1 1.3.1.7.6 1.2 1.3 1.1.7-.1 1.2-.6 1.1-1.3-.1-.6-.6-1.1-1.2-1.1zM26.4 30.3c-.7-.1-1.4-.1-2.1.1-1.1.4-2.1.9-3 1.5h-.1c-.2 0-.4-.1-.5-.3-.6-.4-1.6-1-4-.4-1 .3-2 .3-3.1.3-1.4-.2-2.8-.5-4.2-.8-1.2-.2-2.2-.8-3-1.7 0 .3-.1.6-.1.9 0 2.3.9 4.4 2.5 6 1.7 1.6 3.8 2.7 6.1 3.1 2.7.5 5.4 0 7.8-1.3 2.3-1.3 3.9-3.5 4.3-6.1 0-.4.1-.8 0-1.2-.2-.1-.4-.1-.6-.1z"
          />
          <path
            d="M42 25.4v-5.6c.3-.1.5-.5.5-.8v-.8c0-.5-.4-.9-.9-.9h-.1l.3-2.7c0-.2 0-.4-.2-.6-.2-.2-.4-.3-.6-.3l-3-.2c-.2 0-.5.1-.6.2-.2.2-.2.4-.2.6l.5 2.8c-.5 0-.8.4-.8.9v1c0 .4.3.8.7.9v5.6h-3.3v-3.2h.4c.5 0 .9-.4.9-.9v-.2c0-.5-.4-.9-.9-.9h-.4l.9-3.4c0-.2 0-.3-.1-.5-.2-.2-.4-.3-.7-.2l-5 .7 1 3.4H30c-.5 0-.9.4-.9.9v.2c0 .5.4.9.9.9h.4v3.2h-2.8c-.3-.5-.6-1-1-1.4-1-1.2-2.2-2.2-3.6-3-.7-.4-1.4-.7-2.1-.9l-.4-.2c-.2 0-.4-.1-.5-.2v-.7l.4-7.1h.1c.8-.1 1.2-.4 1.3-.8l.2-2.3c0-.6-.9-1-1.8-1.2l-.2.6c.8.2 1.3.5 1.4.6-.1.2-1.3.5-3 .4-1.7-.1-2.8-.6-2.9-.8.1-.1.6-.3 1.4-.4l-.1-.6c-.2 0-.5.1-.7.1-.8.2-1.2.4-1.3.8l-.2 2.3c0 .4.3.7 1.1 1h.1l-1 7.3c0 .1 0 .2-.1.3-.1.2-.4.2-.7.3-2.6.4-5 1.6-6.9 3.4-3.3 3.3-3.8 8.5-1.1 12.3l-3.4 5.9.9.5 3.2-5.5.9.9c2 1.9 4.6 3.1 7.3 3.5.7.1 1.3.2 2 .2 2.5 0 4.9-.7 7-2 1.1-.7 2-1.6 2.8-2.6l3.1 5.4.9-.5-3.3-5.8c.7-1.2 1.2-2.5 1.4-3.9.2-1.7-.1-3.3-.8-4.9h2.3v8.8c0 1.1.9 2 2 2s2-.9 2-2v-8.8h3.3V36c0 1.2 1 2.2 2.2 2.2 1.2 0 2.2-1 2.2-2.2v-9.5h1.5v15h1v-16H42zM15.1 10.7l.1-1.5c.9.4 1.9.7 2.9.7h.9c.7 0 1.4-.1 2.1-.3l-.1 1.5c-.1.2-1.2.5-3 .4-1.7-.2-2.8-.6-2.9-.8zm13.1 20.5c-.4 2.9-2.1 5.5-4.6 7.1C21 39.9 18 40.5 15 40c-2.6-.3-5.1-1.5-7-3.3-1.9-1.8-2.9-4.2-3-6.7 0-2.4 1-4.8 2.7-6.5 1.8-1.8 4.1-2.9 6.6-3.2.4 0 .8-.2 1.1-.5.1-.2.2-.3.2-.5l.9-7.3c.5.1 1.1.2 1.6.3h1.7l-.3 7V19.9c-.3.2-.6.2-.9.2v.6h.2c.3 0 .6-.1.9-.2.2.2.5.3.8.3l.3.1c.7.2 1.4.5 2 .9 1.3.7 2.5 1.7 3.4 2.8 1.4 1.7 2.2 4.1 2 6.6zm1.9-13.9l4.3-.6h.1l-.9 3.5h-2.7l-.8-2.9zm3.6 5.2h-1v.4h1v.8h-1v.4h1v.9h-1v.4h1v.8h-1v.4h1v.8h-1v.4h1v.8h-1v.4h1v.8h-1v.4h1v.8h-1v.4h1v.8h-1v.4h1v.8h-1v.6h1v.8h-1v.4h1c0 .8-.6 1.4-1.4 1.4s-1.4-.6-1.4-1.4v-13h2.8v.3zm-3.8-.9c-.2 0-.3-.1-.3-.3v-.2c0-.2.1-.3.3-.3h4.7c.2 0 .3.2.3.3v.2c0 .2-.1.3-.3.3h-4.7zm8-7.3s.1-.1.2-.1l3 .1c.1 0 .1 0 .2.1v.1l-.3 2.8h-2.7l-.4-2.9v-.1zm3.6 21.6c0 .9-.7 1.6-1.6 1.6-.9 0-1.6-.7-1.6-1.6v-16h3.3v16zm.1-16.6h-3.8-.1c-.1 0-.2-.2-.2-.3v-.8c0-.2.1-.3.3-.3h3.9c.2 0 .3.1.3.3v.8c0 .1-.1.2-.2.3h-.2z"
          />
          <path
            d="M41 21h-.7v13.1h-.6V21h-1c-.1 0-.1.1-.1.1v14.4c-.1.7.4 1.4 1.1 1.5.7.1 1.4-.4 1.5-1.1V21.1c-.1 0-.1-.1-.2-.1zM19.9 8.3l-.1.3c.1 0 .2.1.2.1 0 .2-.8.3-1.7.2-.9-.1-1.7-.3-1.7-.5 0 0 .1-.1.2-.1V8l-.1-.6-.3-2h0c.7-.3 1.4-.4 2.1-.4.7-.1 1.5-.1 2.2.1L20 7.7l-.1.6zM26.6 29.3c-1.3-.9-5.2-1.8-9.8-2.1-6.1-.5-10.4.2-10.4 1 0 .2.1.4.3.6.7.8 1.7 1.3 2.7 1.5 1.4.4 2.8.7 4.2.9 1 .1 2 0 3-.3.6-.2 1.2-.3 1.9-.3.8 0 1.7.3 2.3.8.1.1.3.2.4.2 1-.6 2-1.1 3-1.5.5-.1.9-.2 1.4-.1.8 0 1.4.2 1.4 0s-.1-.5-.4-.7z"
          />
        </svg>
        <h1 class="title">
          {{ page.laboratory_title }}
        </h1>
      </div>
      <the-feature-slider
        :features-list="page.laboratory_features"
        class="w-full xxxl:w-6/12 xxxl:mx-auto"
      />
    </div>
    <!--More Section-->
    <div class="flex flex-col w-full py-20 space-y-4 relative">
      <!--Nick Section-->
      <img
        class="w-3/12 xs:w-8/12 sm:w-5/12 xxxl:w-3/12 h-auto float-left -ml-24 absolute xs:relative sm:relative md:mt-48 xs:mx-auto sm:mx-auto xxxl:ml-0"
        :src="page.more_nick"
        :alt="page.more_nick_title"
        width="789"
        height="1052"
      />
      <div
        class="flex flex-col w-8/12 xs:w-11/12 sm:w-10/12 md:w-9/12 xxxl:w-6/12 mx-auto"
      >
        <!--Header-->
        <div
          class="flex flex-row w-full sm:w-full mb-20 justify-start xs:justify-center sm:justify-center xs:text-center sm:text-center"
        >
          <div class="w-2/12 xs:hidden"></div>
          <h1
            class="text-5xl xs:text-3xl sm:text-3xl md:text-4xl font-semibold subpixel-antialiased tracking-wide md:tracking-normal -ml-10 xs:ml-0"
          >
            {{ page.more_title }}
          </h1>
        </div>
        <div class="flex flex-col space-y-10 xs:space-y-10">
          <!--First Column-->
          <div
            class="flex flex-row xs:flex-col w-full justify-center xs:justify-start xxxl:justify-center space-x-20 xs:space-x-0 xs:space-y-10"
          >
            <!--Board Section-->
            <div class="w-4/12 xs:w-full float-right xs:float-none">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-12 w-12 text-primary-shade fill-current"
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
              <h1
                class="text-2xl sm:text-xl lg:text-2xl font-medium subpixel-antialiased"
              >
                {{ page.lobby_title }}
              </h1>
              <p class="mt-3">
                {{ page.lobby_description }}
              </p>
            </div>
            <!--Diary Section-->
            <div class="w-4/12 xs:w-full float-left xs:float-none">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-12 w-12 text-primary-shade fill-current"
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
              <h1
                class="text-2xl sm:text-xl lg:text-2xl font-medium subpixel-antialiased"
              >
                {{ page.diary_title }}
              </h1>
              <p class="mt-3">
                {{ page.diary_description }}
              </p>
            </div>
          </div>
          <!--Second Column-->
          <div
            class="flex flex-row xs:flex-col w-full justify-center xs:justify-start xxxl:justify-center space-x-20 xs:space-x-0 xs:space-y-10"
          >
            <!--Turns Section-->
            <div class="w-4/12 xs:w-full float-right xs:float-none">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-12 w-12 text-primary-shade fill-current"
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
              <h1
                class="text-2xl sm:text-xl lg:text-2xl font-medium subpixel-antialiased"
              >
                {{ page.turns_title }}
              </h1>
              <p class="mt-3">
                {{ page.turns_description }}
              </p>
            </div>
            <!--Reading Section-->
            <div class="w-4/12 xs:w-full float-left xs:float-none">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-12 w-12 text-primary-shade fill-current"
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
              <h1
                class="text-2xl sm:text-xl lg:text-2xl font-medium subpixel-antialiased"
              >
                {{ page.reader_title }}
              </h1>
              <p class="mt-3">
                {{ page.reader_description }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!--Roadmap Section-->
    <div class="flex flex-col w-full pt-20 space-y-20">
      <div
        class="lineaDorata bg-cover bg-center w-8/12 xs:w-11/12 xxxl:w-6/12 h-2 xs:h-1 mx-auto"
      ></div>
      <h1 class="title">
        {{ page.inprogress_title }}
      </h1>
      <div
        class="flex flex-col w-7/12 xs:w-full sm:w-11/12 md:w-10/12 xxxl:w-4/12 mx-auto -space-y-16"
      >
        <!--Map Card-->
        <div class="flex w-full justify-start">
          <div
            class="flex flex-col w-7/12 xs:w-full sm:w-9/12 rounded-3xl shadow-xl xs:shadow-2xl bg-view bg-cover py-8 items-center space-y-4"
            style="height: 300px"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-8 w-8"
              viewBox="0 0 48 48"
            >
              <g data-name="Group 656">
                <path
                  data-name="Path 2311"
                  d="M23.53 46.682a2.118 2.118 0 01-2.118-2.118v-7.908a2.118 2.118 0 014.235 0v7.908a2.118 2.118 0 01-2.117 2.118z"
                  fill="#cbc19f"
                />
                <path
                  data-name="Path 2312"
                  d="M9.495 40.094a2.118 2.118 0 01-1.5-3.615l5.595-5.593a2.12 2.12 0 012.995 3l-5.592 5.592a2.113 2.113 0 01-1.498.616z"
                  fill="#cac4af"
                />
                <path
                  data-name="Path 2313"
                  d="M44.153 26.058h-7.908a2.118 2.118 0 110-4.235h7.908a2.118 2.118 0 110 4.235z"
                  fill="#cab670"
                />
                <path
                  data-name="Path 2314"
                  d="M37.565 40.094a2.111 2.111 0 01-1.5-.62l-5.59-5.588a2.121 2.121 0 113-3l5.592 5.592a2.118 2.118 0 01-1.5 3.615z"
                  fill="#c9bb8b"
                />
                <path
                  data-name="Path 2315"
                  d="M23.53 13.344a2.118 2.118 0 01-2.118-2.118V3.318a2.118 2.118 0 014.235 0v7.908a2.118 2.118 0 01-2.117 2.118z"
                  fill="#ccab39"
                />
                <path
                  data-name="Path 2316"
                  d="M31.975 17.616a2.118 2.118 0 01-1.5-3.615l5.593-5.593a2.12 2.12 0 012.994 3L33.47 17a2.112 2.112 0 01-1.495.616z"
                  fill="#caaf54"
                />
                <path
                  data-name="Path 2317"
                  d="M10.815 26.058H2.907a2.118 2.118 0 110-4.235h7.908a2.118 2.118 0 110 4.235z"
                  fill="#cac6b9"
                />
                <path
                  data-name="Path 2318"
                  d="M15.088 17.616a2.112 2.112 0 01-1.5-.62l-5.593-5.592a2.121 2.121 0 013-3l5.592 5.593a2.118 2.118 0 01-1.5 3.615z"
                  fill="#cac8c2"
                />
                <path data-name="Rectangle 21" fill="none" d="M0 0h48v48H0z" />
              </g>
            </svg>

            <h1
              class="text-xl sm:text-xl lg:text-lg font-bold subpixel-antialiased text-secondary"
            >
              {{ page.map_title }}
            </h1>
            <p class="text-left py-2 px-6">
              {{ page.map_description }}
            </p>
          </div>
        </div>
        <!--NPCs Card-->
        <div class="flex w-full justify-end">
          <div
            class="flex flex-col w-7/12 xs:w-full sm:w-9/12 rounded-3xl shadow-xl xs:shadow-2xl bg-footer bg-cover py-8 items-center space-y-4"
            style="height: 300px"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-8 w-8"
              viewBox="0 0 48 48"
            >
              <g data-name="Group 656">
                <path
                  data-name="Path 2311"
                  d="M23.53 46.682a2.118 2.118 0 01-2.118-2.118v-7.908a2.118 2.118 0 014.235 0v7.908a2.118 2.118 0 01-2.117 2.118z"
                  fill="#cbc19f"
                />
                <path
                  data-name="Path 2312"
                  d="M9.495 40.094a2.118 2.118 0 01-1.5-3.615l5.595-5.593a2.12 2.12 0 012.995 3l-5.592 5.592a2.113 2.113 0 01-1.498.616z"
                  fill="#cac4af"
                />
                <path
                  data-name="Path 2313"
                  d="M44.153 26.058h-7.908a2.118 2.118 0 110-4.235h7.908a2.118 2.118 0 110 4.235z"
                  fill="#cab670"
                />
                <path
                  data-name="Path 2314"
                  d="M37.565 40.094a2.111 2.111 0 01-1.5-.62l-5.59-5.588a2.121 2.121 0 113-3l5.592 5.592a2.118 2.118 0 01-1.5 3.615z"
                  fill="#c9bb8b"
                />
                <path
                  data-name="Path 2315"
                  d="M23.53 13.344a2.118 2.118 0 01-2.118-2.118V3.318a2.118 2.118 0 014.235 0v7.908a2.118 2.118 0 01-2.117 2.118z"
                  fill="#ccab39"
                />
                <path
                  data-name="Path 2316"
                  d="M31.975 17.616a2.118 2.118 0 01-1.5-3.615l5.593-5.593a2.12 2.12 0 012.994 3L33.47 17a2.112 2.112 0 01-1.495.616z"
                  fill="#caaf54"
                />
                <path
                  data-name="Path 2317"
                  d="M10.815 26.058H2.907a2.118 2.118 0 110-4.235h7.908a2.118 2.118 0 110 4.235z"
                  fill="#cac6b9"
                />
                <path
                  data-name="Path 2318"
                  d="M15.088 17.616a2.112 2.112 0 01-1.5-.62l-5.593-5.592a2.121 2.121 0 013-3l5.592 5.593a2.118 2.118 0 01-1.5 3.615z"
                  fill="#cac8c2"
                />
                <path data-name="Rectangle 21" fill="none" d="M0 0h48v48H0z" />
              </g>
            </svg>
            <h1
              class="text-xl sm:text-xl lg:text-lg font-bold subpixel-antialiased text-secondary"
            >
              {{ page.png_title }}
            </h1>
            <p class="text-left py-2 px-6">
              {{ page.png_description }}
            </p>
          </div>
        </div>
        <!--Multi-Chat Card-->
        <div
          class="flex flex-col w-full justify-center pb-20 bg-view-card-container xs:rounded-2xl xs:rounded-b-none"
        >
          <div
            class="flex flex-col w-7/12 xs:w-full sm:w-9/12 rounded-3xl shadow-xl xs:shadow-none bg-view-card bg-cover py-8 items-center space-y-4"
            style="height: 300px"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-8 w-8"
              viewBox="0 0 48 48"
            >
              <g data-name="Group 656">
                <path
                  data-name="Path 2311"
                  d="M23.53 46.682a2.118 2.118 0 01-2.118-2.118v-7.908a2.118 2.118 0 014.235 0v7.908a2.118 2.118 0 01-2.117 2.118z"
                  fill="#cbc19f"
                />
                <path
                  data-name="Path 2312"
                  d="M9.495 40.094a2.118 2.118 0 01-1.5-3.615l5.595-5.593a2.12 2.12 0 012.995 3l-5.592 5.592a2.113 2.113 0 01-1.498.616z"
                  fill="#cac4af"
                />
                <path
                  data-name="Path 2313"
                  d="M44.153 26.058h-7.908a2.118 2.118 0 110-4.235h7.908a2.118 2.118 0 110 4.235z"
                  fill="#cab670"
                />
                <path
                  data-name="Path 2314"
                  d="M37.565 40.094a2.111 2.111 0 01-1.5-.62l-5.59-5.588a2.121 2.121 0 113-3l5.592 5.592a2.118 2.118 0 01-1.5 3.615z"
                  fill="#c9bb8b"
                />
                <path
                  data-name="Path 2315"
                  d="M23.53 13.344a2.118 2.118 0 01-2.118-2.118V3.318a2.118 2.118 0 014.235 0v7.908a2.118 2.118 0 01-2.117 2.118z"
                  fill="#ccab39"
                />
                <path
                  data-name="Path 2316"
                  d="M31.975 17.616a2.118 2.118 0 01-1.5-3.615l5.593-5.593a2.12 2.12 0 012.994 3L33.47 17a2.112 2.112 0 01-1.495.616z"
                  fill="#caaf54"
                />
                <path
                  data-name="Path 2317"
                  d="M10.815 26.058H2.907a2.118 2.118 0 110-4.235h7.908a2.118 2.118 0 110 4.235z"
                  fill="#cac6b9"
                />
                <path
                  data-name="Path 2318"
                  d="M15.088 17.616a2.112 2.112 0 01-1.5-.62l-5.593-5.592a2.121 2.121 0 013-3l5.592 5.593a2.118 2.118 0 01-1.5 3.615z"
                  fill="#cac8c2"
                />
                <path data-name="Rectangle 21" fill="none" d="M0 0h48v48H0z" />
              </g>
            </svg>

            <h1
              class="text-xl sm:text-xl lg:text-lg font-bold subpixel-antialiased text-secondary"
            >
              {{ page.multichat_title }}
            </h1>
            <p class="text-left py-2 px-6">
              {{ page.multichat_description }}
            </p>
          </div>
          <div class="flex flex-col w-full items-center mt-32 xs:mt-10">
            <h1 class="title">
              {{ page.are_you_in_title }}
            </h1>
            <p class="text-xl">{{ page.are_you_in_description }}</p>
            <the-download-button class="justify-center pt-12" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import TheDownloadButton from '@/components/ui/TheDownloadButton.vue'
import TheFeatureSlider from '@/components/ui/TheFeatureSlider.vue'

export default {
  components: { TheDownloadButton, TheFeatureSlider },
  async asyncData({ $content }) {
    const pages = []
    const pageEN = await $content(`en/pages/features`).fetch()
    const pageIT = await $content(`it/pages/features`).fetch()
    pages.push(pageEN)
    pages.push(pageIT)

    return {
      pages,
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
