import Vuex from 'vuex'
import navigation from './modules/navigation'
import pages from './modules/pages'

const createStore = () => {
  return new Vuex.Store({
    modules: { navigation, pages },
  })
}

export default createStore
