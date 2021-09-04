<template>
	<div id="paginator">
		<template v-if="page_max > 1">
			<a v-if="current_page > 1" :href="'/?q=' + encodeURIComponent(search_query) + '&p=' + (current_page - 1)">Previous</a>
			<a v-for="page in pages" :href="'/?q=' + encodeURIComponent(search_query) + '&p=' + page"
				:class="{active: page == current_page}">{{ page }}</a>
			<a v-if="current_page < page_max" :href="'/?q=' + encodeURIComponent(search_query) + '&p=' + (current_page + 1)">Next</a>
		</template>
	</div>
</template>

<script>
	export default {
		name: 'Paginator',
		components: {
		},
		props: {
			search_query: {
				type: String
			},
			page_max: {
				type: Number
			},
			current_page: {
				type: Number
			}
		},
		data: function () {
			return {
			}
		},
		computed: {
			pages: function () {
				return [...Array(this.page_max).keys()].map(function (e) { return e+1 })
			}
		},
		methods: {
		}
	}
</script>

<!-- Scoped component css -->
<!-- It only affect current component -->
<style scoped>
	#paginator a {
		margin: 0 0.5em;
	}

	#paginator a.active {
		font-weight: bold;
		text-decoration: none;
	}
</style>
