<script>

window.addEventListener("load", () => {
	document.getElementById("anonymous").value = get_setting("_store_ip", true) ? 0 : 1
})

</script>
