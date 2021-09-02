<template>
	<div id="search-form">
		<form className="search-form" method="get" action="/s">
			<input type="text" v-bind:value="search_query" v-on:input="$emit('update-search-query', $event.target.value)" name="q"
				autofocus="true" autocapitalize="false" title="Search" aria-label="Search" size="60" />
			<button className="search-box-button" type="submit">Search</button>
		</form>
	</div>
</template>

<script>
	export default {
		name: 'SearchForm',
		props: {
			search_query: {
				type: String
			}
		},
		data: function () {
			return {
			}
		}
	}
</script>

<!-- Scoped component css -->
<!-- It only affect current component -->
<style scoped>
	#search-form {
		margin-bottom: 1em;
	}
</style>
