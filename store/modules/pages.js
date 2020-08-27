export default {
  state: {
    pages: [],
  },
  getters: {
    loadedPages(state) {
      return state.pages
    },
    getPageByType: (state) => (type, lang) => {
      return state.pages
        .filter((page) => page.type === type)
        .filter((page) => page.language === lang)
    },
  },
  mutations: {
    setPages(state, content) {
      state.pages = content
    },
  },
  actions: {
    nuxtServerInit(vuexContext, context) {
      return this.$prismic.api
        .query(this.$prismic.predicates.at('document.tags', ['pages']), {
          lang: '*',
        })
        .then((response) => {
          const pagesData = []
          for (let i = 0, len = response.results.length; i < len; i++) {
            pagesData.push({
              type: response.results[i].type,
              language: response.results[i].lang.substring(0, 2),
              data: response.results[i].data,
            })
          }
          vuexContext.commit('setPages', pagesData)
        })
        .catch((e) => context.error(e))
    },
  },
}
