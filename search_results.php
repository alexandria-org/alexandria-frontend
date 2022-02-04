<?php

function page_max($res) {
	return (int)($res->page_max ?? 1);
}

function previous_page() {
	return current_page() - 1;
}

function next_page() {
	return current_page() + 1;
}

function time_seconds($res) {
	return number_format($res->time_ms / 1000, 2);
}

function num_results($res) {
	return number_format($res->total_found ?? 0);
}

$ch = curl_init();
$url = "https://api.alexandria.org/?q=" . urlencode(search_query()) . "&c=". urlencode(cluster()) . "&r=" . urlencode(post_processor()) . "&p=" . urlencode(current_page());
curl_setopt($ch, CURLOPT_URL, $url);
curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
$json = curl_exec($ch);

curl_close($ch);

$res = json_decode($json);

?>
<div id="page">
	<div class="search-result-info-wrapper">
		<div class="search-result-info">
			Found <?=num_results($res)?> results in <?=time_seconds($res)?>s
		</div>
	</div>
	<div id="search-result-list">
		<?php foreach ($res->results as $result) { ?>
			<div class="search-result">
				<div class="search-result-title">
					<b>
						<a href="<?=escape($result->url)?>"><?=escape($result->title)?></a>
					</b>
				</div>
				<div class="search-result-url"><?=escape($result->url)?></div>
				<div class="snippet"><?=escape($result->snippet)?></div>
			</div>
		<?php } ?>
	</div>
	<div id="paginator">
	<?php if (page_max($res) > 1) { ?>
		<?php if (current_page() > 1) { ?>
			<a href="/?q=<?=urlencode(search_query())?>&p=<?=previous_page()?>&c=<?=urlencode(cluster())?>&r=<?=urlencode(post_processor())?>">Prev</a>
		<?php } ?>
		<?php for ($page = 1; $page <= page_max($res); $page++) { ?>
			<a href="/?q=<?=urlencode(search_query())?>&p=<?=$page?>&c=<?=urlencode(cluster())?>&r=<?=urlencode(post_processor())?>" <?php if ($page == current_page()) echo 'class="active"' ?>><?=$page?></a>
		<?php } ?>
		<?php if (current_page() < page_max($res)) { ?>
			<a href="/?q=<?=urlencode(search_query())?>&p=<?=next_page()?>&c=<?=urlencode(cluster())?>&r=<?=urlencode(post_processor())?>">Next</a>
		<?php } ?>
	<?php } ?>
	</div>
</div>
