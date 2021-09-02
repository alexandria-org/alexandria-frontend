import Vue from 'vue/dist/vue.js'
import Vuex from 'vuex'
import App from './components/App.vue'
import router from './router'
import VueRouter from 'vue-router'

Vue.config.productionTip = false
Vue.use(VueRouter)
Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    search_results: global_search_results
  },
  mutations: {
    set_search_results (state, search_results) {
      state.search_results = search_results
    }
  }
})

new Vue({
	router,
	el: '#app',
	store: store,
	components: {App},
	data: {
	},
})

document.addEventListener("_set_search_results", function (event) {
	store.commit('set_search_results', event.detail)
})
