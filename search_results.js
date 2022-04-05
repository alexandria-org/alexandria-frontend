<script>

window.addEventListener("load", () => {
	if (!JSON.parse(localStorage.getItem("_store_clicks"))) {
		var all_links = document.querySelectorAll(".search-result a")
		all_links.forEach(function (link) {
			link.removeAttribute("ping")
		})
	}
})

</script>
