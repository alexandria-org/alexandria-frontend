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
	<div id="settings-page">
		<hr />
		<h2>Privacy settings</h2>
		<p>The default behaviour on alexandria.org is to store the searches together with your IP address. When you click on a search result for a
			query we also store which search result you clicked on. We do this to be able to measure and improve our search results.</p>
		<p>We will never sell or with intent share this data with a third party.</p>
		<p>We value privacy, so you can disable all tracking and use our service completely anonymously by unticking the checkboxes below.</p>
		<div>
			<label>Store IP address with search queries: </label>
			<input type="checkbox" id="checkbox1" true-value="1" false-value="0" v-model="store_ip">
		</div>
		<div>
			<label>Store clicks on search results together with search query: </label>
			<input type="checkbox" id="checkbox2" true-value="1" false-value="0" v-model="link_ping">
		</div>
		<p>If these settings are modified they will be stored in the local storage of your browser.</p>
	</div>
</template>

<script>
	export default {
		name: 'SettingsPage',
		components: {
		},
		props: {
		},
		data: function () {
			return {
			}
		},
		computed: {
			store_ip: {
				get() {
					return this.$store.state.store_ip;
				},
				set(value) {
					this.$store.commit('set_store_ip', value)
				}
			},
			link_ping: {
				get() {
					return this.$store.state.link_ping;
				},
				set(value) {
					this.$store.commit('set_link_ping', value)
				}
			}
		},
		methods: {
		}
	}
</script>

<!-- Scoped component css -->
<!-- It only affect current component -->
<style scoped>
	#settings-page {
		max-width: 600px;
	}

	input {
		top: 1px;
		position: relative;
	}
</style>
