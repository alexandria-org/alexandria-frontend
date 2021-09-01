<template>
	<div id="home-page">
		<SearchForm v-bind:search_query="search_query" />
	</div>
</template>

<script>
	import SearchForm from './SearchForm.vue';
	export default {
		name: 'HomePage',
		components: {
			SearchForm
		},
		props: {
		},
		data: function () {
			return {
				search_query: "Search here"
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
