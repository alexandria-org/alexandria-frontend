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
	<div id="paginator">
		<template v-if="page_max > 1">
			<a v-if="current_page > 1" :href="'/?q=' + encodeURIComponent(search_query) + '&p=' + (current_page - 1)">Prev</a>
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
	#paginator {
		margin: 0 0 4em 0;
	}
	#paginator a {
		margin: 0 0.5em;
	}

	#paginator a.active {
		font-weight: bold;
		text-decoration: none;
	}
</style>
