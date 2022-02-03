<?php
include("header.php");
include("menu.php");
?>
<div id="page">
	<hr>

	<h2>Privacy settings</h2>
	<p>The default behaviour on alexandria.org is to store the searches together with your IP address. When you click on a search result for a query we also store which search result you clicked on. We do this to be able to measure and improve our search results.</p>

	<p>We will never sell or with intent share this data with a third party.</p>

	<p>We value privacy, so you can disable all tracking and use our service completely anonymously by unticking the checkboxes below.</p>

	<div>
		<label>Store IP address with search queries: </label>
		<input type="checkbox" true-value="1" false-value="0">
	</div>
	<div>
		<label>Store clicks on search results together with search query: </label>
		<input type="checkbox" true-value="1" false-value="0">
	</div>

	<p>If these settings are modified they will be stored in the local storage of your browser.</p>

	<p>We don't use cookies.</p>
</div>

<?php
include("footer.php");
?>
