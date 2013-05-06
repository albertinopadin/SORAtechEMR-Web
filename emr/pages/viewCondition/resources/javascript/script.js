$(document).ready(function()
{
	$("#pageContent").find("input").prop("disabled", true);
	showDialog();
	$.getJSON("http://www.services.soratech.cardona150.com/emr/patients/"+patientId+"/conditions/"+conditionId+"/?key="+getCookie('key'),function(data)
	{
		$('#condition').val(data['condition']);
		hideDialog();
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
		url: 'http://services.soratech.cardona150.com/emr/patients/'+patientId+'/conditions/'+conditionId+'/?key='+getCookie('key'),
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
	var condition=new Object();
    condition.condition=$('#condition').val();
	showDialog();
	$.ajax(
	{
		url: 'http://services.soratech.cardona150.com/emr/patients/'+patientId+'/conditions/'+conditionId+'/?key='+getCookie('key'),
		type: 'POST',
		data: JSON.stringify(condition),
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