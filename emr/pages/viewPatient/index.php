<? include '/home/phujes/public_html/soratech/global/includes/header.php'; ?>
<link rel="stylesheet" type="text/css" href="http://www.soratech.cardona150.com/emr/pages/viewPatient/resources/css/style.css">
<script type="text/javascript">var patientId = <?echo $_GET["patientId"]?>;</script>
<script type="text/javascript" src="http://www.soratech.cardona150.com/emr/pages/viewPatient/resources/javascript/script.js"></script>
<div class="page secondary">
	<div class="page-header">
		<div class="page-header-content">
			<h1>Dat<small>Patient</small></h1>
			<a class="back-button big page-back" href="http://www.soratech.cardona150.com/emr/patients/"></a>
		</div>
	</div>
	<div class="page-region">
		<div id="pageContent" class="page-region-content">
			<div class="tile bg-color-green icon cl">
				<div class="tile-content" onClick="deleteFunc()">
					<img src="http://www.soratech.cardona150.com/emr/pages/viewPatient/resources/images/delete.png">
				</div>
				<div class="brand">
					<span class="name">Delete</span>
				</div>
			</div>
			<div class="tile bg-color-pink icon">
				<div class="tile-content" onClick="enableUpdate()">
					<img src="http://www.soratech.cardona150.com/emr/pages/viewPatient/resources/images/edit.png">
				</div>
				<div class="brand">
					<span class="name">Edit</span>
				</div>
			</div>
			<br>
			<ul class="accordion cl" data-role="accordion">
				<li class="active">
					<a>Personal Information</a>
					<div>
						<div class="section">
							<h2>Full Name</h2>
							<div class="input-control text">
								<input id="firstName" type="text" class="with-helper">
								<button class="helper" tabindex="-1" type="button"></button>
							</div>
							<div class="input-control text">
								<input id="middleName" id="" type="text" class="with-helper">
								<button class="helper" tabindex="-1" type="button"></button>
							</div>
							<div class="input-control text">
								<input id="paternalLastName" type="text" class="with-helper">
								<button class="helper" tabindex="-1" type="button"></button>
							</div>
							<div class="input-control text">
								<input id="maternalLastName" type="text" class="with-helper">
								<button class="helper" tabindex="-1" type="button"></button>
							</div>
						</div>
						<div class="section">
							<h2>Address</h2>
							<div class="input-control text">
								<input id="addressLine1" type="text" class="with-helper">
								<button class="helper" tabindex="-1" type="button"></button>
							</div>
							<div class="input-control text">
								<input id="addressLine2" type="text" class="with-helper">
								<button class="helper" tabindex="-1" type="button"></button>
							</div>
							<div class="input-control text">
								<input id="addressCity" type="text" class="with-helper">
								<button class="helper" tabindex="-1" type="button"></button>
							</div>
							<div class="input-control text">
								<input id="addressState" type="text" class="with-helper">
								<button class="helper" tabindex="-1" type="button"></button>
							</div>
							<div class="input-control text">
								<input id="addressZip" type="text" class="with-helper">
								<button class="helper" tabindex="-1" type="button"></button>
							</div>
						</div>
						<div class="section">
							<h2>Phone Number</h2>
							<div class="input-control text">
								<input id="phoneNumber" type="text" class="with-helper">
								<button class="helper" tabindex="-1" type="button"></button>
							</div>
						</div>
						<div class="section">
							<h2>Email</h2>
							<div class="input-control text">
								<input id="email" type="text" class="with-helper">
								<button class="helper" tabindex="-1" type="button"></button>
							</div>
						</div>
						<div class="section">
							<h2>Date Of Birth</h2>
							<div class="input-control text">
								<input id="dateOfBirth" type="text" class="with-helper">
								<button class="helper" tabindex="-1" type="button"></button>
							</div>
						</div>
						<div class="section">
							<h2>Social Security Number</h2>
							<div class="input-control text">
								<input id="socialSecurityNumber" type="text" class="with-helper">
								<button class="helper" tabindex="-1" type="button"></button>
							</div>
						</div>
					</div>
				</li>
				<li>
					<a>Employer Information</a>
					<div>
						<div class="section">
							<h2>Name</h2>
							<div class="input-control text">
								<input id="employerName" type="text" class="with-helper">
								<button class="helper" tabindex="-1" type="button"></button>
							</div>
						</div>
						<div class="section">
							<h2>Address</h2>
							<div class="input-control text">
								<input id="employerAddressLine1" type="text" class="with-helper">
								<button class="helper" tabindex="-1" type="button"></button>
							</div>
							<div class="input-control text">
								<input id="employerAddressLine2" type="text" class="with-helper">
								<button class="helper" tabindex="-1" type="button"></button>
							</div>
							<div class="input-control text">
								<input id="employerAddressCity" type="text" class="with-helper">
								<button class="helper" tabindex="-1" type="button"></button>
							</div>
							<div class="input-control text">
								<input id="employerAddressState" type="text" class="with-helper">
								<button class="helper" tabindex="-1" type="button"></button>
							</div>
							<div class="input-control text">
								<input id="employerAddressZip" type="text" class="with-helper">
								<button class="helper" tabindex="-1" type="button"></button>
							</div>
						</div>
						<div class="section">
							<h2>Phone Number</h2>
							<div class="input-control text">
								<input id="employerPhoneNumber" type="text" class="with-helper">
								<button class="helper" tabindex="-1" type="button"></button>
							</div>
						</div>
						<div class="section">
							<h2>Email</h2>
							<div class="input-control text">
								<input id="employerEmail" type="text" class="with-helper">
								<button class="helper" tabindex="-1" type="button"></button>
							</div>
						</div>
					</div>
				</li>
				<li>
					<a>Emergency Contact</a>
					<div>
						<div class="section">
							<h2>Full Name</h2>
							<div class="input-control text">
								<input id="emergencyContactFirstName" type="text" class="with-helper">
								<button class="helper" tabindex="-1" type="button"></button>
							</div>
							<div class="input-control text">
								<input id="emergencyContactMiddleName" type="text" class="with-helper">
								<button class="helper" tabindex="-1" type="button"></button>
							</div>
							<div class="input-control text">
								<input id="emergencyContactPaternalLastName" type="text" class="with-helper">
								<button class="helper" tabindex="-1" type="button"></button>
							</div>
							<div class="input-control text">
								<input id="emergencyContactMaternalLastName" type="text" class="with-helper">
								<button class="helper" tabindex="-1" type="button"></button>
							</div>
						</div>
						<div class="section">
							<h2>Address</h2>
							<div class="input-control text">
								<input id="emergencyContactAddressLine1" type="text" class="with-helper">
								<button class="helper" tabindex="-1" type="button"></button>
							</div>
							<div class="input-control text">
								<input id="emergencyContactAddressLine2" type="text" class="with-helper">
								<button class="helper" tabindex="-1" type="button"></button>
							</div>
							<div class="input-control text">
								<input id="emergencyContactAddressCity" type="text" class="with-helper">
								<button class="helper" tabindex="-1" type="button"></button>
							</div>
							<div class="input-control text">
								<input id="emergencyContactAddressState" type="text" class="with-helper">
								<button class="helper" tabindex="-1" type="button"></button>
							</div>
							<div class="input-control text">
								<input id="emergencyContactAddressZip" type="text" class="with-helper">
								<button class="helper" tabindex="-1" type="button"></button>
							</div>
						</div>
						<div class="section">
							<h2>Phone Number</h2>
							<div class="input-control text">
								<input id="emergencyContactPhoneNumber" type="text" class="with-helper">
								<button class="helper" tabindex="-1" type="button"></button>
							</div>
						</div>
						<div class="section">
							<h2>Email</h2>
							<div class="input-control text">
								<input id="emergencyContactEmail" type="text" class="with-helper">
								<button class="helper" tabindex="-1" type="button"></button>
							</div>
						</div>
					</div>
				</li>
				<li>
					<a>Insurance</a>
					<div>
						<ul class="accordion" data-role="accordion">
							<li class="active">
								<a>Primary Insurance</a>
								<div>
									<div class="section">
										<h2>Insurance Name</h2>
										<div class="input-control text">
											<input id="primaryInsuranceName" type="text" class="with-helper">
											<button class="helper" tabindex="-1" type="button"></button>
										</div>
									</div>
									<div class="section">
										<h2>Policy Number</h2>
										<div class="input-control text">
											<input id="primaryInsurancePolicyNumber" type="text" class="with-helper">
											<button class="helper" tabindex="-1" type="button"></button>
										</div>
									</div>
									<div class="section">
										<h2>Group Number</h2>
										<div class="input-control text">
											<input id="primaryInsuranceGroupNumber" type="text" class="with-helper">
											<button class="helper" tabindex="-1" type="button"></button>
										</div>
									</div>
									<ul class="accordion" data-role="accordion">
										<li class="active">
											<a>Primary Insured</a>
											<div>
												<div class="section">
													<h2>Full Name</h2>
													<div class="input-control text">
														<input id="primaryInsurancePrimaryInsuredFirstName" type="text" class="with-helper">
														<button class="helper" tabindex="-1" type="button"></button>
													</div>
													<div class="input-control text">
														<input id="primaryInsurancePrimaryInsuredMiddleName" type="text" class="with-helper">
														<button class="helper" tabindex="-1" type="button"></button>
													</div>
													<div class="input-control text">
														<input id="primaryInsurancePrimaryInsuredPaternalLastName" type="text" class="with-helper">
														<button class="helper" tabindex="-1" type="button"></button>
													</div>
													<div class="input-control text">
														<input id="primaryInsurancePrimaryInsuredMaternalLastName" type="text" class="with-helper">
														<button class="helper" tabindex="-1" type="button"></button>
													</div>
												</div>
												<div class="section">
													<h2>Address</h2>
													<div class="input-control text">
														<input id="primaryInsurancePrimaryInsuredAddressLine1" type="text" class="with-helper">
														<button class="helper" tabindex="-1" type="button"></button>
													</div>
													<div class="input-control text">
														<input id="primaryInsurancePrimaryInsuredAddressLine2" type="text" class="with-helper">
														<button class="helper" tabindex="-1" type="button"></button>
													</div>
													<div class="input-control text">
														<input id="primaryInsurancePrimaryInsuredAddressCity" type="text" class="with-helper">
														<button class="helper" tabindex="-1" type="button"></button>
													</div>
													<div class="input-control text">
														<input id="primaryInsurancePrimaryInsuredAddressState" type="text" class="with-helper">
														<button class="helper" tabindex="-1" type="button"></button>
													</div>
													<div class="input-control text">
														<input id="primaryInsurancePrimaryInsuredAddressZip" type="text" class="with-helper">
														<button class="helper" tabindex="-1" type="button"></button>
													</div>
												</div>
												<div class="section">
													<h2>Phone Number</h2>
													<div class="input-control text">
														<input id="primaryInsurancePrimaryInsuredPhoneNumber" type="text" class="with-helper">
														<button class="helper" tabindex="-1" type="button"></button>
													</div>
												</div>
												<div class="section">
													<h2>Email</h2>
													<div class="input-control text">
														<input id="primaryInsurancePrimaryInsuredEmail" type="text" class="with-helper">
														<button class="helper" tabindex="-1" type="button"></button>
													</div>
												</div>
												<div class="section">
													<h2>Date Of Birth</h2>
													<div class="input-control text">
														<input id="primaryInsurancePrimaryInsuredDateOfBirth" type="text" class="with-helper">
														<button class="helper" tabindex="-1" type="button"></button>
													</div>
												</div>
												<div class="section">
													<h2>Social Security Number</h2>
													<div class="input-control text">
														<input id="primaryInsurancePrimaryInsuredSocialSecurityNumber" type="text" class="with-helper">
														<button class="helper" tabindex="-1" type="button"></button>
													</div>
												</div>
												<ul class="accordion" data-role="accordion">
													<li class="active">
														<a>Primary Insured Employer</a>
														<div>
															<div class="section">
																<h2>Name</h2>
																<div class="input-control text">
																	<input id="primaryInsurancePrimaryInsuredEmployerName" type="text" class="with-helper">
																	<button class="helper" tabindex="-1" type="button"></button>
																</div>
															</div>
															<div class="section">
																<h2>Address</h2>
																<div class="input-control text">
																	<input id="primaryInsurancePrimaryInsuredEmployerAddressLine1" type="text" class="with-helper">
																	<button class="helper" tabindex="-1" type="button"></button>
																</div>
																<div class="input-control text">
																	<input id="primaryInsurancePrimaryInsuredEmployerAddressLine2" type="text" class="with-helper">
																	<button class="helper" tabindex="-1" type="button"></button>
																</div>
																<div class="input-control text">
																	<input id="primaryInsurancePrimaryInsuredEmployerAddressCity" type="text" class="with-helper">
																	<button class="helper" tabindex="-1" type="button"></button>
																</div>
																<div class="input-control text">
																	<input id="primaryInsurancePrimaryInsuredEmployerAddressState" type="text" class="with-helper">
																	<button class="helper" tabindex="-1" type="button"></button>
																</div>
																<div class="input-control text">
																	<input id="primaryInsurancePrimaryInsuredEmployerAddressZip" type="text" class="with-helper">
																	<button class="helper" tabindex="-1" type="button"></button>
																</div>
															</div>
															<div class="section">
																<h2>Phone Number</h2>
																<div class="input-control text">
																	<input id="primaryInsurancePrimaryInsuredEmployerPhoneNumber" type="text" class="with-helper">
																	<button class="helper" tabindex="-1" type="button"></button>
																</div>
															</div>
															<div class="section">
																<h2>Email</h2>
																<div class="input-control text">
																	<input id="primaryInsurancePrimaryInsuredEmployerEmail" type="text" class="with-helper">
																	<button class="helper" tabindex="-1" type="button"></button>
																</div>
															</div>
														</div>
													</li>
												</ul>
											</div>
										</li>
									</ul>
									<div class="section">
										<h2>Relationship To Primary Insured</h2>
										<div class="input-control text">
											<input id="primaryInsuranceRelationshipToPrimaryInsured" type="text" class="with-helper">
											<button class="helper" tabindex="-1" type="button"></button>
										</div>
									</div>
								</div>
							</li>
							<li>
								<a>Secondary Insurance</a>
								<div>
									<div class="section">
										<h2>Insurance Name</h2>
										<div class="input-control text">
											<input id="secondaryInsuranceName" type="text" class="with-helper">
											<button class="helper" tabindex="-1" type="button"></button>
										</div>
									</div>
									<div class="section">
										<h2>Policy Number</h2>
										<div class="input-control text">
											<input id="secondaryInsurancePolicyNumber" type="text" class="with-helper">
											<button class="helper" tabindex="-1" type="button"></button>
										</div>
									</div>
									<div class="section">
										<h2>Group Number</h2>
										<div class="input-control text">
											<input id="secondaryInsuranceGroupNumber" type="text" class="with-helper">
											<button class="helper" tabindex="-1" type="button"></button>
										</div>
									</div>
									<ul class="accordion" data-role="accordion">
										<li class="active">
											<a>Primary Insured</a>
											<div>
												<div class="section">
													<h2>Full Name</h2>
													<div class="input-control text">
														<input id="secondaryInsurancePrimaryInsuredFirstName" type="text" class="with-helper">
														<button class="helper" tabindex="-1" type="button"></button>
													</div>
													<div class="input-control text">
														<input id="secondaryInsurancePrimaryInsuredMiddleName" type="text" class="with-helper">
														<button class="helper" tabindex="-1" type="button"></button>
													</div>
													<div class="input-control text">
														<input id="secondaryInsurancePrimaryInsuredPaternalLastName" type="text" class="with-helper">
														<button class="helper" tabindex="-1" type="button"></button>
													</div>
													<div class="input-control text">
														<input id="secondaryInsurancePrimaryInsuredMaternalLastName" type="text" class="with-helper">
														<button class="helper" tabindex="-1" type="button"></button>
													</div>
												</div>
												<div class="section">
													<h2>Address</h2>
													<div class="input-control text">
														<input id="secondaryInsurancePrimaryInsuredAddressLine1" type="text" class="with-helper">
														<button class="helper" tabindex="-1" type="button"></button>
													</div>
													<div class="input-control text">
														<input id="secondaryInsurancePrimaryInsuredAddressLine2" type="text" class="with-helper">
														<button class="helper" tabindex="-1" type="button"></button>
													</div>
													<div class="input-control text">
														<input id="secondaryInsurancePrimaryInsuredAddressCity" type="text" class="with-helper">
														<button class="helper" tabindex="-1" type="button"></button>
													</div>
													<div class="input-control text">
														<input id="secondaryInsurancePrimaryInsuredAddressState" type="text" class="with-helper">
														<button class="helper" tabindex="-1" type="button"></button>
													</div>
													<div class="input-control text">
														<input id="secondaryInsurancePrimaryInsuredAddressZip" type="text" class="with-helper">
														<button class="helper" tabindex="-1" type="button"></button>
													</div>
												</div>
												<div class="section">
													<h2>Phone Number</h2>
													<div class="input-control text">
														<input id="secondaryInsurancePrimaryInsuredPhoneNumber" type="text" class="with-helper">
														<button class="helper" tabindex="-1" type="button"></button>
													</div>
												</div>
												<div class="section">
													<h2>Email</h2>
													<div class="input-control text">
														<input id="secondaryInsurancePrimaryInsuredEmail" type="text" class="with-helper">
														<button class="helper" tabindex="-1" type="button"></button>
													</div>
												</div>
												<div class="section">
													<h2>Date Of Birth</h2>
													<div class="input-control text">
														<input id="secondaryInsurancePrimaryInsuredDateOfBirth" type="text" class="with-helper">
														<button class="helper" tabindex="-1" type="button"></button>
													</div>
												</div>
												<div class="section">
													<h2>Social Security Number</h2>
													<div class="input-control text">
														<input id="secondaryInsurancePrimaryInsuredSocialSecurityNumber" type="text" class="with-helper">
														<button class="helper" tabindex="-1" type="button"></button>
													</div>
												</div>												
												<ul class="accordion" data-role="accordion">
													<li class="active">
														<a>Primary Insured Employer</a>
														<div>
															<div class="section">
																<h2>Name</h2>
																<div class="input-control text">
																	<input id="primaryInsurancePrimaryInsuredEmployerName" type="text" class="with-helper">
																	<button class="helper" tabindex="-1" type="button"></button>
																</div>
															</div>
															<div class="section">
																<h2>Address</h2>
																<div class="input-control text">
																	<input id="primaryInsurancePrimaryInsuredEmployerAddressLine1" type="text" class="with-helper">
																	<button class="helper" tabindex="-1" type="button"></button>
																</div>
																<div class="input-control text">
																	<input id="primaryInsurancePrimaryInsuredEmployerAddressLine2" type="text" class="with-helper">
																	<button class="helper" tabindex="-1" type="button"></button>
																</div>
																<div class="input-control text">
																	<input id="primaryInsurancePrimaryInsuredEmployerAddressCity" type="text" class="with-helper">
																	<button class="helper" tabindex="-1" type="button"></button>
																</div>
																<div class="input-control text">
																	<input id="primaryInsurancePrimaryInsuredEmployerAddressState" type="text" class="with-helper">
																	<button class="helper" tabindex="-1" type="button"></button>
																</div>
																<div class="input-control text">
																	<input id="primaryInsurancePrimaryInsuredEmployerAddressZip" type="text" class="with-helper">
																	<button class="helper" tabindex="-1" type="button"></button>
																</div>
															</div>
															<div class="section">
																<h2>Phone Number</h2>
																<div class="input-control text">
																	<input id="primaryInsurancePrimaryInsuredEmployerPhoneNumber" type="text" class="with-helper">
																	<button class="helper" tabindex="-1" type="button"></button>
																</div>
															</div>
															<div class="section">
																<h2>Email</h2>
																<div class="input-control text">
																	<input id="primaryInsurancePrimaryInsuredEmployerEmail" type="text" class="with-helper">
																	<button class="helper" tabindex="-1" type="button"></button>
																</div>
															</div>
														</div>
													</li>
												</ul>
											</div>
										</li>
									</ul>
									<div class="section">
										<h2>Relationship To Primary Insured</h2>
										<div class="input-control text">
											<input id="secondaryInsuranceRelationshipToPrimaryInsured" type="text" class="with-helper">
											<button class="helper" tabindex="-1" type="button"></button>
										</div>
									</div>
								</div>
							</li>
						</ul>
					</div>
				</li>
				<li>
					<a>Conditions</a>
					<div>
						<a href="http://www.soratech.cardona150.com/emr/pages/newCondition/?patientId=<?echo $_GET["patientId"]?>">
							<div class="tile bg-color-green icon cl">
								<div class="tile-content">
									<img src="http://www.soratech.cardona150.com/emr/pages/viewPatient/resources/images/new.png">
								</div>
								<div class="brand">
									<span class="name">New</span>
								</div>
							</div>
						</a>
						<div class="input-control text cl" style="width:100%">
							<input type="text" id="conditionsFilterInput" value="Type to filter"/>
						</div>
						<div id="conditions">
						</div>
					</div>
				</li>
				<li>
					<a>Medications</a>
					<div>
						<a href="http://www.soratech.cardona150.com/emr/pages/newMedication/?patientId=<?echo $_GET["patientId"]?>">
							<div class="tile bg-color-green icon cl">
								<div class="tile-content">
									<img src="http://www.soratech.cardona150.com/emr/pages/viewPatient/resources/images/new.png">
								</div>
								<div class="brand">
									<span class="name">New</span>
								</div>
							</div>
						</a>
						<div class="input-control text cl" style="width:100%">
							<input type="text" id="medicationsFilterInput" value="Type to filter"/>
						</div>
						<div id="medications">
						</div>
					</div>
				</li>
				<li>
					<a>Visits</a>
					<div>
						<a href="http://www.soratech.cardona150.com/emr/pages/newVisit/?patientId=<?echo $_GET["patientId"]?>">
							<div class="tile bg-color-green icon cl">
								<div class="tile-content">
									<img src="http://www.soratech.cardona150.com/emr/pages/viewPatient/resources/images/new.png">
								</div>
								<div class="brand">
									<span class="name">New</span>
								</div>
							</div>
						</a>
						<div class="input-control text cl" style="width:100%">
							<input type="text" id="visitsFilterInput" value="Type to filter"/>
						</div>
						<div id="visits">
						</div>
					</div>
				</li>
			</ul>
			<button id="saveButton" class="standart" onClick="update()" disabled>Save</button>
		</div>
	</div>
</div>
<? include '/home/phujes/public_html/soratech/global/includes/footer.php'; ?>