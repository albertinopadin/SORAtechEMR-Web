<? include '/home/phujes/public_html/soratech/global/includes/header.php'; ?>
<link rel="stylesheet" type="text/css" href="http://www.soratech.cardona150.com/emr/pages/viewPatients/resources/css/style.css">
<script type="text/javascript" src="http://www.soratech.cardona150.com/emr/pages/viewPatients/resources/javascript/script.js"></script>
<div class="page secondary">
	<div class="page-header">
		<div class="page-header-content">
			<h1>Dem<small>Patients</small></h1>
			<a class="back-button big page-back" href="http://www.soratech.cardona150.com/emr/patients/"></a>
		</div>
	</div>
	<div class="page-region">
		<div class="page-region-content">
			<a href="http://www.soratech.cardona150.com/emr/pages/newPatient/">
				<div class="tile bg-color-green icon cl">
					<div class="tile-content">
						<img src="http://www.soratech.cardona150.com/emr/pages/viewPatients/resources/images/new.png">
					</div>
					<div class="brand">
						<span class="name">New</span>
					</div>
				</div>
			</a>
			<div class="input-control text cl">
				<input type="text" id="patientsFilterInput" value="Type to filter"/>
			</div>
			<div id="patients">
			</div>
		</div>
	</div>
</div>
<? include '/home/phujes/public_html/soratech/global/includes/footer.php'; ?>