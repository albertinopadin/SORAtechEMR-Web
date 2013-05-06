$(document).ready(function()
{
 showPage("aboutUs");
});

function showPage(page)
{
	$("#aboutUsTile").removeClass("selected");
	$("#productsTile").removeClass("selected");
	$("#faqTile").removeClass("selected");
	$("#supportTile").removeClass("selected");
	$("#contactTile").removeClass("selected");
	$("#"+page+"Tile").addClass("selected");
	switch(page)
	{
		case "aboutUs":
			$("#companyContent").html(aboutUs);
			break;
		case "products":
			$("#companyContent").html(products);
			break;
		case "faq":
			$("#companyContent").html(faq);
			break;
		case "support":
			$("#companyContent").html(support);
			break;
		case "contact":
			$("#companyContent").html(contact);
			break;
	}
	
}

var aboutUs = "<div class='cl'>\
<dl>\
<dt>&bull; Susana</dt>\
<dd>&bull; Computer Engineering student since 2008.</dd>\
<dd>&bull; Specialty: Hardware</dd>\
<br>\
<dt>&bull; Omar</dt>\
<dd>&bull; Computer Engineering student since 2006.</dd>\
<dd>&bull; Specialty: Web and Backend Development</dd>\
<br>\
<dt>&bull; Roberto</dt>\
<dd>&bull; Computer Engineering student since 2006.</dd>\
<dd>&bull; Specialty: Software and Hardware</dd>\
<br>\
<dt>&bull; Albertino</dt>\
<dd>&bull; Computer Engineering student since 2006.</dd>\
<dd>&bull; Specialty: Mobile Development</dd>\
</dl>\
</div>";

var products = "<div class='cl'>\
<dl>\
<dt>&bull; SORAtech EMR</dt>\
<dd>&bull; Vital sign sensing devices will allow patients' vital sign information to be automatically added to their record eliminating instrumentation misreadings and transcription errors while reducing the time required to take vital sign measurements.</dd>\
<dd>&bull; Smart cards will contain both personal identity information and important health information of patients to speed up initial treatment interviews.</dd>\
<dd>&bull; iPad app + web app will allow doctors to review and edit their patient's information such as visits, medications and conditions.</dd>\
</dl>\
</div>";

var faq = "<div class='cl'>\
<dl>\
<dt>&bull; What is an EMR?</dt>\
<dd>&bull; An electronic medical record (EMR) is a computerized medical record created in an organization that delivers care, such as a hospital or physician's office.</dd>\
<br>\
<dt>&bull; Why is SORAtech EMR better than existing EMR systems?</dt>\
<dd>&bull; SORAtech EMR can be accessed via web and via an iPad application. Also ,our system will be designed to work with our medical smart card standard, and will incorporate a suite of vital signs sensors.</dd>\
<br>\
<dt>&bull; When will the product be ready?</dt>\
<dd>&bull; Our prototype will be complete by the end of May.</dd>\
<br>\
<dt>&bull; How much is the product going to cost?</dt>\
<dd>&bull; We currently do not have pricing for a final version of the system.</dd>\
</dl>\
</div>";

var support = "<div class='cl'>\
<dl>\
<dt>&bull; SORAtech EMR Support</dt>\
<dd>&bull; We will be announcing support plans after the product release.</dd>\
</dl>\
</div>";

var contact = "<div class='cl'>\
<dl>\
<dt>&bull; Phone</dt>\
<dd>&bull; 787-555-5555</dd>\
<br>\
<dt>&bull; Email</dt>\
<dd>&bull; contact@soratech.cardona150.com</dd>\
</dl>\
</div>";