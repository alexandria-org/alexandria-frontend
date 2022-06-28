<script>

var boolean_settings = {
	store_ip: true,
	store_clicks: true,
	theme_dark: false,
}

document.getElementById("save").addEventListener("click", (e) => {
	e.preventDefault()

	for (var name in boolean_settings) {
		var value = document.getElementById(name)
		localStorage.setItem("_" + name, value.checked);
	}

	e.currentTarget.disabled = true

	document.location.reload()
});

function update_save_button() {
	var has_changed = false
	for (var name in boolean_settings) {
		var default_value = boolean_settings[name]
		has_changed = has_changed || document.getElementById(name).checked !== get_setting("_" + name, default_value)
	}
	if (has_changed) {

		document.getElementById("save").disabled = false

	} else {

		document.getElementById("save").disabled = true

	}
}

for (var name in boolean_settings) {
	document.getElementById(name).addEventListener("change", (e) => {
		update_save_button()
	})
}

window.addEventListener('load', () => {

	for (var name in boolean_settings) {
		var default_value = boolean_settings[name]
		var is_checked = get_setting("_" + name, default_value)
		document.getElementById(name).checked = is_checked
	}
})

</script>
