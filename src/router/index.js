
import Vue from 'vue'
import Router from 'vue-router'
import HomePage from './../components/HomePage.vue'
import SearchPage from './../components/SearchPage.vue'

Vue.use(Router)

export default new Router({
	mode: 'history',
	routes: [
		{ path: '/', component: HomePage },
		{ path: '/s', component: SearchPage, props: (route) => ({ initial_search_query: route.query.q }) },
	]
})
