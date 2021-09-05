<template>
	<div id="not-found">
		<h1>404 Not Found</h1>
	</div>
</template>

<script>
	export default {
		name: 'app',
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
</style>

<!-- Scoped component css -->
<!-- It only affect current component -->
<style scoped>

	#header {
		margin-bottom: 0.5em;
		max-width: 600px;
	}

	h1 {
		margin: 0 0 0 0;
	}

	h1 a {
		text-decoration: none;
		color: #000;
	}

	nav {
		float: right;
		max-width: 600px;
	}

</style>
