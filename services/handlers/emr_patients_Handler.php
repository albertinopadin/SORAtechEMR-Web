<?
//Handles requests made to http://services.soratech.cardona150.com/emr/patients/.

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

//SELECT a doctor's patients.
function get($queryString, $bodyObject)
{
	$mysqli = new mysqli('cardona150.com', 'phujes_emr', '0mgDatPswd!@34', 'phujes_soratech_emr');
	$statement = $mysqli->prepare("CALL selectPatients(?);");
	$statement->bind_param
	('s',
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
	$patients = array();
	while($statement->fetch())
	{
		$temp = array();
		$temp['patientId'] = $patientId;
		$temp['doctorId'] = $doctorId;
		$temp['firstName'] = $firstName;
		$temp['middleName'] = $middleName;
		$temp['paternalLastName'] = $paternalLastName;
		$temp['maternalLastName'] = $maternalLastName;
		$temp['addressLine1'] = $addressLine1;
		$temp['addressLine2'] = $addressLine2;
		$temp['addressCity'] = $addressCity;
		$temp['addressState'] = $addressState;
		$temp['addressZip'] = $addressZip;
		$temp['phoneNumber'] = $phoneNumber;
		$temp['email'] = $email;
		$temp['dateOfBirth'] = $dateOfBirth;
		$temp['socialSecurityNumber'] = $socialSecurityNumber;
		$temp['employerName'] = $employerName;
		$temp['employerAddressLine1'] = $employerAddressLine1;
		$temp['employerAddressLine2'] = $employerAddressLine2;
		$temp['employerAddressCity'] = $employerAddressCity;
		$temp['employerAddressState'] = $employerAddressState;
		$temp['employerAddressZip'] = $employerAddressZip;
		$temp['employerPhoneNumber'] = $employerPhoneNumber;
		$temp['employerEmail'] = $employerEmail;
		$temp['emergencyContactFirstName'] = $emergencyContactFirstName;
		$temp['emergencyContactMiddleName'] = $emergencyContactMiddleName;
		$temp['emergencyContactPaternalLastName'] = $emergencyContactPaternalLastName;
		$temp['emergencyContactMaternalLastName'] = $emergencyContactMaternalLastName;
		$temp['emergencyContactAddressLine1'] = $emergencyContactAddressLine1;
		$temp['emergencyContactAddressLine2'] = $emergencyContactAddressLine2;
		$temp['emergencyContactAddressCity'] = $emergencyContactAddressCity;
		$temp['emergencyContactAddressState'] = $emergencyContactAddressState;
		$temp['emergencyContactAddressZip'] = $emergencyContactAddressZip;
		$temp['emergencyContactPhoneNumber'] = $emergencyContactPhoneNumber;
		$temp['emergencyContactEmail'] = $emergencyContactEmail;
		$temp['primaryInsuranceName'] = $primaryInsuranceName;
		$temp['primaryInsurancePolicyNumber'] = $primaryInsurancePolicyNumber;
		$temp['primaryInsuranceGroupNumber'] = $primaryInsuranceGroupNumber;
		$temp['primaryInsurancePrimaryInsuredFirstName'] = $primaryInsurancePrimaryInsuredFirstName;
		$temp['primaryInsurancePrimaryInsuredMiddleName'] = $primaryInsurancePrimaryInsuredMiddleName;
		$temp['primaryInsurancePrimaryInsuredPaternalLastName'] = $primaryInsurancePrimaryInsuredPaternalLastName;
		$temp['primaryInsurancePrimaryInsuredMaternalLastName'] = $primaryInsurancePrimaryInsuredMaternalLastName;
		$temp['primaryInsurancePrimaryInsuredAddressLine1'] = $primaryInsurancePrimaryInsuredAddressLine1;
		$temp['primaryInsurancePrimaryInsuredAddressLine2'] = $primaryInsurancePrimaryInsuredAddressLine2;
		$temp['primaryInsurancePrimaryInsuredAddressCity'] = $primaryInsurancePrimaryInsuredAddressCity;
		$temp['primaryInsurancePrimaryInsuredAddressState'] = $primaryInsurancePrimaryInsuredAddressState;
		$temp['primaryInsurancePrimaryInsuredAddressZip'] = $primaryInsurancePrimaryInsuredAddressZip;
		$temp['primaryInsurancePrimaryInsuredPhoneNumber'] = $primaryInsurancePrimaryInsuredPhoneNumber;
		$temp['primaryInsurancePrimaryInsuredEmail'] = $primaryInsurancePrimaryInsuredEmail;
		$temp['primaryInsurancePrimaryInsuredDateOfBirth'] = $primaryInsurancePrimaryInsuredDateOfBirth;
		$temp['primaryInsurancePrimaryInsuredSocialSecurityNumber'] = $primaryInsurancePrimaryInsuredSocialSecurityNumber;
		$temp['primaryInsurancePrimaryInsuredEmployerName'] = $primaryInsurancePrimaryInsuredEmployerName;
		$temp['primaryInsurancePrimaryInsuredEmployerAddressLine1'] = $primaryInsurancePrimaryInsuredEmployerAddressLine1;
		$temp['primaryInsurancePrimaryInsuredEmployerAddressLine2'] = $primaryInsurancePrimaryInsuredEmployerAddressLine2;
		$temp['primaryInsurancePrimaryInsuredEmployerAddressCity'] = $primaryInsurancePrimaryInsuredEmployerAddressCity;
		$temp['primaryInsurancePrimaryInsuredEmployerAddressState'] = $primaryInsurancePrimaryInsuredEmployerAddressState;
		$temp['primaryInsurancePrimaryInsuredEmployerAddressZip'] = $primaryInsurancePrimaryInsuredEmployerAddressZip;
		$temp['primaryInsurancePrimaryInsuredEmployerPhoneNumber'] = $primaryInsurancePrimaryInsuredEmployerPhoneNumber;
		$temp['primaryInsurancePrimaryInsuredEmployerEmail'] = $primaryInsurancePrimaryInsuredEmployerEmail;
		$temp['primaryInsuranceRelationshipToPrimaryInsured'] = $primaryInsuranceRelationshipToPrimaryInsured;
		$temp['secondaryInsuranceName'] = $secondaryInsuranceName;
		$temp['secondaryInsurancePolicyNumber'] = $secondaryInsurancePolicyNumber;
		$temp['secondaryInsuranceGroupNumber'] = $secondaryInsuranceGroupNumber;
		$temp['secondaryInsurancePrimaryInsuredFirstName'] = $secondaryInsurancePrimaryInsuredFirstName;
		$temp['secondaryInsurancePrimaryInsuredMiddleName'] = $secondaryInsurancePrimaryInsuredMiddleName;
		$temp['secondaryInsurancePrimaryInsuredPaternalLastName'] = $secondaryInsurancePrimaryInsuredPaternalLastName;
		$temp['secondaryInsurancePrimaryInsuredMaternalLastName'] = $secondaryInsurancePrimaryInsuredMaternalLastName;
		$temp['secondaryInsurancePrimaryInsuredAddressLine1'] = $secondaryInsurancePrimaryInsuredAddressLine1;
		$temp['secondaryInsurancePrimaryInsuredAddressLine2'] = $secondaryInsurancePrimaryInsuredAddressLine2;
		$temp['secondaryInsurancePrimaryInsuredAddressCity'] = $secondaryInsurancePrimaryInsuredAddressCity;
		$temp['secondaryInsurancePrimaryInsuredAddressState'] = $secondaryInsurancePrimaryInsuredAddressState;
		$temp['secondaryInsurancePrimaryInsuredAddressZip'] = $secondaryInsurancePrimaryInsuredAddressZip;
		$temp['secondaryInsurancePrimaryInsuredPhoneNumber'] = $secondaryInsurancePrimaryInsuredPhoneNumber;
		$temp['secondaryInsurancePrimaryInsuredEmail'] = $secondaryInsurancePrimaryInsuredEmail;
		$temp['secondaryInsurancePrimaryInsuredDateOfBirth'] = $secondaryInsurancePrimaryInsuredDateOfBirth;
		$temp['secondaryInsurancePrimaryInsuredSocialSecurityNumber'] = $secondaryInsurancePrimaryInsuredSocialSecurityNumber;
		$temp['secondaryInsurancePrimaryInsuredEmployerName'] = $secondaryInsurancePrimaryInsuredEmployerName;
		$temp['secondaryInsurancePrimaryInsuredEmployerAddressLine1'] = $secondaryInsurancePrimaryInsuredEmployerAddressLine1;
		$temp['secondaryInsurancePrimaryInsuredEmployerAddressLine2'] = $secondaryInsurancePrimaryInsuredEmployerAddressLine2;
		$temp['secondaryInsurancePrimaryInsuredEmployerAddressCity'] = $secondaryInsurancePrimaryInsuredEmployerAddressCity;
		$temp['secondaryInsurancePrimaryInsuredEmployerAddressState'] = $secondaryInsurancePrimaryInsuredEmployerAddressState;
		$temp['secondaryInsurancePrimaryInsuredEmployerAddressZip'] = $secondaryInsurancePrimaryInsuredEmployerAddressZip;
		$temp['secondaryInsurancePrimaryInsuredEmployerPhoneNumber'] = $secondaryInsurancePrimaryInsuredEmployerPhoneNumber;
		$temp['secondaryInsurancePrimaryInsuredEmployerEmail'] = $secondaryInsurancePrimaryInsuredEmployerEmail;
		$temp['secondaryInsuranceRelationshipToPrimaryInsured'] = $secondaryInsuranceRelationshipToPrimaryInsured;
		array_push($patients, $temp);
	}
	$statement->close();
	$mysqli->close();
	header($_SERVER['SERVER_PROTOCOL'].' 200 OK');
	header('Content-Type: application/json');
	header('Access-Control-Allow-Origin: *');
	echo json_encode($patients);
}

//INSERT a patient.
function put($queryString, $bodyObject)
{
	$mysqli = new mysqli('cardona150.com', 'phujes_emr', '0mgDatPswd!@34', 'phujes_soratech_emr');
	$statement = $mysqli->prepare("CALL insertPatient(?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?);");
	$statement->bind_param
	('sssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssss',
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

//See options for this handler.
function options($queryString, $bodyObject)
{
	header($_SERVER['SERVER_PROTOCOL'].' 204 No Content');
	header('Access-Control-Allow-Origin: *');
	header('Access-Control-Allow-Methods: GET,PUT,OPTIONS');
}
?>