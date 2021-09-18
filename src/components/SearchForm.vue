<!--
 * MIT License
 *
 * Alexandria.org
 *
 * Copyright (c) 2021 Josef Cullhed, <info@alexandria.org>, et al.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 * 
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
-->
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
