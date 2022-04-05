<script>

window.addEventListener("load", () => {
	document.getElementById("anonymous").value = JSON.parse(localStorage.getItem("_store_ip")) ? 0 : 1
})

</script>
