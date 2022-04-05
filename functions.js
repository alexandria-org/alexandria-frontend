<script>

var get_setting = function (name, default_value) {
	var res = localStorage.getItem(name)
	if (res === null) return default_value
	return JSON.parse(res)
}

</script>
