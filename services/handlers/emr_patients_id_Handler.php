<?
//Handles requests made to http://services.soratech.cardona150.com/emr/patients/{patientId}/.

//Get the http verb.
$verb = strtolower($_SERVER['REQUEST_METHOD']);

//Get the query string and store it in a dictionary.
parse_str($_SERVER['QUERY_STRING'], $queryString);

//Get the incoming json.
$bodyObject = json_decode(file_get_contents("php://input"));

//Check is verb is supported by this handler.
if(is_callable($verb))
{
	//Call handler method.
	$verb($queryString, $bodyObject);
}
else
{
	//Return a 405 if handler doesn't support method.
	header('HTTP/1.1 405 Method Not Allowed');
}

//UPDATE a patient.
function post($queryString, $bodyObject)
{
	$mysqli = new mysqli('cardona150.com', 'phujes_emr', '0mgDatPswd!@34', 'phujes_soratech_emr');
	$statement = $mysqli->prepare("CALL updatePatient(?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?);");
	$statement->bind_param
	('isssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssss',
	$queryString['patientId'],
	$bodyObject->firstName,
	$bodyObject->middleName,
	$bodyObject->paternalLastName,
	$bodyObject->maternalLastName,
	$bodyObject->addressLine1,
	$bodyObject->addressLine2,
	$bodyObject->addressCity,
	$bodyObject->addressState,
	$bodyObject->addressZip,
	$bodyObject->phoneNumber,
	$bodyObject->email,
	$bodyObject->dateOfBirth,
	$bodyObject->socialSecurityNumber,
	$bodyObject->employerName,
	$bodyObject->employerAddressLine1,
	$bodyObject->employerAddressLine2,
	$bodyObject->employerAddressCity,
	$bodyObject->employerAddressState,
	$bodyObject->employerAddressZip,
	$bodyObject->employerPhoneNumber,
	$bodyObject->employerEmail,
	$bodyObject->emergencyContactFirstName,
	$bodyObject->emergencyContactMiddleName,
	$bodyObject->emergencyContactPaternalLastName,
	$bodyObject->emergencyContactMaternalLastName,
	$bodyObject->emergencyContactAddressLine1,
	$bodyObject->emergencyContactAddressLine2,
	$bodyObject->emergencyContactAddressCity,
	$bodyObject->emergencyContactAddressState,
	$bodyObject->emergencyContactAddressZip,
	$bodyObject->emergencyContactPhoneNumber,
	$bodyObject->emergencyContactEmail,
	$bodyObject->primaryInsuranceName,
	$bodyObject->primaryInsurancePolicyNumber,
	$bodyObject->primaryInsuranceGroupNumber,
	$bodyObject->primaryInsurancePrimaryInsuredFirstName,
	$bodyObject->primaryInsurancePrimaryInsuredMiddleName,
	$bodyObject->primaryInsurancePrimaryInsuredPaternalLastName,
	$bodyObject->primaryInsurancePrimaryInsuredMaternalLastName,
	$bodyObject->primaryInsurancePrimaryInsuredAddressLine1,
	$bodyObject->primaryInsurancePrimaryInsuredAddressLine2,
	$bodyObject->primaryInsurancePrimaryInsuredAddressCity,
	$bodyObject->primaryInsurancePrimaryInsuredAddressState,
	$bodyObject->primaryInsurancePrimaryInsuredAddressZip,
	$bodyObject->primaryInsurancePrimaryInsuredPhoneNumber,
	$bodyObject->primaryInsurancePrimaryInsuredEmail,
	$bodyObject->primaryInsurancePrimaryInsuredDateOfBirth,
	$bodyObject->primaryInsurancePrimaryInsuredSocialSecurityNumber,
	$bodyObject->primaryInsurancePrimaryInsuredEmployerName,
	$bodyObject->primaryInsurancePrimaryInsuredEmployerAddressLine1,
	$bodyObject->primaryInsurancePrimaryInsuredEmployerAddressLine2,
	$bodyObject->primaryInsurancePrimaryInsuredEmployerAddressCity,
	$bodyObject->primaryInsurancePrimaryInsuredEmployerAddressState,
	$bodyObject->primaryInsurancePrimaryInsuredEmployerAddressZip,
	$bodyObject->primaryInsurancePrimaryInsuredEmployerPhoneNumber,
	$bodyObject->primaryInsurancePrimaryInsuredEmployerEmail,
	$bodyObject->primaryInsuranceRelationshipToPrimaryInsured,
	$bodyObject->secondaryInsuranceName,
	$bodyObject->secondaryInsurancePolicyNumber,
	$bodyObject->secondaryInsuranceGroupNumber,
	$bodyObject->secondaryInsurancePrimaryInsuredFirstName,
	$bodyObject->secondaryInsurancePrimaryInsuredMiddleName,
	$bodyObject->secondaryInsurancePrimaryInsuredPaternalLastName,
	$bodyObject->secondaryInsurancePrimaryInsuredMaternalLastName,
	$bodyObject->secondaryInsurancePrimaryInsuredAddressLine1,
	$bodyObject->secondaryInsurancePrimaryInsuredAddressLine2,
	$bodyObject->secondaryInsurancePrimaryInsuredAddressCity,
	$bodyObject->secondaryInsurancePrimaryInsuredAddressState,
	$bodyObject->secondaryInsurancePrimaryInsuredAddressZip,
	$bodyObject->secondaryInsurancePrimaryInsuredPhoneNumber,
	$bodyObject->secondaryInsurancePrimaryInsuredEmail,
	$bodyObject->secondaryInsurancePrimaryInsuredDateOfBirth,
	$bodyObject->secondaryInsurancePrimaryInsuredSocialSecurityNumber,
	$bodyObject->secondaryInsurancePrimaryInsuredEmployerName,
	$bodyObject->secondaryInsurancePrimaryInsuredEmployerAddressLine1,
	$bodyObject->secondaryInsurancePrimaryInsuredEmployerAddressLine2,
	$bodyObject->secondaryInsurancePrimaryInsuredEmployerAddressCity,
	$bodyObject->secondaryInsurancePrimaryInsuredEmployerAddressState,
	$bodyObject->secondaryInsurancePrimaryInsuredEmployerAddressZip,
	$bodyObject->secondaryInsurancePrimaryInsuredEmployerPhoneNumber,
	$bodyObject->secondaryInsurancePrimaryInsuredEmployerEmail,
	$bodyObject->secondaryInsuranceRelationshipToPrimaryInsured,
	$queryString['key']);
	$statement->execute();
	if($statement->error=='Forbidden')
	{
		$statement->close();
		$mysqli->close();
		header($_SERVER['SERVER_PROTOCOL'].' 403 Forbidden');
		return;
	}
	$statement->close();
	$mysqli->close();
	header($_SERVER['SERVER_PROTOCOL'].' 204 No Content');
	header('Access-Control-Allow-Origin: *');
}

