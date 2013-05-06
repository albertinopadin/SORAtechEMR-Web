<? include '/home/phujes/public_html/soratech/global/includes/header.php'; ?>
<link rel="stylesheet" type="text/css" href="http://www.soratech.cardona150.com/emr/pages/viewVisit/resources/css/style.css">
<script type="text/javascript">var patientId = <?echo $_GET["patientId"]?>;</script>
<script type="text/javascript">var visitId = <?echo $_GET["visitId"]?>;</script>
<script type="text/javascript" src="http://www.soratech.cardona150.com/emr/pages/viewVisit/resources/javascript/script.js"></script>
<div class="page secondary">
	<div class="page-header">
		<div class="page-header-content">
			<h1>Dat<small>Visit</small></h1>
			<a class="back-button big page-back" href="http://www.soratech.cardona150.com/emr/patients/"></a>
		</div>
	</div>
	<div class="page-region">
		<div id="pageContent" class="page-region-content">
			<div class="tile bg-color-green icon cl">
				<div class="tile-content" onClick="deleteFunc()">
					<img src="http://www.soratech.cardona150.com/emr/pages/viewVisit/resources/images/delete.png">
				</div>
				<div class="brand">
					<span class="name">Delete</span>
				</div>
			</div>
			<div class="tile bg-color-pink icon">
				<div class="tile-content" onClick="enableUpdate()">
					<img src="http://www.soratech.cardona150.com/emr/pages/viewVisit/resources/images/edit.png">
				</div>
				<div class="brand">
					<span class="name">Edit</span>
				</div>
			</div>
			<br>
			<div class="section">
				<h2>Visit</h2>
					<div class="input-control text">
						<input id="date" type="text" class="with-helper">
						<button class="helper" tabindex="-1" type="button"></button>
					</div>
					<div class="input-control text">
						<input id="diastolicBloodPressure" type="text" class="with-helper">
						<button class="helper" tabindex="-1" type="button"></button>
					</div>
					<div class="input-control text">
						<input id="systolicBloodPressure" type="text" class="with-helper">
						<button class="helper" tabindex="-1" type="button"></button>
					</div>
					<div class="input-control text">
						<input id="height" type="text" class="with-helper">
						<button class="helper" tabindex="-1" type="button"></button>
					</div>
					<div class="input-control text">
						<input id="pulse" type="text" class="with-helper">
						<button class="helper" tabindex="-1" type="button"></button>
					</div>
					<div class="input-control text">
						<input id="temperature" type="text" class="with-helper">
						<button class="helper" tabindex="-1" type="button"></button>
					</div>
					<div class="input-control text">
						<input id="weight" type="text" class="with-helper">
						<button class="helper" tabindex="-1" type="button"></button>
					</div>
					<div class="input-control text">
						<input id="notes" type="text" class="with-helper">
						<button class="helper" tabindex="-1" type="button"></button>
					</div>
			</div>
			<button id="saveButton" class="standart" onClick="update()" disabled>Save</button>
		</div>
	</div>
</div>
<? include '/home/phujes/public_html/soratech/global/includes/footer.php'; ?>