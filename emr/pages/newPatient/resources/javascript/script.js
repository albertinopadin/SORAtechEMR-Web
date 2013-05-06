function newFunc()
{
	var patient=new Object();
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
		url: 'http://services.soratech.cardona150.com/emr/patients/?key='+getCookie('key'),
		type: 'PUT',
		data: JSON.stringify(patient),
		success: function(response)
		{
			hideDialog();
			document.location.href = "http://www.soratech.cardona150.com/emr/patients/";
		}
	});
}

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