<template>
  <div class="flex flex-col bg-cover bg-center h-full bg-view">
    <div
      class="flex w-full items-center justify-between flex-wrap bg-transparent"
    >
      <div class="flex items-center flex-shrink-0 py-2">
        <span class="font-semibold text-xl tracking-tight"
          ><nuxt-link :to="localePath('/')"><RoleEver class="w-40" /></nuxt-link
        ></span>
      </div>

      <div class="block">
        <button
          class="flex items-center px-3 py-2 mt-1 mr-3"
          @click="toggleMobileNav"
        >
          <Close class="fill-current text-dark-shade h-6 w-6" />
        </button>
      </div>
    </div>

    <div class="flex text-center w-full pt-10">
      <div class="flex flex-col w-full">
        <nuxt-link
          :to="localePath('/')"
          :aria-label="$t('header.home')"
          class="my-2 text-dark-shade hover:text-primary tracking-wider text-xl"
          @click.native="toggleMobileNav"
        >
          {{ $t('header.home') }}
        </nuxt-link>
        <div
          class="w-10/12 mx-auto my-2 h-1 bg-cover bg-no-repeat lineaDorata"
        ></div>
        <nuxt-link
          :to="localePath('features')"
          :aria-label="$t('header.features')"
          class="my-2 text-dark-shade hover:text-primary tracking-wider text-xl"
          @click.native="toggleMobileNav"
        >
          {{ $t('header.features') }}
        </nuxt-link>
        <div
          class="w-10/12 mx-auto my-2 h-1 bg-cover bg-no-repeat lineaDorata"
        ></div>
        <nuxt-link
          :to="localePath('about')"
          :aria-label="$t('header.about')"
          class="my-2 text-dark-shade hover:text-primary tracking-wider text-xl"
          @click.native="toggleMobileNav"
        >
          {{ $t('header.about') }}
        </nuxt-link>
      </div>
    </div>
    <div
      class="absolute block text-center font-medium bottom-0 left-0 mx-auto w-full pb-4"
    >
      <a
        href="https://discordapp.com/invite/xyBMAn9"
        target="_blank"
        rel="noopener noreferrer"
        class="inline-block m-1"
        ><p class="text-dark-shade text-xl">{{ $t('header.join_us') }}</p>
        <Discord class="w-7/12 h-auto mx-auto" />
      </a>
    </div>
  </div>
</template>

<script>
import RoleEver from '@/assets/icons/RoleEver.svg'
import Close from '@/assets/icons/close.svg'
import Discord from '@/assets/icons/discord.svg'

export default {
  components: {
    RoleEver,
    Close,
    Discord,
  },
  methods: {
    toggleMobileNav() {
      this.$root.$emit('toggleMobileNav', false)
    },
  },
}
</script>
