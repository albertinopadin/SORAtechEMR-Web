<? include '/home/phujes/public_html/soratech/global/includes/header.php'; ?>
<div class="page secondary">
	<div class="page-header">
		<div class="page-header-content">
			<h1>Blog<small>What's up?</small></h1>
			<a class="back-button big page-back" href="../"></a>
		</div>
	</div>
	<div class="page-region">
		<div class="page-region-content">
			<div id="meetingsTile" class="tile selected bg-color-green icon">
				<div class="tile-content" onClick="getPosts('Meetings')">
					<img src="resources/images/meetings.png">
				</div>
				<div class="brand">
					<span class="name">Meetings</span>
				</div>
			</div>
			<div id="susanaTile" class="tile bg-color-pink icon">
				<div class="tile-content" onClick="getPosts('Susana')">
					<img src="resources/images/female.png">
				</div>
				<div class="brand">
					<span class="name">Susana</span>
				</div>
			</div>
			<div id="omarTile" class="tile bg-color-orange icon">
				<div class="tile-content" onClick="getPosts('Omar')">
					<img src="resources/images/male.png">
				</div>
				<div class="brand">
					<span class="name">Omar</span>
				</div>
			</div>
			<div id="robertoTile" class="tile bg-color-purple icon">
				<div class="tile-content" onClick="getPosts('Roberto')">
					<img src="resources/images/male.png">
				</div>
				<div class="brand">
					<span class="name">Roberto</span>
				</div>
			</div>
			<div id="albertinoTile" class="tile bg-color-red icon">
				<div class="tile-content" onClick="getPosts('Albertino')">
					<img src="resources/images/male.png">
				</div>
				<div class="brand">
					<span class="name">Albertino</span>
				</div>
			</div>
			<div id="blog-posts">
			</div>
		</div>
	</div>
</div>
<? include '/home/phujes/public_html/soratech/global/includes/footer.php'; ?>