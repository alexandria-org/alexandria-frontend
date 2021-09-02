<template>
	<div id="search-page">
		<SearchForm :search_query="search_query" />
		<SearchResultList :search_results="search_results" />
	</div>
</template>

<script>
	import SearchForm from './SearchForm.vue';
	import SearchResultList from './SearchResultList.vue';
	export default {
		name: 'SearchPage',
		components: {
			SearchForm,
			SearchResultList
		},
		props: {
			initial_search_query: {
				type: String
			}
		},
		data: function () {
			return {
				search_query: this.initial_search_query
			}
		},
		computed: {
			search_results() {
				return this.$store.state.search_results
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
