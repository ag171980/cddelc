import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    frutas:[
      {nombre:'Peras', cantidad:0},
      {nombre:'Manzanas',cantidad:0},
      {nombre:'Bananas',cantidad:5}
    ]
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
