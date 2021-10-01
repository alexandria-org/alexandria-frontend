/*
 * MIT License
 *
 * Alexandria.org
 *
 * Copyright (c) 2021 Josef Cullhed, <info@alexandria.org>, et al.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 * 
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */

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
		time_ms: global_search_results.time_ms,
		current_page: current_page || 1,
		initial_search_query: query || "",
		store_ip: localStorage.getItem('store_ip') === null ? 1 : localStorage.getItem('store_ip'),
		link_ping: localStorage.getItem('link_ping') === null ? 1 : localStorage.getItem('link_ping'),
	},
	mutations: {
		set_search_results (state, search_results) {
			state.search_results = search_results.results;
			state.page_max = search_results.page_max;
			state.total_found = search_results.total_found;
			state.time_ms = search_results.time_ms;
		},
		set_store_ip(state, store_ip) {
			state.store_ip = store_ip;
			localStorage.setItem('store_ip', store_ip)
		},
		set_link_ping(state, link_ping) {
			state.link_ping = link_ping;
			localStorage.setItem('link_ping', link_ping)
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
