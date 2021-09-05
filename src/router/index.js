
import Vue from 'vue'
import Router from 'vue-router'
import SearchPage from './../components/SearchPage.vue'
import AboutPage from './../components/AboutPage.vue'
import NotFoundPage from './../components/NotFoundPage.vue'

Vue.use(Router)

export default new Router({
	mode: 'history',
	routes: [
		{ path: '/about', component: AboutPage },
		{ path: '/', component: SearchPage },
		{ path: '/*', component: NotFoundPage },
	]
})
