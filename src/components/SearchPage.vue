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
	<div id="search-page">
		<SearchForm :search_query="search_query" />
		<SearchResultList :search_results="search_results" />
		<Paginator :page_max="page_max" :current_page="current_page" :search_query="initial_search_query" />
	</div>
</template>

<script>
	import SearchForm from './SearchForm.vue';
	import SearchResultList from './SearchResultList.vue';
	import Paginator from './Paginator.vue';
	export default {
		name: 'SearchPage',
		components: {
			SearchForm,
			SearchResultList,
			Paginator
		},
		props: {
		},
		data: function () {
			return {
				search_query: this.$store.state.initial_search_query
			}
		},
		computed: {
			search_results() {
				return this.$store.state.search_results
			},
			page_max() {
				return this.$store.state.page_max
			},
			initial_search_query() {
				return this.$store.state.initial_search_query
			},
			current_page() {
				return this.$store.state.current_page
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
