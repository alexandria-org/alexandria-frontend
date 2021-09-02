<template>
	<div id="search-result-list">
		<SearchResult v-for="result in search_results" :url="result.url" :title="result.title" :snippet="result.snippet" />
	</div>
</template>

<script>
	import SearchResult from './SearchResult.vue';
	export default {
		name: 'SearchResultList',
		components: {
			SearchResult
		},
		props: {
			search_results: {
				type: Array
			}
		},
		data: function () {
			return {
			}
		},
		computed: {
			
		}
	}
</script>

<!-- Scoped component css -->
<!-- It only affect current component -->
<style scoped>
	#search-result-list {
		max-width: 600px;
	}
</style>
