$(document).ready(function()
{
	$("#pageContent").find("input").prop("disabled", true);
	showDialog();
	$.getJSON("http://www.services.soratech.cardona150.com/emr/patients/"+patientId+"/?key="+getCookie('key'),function(data)
	{
		$('#firstName').val(data['firstName']);
		$('#middleName').val(data['middleName']);
		$('#paternalLastName').val(data['paternalLastName']);
		$('#maternalLastName').val(data['maternalLastName']);
		$('#addressLine1').val(data['addressLine1']);
		$('#addressLine2').val(data['addressLine2']);
		$('#addressCity').val(data['addressCity']);
		$('#addressState').val(data['addressState']);
		$('#addressZip').val(data['addressZip']);
		$('#phoneNumber').val(data['phoneNumber']);
		$('#email').val(data['email']);
		$('#dateOfBirth').val(data['dateOfBirth']);
		$('#socialSecurityNumber').val(data['socialSecurityNumber']);
		$('#employerName').val(data['employerName']);
		$('#employerAddressLine1').val(data['employerAddressLine1']);
		$('#employerAddressLine2').val(data['employerAddressLine2']);
		$('#employerAddressCity').val(data['employerAddressCity']);
		$('#employerAddressState').val(data['employerAddressState']);
		$('#employerAddressZip').val(data['employerAddressZip']);
		$('#employerPhoneNumber').val(data['employerPhoneNumber']);
		$('#employerEmail').val(data['employerEmail']);
		$('#emergencyContactFirstName').val(data['emergencyContactFirstName']);
		$('#emergencyContactMiddleName').val(data['emergencyContactMiddleName']);
		$('#emergencyContactPaternalLastName').val(data['emergencyContactPaternalLastName']);
		$('#emergencyContactMaternalLastName').val(data['emergencyContactMaternalLastName']);
		$('#emergencyContactAddressLine1').val(data['emergencyContactAddressLine1']);
		$('#emergencyContactAddressLine2').val(data['emergencyContactAddressLine2']);
		$('#emergencyContactAddressCity').val(data['emergencyContactAddressCity']);
		$('#emergencyContactAddressState').val(data['emergencyContactAddressState']);
		$('#emergencyContactAddressZip').val(data['emergencyContactAddressZip']);
		$('#emergencyContactPhoneNumber').val(data['emergencyContactPhoneNumber']);
		$('#emergencyContactEmail').val(data['emergencyContactEmail']);
		$('#primaryInsuranceName').val(data['primaryInsuranceName']);
		$('#primaryInsurancePolicyNumber').val(data['primaryInsurancePolicyNumber']);
		$('#primaryInsuranceGroupNumber').val(data['primaryInsuranceGroupNumber']);
		$('#primaryInsurancePrimaryInsuredFirstName').val(data['primaryInsurancePrimaryInsuredFirstName']);
		$('#primaryInsurancePrimaryInsuredMiddleName').val(data['primaryInsurancePrimaryInsuredMiddleName']);
		$('#primaryInsurancePrimaryInsuredPaternalLastName').val(data['primaryInsurancePrimaryInsuredPaternalLastName']);
		$('#primaryInsurancePrimaryInsuredMaternalLastName').val(data['primaryInsurancePrimaryInsuredMaternalLastName']);
		$('#primaryInsurancePrimaryInsuredAddressLine1').val(data['primaryInsurancePrimaryInsuredAddressLine1']);
		$('#primaryInsurancePrimaryInsuredAddressLine2').val(data['primaryInsurancePrimaryInsuredAddressLine2']);
		$('#primaryInsurancePrimaryInsuredAddressCity').val(data['primaryInsurancePrimaryInsuredAddressCity']);
		$('#primaryInsurancePrimaryInsuredAddressState').val(data['primaryInsurancePrimaryInsuredAddressState']);
		$('#primaryInsurancePrimaryInsuredAddressZip').val(data['primaryInsurancePrimaryInsuredAddressZip']);
		$('#primaryInsurancePrimaryInsuredPhoneNumber').val(data['primaryInsurancePrimaryInsuredPhoneNumber']);
		$('#primaryInsurancePrimaryInsuredEmail').val(data['primaryInsurancePrimaryInsuredEmail']);
		$('#primaryInsurancePrimaryInsuredDateOfBirth').val(data['primaryInsurancePrimaryInsuredDateOfBirth']);
		$('#primaryInsurancePrimaryInsuredSocialSecurityNumber').val(data['primaryInsurancePrimaryInsuredSocialSecurityNumber']);
		$('#primaryInsurancePrimaryInsuredEmployerName').val(data['primaryInsurancePrimaryInsuredEmployerName']);
		$('#primaryInsurancePrimaryInsuredEmployerAddressLine1').val(data['primaryInsurancePrimaryInsuredEmployerAddressLine1']);
		$('#primaryInsurancePrimaryInsuredEmployerAddressLine2').val(data['primaryInsurancePrimaryInsuredEmployerAddressLine2']);
		$('#primaryInsurancePrimaryInsuredEmployerAddressCity').val(data['primaryInsurancePrimaryInsuredEmployerAddressCity']);
		$('#primaryInsurancePrimaryInsuredEmployerAddressState').val(data['primaryInsurancePrimaryInsuredEmployerAddressState']);
		$('#primaryInsurancePrimaryInsuredEmployerAddressZip').val(data['primaryInsurancePrimaryInsuredEmployerAddressZip']);
		$('#primaryInsurancePrimaryInsuredEmployerPhoneNumber').val(data['primaryInsurancePrimaryInsuredEmployerPhoneNumber']);
		$('#primaryInsurancePrimaryInsuredEmployerEmail').val(data['primaryInsurancePrimaryInsuredEmployerEmail']);
		$('#primaryInsuranceRelationshipToPrimaryInsured').val(data['primaryInsuranceRelationshipToPrimaryInsured']);
		$('#secondaryInsuranceName').val(data['secondaryInsuranceName']);
		$('#secondaryInsurancePolicyNumber').val(data['secondaryInsurancePolicyNumber']);
		$('#secondaryInsuranceGroupNumber').val(data['secondaryInsuranceGroupNumber']);
		$('#secondaryInsurancePrimaryInsuredFirstName').val(data['secondaryInsurancePrimaryInsuredFirstName']);
		$('#secondaryInsurancePrimaryInsuredMiddleName').val(data['secondaryInsurancePrimaryInsuredMiddleName']);
		$('#secondaryInsurancePrimaryInsuredPaternalLastName').val(data['secondaryInsurancePrimaryInsuredPaternalLastName']);
		$('#secondaryInsurancePrimaryInsuredMaternalLastName').val(data['secondaryInsurancePrimaryInsuredMaternalLastName']);
		$('#secondaryInsurancePrimaryInsuredAddressLine1').val(data['secondaryInsurancePrimaryInsuredAddressLine1']);
		$('#secondaryInsurancePrimaryInsuredAddressLine2').val(data['secondaryInsurancePrimaryInsuredAddressLine2']);
		$('#secondaryInsurancePrimaryInsuredAddressCity').val(data['secondaryInsurancePrimaryInsuredAddressCity']);
		$('#secondaryInsurancePrimaryInsuredAddressState').val(data['secondaryInsurancePrimaryInsuredAddressState']);
		$('#secondaryInsurancePrimaryInsuredAddressZip').val(data['secondaryInsurancePrimaryInsuredAddressZip']);
		$('#secondaryInsurancePrimaryInsuredPhoneNumber').val(data['secondaryInsurancePrimaryInsuredPhoneNumber']);
		$('#secondaryInsurancePrimaryInsuredEmail').val(data['secondaryInsurancePrimaryInsuredEmail']);
		$('#secondaryInsurancePrimaryInsuredDateOfBirth').val(data['secondaryInsurancePrimaryInsuredDateOfBirth']);
		$('#secondaryInsurancePrimaryInsuredSocialSecurityNumber').val(data['secondaryInsurancePrimaryInsuredSocialSecurityNumber']);
		$('#secondaryInsurancePrimaryInsuredEmployerName').val(data['secondaryInsurancePrimaryInsuredEmployerName']);
		$('#secondaryInsurancePrimaryInsuredEmployerAddressLine1').val(data['secondaryInsurancePrimaryInsuredEmployerAddressLine1']);
		$('#secondaryInsurancePrimaryInsuredEmployerAddressLine2').val(data['secondaryInsurancePrimaryInsuredEmployerAddressLine2']);
		$('#secondaryInsurancePrimaryInsuredEmployerAddressCity').val(data['secondaryInsurancePrimaryInsuredEmployerAddressCity']);
		$('#secondaryInsurancePrimaryInsuredEmployerAddressState').val(data['secondaryInsurancePrimaryInsuredEmployerAddressState']);
		$('#secondaryInsurancePrimaryInsuredEmployerAddressZip').val(data['secondaryInsurancePrimaryInsuredEmployerAddressZip']);
		$('#secondaryInsurancePrimaryInsuredEmployerPhoneNumber').val(data['secondaryInsurancePrimaryInsuredEmployerPhoneNumber']);
		$('#secondaryInsurancePrimaryInsuredEmployerEmail').val(data['secondaryInsurancePrimaryInsuredEmployerEmail']);
		$('#secondaryInsuranceRelationshipToPrimaryInsured').val(data['secondaryInsuranceRelationshipToPrimaryInsured']);
		hideDialog();
	});
	//Conditions
	showDialog();
	$.getJSON("http://www.services.soratech.cardona150.com/emr/patients/"+patientId+"/conditions/?key="+getCookie('key'),function(data)
	{
		var conditions = "<table class='striped text-center'>\
		<thead>\
		<tr>\
		<th class='text-center'>View</th>\
		<th class='text-center'>Condition Id</th>\
		<th class='text-center'>Condition</th>\
		</tr>\
		</thead>\
		<tbody id='conditionTableBody'>";
		$.each(data, function(key1, row)
		{
			$.each(row, function(key2)
			{
				(row[key2]==null) && (row[key2]='');
			});
			conditions += "<tr>\
			<td><a href='http://www.soratech.cardona150.com/emr/patients/"+row['patientId']+"/conditions/"+row['conditionId']+"/'><img src='http://www.soratech.cardona150.com/emr/pages/viewPatient/resources/images/view.png'></a></td>\
			<td>"+row['conditionId']+"</td>\
			<td>"+row['condition']+"</td>\
			</tr>";
		});
		conditions += "</tbody>\
		</table>";
		$("#conditions").html(conditions);
	});
	hideDialog();
	$("#conditionsFilterInput").keyup(function()
	{
		$("#conditionTableBody").find("tr").hide();
		var filterTerm = this.value;
		var rows = $("#conditionTableBody").find("tr");
		$.each(rows, function(key1, row)
		{
			$.each(row.children, function(key2, td)
			{
				td.textContent.indexOf(filterTerm)+1 && $(row).show();
			});
		});
    })
	.focus(function()
	{
        this.value="";
    });
	//Medications
	showDialog();
	$.getJSON("http://www.services.soratech.cardona150.com/emr/patients/"+patientId+"/medications/?key="+getCookie('key'),function(data)
	{
		var medications = "<table class='striped text-center'>\
		<thead>\
		<tr>\
		<th class='text-center'>View</th>\
		<th class='text-center'>Medication Id</th>\
		<th class='text-center'>Medication</th>\
		</tr>\
		</thead>\
		<tbody id='medicationTableBody'>";
		$.each(data, function(key1, row)
		{
			$.each(row, function(key2)
			{
				(row[key2]==null) && (row[key2]='');
			});
			medications += "<tr>\
			<td><a href='http://www.soratech.cardona150.com/emr/patients/"+row['patientId']+"/medications/"+row['medicationId']+"/'><img src='http://www.soratech.cardona150.com/emr/pages/viewPatient/resources/images/view.png'></a></td>\
			<td>"+row['medicationId']+"</td>\
			<td>"+row['name']+"</td>\
			</tr>";
		});
		medications += "</tbody>\
		</table>";
		$("#medications").html(medications);
	});
	hideDialog();
	$("#medicationsFilterInput").keyup(function()
	{
		$("#medicationTableBody").find("tr").hide();
		var filterTerm = this.value;
		var rows = $("#medicationTableBody").find("tr");
		$.each(rows, function(key1, row)
		{
			$.each(row.children, function(key2, td)
			{
				td.textContent.indexOf(filterTerm)+1 && $(row).show();
			});
		});
    })
	.focus(function()
	{
        this.value="";
    });
	//Visits
	showDialog();
	$.getJSON("http://www.services.soratech.cardona150.com/emr/patients/"+patientId+"/visits/?key="+getCookie('key'),function(data)
	{
		var visits = "<table class='striped text-center'>\
		<thead>\
		<tr>\
		<th class='text-center'>View</th>\
		<th class='text-center'>Visit Id</th>\
		<th class='text-center'>Date</th>\
		</tr>\
		</thead>\
		<tbody id='visitTableBody'>";
		$.each(data, function(key1, row)
		{
			$.each(row, function(key2)
			{
				(row[key2]==null) && (row[key2]='');
			});
			visits += "<tr>\
			<td><a href='http://www.soratech.cardona150.com/emr/patients/"+row['patientId']+"/visits/"+row['visitId']+"/'><img src='http://www.soratech.cardona150.com/emr/pages/viewPatient/resources/images/view.png'></a></td>\
			<td>"+row['visitId']+"</td>\
			<td>"+row['date']+"</td>\
			</tr>";
		});
		visits += "</tbody>\
		</table>";
		$("#visits").html(visits);
	});
	hideDialog();
	$("#visitsFilterInput").keyup(function()
	{
		$("#visitTableBody").find("tr").hide();
		var filterTerm = this.value;
		var rows = $("#visitTableBody").find("tr");
		$.each(rows, function(key1, row)
		{
			$.each(row.children, function(key2, td)
			{
				td.textContent.indexOf(filterTerm)+1 && $(row).show();
			});
		});
    })
	.focus(function()
	{
        this.value="";
    });
});

