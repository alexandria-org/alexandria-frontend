<!DOCTYPE html>
<html>
<head>
	<meta http-equiv="Content-type" content="text/html; charset=utf-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<meta name="viewport" content="width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1">
	<title>Alexandria Search</title>
<!--
 *
 * Alexandria.org - the open source search engine
 *
 * Copyright (c) 2021 Josef Cullhed, <info@alexandria.org>, et al.
 *
 * View source code on https://github.com/alexandria-org
 *
-->
	<link rel="search" type="application/opensearchdescription+xml" title="alexandria.org" href="/assets/xml_description.xml">
	<link rel="manifest" href="/assets/manifest.json">
	<meta name="theme-color" content="#000000">
	<meta name="description" content="Search the web with alexandria.org - the open source search engine">
<style>
/*
 * Thanks https://rsms.me/inter/
 * */
@import url('https://rsms.me/inter/inter.css');
html {
	font-family: 'Inter', sans-serif;
	font-size: .94em;
	line-height: 1.15;
	-webkit-text-size-adjust: 100%;
}

small {
	font-size: 80%;
}

@media (min-width: 800px) {
	#front-page-centered {
		position: absolute;
		width: 500px;
		top: 40%;
		left: 50%;
		margin-left: -250px;
	}
}
#search-form {
	margin-bottom: 1em;
	display: flex;
	max-width: 600px;
}
#search-form input {
	margin-right: 5px;
	box-sizing: border-box;
	flex-grow: 2;
}
#search-form button {
}

#header {
	margin-bottom: 0.5em;
	max-width: 600px;
}
#page {
	max-width: 600px;
}
h1 {
	margin: 0 0 0 0;
}
h1 a {
	text-decoration: none;
	color: #000;
}
nav {
	float: right;
	max-width: 600px;
}
nav a {
	margin: 0 0.35em;
}
.search-result-title {
	font-size: 1.15em;
	text-overflow: ellipsis;
	overflow: hidden;
	white-space: nowrap;
}
.search-result-url {
	color: green;
	text-overflow: ellipsis;
	overflow: hidden;
	white-space: nowrap;
}
.search-result {
	margin-bottom: 1em;
}
.search-result-info-wrapper {
	position: relative;
}
.search-result-info {
	width: 100%;
	max-width: 600px;
	font-size: 80%;
	margin-bottom: 1em;
}
#paginator {
	margin: 0 0 4em;
}
#paginator a.active {
	font-weight: 700;
	text-decoration: none;
}
#paginator a {
	margin: 0 .4em;
}
</style>
<?php include("functions.js") ?>
</head>
<body>