//SELECT a patient.
function get($queryString, $bodyObject)
{
	$mysqli = new mysqli('cardona150.com', 'phujes_emr', '0mgDatPswd!@34', 'phujes_soratech_emr');
	$statement = $mysqli->prepare("CALL selectPatient(?, ?);");
	$statement->bind_param
	('is',
	$queryString['patientId'],
	$queryString['key']);
	$statement->execute();
	if($statement->error=='Forbidden')
	{
		$statement->close();
		$mysqli->close();
		header($_SERVER['SERVER_PROTOCOL'].' 403 Forbidden');
		return;
	}
	$statement->bind_result
	($patientId,
	$doctorId,
	$firstName,
	$middleName,
	$paternalLastName,
	$maternalLastName,
	$addressLine1,
	$addressLine2,
	$addressCity,
	$addressState,
	$addressZip,
	$phoneNumber,
	$email,
	$dateOfBirth,
	$socialSecurityNumber,
	$employerName,
	$employerAddressLine1,
	$employerAddressLine2,
	$employerAddressCity,
	$employerAddressState,
	$employerAddressZip,
	$employerPhoneNumber,
	$employerEmail,
	$emergencyContactFirstName,
	$emergencyContactMiddleName,
	$emergencyContactPaternalLastName,
	$emergencyContactMaternalLastName,
	$emergencyContactAddressLine1,
	$emergencyContactAddressLine2,
	$emergencyContactAddressCity,
	$emergencyContactAddressState,
	$emergencyContactAddressZip,
	$emergencyContactPhoneNumber,
	$emergencyContactEmail,
	$primaryInsuranceName,
	$primaryInsurancePolicyNumber,
	$primaryInsuranceGroupNumber,
	$primaryInsurancePrimaryInsuredFirstName,
	$primaryInsurancePrimaryInsuredMiddleName,
	$primaryInsurancePrimaryInsuredPaternalLastName,
	$primaryInsurancePrimaryInsuredMaternalLastName,
	$primaryInsurancePrimaryInsuredAddressLine1,
	$primaryInsurancePrimaryInsuredAddressLine2,
	$primaryInsurancePrimaryInsuredAddressCity,
	$primaryInsurancePrimaryInsuredAddressState,
	$primaryInsurancePrimaryInsuredAddressZip,
	$primaryInsurancePrimaryInsuredPhoneNumber,
	$primaryInsurancePrimaryInsuredEmail,
	$primaryInsurancePrimaryInsuredDateOfBirth,
	$primaryInsurancePrimaryInsuredSocialSecurityNumber,
	$primaryInsurancePrimaryInsuredEmployerName,
	$primaryInsurancePrimaryInsuredEmployerAddressLine1,
	$primaryInsurancePrimaryInsuredEmployerAddressLine2,
	$primaryInsurancePrimaryInsuredEmployerAddressCity,
	$primaryInsurancePrimaryInsuredEmployerAddressState,
	$primaryInsurancePrimaryInsuredEmployerAddressZip,
	$primaryInsurancePrimaryInsuredEmployerPhoneNumber,
	$primaryInsurancePrimaryInsuredEmployerEmail,
	$primaryInsuranceRelationshipToPrimaryInsured,
	$secondaryInsuranceName,
	$secondaryInsurancePolicyNumber,
	$secondaryInsuranceGroupNumber,
	$secondaryInsurancePrimaryInsuredFirstName,
	$secondaryInsurancePrimaryInsuredMiddleName,
	$secondaryInsurancePrimaryInsuredPaternalLastName,
	$secondaryInsurancePrimaryInsuredMaternalLastName,
	$secondaryInsurancePrimaryInsuredAddressLine1,
	$secondaryInsurancePrimaryInsuredAddressLine2,
	$secondaryInsurancePrimaryInsuredAddressCity,
	$secondaryInsurancePrimaryInsuredAddressState,
	$secondaryInsurancePrimaryInsuredAddressZip,
	$secondaryInsurancePrimaryInsuredPhoneNumber,
	$secondaryInsurancePrimaryInsuredEmail,
	$secondaryInsurancePrimaryInsuredDateOfBirth,
	$secondaryInsurancePrimaryInsuredSocialSecurityNumber,
	$secondaryInsurancePrimaryInsuredEmployerName,
	$secondaryInsurancePrimaryInsuredEmployerAddressLine1,
	$secondaryInsurancePrimaryInsuredEmployerAddressLine2,
	$secondaryInsurancePrimaryInsuredEmployerAddressCity,
	$secondaryInsurancePrimaryInsuredEmployerAddressState,
	$secondaryInsurancePrimaryInsuredEmployerAddressZip,
	$secondaryInsurancePrimaryInsuredEmployerPhoneNumber,
	$secondaryInsurancePrimaryInsuredEmployerEmail,
	$secondaryInsuranceRelationshipToPrimaryInsured);
	$statement->fetch();
	$patient = array();
	$patient['patientId'] = $patientId;
	$patient['doctorId'] = $doctorId;
	$patient['firstName'] = $firstName;
	$patient['middleName'] = $middleName;
	$patient['paternalLastName'] = $paternalLastName;
	$patient['maternalLastName'] = $maternalLastName;
	$patient['addressLine1'] = $addressLine1;
	$patient['addressLine2'] = $addressLine2;
	$patient['addressCity'] = $addressCity;
	$patient['addressState'] = $addressState;
	$patient['addressZip'] = $addressZip;
	$patient['phoneNumber'] = $phoneNumber;
	$patient['email'] = $email;
	$patient['dateOfBirth'] = $dateOfBirth;
	$patient['socialSecurityNumber'] = $socialSecurityNumber;
	$patient['employerName'] = $employerName;
	$patient['employerAddressLine1'] = $employerAddressLine1;
	$patient['employerAddressLine2'] = $employerAddressLine2;
	$patient['employerAddressCity'] = $employerAddressCity;
	$patient['employerAddressState'] = $employerAddressState;
	$patient['employerAddressZip'] = $employerAddressZip;
	$patient['employerPhoneNumber'] = $employerPhoneNumber;
	$patient['employerEmail'] = $employerEmail;
	$patient['emergencyContactFirstName'] = $emergencyContactFirstName;
	$patient['emergencyContactMiddleName'] = $emergencyContactMiddleName;
	$patient['emergencyContactPaternalLastName'] = $emergencyContactPaternalLastName;
	$patient['emergencyContactMaternalLastName'] = $emergencyContactMaternalLastName;
	$patient['emergencyContactAddressLine1'] = $emergencyContactAddressLine1;
	$patient['emergencyContactAddressLine2'] = $emergencyContactAddressLine2;
	$patient['emergencyContactAddressCity'] = $emergencyContactAddressCity;
	$patient['emergencyContactAddressState'] = $emergencyContactAddressState;
	$patient['emergencyContactAddressZip'] = $emergencyContactAddressZip;
	$patient['emergencyContactPhoneNumber'] = $emergencyContactPhoneNumber;
	$patient['emergencyContactEmail'] = $emergencyContactEmail;
	$patient['primaryInsuranceName'] = $primaryInsuranceName;
	$patient['primaryInsurancePolicyNumber'] = $primaryInsurancePolicyNumber;
	$patient['primaryInsuranceGroupNumber'] = $primaryInsuranceGroupNumber;
	$patient['primaryInsurancePrimaryInsuredFirstName'] = $primaryInsurancePrimaryInsuredFirstName;
	$patient['primaryInsurancePrimaryInsuredMiddleName'] = $primaryInsurancePrimaryInsuredMiddleName;
	$patient['primaryInsurancePrimaryInsuredPaternalLastName'] = $primaryInsurancePrimaryInsuredPaternalLastName;
	$patient['primaryInsurancePrimaryInsuredMaternalLastName'] = $primaryInsurancePrimaryInsuredMaternalLastName;
	$patient['primaryInsurancePrimaryInsuredAddressLine1'] = $primaryInsurancePrimaryInsuredAddressLine1;
	$patient['primaryInsurancePrimaryInsuredAddressLine2'] = $primaryInsurancePrimaryInsuredAddressLine2;
	$patient['primaryInsurancePrimaryInsuredAddressCity'] = $primaryInsurancePrimaryInsuredAddressCity;
	$patient['primaryInsurancePrimaryInsuredAddressState'] = $primaryInsurancePrimaryInsuredAddressState;
	$patient['primaryInsurancePrimaryInsuredAddressZip'] = $primaryInsurancePrimaryInsuredAddressZip;
	$patient['primaryInsurancePrimaryInsuredPhoneNumber'] = $primaryInsurancePrimaryInsuredPhoneNumber;
	$patient['primaryInsurancePrimaryInsuredEmail'] = $primaryInsurancePrimaryInsuredEmail;
	$patient['primaryInsurancePrimaryInsuredDateOfBirth'] = $primaryInsurancePrimaryInsuredDateOfBirth;
	$patient['primaryInsurancePrimaryInsuredSocialSecurityNumber'] = $primaryInsurancePrimaryInsuredSocialSecurityNumber;
	$patient['primaryInsurancePrimaryInsuredEmployerName'] = $primaryInsurancePrimaryInsuredEmployerName;
	$patient['primaryInsurancePrimaryInsuredEmployerAddressLine1'] = $primaryInsurancePrimaryInsuredEmployerAddressLine1;
	$patient['primaryInsurancePrimaryInsuredEmployerAddressLine2'] = $primaryInsurancePrimaryInsuredEmployerAddressLine2;
	$patient['primaryInsurancePrimaryInsuredEmployerAddressCity'] = $primaryInsurancePrimaryInsuredEmployerAddressCity;
	$patient['primaryInsurancePrimaryInsuredEmployerAddressState'] = $primaryInsurancePrimaryInsuredEmployerAddressState;
	$patient['primaryInsurancePrimaryInsuredEmployerAddressZip'] = $primaryInsurancePrimaryInsuredEmployerAddressZip;
	$patient['primaryInsurancePrimaryInsuredEmployerPhoneNumber'] = $primaryInsurancePrimaryInsuredEmployerPhoneNumber;
	$patient['primaryInsurancePrimaryInsuredEmployerEmail'] = $primaryInsurancePrimaryInsuredEmployerEmail;
	$patient['primaryInsuranceRelationshipToPrimaryInsured'] = $primaryInsuranceRelationshipToPrimaryInsured;
	$patient['secondaryInsuranceName'] = $secondaryInsuranceName;
	$patient['secondaryInsurancePolicyNumber'] = $secondaryInsurancePolicyNumber;
	$patient['secondaryInsuranceGroupNumber'] = $secondaryInsuranceGroupNumber;
	$patient['secondaryInsurancePrimaryInsuredFirstName'] = $secondaryInsurancePrimaryInsuredFirstName;
	$patient['secondaryInsurancePrimaryInsuredMiddleName'] = $secondaryInsurancePrimaryInsuredMiddleName;
	$patient['secondaryInsurancePrimaryInsuredPaternalLastName'] = $secondaryInsurancePrimaryInsuredPaternalLastName;
	$patient['secondaryInsurancePrimaryInsuredMaternalLastName'] = $secondaryInsurancePrimaryInsuredMaternalLastName;
	$patient['secondaryInsurancePrimaryInsuredAddressLine1'] = $secondaryInsurancePrimaryInsuredAddressLine1;
	$patient['secondaryInsurancePrimaryInsuredAddressLine2'] = $secondaryInsurancePrimaryInsuredAddressLine2;
	$patient['secondaryInsurancePrimaryInsuredAddressCity'] = $secondaryInsurancePrimaryInsuredAddressCity;
	$patient['secondaryInsurancePrimaryInsuredAddressState'] = $secondaryInsurancePrimaryInsuredAddressState;
	$patient['secondaryInsurancePrimaryInsuredAddressZip'] = $secondaryInsurancePrimaryInsuredAddressZip;
	$patient['secondaryInsurancePrimaryInsuredPhoneNumber'] = $secondaryInsurancePrimaryInsuredPhoneNumber;
	$patient['secondaryInsurancePrimaryInsuredEmail'] = $secondaryInsurancePrimaryInsuredEmail;
	$patient['secondaryInsurancePrimaryInsuredDateOfBirth'] = $secondaryInsurancePrimaryInsuredDateOfBirth;
	$patient['secondaryInsurancePrimaryInsuredSocialSecurityNumber'] = $secondaryInsurancePrimaryInsuredSocialSecurityNumber;
	$patient['secondaryInsurancePrimaryInsuredEmployerName'] = $secondaryInsurancePrimaryInsuredEmployerName;
	$patient['secondaryInsurancePrimaryInsuredEmployerAddressLine1'] = $secondaryInsurancePrimaryInsuredEmployerAddressLine1;
	$patient['secondaryInsurancePrimaryInsuredEmployerAddressLine2'] = $secondaryInsurancePrimaryInsuredEmployerAddressLine2;
	$patient['secondaryInsurancePrimaryInsuredEmployerAddressCity'] = $secondaryInsurancePrimaryInsuredEmployerAddressCity;
	$patient['secondaryInsurancePrimaryInsuredEmployerAddressState'] = $secondaryInsurancePrimaryInsuredEmployerAddressState;
	$patient['secondaryInsurancePrimaryInsuredEmployerAddressZip'] = $secondaryInsurancePrimaryInsuredEmployerAddressZip;
	$patient['secondaryInsurancePrimaryInsuredEmployerPhoneNumber'] = $secondaryInsurancePrimaryInsuredEmployerPhoneNumber;
	$patient['secondaryInsurancePrimaryInsuredEmployerEmail'] = $secondaryInsurancePrimaryInsuredEmployerEmail;
	$patient['secondaryInsuranceRelationshipToPrimaryInsured'] = $secondaryInsuranceRelationshipToPrimaryInsured;
	$statement->close();
	$mysqli->close();
	header($_SERVER['SERVER_PROTOCOL'].' 200 OK');
	header('Content-Type: application/json');
	header('Access-Control-Allow-Origin: *');
	echo json_encode($patient);
}

//DELETE a patient.
function delete($queryString, $bodyObject)
{
	$mysqli = new mysqli('cardona150.com', 'phujes_emr', '0mgDatPswd!@34', 'phujes_soratech_emr');
	$statement = $mysqli->prepare("CALL deletePatient(?, ?);");
	$statement->bind_param
	('is',
	$queryString['patientId'],
	$queryString['key']);
	$statement->execute();
	if($statement->error=='Forbidden')
	{
		$statement->close();
		$mysqli->close();
		header($_SERVER['SERVER_PROTOCOL'].' 403 Forbidden');
		return;
	}
	$statement->close();
	$mysqli->close();
	header($_SERVER['SERVER_PROTOCOL'].' 204 No Content');
	header('Access-Control-Allow-Origin: *');
}

//See options for this handler.
function options($queryString, $bodyObject)
{
	header($_SERVER['SERVER_PROTOCOL'].' 204 No Content');
	header('Access-Control-Allow-Origin: *');
	header('Access-Control-Allow-Methods: DELETE,GET,OPTIONS,POST');
}
?>