function getCookie(c_name)
{
	var i,x,y,ARRcookies=document.cookie.split(";");
	for (i=0;i<ARRcookies.length;i++)
	{
		x=ARRcookies[i].substr(0,ARRcookies[i].indexOf("="));
		y=ARRcookies[i].substr(ARRcookies[i].indexOf("=")+1);
		x=x.replace(/^\s+|\s+$/g,"");
		if (x==c_name)
		{
			return unescape(y);
		}
	}
}

function deleteFunc()
{
	showDialog();
	$.ajax(
	{
		url: 'http://services.soratech.cardona150.com/emr/patients/'+patientId+'/?key='+getCookie('key'),
		type: 'DELETE',
		success: function(response)
		{
			hideDialog();
			document.location.href = "http://www.soratech.cardona150.com/emr/patients/";
		}
	});
}

function enableUpdate()
{
	$("#pageContent").find("input").prop("disabled", false);
	$("#saveButton").prop("disabled", false);
	$("#saveButton").addClass("default");
}

function update()
{
	var patient=new Object();
	patient.patientId=window.patientId;
    patient.firstName=$('#firstName').val();
	patient.middleName=$('#middleName').val();
	patient.paternalLastName=$('#paternalLastName').val();
	patient.maternalLastName=$('#maternalLastName').val();
	patient.addressLine1=$('#addressLine1').val();
	patient.addressLine2=$('#addressLine2').val();
	patient.addressCity=$('#addressCity').val();
	patient.addressState=$('#addressState').val();
	patient.addressZip=$('#addressZip').val();
	patient.phoneNumber=$('#phoneNumber').val();
	patient.email=$('#email').val();
	patient.dateOfBirth=$('#dateOfBirth').val();
	patient.socialSecurityNumber=$('#socialSecurityNumber').val();
	patient.employerName=$('#employerName').val();
	patient.employerAddressLine1=$('#employerAddressLine1').val();
	patient.employerAddressLine2=$('#employerAddressLine2').val();
	patient.employerAddressCity=$('#employerAddressCity').val();
	patient.employerAddressState=$('#employerAddressState').val();
	patient.employerAddressZip=$('#employerAddressZip').val();
	patient.employerPhoneNumber=$('#employerPhoneNumber').val();
	patient.employerEmail=$('#employerEmail').val();
	patient.emergencyContactFirstName=$('#emergencyContactFirstName').val();
	patient.emergencyContactMiddleName=$('#emergencyContactMiddleName').val();
	patient.emergencyContactPaternalLastName=$('#emergencyContactPaternalLastName').val();
	patient.emergencyContactMaternalLastName=$('#emergencyContactMaternalLastName').val();
	patient.emergencyContactAddressLine1=$('#emergencyContactAddressLine1').val();
	patient.emergencyContactAddressLine2=$('#emergencyContactAddressLine2').val();
	patient.emergencyContactAddressCity=$('#emergencyContactAddressCity').val();
	patient.emergencyContactAddressState=$('#emergencyContactAddressState').val();
	patient.emergencyContactAddressZip=$('#emergencyContactAddressZip').val();
	patient.emergencyContactPhoneNumber=$('#emergencyContactPhoneNumber').val();
	patient.emergencyContactEmail=$('#emergencyContactEmail').val();
	patient.primaryInsuranceName=$('#primaryInsuranceName').val();
	patient.primaryInsurancePolicyNumber=$('#primaryInsurancePolicyNumber').val();
	patient.primaryInsuranceGroupNumber=$('#primaryInsuranceGroupNumber').val();
	patient.primaryInsurancePrimaryInsuredFirstName=$('#primaryInsurancePrimaryInsuredFirstName').val();
	patient.primaryInsurancePrimaryInsuredMiddleName=$('#primaryInsurancePrimaryInsuredMiddleName').val();
	patient.primaryInsurancePrimaryInsuredPaternalLastName=$('#primaryInsurancePrimaryInsuredPaternalLastName').val();
	patient.primaryInsurancePrimaryInsuredMaternalLastName=$('#primaryInsurancePrimaryInsuredMaternalLastName').val();
	patient.primaryInsurancePrimaryInsuredAddressLine1=$('#primaryInsurancePrimaryInsuredAddressLine1').val();
	patient.primaryInsurancePrimaryInsuredAddressLine2=$('#primaryInsurancePrimaryInsuredAddressLine2').val();
	patient.primaryInsurancePrimaryInsuredAddressCity=$('#primaryInsurancePrimaryInsuredAddressCity').val();
	patient.primaryInsurancePrimaryInsuredAddressState=$('#primaryInsurancePrimaryInsuredAddressState').val();
	patient.primaryInsurancePrimaryInsuredAddressZip=$('#primaryInsurancePrimaryInsuredAddressZip').val();
	patient.primaryInsurancePrimaryInsuredPhoneNumber=$('#primaryInsurancePrimaryInsuredPhoneNumber').val();
	patient.primaryInsurancePrimaryInsuredEmail=$('#primaryInsurancePrimaryInsuredEmail').val();
	patient.primaryInsurancePrimaryInsuredDateOfBirth=$('#primaryInsurancePrimaryInsuredDateOfBirth').val();
	patient.primaryInsurancePrimaryInsuredSocialSecurityNumber=$('#primaryInsurancePrimaryInsuredSocialSecurityNumber').val();
	patient.primaryInsurancePrimaryInsuredEmployerName=$('#primaryInsurancePrimaryInsuredEmployerName').val();
	patient.primaryInsurancePrimaryInsuredEmployerAddressLine1=$('#primaryInsurancePrimaryInsuredEmployerAddressLine1').val();
	patient.primaryInsurancePrimaryInsuredEmployerAddressLine2=$('#primaryInsurancePrimaryInsuredEmployerAddressLine2').val();
	patient.primaryInsurancePrimaryInsuredEmployerAddressCity=$('#primaryInsurancePrimaryInsuredEmployerAddressCity').val();
	patient.primaryInsurancePrimaryInsuredEmployerAddressState=$('#primaryInsurancePrimaryInsuredEmployerAddressState').val();
	patient.primaryInsurancePrimaryInsuredEmployerAddressZip=$('#primaryInsurancePrimaryInsuredEmployerAddressZip').val();
	patient.primaryInsurancePrimaryInsuredEmployerPhoneNumber=$('#primaryInsurancePrimaryInsuredEmployerPhoneNumber').val();
	patient.primaryInsurancePrimaryInsuredEmployerEmail=$('#primaryInsurancePrimaryInsuredEmployerEmail').val();
	patient.primaryInsuranceRelationshipToPrimaryInsured=$('#primaryInsuranceRelationshipToPrimaryInsured').val();
	patient.secondaryInsuranceName=$('#secondaryInsuranceName').val();
	patient.secondaryInsurancePolicyNumber=$('#secondaryInsurancePolicyNumber').val();
	patient.secondaryInsuranceGroupNumber=$('#secondaryInsuranceGroupNumber').val();
	patient.secondaryInsurancePrimaryInsuredFirstName=$('#secondaryInsurancePrimaryInsuredFirstName').val();
	patient.secondaryInsurancePrimaryInsuredMiddleName=$('#secondaryInsurancePrimaryInsuredMiddleName').val();
	patient.secondaryInsurancePrimaryInsuredPaternalLastName=$('#secondaryInsurancePrimaryInsuredPaternalLastName').val();
	patient.secondaryInsurancePrimaryInsuredMaternalLastName=$('#secondaryInsurancePrimaryInsuredMaternalLastName').val();
	patient.secondaryInsurancePrimaryInsuredAddressLine1=$('#secondaryInsurancePrimaryInsuredAddressLine1').val();
	patient.secondaryInsurancePrimaryInsuredAddressLine2=$('#secondaryInsurancePrimaryInsuredAddressLine2').val();
	patient.secondaryInsurancePrimaryInsuredAddressCity=$('#secondaryInsurancePrimaryInsuredAddressCity').val();
	patient.secondaryInsurancePrimaryInsuredAddressState=$('#secondaryInsurancePrimaryInsuredAddressState').val();
	patient.secondaryInsurancePrimaryInsuredAddressZip=$('#secondaryInsurancePrimaryInsuredAddressZip').val();
	patient.secondaryInsurancePrimaryInsuredPhoneNumber=$('#secondaryInsurancePrimaryInsuredPhoneNumber').val();
	patient.secondaryInsurancePrimaryInsuredEmail=$('#secondaryInsurancePrimaryInsuredEmail').val();
	patient.secondaryInsurancePrimaryInsuredDateOfBirth=$('#secondaryInsurancePrimaryInsuredDateOfBirth').val();
	patient.secondaryInsurancePrimaryInsuredSocialSecurityNumber=$('#secondaryInsurancePrimaryInsuredSocialSecurityNumber').val();
	patient.secondaryInsurancePrimaryInsuredEmployerName=$('#secondaryInsurancePrimaryInsuredEmployerName').val();
	patient.secondaryInsurancePrimaryInsuredEmployerAddressLine1=$('#secondaryInsurancePrimaryInsuredEmployerAddressLine1').val();
	patient.secondaryInsurancePrimaryInsuredEmployerAddressLine2=$('#secondaryInsurancePrimaryInsuredEmployerAddressLine2').val();
	patient.secondaryInsurancePrimaryInsuredEmployerAddressCity=$('#secondaryInsurancePrimaryInsuredEmployerAddressCity').val();
	patient.secondaryInsurancePrimaryInsuredEmployerAddressState=$('#secondaryInsurancePrimaryInsuredEmployerAddressState').val();
	patient.secondaryInsurancePrimaryInsuredEmployerAddressZip=$('#secondaryInsurancePrimaryInsuredEmployerAddressZip').val();
	patient.secondaryInsurancePrimaryInsuredEmployerPhoneNumber=$('#secondaryInsurancePrimaryInsuredEmployerPhoneNumber').val();
	patient.secondaryInsurancePrimaryInsuredEmployerEmail=$('#secondaryInsurancePrimaryInsuredEmployerEmail').val();
	patient.secondaryInsuranceRelationshipToPrimaryInsured=$('#secondaryInsuranceRelationshipToPrimaryInsured').val();
	showDialog();
	$.ajax(
	{
		url: 'http://services.soratech.cardona150.com/emr/patients/'+window.patientId+'/?key='+getCookie('key'),
		type: 'POST',
		data: JSON.stringify(patient),
		success: function(response)
		{
			hideDialog();
			document.location.href = "http://www.soratech.cardona150.com/emr/patients/";
		}
	});
}

function showDialog()
{
	$.Dialog(
	{
		'title':'Processing',
		'content':'<center><img src="http://soratech.cardona150.com/global/images/preloader-w8-cycle-black.gif"></center>',
		'position':{'zone':'center'},
		'buttons':{}
	});
	$("#dialogButtons").remove();
	$("#dialogBox").css("min-height","0px").css("min-width","0px");
}

function hideDialog()
{
	$.Dialog.hide();
}