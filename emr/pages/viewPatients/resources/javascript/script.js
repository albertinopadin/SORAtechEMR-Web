$(document).ready(function()
{
	showDialog();
	$.getJSON("http://www.services.soratech.cardona150.com/emr/patients/?key="+getCookie('key'),function(data)
	{
		var patients = "<table class='striped text-center'>\
		<thead>\
		<tr>\
		<th class='text-center'>View</th>\
		<th class='text-center'>Patient Id</th>\
		<th class='text-center'>Full Name</th>\
		</tr>\
		</thead>\
		<tbody id='patientTableBody'>";
		$.each(data, function(key1, row)
		{
			$.each(row, function(key2)
			{
				(row[key2]==null) && (row[key2]='');
			});
			patients += "<tr>\
			<td><a href='http://www.soratech.cardona150.com/emr/patients/"+row['patientId']+"/'><img src='http://www.soratech.cardona150.com/emr/pages/viewPatients/resources/images/view.png'></a></td>\
			<td>"+row['patientId']+"</td>\
			<td>"+row['firstName']+" "+row['middleName']+" "+row['paternalLastName']+" "+row['maternalLastName']+"</td>\
			</tr>";
		});
		patients += "</tbody>\
		</table>";
		$("#patients").html(patients);
	});
	hideDialog();
	$("#patientsFilterInput").keyup(function()
	{
		$("#patientTableBody").find("tr").hide();
		var filterTerm = this.value;
		var rows = $("#patientTableBody").find("tr");
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