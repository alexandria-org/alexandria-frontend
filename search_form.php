<form method="get" action="/">
	<div id="search-form">
		<input type="hidden" name="c" value="<?=cluster()?>" />
		<input type="hidden" name="r" value="<?=post_processor()?>" />
		<input type="text" name="q" autofocus="true" autocapitalize="false" title="Search" aria-label="Search" value="<?=search_query()?>"/>
		<button class="search-box-button" type="submit">Search</button>
		<div class="clearfix"></div>
	</div>
</form>
