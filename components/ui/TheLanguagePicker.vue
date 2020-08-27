<template>
  <div v-click-outside="onClickOutside">
    <div class="overflow-visible">
      <div
        class="flex flex-row space-x-2 pl-2 select-none"
        @click="toggleLangDropdown = !toggleLangDropdown"
      >
        <img
          class="h-4 w-6 my-auto"
          :src="require(`~/assets/images/${this.$i18n.locale}.png`)"
          alt="Current language flag"
        />
        <span class="mb-1">{{ selectedLanguage.name }}</span>
        <svg
          class="fill-current h-5 w-5 my-auto mt-1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
        >
          <path
            d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"
          />
        </svg>
      </div>
      <div
        v-if="toggleLangDropdown"
        class="absolute flex bg-white shadow-lg rounded-md w-32 py-2 mt-2 cursor-pointer"
        @click="toggleLangDropdown = !toggleLangDropdown"
      >
        <nuxt-link
          v-for="locale in availableLocales"
          :key="locale.code"
          class="flex flex-row space-x-2 pl-2 w-full select-none"
          :to="switchLocalePath(locale.code)"
        >
          <img
            class="h-4 w-6 my-auto"
            :src="require(`~/assets/images/${locale.code}.png`)"
            alt="Available language flag"
          />
          <span class="mb-1">{{ locale.name }}</span></nuxt-link
        >
      </div>
    </div>
  </div>
</template>

<script>
import vClickOutside from 'v-click-outside'

export default {
  directives: {
    clickOutside: vClickOutside.directive,
  },
  data() {
    return {
      toggleLangDropdown: false,
    }
  },
  computed: {
    availableLocales() {
      return this.$i18n.locales.filter((i) => i.code !== this.$i18n.locale)
    },
    selectedLanguage() {
      return this.$i18n.locales.find((i) => i.code === this.$i18n.locale)
    },
  },
  methods: {
    onClickOutside(event) {
      this.toggleLangDropdown = false
    },
  },
}
</script>
