export const strict = false

/* eslint-disable */
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    items: [],
    editor: false
  },
  getters: {
    items: state => state.items,
    editor: state => state.editor
  },
  mutations: {
    setItems (state, payload) {
      state.items = payload
    },
    setEditor (state, payload) {
      state.editor = payload
    }
  }
})
