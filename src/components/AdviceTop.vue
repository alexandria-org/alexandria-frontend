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
	<div id="advice-top">
		<small>Advice</small>
		<div v-for="advice in advices" class="advice">
			<div class="advice-title">
				<b>{{ advice.title }}</b>
			</div>
			<div class="snippet">
				{{ advice.snippet }}
			</div>
			<div class="author">
				{{ advice.author }}
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'AdviceTop',
		components: {
		},
		props: {
			advices: {
				type: Array
			}
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

	small {
		position: absolute;
		right: 0.5em;
		top: 0.5em;
	}

	#advice-top {
		max-width: 600px;
		background: #FFFFAA;
		padding: 0.5em;
		position: relative;
	}

	.advice {
		margin-bottom: 1em;
	}

	.advice:last-child {
		margin-bottom: 0;
	}

	.advice-title {
		font-size: 1.15em;
	}

	.author {
		color: green;
		font-size: 80%;
	}

</style>
