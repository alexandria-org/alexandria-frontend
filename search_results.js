<script>

window.addEventListener("load", () => {
	if (!get_setting("_store_clicks", true)) {
		var all_links = document.querySelectorAll(".search-result a")
		all_links.forEach(function (link) {
			link.removeAttribute("ping")
		})
	}
})

</script>
