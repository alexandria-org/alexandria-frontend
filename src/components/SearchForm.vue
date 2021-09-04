<template>
	<div id="search-form">
		<form className="search-form" method="get" action="/">
			<input type="text" v-model="search_query" v-on:input="$emit('update-search-query', $event.target.value)" name="q"
				autofocus="true" autocapitalize="false" title="Search" aria-label="Search" />
			<button className="search-box-button" type="submit">Search</button>
			<div class="clearfix"></div>
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

#search-form input {
	width: 100%;
	max-width: 500px;
	box-sizing: border-box;
}

@media only screen and (max-width: 600px) {
	#search-form button {
		float: right;
		margin-top: 0.9em;
	}
}

</style>
