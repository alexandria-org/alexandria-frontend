<?php

function escape($str) { 
	return htmlspecialchars($str);
}

function cluster() {
	return escape($_GET['c'] ?? '');
}

function post_processor() {
	return escape($_GET['r'] ?? '');
}

function search_query() {
	return escape($_GET['q'] ?? '');
}

function current_page() {
	return (int)($_GET['p'] ?? 1);
}

$uri = $_SERVER['REQUEST_URI'];

if ($uri == "/settings") {
	include("settings.php");
	exit(0);
}

if ($uri == "/about") {
	include("about.php");
	exit(0);
}

if ($uri == "/bot.html") {
	include("bot.php");
	exit(0);
}

if (($_GET['q'] ?? '') != "") {
	include("search.php");
	exit(0);
}

include("header.php");
?>

<div id="front-page-centered">
	<?php include("menu.php"); ?>
	<?php include("search_form.php"); ?>
</div>

<?php include("footer.php"); ?>
