<template>
	<div id="search-result-list">
		<SearchResult v-for="result in search_results" :key="result.url" :url="result.url" :display_url="result.display_url" :title="result.title"
			:snippet="result.snippet" />
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
		width: 100%;
		max-width: 600px;
	}
</style>
