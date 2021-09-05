<template>
	<div id="search-page">
		<SearchForm :search_query="search_query" />
		<SearchResultList :search_results="search_results" />
		<Paginator :page_max="page_max" :current_page="current_page" :search_query="initial_search_query" />
	</div>
</template>

<script>
	import SearchForm from './SearchForm.vue';
	import SearchResultList from './SearchResultList.vue';
	import Paginator from './Paginator.vue';
	export default {
		name: 'SearchPage',
		components: {
			SearchForm,
			SearchResultList,
			Paginator
		},
		props: {
		},
		data: function () {
			return {
				search_query: this.$store.state.initial_search_query
			}
		},
		computed: {
			search_results() {
				return this.$store.state.search_results
			},
			page_max() {
				return this.$store.state.page_max
			},
			initial_search_query() {
				return this.$store.state.initial_search_query
			},
			current_page() {
				return this.$store.state.current_page
			}
		},
		methods: {
			update_search_query(new_search_query) {
				this.search_query = new_search_query;
			}
		}
	}
</script>

<!-- Scoped component css -->
<!-- It only affect current component -->
<style scoped>
</style>
