<? include '/home/phujes/public_html/soratech/global/includes/header.php'; ?>
<link rel="stylesheet" type="text/css" href="http://www.soratech.cardona150.com/emr/pages/newCondition/resources/css/style.css">
<script type="text/javascript">var patientId = <?echo $_GET["patientId"]?>;</script>
<script type="text/javascript" src="http://www.soratech.cardona150.com/emr/pages/newCondition/resources/javascript/script.js"></script>
<div class="page secondary">
	<div class="page-header">
		<div class="page-header-content">
			<h1>New<small>Condition</small></h1>
			<a class="back-button big page-back" href="http://www.soratech.cardona150.com/emr/patients/"></a>
		</div>
	</div>
	<div class="page-region">
		<div class="page-region-content">
				<div class="section">
					<h2>Condition</h2>
					<div class="input-control text">
						<input id="condition" type="text" class="with-helper" placeholder="Condition">
						<button class="helper" tabindex="-1" type="button"></button>
					</div>
				</div>
			<button class="standart default" onClick="newFunc()">Save</button>
		</div>
	</div>
</div>
<? include '/home/phujes/public_html/soratech/global/includes/footer.php'; ?>