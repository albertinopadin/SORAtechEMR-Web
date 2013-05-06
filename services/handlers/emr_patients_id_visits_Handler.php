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

//SELECT a patient's visits.
function get($queryString, $bodyObject)
{
	$mysqli = new mysqli('cardona150.com', 'phujes_emr', '0mgDatPswd!@34', 'phujes_soratech_emr');
	$statement = $mysqli->prepare("CALL selectVisits(?, ?);");
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
	($visitId,
	$patientId,
	$date,
	$diastolicBloodPressure,
	$systolicBloodPressure,
	$height,
	$pulse,
	$temperature,
	$weight,
	$notes);
	$visits = array();
	while($statement->fetch())
	{
		$temp = array();
		$temp['visitId'] = $visitId;
		$temp['patientId'] = $patientId;
		$temp['date'] = $date;
		$temp['diastolicBloodPressure'] = $diastolicBloodPressure;
		$temp['systolicBloodPressure'] = $systolicBloodPressure;
		$temp['height'] = $height;
		$temp['pulse'] = $pulse;
		$temp['temperature'] = $temperature;
		$temp['weight'] = $weight;
		$temp['notes'] = $notes;
		array_push($visits, $temp);
	}
	$statement->close();
	$mysqli->close();
	header($_SERVER['SERVER_PROTOCOL'].' 200 OK');
	header('Content-Type: application/json');
	header('Access-Control-Allow-Origin: *');
	echo json_encode($visits);
}

//INSERT a .
function put($queryString, $bodyObject)
{
	$mysqli = new mysqli('cardona150.com', 'phujes_emr', '0mgDatPswd!@34', 'phujes_soratech_emr');
	$statement = $mysqli->prepare("CALL insertVisit(?, ?, ?, ?, ?, ?, ?, ?, ?, ?);");
	$statement->bind_param
	('isssssssss',
	$queryString['patientId'],
	$bodyObject->date,
	$bodyObject->diastolicBloodPressure,
	$bodyObject->systolicBloodPressure,
	$bodyObject->height,
	$bodyObject->pulse,
	$bodyObject->temperature,
	$bodyObject->weight,
	$bodyObject->notes,
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