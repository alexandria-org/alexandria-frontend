<template>
	<div id="main_page">
		<Header />
		<router-view />
	</div>
</template>

<script>
	import Header from './Header.vue'
	export default {
		name: 'app',
		components: {
			Header
		},
		props: {
		},
		data: function () {
			return {
			}
		}
	}
</script>

<!-- CSS libraries -->
<style src="normalize.css/normalize.css"></style>

<!-- Global CSS -->
<style>
	html, button, input, optgroup, select, textarea {
		font-family: 'Inter', sans-serif;
		font-size: 0.94em;
	}
	code {
		font-size: 0.9em;
		white-space: pre-wrap;
		color: #2c3e50;
	}

	code::before, code::after {
		content: '`';
	}

	.clearfix {
		clear: both;
	}
</style>

<!-- Scoped component css -->
<!-- It only affect current component -->
<style scoped>
	#main_page {
		margin: 8px;
	}
</style>
