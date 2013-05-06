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

//UPDATE a patient's medication.
function post($queryString, $bodyObject)
{
	$mysqli = new mysqli('cardona150.com', 'phujes_emr', '0mgDatPswd!@34', 'phujes_soratech_emr');
	$statement = $mysqli->prepare("CALL updateMedication(?, ?, ?, ?);");
	$statement->bind_param
	('isss',
	$queryString['medicationId'],
	$bodyObject->name,
	$bodyObject->dosage,
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

//SELECT a patient's medication.
function get($queryString, $bodyObject)
{
	$mysqli = new mysqli('cardona150.com', 'phujes_emr', '0mgDatPswd!@34', 'phujes_soratech_emr');
	$statement = $mysqli->prepare("CALL selectMedication(?, ?);");
	$statement->bind_param
	('is',
	$queryString['medicationId'],
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
	($medicationId,
	$patientId,
	$name,
	$dosage);
	$statement->fetch();
	$medication = array();
	$medication['medicationId'] = $medicationId;
	$medication['patientId'] = $patientId;
	$medication['name'] = $name;
	$medication['dosage'] = $dosage;
	$statement->close();
	$mysqli->close();
	header($_SERVER['SERVER_PROTOCOL'].' 200 OK');
	header('Content-Type: application/json');
	header('Access-Control-Allow-Origin: *');
	echo json_encode($medication);
}

//DELETE a patient's medication.
function delete($queryString, $bodyObject)
{
	$mysqli = new mysqli('cardona150.com', 'phujes_emr', '0mgDatPswd!@34', 'phujes_soratech_emr');
	$statement = $mysqli->prepare("CALL deleteMedication(?, ?);");
	$statement->bind_param
	('is',
	$queryString['medicationId'],
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