<? include '/home/phujes/public_html/soratech/global/includes/header.php'; ?>
<link rel="stylesheet" type="text/css" href="http://www.soratech.cardona150.com/emr/pages/viewMedication/resources/css/style.css">
<script type="text/javascript">var patientId = <?echo $_GET["patientId"]?>;</script>
<script type="text/javascript">var medicationId = <?echo $_GET["medicationId"]?>;</script>
<script type="text/javascript" src="http://www.soratech.cardona150.com/emr/pages/viewMedication/resources/javascript/script.js"></script>
<div class="page secondary">
	<div class="page-header">
		<div class="page-header-content">
			<h1>Dat<small>Medication</small></h1>
			<a class="back-button big page-back" href="http://www.soratech.cardona150.com/emr/patients/"></a>
		</div>
	</div>
	<div class="page-region">
		<div id="pageContent" class="page-region-content">
			<div class="tile bg-color-green icon cl">
				<div class="tile-content" onClick="deleteFunc()">
					<img src="http://www.soratech.cardona150.com/emr/pages/viewMedication/resources/images/delete.png">
				</div>
				<div class="brand">
					<span class="name">Delete</span>
				</div>
			</div>
			<div class="tile bg-color-pink icon">
				<div class="tile-content" onClick="enableUpdate()">
					<img src="http://www.soratech.cardona150.com/emr/pages/viewMedication/resources/images/edit.png">
				</div>
				<div class="brand">
					<span class="name">Edit</span>
				</div>
			</div>
			<br>
			<div class="section">
				<h2>Medication</h2>
				<div class="input-control text">
					<input id="name" type="text" class="with-helper">
					<button class="helper" tabindex="-1" type="button"></button>
				</div>
				<div class="input-control text">
					<input id="dosage" type="text" class="with-helper">
					<button class="helper" tabindex="-1" type="button"></button>
				</div>
			</div>
			<button id="saveButton" class="standart" onClick="update()" disabled>Save</button>
		</div>
	</div>
</div>
<? include '/home/phujes/public_html/soratech/global/includes/footer.php'; ?>