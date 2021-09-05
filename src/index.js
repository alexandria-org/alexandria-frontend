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
    search_results: global_search_results.results,
	page_max: global_search_results.page_max,
	total_found: global_search_results.total_found,
	current_page: current_page || 1,
	initial_search_query: query || ""
  },
  mutations: {
    set_search_results (state, search_results) {
      state.search_results = search_results.results;
      state.page_max = search_results.page_max;
      state.total_found = search_results.total_found;
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
