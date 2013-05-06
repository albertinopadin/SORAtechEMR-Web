function newFunc()
{
	var visit=new Object();
	Date.prototype.today = function()
	{ 
		return ((this.getDate() < 10)?"0":"") + this.getDate() +"/"+(((this.getMonth()+1) < 10)?"0":"") + (this.getMonth()+1) +"/"+ this.getFullYear() 
	};
	var newDate = new Date();
	visit.date=newDate.today();
    visit.diastolicBloodPressure=$('#diastolicBloodPressure').val();
	visit.systolicBloodPressure=$('#systolicBloodPressure').val();
	visit.height=$('#height').val();
	visit.pulse=$('#pulse').val();
	visit.temperature=$('#temperature').val();
	visit.weight=$('#weight').val();
	visit.notes=$('#notes').val();
	showDialog();
	$.ajax(
	{
		url: 'http://services.soratech.cardona150.com/emr/patients/'+patientId+'/visits/?key='+getCookie('key'),
		type: 'PUT',
		data: JSON.stringify(visit),
		success: function(visit)
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