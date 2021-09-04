
import Vue from 'vue'
import Router from 'vue-router'
import SearchPage from './../components/SearchPage.vue'

Vue.use(Router)

export default new Router({
	mode: 'history',
	routes: [
		{ path: '/', component: SearchPage, props: (route) => ({ initial_search_query: route.query.q, current_page: parseInt(route.query.p || 1) }) },
	]
})
