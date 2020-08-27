export default {
  state: {
    header: [],
    footer: [],
  },
  getters: {
    loadedHeader(state) {
      return state.header
    },
    loadedFooter(state) {
      return state.footer
    },
  },
  mutations: {
    setHeader(state, content) {
      state.header = content
    },
    setFooter(state, content) {
      state.footer = content
    },
  },
  actions: {
    nuxtServerInit(vuexContext, context) {
      return this.$prismic.api
        .query(this.$prismic.predicates.at('document.tags', ['navigation']), {
          lang: '*',
        })
        .then((response) => {
          const headerData = []
          const footerData = []
          for (let i = 0, len = response.results.length; i < len; i++) {
            if (response.results[i].type === 'header') {
              headerData.push({
                language: response.results[i].lang.substring(0, 2),
                data: response.results[i].data,
              })
            } else {
              footerData.push({
                language: response.results[i].lang.substring(0, 2),
                data: response.results[i].data,
              })
            }
          }
          vuexContext.commit('setHeader', headerData)
          vuexContext.commit('setFooter', footerData)
        })
        .catch((e) => context.error(e))
    },
    setHeader(vuexContext, content) {
      vuexContext.commit('setHeader', content)
    },
    setFooter(vuexContext, content) {
      vuexContext.commit('setFooter', content)
    },
  },
}
