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
	<div id="about-page">
		<hr />
		<p>
		Alexandria.org is a non-profit, ad free search engine. Our goal is to provide the best available information without compromise.
		</p>
		<p>
		The index is built on data from Common Crawl and the engine is written in C++. The source code is available <a href="https://github.com/alexandria-org">here</a>.
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
