<template>
	<div class="search-result">
		<div class="search-result-title">
			<b><a :href="url">{{ title }}</a></b>
		</div>
		<div class="search-result-url">{{ url }}</div>
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
	}

	.search-result-url {
		color: green;
	}
</style>
