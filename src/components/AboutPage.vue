<template>
	<div id="about-page">
		<hr />
		<p>
		Alexandria.org is a non-profit, ad free search engine. Our goal is to provide the best available information without compromise.
		</p>
		<p>
		The index is built on data from Common Crawl and the engine is written in C++.
		</p>
		<p>
		We are still at an early stage of development and running the search engine on a shoestring budget.
		</p>
		<p>
		Please contact us at info@alexandria.org  if you want to get involved, want to support this initiative or have any questions.
		</p>
	</div>
</template>

<script>
	export default {
		name: 'AboutPage',
		components: {
		},
		props: {
		},
		data: function () {
			return {
			}
		},
		computed: {
		},
		methods: {
		}
	}
</script>

<!-- Scoped component css -->
<!-- It only affect current component -->
<style scoped>
	#about-page {
		max-width: 600px;
	}
</style>
