import Vuex from 'vuex'

const createStore = () => {
  return new Vuex.Store({
    state: {
      global: {}
    },
    mutations: {
      setGlobal(state,global) {
        state.global = global
      }
    }
  })
}
