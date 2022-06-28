<script>

var get_setting = function (name, default_value) {
	var res = localStorage.getItem(name)
	if (res === null) return default_value
	return JSON.parse(res)
}

if (get_setting("_theme_dark", false)) {
	document.getElementsByTagName("head")[0].innerHTML += '<link rel="stylesheet" href="/assets/theme-dark.css">';
}

</script>
