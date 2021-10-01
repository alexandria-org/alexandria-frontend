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
	<div id="header">
		<nav>
			<a href="/settings">Settings</a>
			<a href="/about">About</a>
		</nav>
		<h1><a href="/">Alexandria.org</a></h1>
		<small>Search the web with alexandria.org</small>
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

	nav a {
		margin: 0 0.35em;
	}

</style>
