<? include '/home/phujes/public_html/soratech/global/includes/header.php'; ?>
<div class="page secondary">
	<div class="page-header">
		<div class="page-header-content">
			<h1>EMR<small>Login</small></h1>
			<a class="back-button big page-back" href="../"></a>
		</div>
	</div>
	<div class="page-region">
		<div class="page-region-content">
			<div class="section">
				<h2>Please Enter Your Key</h2>
				<div class="input-control text">
					<input type="text" class="with-helper" id="key" placeholder="xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx">
					<button class="helper" tabindex="-1" type="button"></button>
				</div>
			</div>
			<button class="standart default" onClick="setCookie('key', document.getElementById('key').value, 30)">Ok</button>
		</div>
	</div>
</div>
<? include '/home/phujes/public_html/soratech/global/includes/footer.php'; ?>