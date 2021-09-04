<template>
	<div class="search-result">
		<div class="search-result-title">
			<b><a :href="url">{{ title }}</a></b>
		</div>
		<div class="search-result-url">{{ display_url }}</div>
		<div class="snippet">{{ snippet }} </div>
	</div>
</template>

<script>
	export default {
		name: 'SearchResult',
		components: {
		},
		props: {
			url: {
				type: String
			},
			display_url: {
				type: String
			},
			title: {
				type: String
			},
			snippet: {
				type: String
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
	.search-result {
		margin-bottom: 1em;
	}

	.search-result-title {
		font-size: 1.15em;
		text-overflow: ellipsis;
		overflow: hidden;
		white-space: nowrap;
	}

	.search-result-url {
		color: green;
		text-overflow: ellipsis;
		overflow: hidden;
		white-space: nowrap;
	}
</style>
