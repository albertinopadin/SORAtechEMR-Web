$(document).ready(function()
{
 getPosts("Meetings");
});

function getPosts(author)
{
	$("#meetingsTile").removeClass("selected");
	$("#susanaTile").removeClass("selected");
	$("#omarTile").removeClass("selected");
	$("#robertoTile").removeClass("selected");
	$("#albertinoTile").removeClass("selected");
	$("#"+author.toLowerCase()+"Tile").addClass("selected");
	switch(author)
	{
		case "Meetings":
			$("#blog-posts").html(meetingsPosts);
			break;
		case "Susana":
			$("#blog-posts").html(susanaPosts);
			break;
		case "Omar":
			$("#blog-posts").html(omarPosts);
			break;
		case "Roberto":
			$("#blog-posts").html(robertoPosts);
			break;
		case "Albertino":
			$("#blog-posts").html(albertinoPosts);
			break;
	}
	
}

var meetingsPosts =
"<div class=blog-post-meetings>\
Susana arrived at: 6:00pm<br>\
Omar arrived at: 6:00pm<br>\
Roberto arrived at: 7:26pm (Reason: Timing misunderstanding.)<br>\
Albertino arrived at: 7:31pm (Reason: Solving issues with at CRIM.)<br>\
<br>\
Notes: Hardware tasks were distributed.<br>\
<br>\
Susana left at: 8:00pm<br>\
Omar left at: 8:00pm<br>\
Roberto left at: 8:00pm<br>\
Albertino left at: 8:00pm<br>\
<br>\
<small>Posted by Meetings on March 18th.</small>\
</div>"+
//-------------------------
"<div class=blog-post-meetings>\
Susana arrived at: N/A (Reason: None given.)<br>\
Omar arrived at: 6:00pm<br>\
Roberto arrived at: 6:16pm (Reason: Came walking from downtown. Delayed by rain.)<br>\
Albertino arrived at: 6:06pm (Reason: Woke up at 5:45pm. Last night was an all nighter working on the iPad app.)<br>\
<br>\
Notes: Albertino and Ruben discussed the implementation plan for the database and web services and possible routes for future integration.<br>\
<br>\
Susana left at: N/A (Reason: None given.)<br>\
Omar left at: 8:00pm<br>\
Roberto left at: 6:48pm (Reason: Left to work on cryptography project and study for tomorrow's cryptography test.)<br>\
Albertino left at: 7:10pm (Reason: Personal reasons.)<br>\
<br>\
<small>Posted by Meetings on March 20th.</small>\
</div>"+
//-------------------------
"<div class=blog-post-meetings>\
Susana arrived at: N/A (Reason: None given.)<br>\
Omar arrived at: 6:00pm<br>\
Roberto arrived at: 7:42pm (Reason: Working on cryptography project.)<br>\
Albertino arrived at: 6:00pm<br>\
<br>\
Notes: Albertino and Ruben discussed current software progress.<br>\
<br>\
Susana left at: N/A (Reason: None given.)<br>\
Omar left at: 8:00pm<br>\
Roberto left at: 8:00pm<br>\
Albertino left at: 8:00pm<br>\
<br>\
<small>Posted by Meetings on March 25th.</small>\
</div>"+
//-------------------------
"<div class=blog-post-meetings>\
Susana arrived at: 6:00pm<br>\
Omar arrived at: 6:00pm<br>\
Roberto arrived at: 6:00pm<br>\
Albertino arrived at: 6:45pm (Reason: None given.)<br>\
<br>\
Notes: Each member worked on his/her part.<br>\
<br>\
Susana left at: 8:00pm<br>\
Omar left at: 8:00pm<br>\
Roberto left at: 8:00pm<br>\
Albertino left at: 8:00pm<br>\
<br>\
<small>Posted by Meetings on March 27th.</small>\
</div>"+
//-------------------------
"<div class=blog-post-meetings>\
Susana arrived at: <br>\
Omar arrived at: <br>\
Roberto arrived at: N/A<br>\
Albertino arrived at: <br>\
<br>\
Notes: <br>\
<br>\
Susana left at: <br>\
Omar left at: <br>\
Roberto left at: N/A<br>\
Albertino left at: <br>\
<br>\
<small>Posted by Meetings on April 1st.</small>\
</div>"+
//-------------------------
"<div class=blog-post-meetings>\
Susana arrived at: <br>\
Omar arrived at: <br>\
Roberto arrived at: N/A<br>\
Albertino arrived at: <br>\
<br>\
Notes: <br>\
<br>\
Susana left at: <br>\
Omar left at: <br>\
Roberto left at: N/A<br>\
Albertino left at: <br>\
<br>\
<small>Posted by Meetings on April 3rd.</small>\
</div>"+
//-------------------------
"<div class=blog-post-meetings>\
Susana arrived at: 6:00pm<br>\
Omar arrived at: 6:10pm (Reason: Personal reasons)<br>\
Roberto arrived at: 7:48pm (Reason: Sleeping)<br>\
Albertino arrived at: N/A (Reason: At Aguadilla.)<br>\
<br>\
Notes: Each member worked on his/her part of the project.<br>\
<br>\
Susana left at: 8:00pm<br>\
Omar left at: 8:00pm<br>\
Roberto left at: 8:00pm<br>\
Albertino left at: N/A (Reason: At Aguadilla.)<br>\
<br>\
<small>Posted by Meetings on April 8th.</small>\
</div>"+
//-------------------------
"<div class=blog-post-meetings>\
Susana arrived at: <br>\
Omar arrived at: <br>\
Roberto arrived at: <br>\
Albertino arrived at: <br>\
<br>\
Notes: <br>\
<br>\
Susana left at: <br>\
Omar left at: <br>\
Roberto left at: <br>\
Albertino left at: <br>\
<br>\
<small>Posted by Meetings on April 10th.</small>\
</div>"+
//-------------------------
"<div class=blog-post-meetings>\
Susana arrived at: <br>\
Omar arrived at: <br>\
Roberto arrived at: <br>\
Albertino arrived at: <br>\
<br>\
Notes: <br>\
<br>\
Susana left at: <br>\
Omar left at: <br>\
Roberto left at: <br>\
Albertino left at: <br>\
<br>\
<small>Posted by Meetings on April 15th.</small>\
</div>"+
//-------------------------
"<div class=blog-post-meetings>\
Susana arrived at: <br>\
Omar arrived at: <br>\
Roberto arrived at: <br>\
Albertino arrived at: <br>\
<br>\
Notes: <br>\
<br>\
Susana left at: <br>\
Omar left at: <br>\
Roberto left at: <br>\
Albertino left at: <br>\
<br>\
<small>Posted by Meetings on April 17th.</small>\
</div>"+
//-------------------------
"<div class=blog-post-meetings>\
Susana arrived at: <br>\
Omar arrived at: <br>\
Roberto arrived at: <br>\
Albertino arrived at: <br>\
<br>\
Notes: <br>\
<br>\
Susana left at: <br>\
Omar left at: <br>\
Roberto left at: <br>\
Albertino left at: <br>\
<br>\
<small>Posted by Meetings on April 22nd.</small>\
</div>"+
//-------------------------
"<div class=blog-post-meetings>\
Susana arrived at: <br>\
Omar arrived at: <br>\
Roberto arrived at: <br>\
Albertino arrived at: <br>\
<br>\
Notes: <br>\
<br>\
Susana left at: <br>\
Omar left at: <br>\
Roberto left at: <br>\
Albertino left at: <br>\
<br>\
<small>Posted by Meetings on April 24th.</small>\
</div>"+
//-------------------------
"<div class=blog-post-meetings>\
Susana arrived at: <br>\
Omar arrived at: <br>\
Roberto arrived at: <br>\
Albertino arrived at: <br>\
<br>\
Notes: <br>\
<br>\
Susana left at: <br>\
Omar left at: <br>\
Roberto left at: <br>\
Albertino left at: <br>\
<br>\
<small>Posted by Meetings on April 29th.</small>\
</div>"+
//-------------------------
"<div class=blog-post-meetings>\
Susana arrived at: <br>\
Omar arrived at: <br>\
Roberto arrived at: <br>\
Albertino arrived at: <br>\
<br>\
Notes: <br>\
<br>\
Susana left at: <br>\
Omar left at: <br>\
Roberto left at: <br>\
Albertino left at: <br>\
<br>\
<small>Posted by Meetings on May 1st.</small>\
</div>"+
//-------------------------
"<div class=blog-post-meetings>\
Susana arrived at: <br>\
Omar arrived at: <br>\
Roberto arrived at: <br>\
Albertino arrived at: <br>\
<br>\
Notes: <br>\
<br>\
Susana left at: <br>\
Omar left at: <br>\
Roberto left at: <br>\
Albertino left at: <br>\
<br>\
<small>Posted by Meetings on May 6th.</small>\
</div>"+
//-------------------------
"<div class=blog-post-meetings>\
Susana arrived at: <br>\
Omar arrived at: <br>\
Roberto arrived at: <br>\
Albertino arrived at: <br>\
<br>\
Notes: <br>\
<br>\
Susana left at: <br>\
Omar left at: <br>\
Roberto left at: <br>\
Albertino left at: <br>\
<br>\
<small>Posted by Meetings on May 8th.</small>\
</div>"+
//-------------------------
"<div class=blog-post-meetings>\
Susana arrived at: <br>\
Omar arrived at: <br>\
Roberto arrived at: <br>\
Albertino arrived at: <br>\
<br>\
Notes: <br>\
<br>\
Susana left at: <br>\
Omar left at: <br>\
Roberto left at: <br>\
Albertino left at: <br>\
<br>\
<small>Posted by Meetings on May 13th.</small>\
</div>"+
//-------------------------
"<div class=blog-post-meetings>\
Susana arrived at: <br>\
Omar arrived at: <br>\
Roberto arrived at: <br>\
Albertino arrived at: <br>\
<br>\
Notes: <br>\
<br>\
Susana left at: <br>\
Omar left at: <br>\
Roberto left at: <br>\
Albertino left at: <br>\
<br>\
<small>Posted by Meetings on May 15th.</small>\
</div>";

var susanaPosts =
"<div class=blog-post-susana>\
<strong>Next commitment(s):</strong><br>\
&bull; Acquire/Order remaining electrical components (regulators, charge pump, capacitors, diodes, etc.)<br>\
&bull; Talk to a physics professor for guidance on weight scale setup<br>\
&bull; Buy components for building weight scale setup<br>\
&bull; Start analyzing pulse sensor code.<br>\
<br>\
<small>Posted by Susana on March 18th.</small>\
</div>"+
//-------------------------
"<div class=blog-post-susana>\
<strong>Previous commitment(s) completed?:</strong><br>\
&bull; (Complete) Acquire/Order remaining electrical components (regulators, charge pump, capacitors, diodes, etc.)<br>\
&bull; (Complete) Talk to a physics professor for guidance on weight scale setup<br>\
&bull; (Complete) Buy components for building weight scale setup<br>\
&bull; (Complete) Start analyzing pulse sensor code.<br>\
<strong>Next commitment(s):</strong><br>\
&bull; Buy parts to build weight sensor setup (wooden panel, pegs, glue).<br>\
&bull; Build preliminary setup.<br>\
<br>\
<small>Posted by Susana on March 20th.</small>\
</div>"+
//-------------------------
"<div class=blog-post-susana>\
<strong>Previous commitment(s) completed?:</strong><br>\
&bull; (Incomplete) Buy parts to build weight sensor setup (wooden panel, pegs, glue). (Reason: Busy studying.)<br>\
&bull; (Incomplete) Build preliminary setup. (Reason: Busy studying.)<br>\
<strong>Next commitment(s):</strong><br>\
&bull; Buy parts to build weight sensor setup (wooden panel, pegs, glue).<br>\
&bull; Build preliminary setup.<br>\
<br>\
<small>Posted by Susana on March 22nd.</small>\
</div>"+
//-------------------------
"<div class=blog-post-susana>\
<strong>Previous commitment(s) completed?:</strong><br>\
&bull; (Complete) Buy parts to build weight sensor setup (wooden panel, pegs, glue).<br>\
&bull; (Complete) Build preliminary setup.<br>\
<strong>Next commitment(s):</strong><br>\
&bull; Assemble breadboard power supply.<br>\
&bull; Calibrate weight sensor.<br>\
<br>\
<small>Posted by Susana on March 25th.</small>\
</div>"+
//-------------------------
"<div class=blog-post-susana>\
<strong>Previous commitment(s) completed?:</strong><br>\
&bull; (Complete) Assemble breadboard power supply.<br>\
&bull; (Incomplete) Calibrate weight sensor. (Reason: Unable to complete work.)<br>\
<strong>Next commitment(s):</strong><br>\
&bull; Calibrate weight sensor.<br>\
<br>\
<small>Posted by Susana on March 27th.</small>\
</div>"+
//-------------------------
"<div class=blog-post-susana>\
<strong>Previous commitment(s) completed?:</strong><br>\
&bull; (Incomplete) Calibrate weight sensor. (Reason: Force-to-Resistance curve traced for a 0-100lb range. However, the pegs are held to the wooden panel by masking tape, and are exactly the size of the sensor area, meaning there is the possibility that some weight is not being registered by the sensors. More testing is needed [100+ lb]).<br>\
<strong>Next commitment(s):</strong><br>\
&bull; Calibrate weight sensor.<br>\
&bull; Get ADC working on the MSP430.<br>\
&bull; Fix weight sensor setup (Buy double sided tape, smaller (5/16) pegs. Build new setup. Trace new curve.<br>\
&bull; Begin building force-to-voltage circuit for the weight sensors.<br>\
<br>\
<small>Posted by Susana on March 29th.</small>\
</div>"+
//-------------------------
"<div class=blog-post-susana>\
<strong>Previous commitment(s) completed?:</strong><br>\
&bull; (Incomplete) Calibrate weight sensor. (Reason: Unable to complete work.)<br>\
&bull; (Complete) Get ADC working on the MSP430.<br>\
&bull; (Complete) Fix weight sensor setup (Buy double sided tape, smaller (5/16) pegs. Build new setup. Trace new curve.<br>\
&bull; (Incomplete) Begin building force-to-voltage circuit for the weight sensors. (Reason: Circuit needs adjustments to work with a single supply.)<br>\
<strong>Next commitment(s):</strong><br>\
&bull; Calibrate weight sensor.<br>\
&bull; Build frame for the weight and height sensor station.<br>\
&bull; Adjust the force-to-voltage circuit.<br>\
&bull; Test weight sensor through a larger range.<br>\
<br>\
<small>Posted by Susana on April 1st.</small>\
</div>"+
//-------------------------
"<div class=blog-post-susana>\
<strong>Previous commitment(s) completed?:</strong><br>\
&bull; (Incomplete) Calibrate weight sensor. (Reason: Unable to complete work.)<br>\
&bull; (Complete) Build frame for the weight and height sensor station.<br>\
&bull; (Incomplete) Adjust the force-to-voltage circuit. (Reason: Circuit now works with one supply but the output stops being linear after a threshold.)<br>\
&bull; (Complete) Test weight sensor through a larger range.<br>\
<strong>Next commitment(s):</strong><br>\
&bull; Calibrate weight sensor.<br>\
&bull; Begin building force-to-voltage circuit for the weight sensors.<br>\
&bull; Adjust the force-to-voltage circuit.<br>\
<br>\
<small>Posted by Susana on April 3rd.</small>\
</div>"+
//-------------------------
"<div class=blog-post-susana>\
<strong>Previous commitment(s) completed?:</strong><br>\
&bull; N/A<br>\
<strong>Next commitment(s):</strong><br>\
&bull; N/A<br>\
<br>\
<small>Posted by Susana on April 5th.</small>\
</div>"+
//-------------------------
"<div class=blog-post-susana>\
<strong>Previous commitment(s) completed?:</strong><br>\
&bull; N/A<br>\
<strong>Next commitment(s):</strong><br>\
&bull; N/A<br>\
<br>\
<small>Posted by Susana on April 8th.</small>\
</div>"+
//-------------------------
"<div class=blog-post-susana>\
<strong>Previous commitment(s) completed?:</strong><br>\
&bull; N/A<br>\
<strong>Next commitment(s):</strong><br>\
&bull; N/A<br>\
<br>\
<small>Posted by Susana on April 10th.</small>\
</div>"+
//-------------------------
"<div class=blog-post-susana>\
<strong>Previous commitment(s) completed?:</strong><br>\
&bull; <br>\
<strong>Next commitment(s):</strong><br>\
&bull; <br>\
<br>\
<small>Posted by Susana on April 12th.</small>\
</div>"+
//-------------------------
"<div class=blog-post-susana>\
<strong>Previous commitment(s) completed?:</strong><br>\
&bull; <br>\
<strong>Next commitment(s):</strong><br>\
&bull; <br>\
<br>\
<small>Posted by Susana on April 15th.</small>\
</div>"+
//-------------------------
"<div class=blog-post-susana>\
<strong>Previous commitment(s) completed?:</strong><br>\
&bull; <br>\
<strong>Next commitment(s):</strong><br>\
&bull; <br>\
<br>\
<small>Posted by Susana on April 17th.</small>\
</div>"+
//-------------------------
"<div class=blog-post-susana>\
<strong>Previous commitment(s) completed?:</strong><br>\
&bull; <br>\
<strong>Next commitment(s):</strong><br>\
&bull; <br>\
<br>\
<small>Posted by Susana on April 19th.</small>\
</div>"+
//-------------------------
"<div class=blog-post-susana>\
<strong>Previous commitment(s) completed?:</strong><br>\
&bull; <br>\
<strong>Next commitment(s):</strong><br>\
&bull; <br>\
<br>\
<small>Posted by Susana on April 22nd.</small>\
</div>"+
//-------------------------
"<div class=blog-post-susana>\
<strong>Previous commitment(s) completed?:</strong><br>\
&bull; <br>\
<strong>Next commitment(s):</strong><br>\
&bull; <br>\
<br>\
<small>Posted by Susana on April 24th.</small>\
</div>"+
//-------------------------
"<div class=blog-post-susana>\
<strong>Previous commitment(s) completed?:</strong><br>\
&bull; <br>\
<strong>Next commitment(s):</strong><br>\
&bull; <br>\
<br>\
<small>Posted by Susana on April 26th.</small>\
</div>"+
//-------------------------
"<div class=blog-post-susana>\
<strong>Previous commitment(s) completed?:</strong><br>\
&bull; <br>\
<strong>Next commitment(s):</strong><br>\
&bull; <br>\
<br>\
<small>Posted by Susana on April 29th.</small>\
</div>"+
//-------------------------
"<div class=blog-post-susana>\
<strong>Previous commitment(s) completed?:</strong><br>\
&bull; <br>\
<strong>Next commitment(s):</strong><br>\
&bull; <br>\
<br>\
<small>Posted by Susana on May 1st.</small>\
</div>"+
//-------------------------
"<div class=blog-post-susana>\
<strong>Previous commitment(s) completed?:</strong><br>\
&bull; <br>\
<strong>Next commitment(s):</strong><br>\
&bull; <br>\
<br>\
<small>Posted by Susana on May 3rd.</small>\
</div>"+
//-------------------------
"<div class=blog-post-susana>\
<strong>Previous commitment(s) completed?:</strong><br>\
&bull; <br>\
<strong>Next commitment(s):</strong><br>\
&bull; <br>\
<br>\
<small>Posted by Susana on May 6th.</small>\
</div>"+
//-------------------------
"<div class=blog-post-susana>\
<strong>Previous commitment(s) completed?:</strong><br>\
&bull; <br>\
<strong>Next commitment(s):</strong><br>\
&bull; <br>\
<br>\
<small>Posted by Susana on May 8th.</small>\
</div>"+
//-------------------------
"<div class=blog-post-susana>\
<strong>Previous commitment(s) completed?:</strong><br>\
&bull; <br>\
<strong>Next commitment(s):</strong><br>\
&bull; <br>\
<br>\
<small>Posted by Susana on May 10th.</small>\
</div>"+
//-------------------------
"<div class=blog-post-susana>\
<strong>Previous commitment(s) completed?:</strong><br>\
&bull; <br>\
<strong>Next commitment(s):</strong><br>\
&bull; <br>\
<br>\
<small>Posted by Susana on May 13th.</small>\
</div>"+
//-------------------------
"<div class=blog-post-susana>\
<strong>Previous commitment(s) completed?:</strong><br>\
&bull; <br>\
<strong>Next commitment(s):</strong><br>\
&bull; <br>\
<br>\
<small>Posted by Susana on May 15th.</small>\
</div>"+
//-------------------------
"<div class=blog-post-susana>\
<strong>Previous commitment(s) completed?:</strong><br>\
&bull; <br>\
<strong>Next commitment(s):</strong><br>\
&bull; <br>\
<br>\
<small>Posted by Susana on May 17th.</small>\
</div>";

var omarPosts =
"<div class=blog-post-omar>\
<strong>Next commitment(s):</strong><br>\
&bull; Implement database tables.<br>\
<br>\
<small>Posted by Omar on March 18th.</small>\
</div>"+
//-------------------------
"<div class=blog-post-omar>\
<strong>Previous commitment(s) completed?:</strong><br>\
&bull; (Complete) Implement database tables.<br>\
<strong>Next commitment(s):</strong><br>\
&bull; Implement INSERT stored procedures and PUT web services.<br>\
<br>\
<small>Posted by Omar on March 20th.</small>\
</div>"+
//-------------------------
"<div class=blog-post-omar>\
<strong>Previous commitment(s) completed?:</strong><br>\
&bull; (Complete) Implement INSERT stored procedures and PUT web services.<br>\
<strong>Next commitment(s):</strong><br>\
&bull; Implement UPDATE stored procedures and POST web services.<br>\
<br>\
<small>Posted by Omar on March 22nd.</small>\
</div>"+
//-------------------------
"<div class=blog-post-omar>\
<strong>Previous commitment(s) completed?:</strong><br>\
&bull; (Complete) Implement UPDATE stored procedures and POST web services.<br>\
<strong>Next commitment(s):</strong><br>\
&bull; Implement DELETE stored procedures and DELETE web services.<br>\
<br>\
<small>Posted by Omar on March 25th.</small>\
</div>"+
//-------------------------
"<div class=blog-post-omar>\
<strong>Previous commitment(s) completed?:</strong><br>\
&bull; (Complete) Implement DELETE stored procedures and DELETE web services.<br>\
<strong>Next commitment(s):</strong><br>\
&bull; Implement SELECT stored procedures and GET web services.<br>\
<br>\
<small>Posted by Omar on March 27th.</small>\
</div>"+
//-------------------------
"<div class=blog-post-omar>\
<strong>Previous commitment(s) completed?:</strong><br>\
&bull; (Complete) Implement SELECT stored procedures and GET web services.<br>\
<strong>Next commitment(s):</strong><br>\
&bull; Implement web app HTML.<br>\
<br>\
<small>Posted by Omar on March 29th.</small>\
</div>"+
//-------------------------
"<div class=blog-post-omar>\
<strong>Previous commitment(s) completed?:</strong><br>\
&bull; (Complete) Implement web app HTML.<br>\
<strong>Next commitment(s):</strong><br>\
&bull; Implement web app CSS.<br>\
<br>\
<small>Posted by Omar on April 1st.</small>\
</div>"+
//-------------------------
"<div class=blog-post-omar>\
<strong>Previous commitment(s) completed?:</strong><br>\
&bull; (Complete) Implement web app CSS.<br>\
<strong>Next commitment(s):</strong><br>\
&bull; Implement web app Javascript.<br>\
<br>\
<small>Posted by Omar on April 3rd.</small>\
</div>"+
//-------------------------
"<div class=blog-post-omar>\
<strong>Previous commitment(s) completed?:</strong><br>\
&bull; (Complete) Implement web app Javascript.<br>\
<strong>Next commitment(s):</strong><br>\
&bull; Test database.<br>\
<br>\
<small>Posted by Omar on April 5th.</small>\
</div>"+
//-------------------------
"<div class=blog-post-omar>\
<strong>Previous commitment(s) completed?:</strong><br>\
&bull; (Complete) Test database.<br>\
<strong>Next commitment(s):</strong><br>\
&bull; Test web services.<br>\
<br>\
<small>Posted by Omar on April 8th.</small>\
</div>"+
//-------------------------
"<div class=blog-post-omar>\
<strong>Previous commitment(s) completed?:</strong><br>\
&bull; (Complete) Test web services.<br>\
<strong>Next commitment(s):</strong><br>\
&bull; Test web app.<br>\
<br>\
<small>Posted by Omar on April 10th.</small>\
</div>"+
//-------------------------
"<div class=blog-post-omar>\
<strong>Previous commitment(s) completed?:</strong><br>\
&bull; <br>\
<strong>Next commitment(s):</strong><br>\
&bull; <br>\
<br>\
<small>Posted by Omar on April 12th.</small>\
</div>"+
//-------------------------
"<div class=blog-post-omar>\
<strong>Previous commitment(s) completed?:</strong><br>\
&bull; <br>\
<strong>Next commitment(s):</strong><br>\
&bull; <br>\
<br>\
<small>Posted by Omar on April 15th.</small>\
</div>"+
//-------------------------
"<div class=blog-post-omar>\
<strong>Previous commitment(s) completed?:</strong><br>\
&bull; <br>\
<strong>Next commitment(s):</strong><br>\
&bull; <br>\
<br>\
<small>Posted by Omar on April 17th.</small>\
</div>"+
//-------------------------
"<div class=blog-post-omar>\
<strong>Previous commitment(s) completed?:</strong><br>\
&bull; <br>\
<strong>Next commitment(s):</strong><br>\
&bull; <br>\
<br>\
<small>Posted by Omar on April 19th.</small>\
</div>"+
//-------------------------
"<div class=blog-post-omar>\
<strong>Previous commitment(s) completed?:</strong><br>\
&bull; <br>\
<strong>Next commitment(s):</strong><br>\
&bull; <br>\
<br>\
<small>Posted by Omar on April 22nd.</small>\
</div>"+
//-------------------------
"<div class=blog-post-omar>\
<strong>Previous commitment(s) completed?:</strong><br>\
&bull; <br>\
<strong>Next commitment(s):</strong><br>\
&bull; <br>\
<br>\
<small>Posted by Omar on April 24th.</small>\
</div>"+
//-------------------------
"<div class=blog-post-omar>\
<strong>Previous commitment(s) completed?:</strong><br>\
&bull; <br>\
<strong>Next commitment(s):</strong><br>\
&bull; <br>\
<br>\
<small>Posted by Omar on April 26th.</small>\
</div>"+
//-------------------------
"<div class=blog-post-omar>\
<strong>Previous commitment(s) completed?:</strong><br>\
&bull; <br>\
<strong>Next commitment(s):</strong><br>\
&bull; <br>\
<br>\
<small>Posted by Omar on April 29th.</small>\
</div>"+
//-------------------------
"<div class=blog-post-omar>\
<strong>Previous commitment(s) completed?:</strong><br>\
&bull; <br>\
<strong>Next commitment(s):</strong><br>\
&bull; <br>\
<br>\
<small>Posted by Omar on May 1st.</small>\
</div>"+
//-------------------------
"<div class=blog-post-omar>\
<strong>Previous commitment(s) completed?:</strong><br>\
&bull; <br>\
<strong>Next commitment(s):</strong><br>\
&bull; <br>\
<br>\
<small>Posted by Omar on May 3rd.</small>\
</div>"+
//-------------------------
"<div class=blog-post-omar>\
<strong>Previous commitment(s) completed?:</strong><br>\
&bull; <br>\
<strong>Next commitment(s):</strong><br>\
&bull; <br>\
<br>\
<small>Posted by Omar on May 6th.</small>\
</div>"+
//-------------------------
"<div class=blog-post-omar>\
<strong>Previous commitment(s) completed?:</strong><br>\
&bull; <br>\
<strong>Next commitment(s):</strong><br>\
&bull; <br>\
<br>\
<small>Posted by Omar on May 8th.</small>\
</div>"+
//-------------------------
"<div class=blog-post-omar>\
<strong>Previous commitment(s) completed?:</strong><br>\
&bull; <br>\
<strong>Next commitment(s):</strong><br>\
&bull; <br>\
<br>\
<small>Posted by Omar on May 10th.</small>\
</div>"+
//-------------------------
"<div class=blog-post-omar>\
<strong>Previous commitment(s) completed?:</strong><br>\
&bull; <br>\
<strong>Next commitment(s):</strong><br>\
&bull; <br>\
<br>\
<small>Posted by Omar on May 13th.</small>\
</div>"+
//-------------------------
"<div class=blog-post-omar>\
<strong>Previous commitment(s) completed?:</strong><br>\
&bull; <br>\
<strong>Next commitment(s):</strong><br>\
&bull; <br>\
<br>\
<small>Posted by Omar on May 15th.</small>\
</div>"+
//-------------------------
"<div class=blog-post-omar>\
<strong>Previous commitment(s) completed?:</strong><br>\
&bull; <br>\
<strong>Next commitment(s):</strong><br>\
&bull; <br>\
<br>\
<small>Posted by Omar on May 17th.</small>\
</div>";

var robertoPosts =
"<div class=blog-post-roberto>\
<strong>Next commitment(s):</strong><br>\
&bull; Meeting with the Physics professor Dr. Jimenez on setting up the weight sensor in an efficient and proficient way.<br>\
&bull; Finish the system schematic.<br>\
&bull; Analyze the blood pressure sensor to decide how it will be connected.<br>\
<br>\
<small>Posted by Roberto on March 18th.</small>\
</div>"+
//-------------------------
"<div class=blog-post-roberto>\
<strong>Previous commitment(s) completed?:</strong><br>\
&bull; (Complete) Meeting with the Physics professor Dr. Jimenez on setting up the weight sensor in an efficient and proficient way.<br>\
&bull; (Incomplete) Finish the system schematic. (Reason: I have a Cryptography project to turn in tonight and a Cryptography test tomorrow so I have not been able to even begin this task.)<br>\
&bull; (Incomplete) Analyze the blood pressure sensor to decide how it will be connected. (Reason: Susana and I acquired the blood pressure sensor last monday and I got it in my apartment today.)<br>\
<strong>Next commitment(s):</strong><br>\
&bull; Finish the system schematic.<br>\
&bull; Analyze the blood pressure sensor to decide how it will be connected.<br>\
&bull; Start working and programming the temperature sensor.<br>\
<br>\
<small>Posted by Roberto on March 20th.</small>\
</div>"+
//-------------------------
"<div class=blog-post-roberto>\
<strong>Previous commitment(s) completed?:</strong><br>\
&bull; N/A<br>\
<strong>Next commitment(s):</strong><br>\
&bull; N/A<br>\
<br>\
<small>Posted by Roberto on March 22nd.</small>\
</div>"+
//-------------------------
"<div class=blog-post-roberto>\
<strong>Previous commitment(s) completed?:</strong><br>\
&bull; N/A<br>\
<strong>Next commitment(s):</strong><br>\
&bull; N/A<br>\
<br>\
<small>Posted by Roberto on March 25th.</small>\
</div>"+
//-------------------------
"<div class=blog-post-roberto>\
<strong>Previous commitment(s) completed?:</strong><br>\
&bull; (Incomplete) Finish the system schematic. (Reason: I've decided to postpone this commitment until all of the sensors are working in their respective modules.)<br>\
&bull; (Incomplete) Analyze the blood pressure sensor to decide how it will be connected. (Reason: The system to confirm the readings has been acquired. The necessary pieces will be acquired this week and in the weekend, so that the Blood Pressure Sensor can be implemented next week.)<br>\
&bull; (Incomplete) Start working and programming the temperature sensor. (Reason: I am already writing the code for this sensor to work. I believe I should have it up and running for the weekend.)<br>\
<strong>Next commitment(s):</strong><br>\
&bull; Analyze the blood pressure sensor to decide how it will be connected.<br>\
&bull; Start working and programming the temperature sensor.<br>\
<br>\
<small>Posted by Roberto on March 27th.</small>\
</div>"+
//-------------------------
"<div class=blog-post-roberto>\
<strong>Previous commitment(s) completed?:</strong><br>\
&bull; N/A<br>\
<strong>Next commitment(s):</strong><br>\
&bull; N/A<br>\
<br>\
<small>Posted by Roberto on March 29th.</small>\
</div>"+
//-------------------------
"<div class=blog-post-roberto>\
<strong>Previous commitment(s) completed?:</strong><br>\
&bull; N/A<br>\
<strong>Next commitment(s):</strong><br>\
&bull; N/A<br>\
<br>\
<small>Posted by Roberto on April 1st.</small>\
</div>"+
//-------------------------
"<div class=blog-post-roberto>\
<strong>Previous commitment(s) completed?:</strong><br>\
&bull; N/A<br>\
<strong>Next commitment(s):</strong><br>\
&bull; N/A<br>\
<br>\
<small>Posted by Roberto on April 3rd.</small>\
</div>"+
//-------------------------
"<div class=blog-post-roberto>\
<strong>Previous commitment(s) completed?:</strong><br>\
&bull; N/A<br>\
<strong>Next commitment(s):</strong><br>\
&bull; N/A<br>\
<br>\
<small>Posted by Roberto on April 5th.</small>\
</div>"+
//-------------------------
"<div class=blog-post-roberto>\
<strong>Previous commitment(s) completed?:</strong><br>\
&bull; N/A<br>\
<strong>Next commitment(s):</strong><br>\
&bull; N/A<br>\
<br>\
<small>Posted by Roberto on April 8th.</small>\
</div>"+
//-------------------------
"<div class=blog-post-roberto>\
<strong>Previous commitment(s) completed?:</strong><br>\
&bull; N/A<br>\
<strong>Next commitment(s):</strong><br>\
&bull; N/A<br>\
<br>\
<small>Posted by Roberto on April 10th.</small>\
</div>\
<div class=blog-post-roberto>\
<strong>Previous commitment(s) completed?:</strong><br>\
&bull; <br>\
<strong>Next commitment(s):</strong><br>\
&bull; <br>\
<br>\
<small>Posted by Roberto on April 12th.</small>\
</div>"+
//-------------------------
"<div class=blog-post-roberto>\
<strong>Previous commitment(s) completed?:</strong><br>\
&bull; <br>\
<strong>Next commitment(s):</strong><br>\
&bull; <br>\
<br>\
<small>Posted by Roberto on April 15th.</small>\
</div>"+
//-------------------------
"<div class=blog-post-roberto>\
<strong>Previous commitment(s) completed?:</strong><br>\
&bull; <br>\
<strong>Next commitment(s):</strong><br>\
&bull; <br>\
<br>\
<small>Posted by Roberto on April 17th.</small>\
</div>"+
//-------------------------
"<div class=blog-post-roberto>\
<strong>Previous commitment(s) completed?:</strong><br>\
&bull; <br>\
<strong>Next commitment(s):</strong><br>\
&bull; <br>\
<br>\
<small>Posted by Roberto on April 19th.</small>\
</div>"+
//-------------------------
"<div class=blog-post-roberto>\
<strong>Previous commitment(s) completed?:</strong><br>\
&bull; <br>\
<strong>Next commitment(s):</strong><br>\
&bull; <br>\
<br>\
<small>Posted by Roberto on April 22nd.</small>\
</div>"+
//-------------------------
"<div class=blog-post-roberto>\
<strong>Previous commitment(s) completed?:</strong><br>\
&bull; <br>\
<strong>Next commitment(s):</strong><br>\
&bull; <br>\
<br>\
<small>Posted by Roberto on April 24th.</small>\
</div>"+
//-------------------------
"<div class=blog-post-roberto>\
<strong>Previous commitment(s) completed?:</strong><br>\
&bull; <br>\
<strong>Next commitment(s):</strong><br>\
&bull; <br>\
<br>\
<small>Posted by Roberto on April 26th.</small>\
</div>"+
//-------------------------
"<div class=blog-post-roberto>\
<strong>Previous commitment(s) completed?:</strong><br>\
&bull; <br>\
<strong>Next commitment(s):</strong><br>\
&bull; <br>\
<br>\
<small>Posted by Roberto on April 29th.</small>\
</div>"+
//-------------------------
"<div class=blog-post-roberto>\
<strong>Previous commitment(s) completed?:</strong><br>\
&bull; <br>\
<strong>Next commitment(s):</strong><br>\
&bull; <br>\
<br>\
<small>Posted by Roberto on May 1st.</small>\
</div>"+
//-------------------------
"<div class=blog-post-roberto>\
<strong>Previous commitment(s) completed?:</strong><br>\
&bull; <br>\
<strong>Next commitment(s):</strong><br>\
&bull; <br>\
<br>\
<small>Posted by Roberto on May 3rd.</small>\
</div>"+
//-------------------------
"<div class=blog-post-roberto>\
<strong>Previous commitment(s) completed?:</strong><br>\
&bull; <br>\
<strong>Next commitment(s):</strong><br>\
&bull; <br>\
<br>\
<small>Posted by Roberto on May 6th.</small>\
</div>"+
//-------------------------
"<div class=blog-post-roberto>\
<strong>Previous commitment(s) completed?:</strong><br>\
&bull; <br>\
<strong>Next commitment(s):</strong><br>\
&bull; <br>\
<br>\
<small>Posted by Roberto on May 8th.</small>\
</div>"+
//-------------------------
"<div class=blog-post-roberto>\
<strong>Previous commitment(s) completed?:</strong><br>\
&bull; <br>\
<strong>Next commitment(s):</strong><br>\
&bull; <br>\
<br>\
<small>Posted by Roberto on May 10th.</small>\
</div>"+
//-------------------------
"<div class=blog-post-roberto>\
<strong>Previous commitment(s) completed?:</strong><br>\
&bull; <br>\
<strong>Next commitment(s):</strong><br>\
&bull; <br>\
<br>\
<small>Posted by Roberto on May 13th.</small>\
</div>"+
//-------------------------
"<div class=blog-post-roberto>\
<strong>Previous commitment(s) completed?:</strong><br>\
&bull; <br>\
<strong>Next commitment(s):</strong><br>\
&bull; <br>\
<br>\
<small>Posted by Roberto on May 15th.</small>\
</div>"+
//-------------------------
"<div class=blog-post-roberto>\
<strong>Previous commitment(s) completed?:</strong><br>\
&bull; <br>\
<strong>Next commitment(s):</strong><br>\
&bull; <br>\
<br>\
<small>Posted by Roberto on May 17th.</small>\
</div>";

var albertinoPosts =
"<div class=blog-post-albertino>\
<strong>Next commitment(s):</strong><br>\
&bull; iPad app's search functionality.<br>\
&bull; Patient visits page.<br>\
&bull; More info page.<br>\
<br>\
<small>Posted by Albertino on March 18th.</small>\
</div>"+
//-------------------------
"<div class=blog-post-albertino>\
<strong>Previous commitment(s) completed?:</strong><br>\
&bull; (Complete) iPad app's search functionality.<br>\
&bull; (Complete) Patient visits page.<br>\
&bull; (Complete) More info page.<br>\
<strong>Next commitment(s):</strong><br>\
&bull; Implement the visit table using core data.<br>\
&bull; Implement new visits using core data.<br>\
<br>\
<small>Posted by Albertino on March 20th.</small>\
</div>"+
//-------------------------
"<div class=blog-post-albertino>\
<strong>Previous commitment(s) completed?:</strong><br>\
&bull; (Complete) Implement the visit table using core data.<br>\
&bull; (Complete) Implement new visits using core data.<br>\
<strong>Next commitment(s):</strong><br>\
&bull; Finish the new visits page.<br>\
&bull; Implement the prescriber page with core data.<br>\
&bull; Begin working with the bluetooth board.<br>\
<br>\
<small>Posted by Albertino on March 22nd.</small>\
</div>"+
//-------------------------
"<div class=blog-post-albertino>\
<strong>Previous commitment(s) completed?:</strong><br>\
&bull; (Complete) Finish the new visits page.<br>\
&bull; (Complete) Implement the prescriber page with core data.<br>\
&bull; (Complete) Begin working with the bluetooth board.<br>\
<strong>Next commitment(s):</strong><br>\
&bull; Communication between the bluetooth board and the Emmoco app (this is a proof of concept helper app).<br>\
<br>\
<small>Posted by Albertino on March 25th.</small>\
</div>"+
//-------------------------
"<div class=blog-post-albertino>\
<strong>Previous commitment(s) completed?:</strong><br>\
&bull; (Incomplete) Communication between the bluetooth board and the Emmoco app (this is a proof of concept helper app). (Reason: Emmoco app needs a driver specific to the MCU, Launchpad in my possesion did not have hardware UART, other MSP did not have FET, so nothing could be done. Sample msp430g2553's were ordered for free from ti.com.)<br>\
<strong>Next commitment(s):</strong><br>\
&bull; Communication between the bluetooth board and the Emmoco app (this is a proof of concept helper app).<br>\
&bull; Add other patient information to the new patient page (insurance plans, emergency contact, etc.)<br>\
<br>\
<small>Posted by Albertino on March 27th.</small>\
</div>"+
//-------------------------
"<div class=blog-post-albertino>\
<strong>Previous commitment(s) completed?:</strong><br>\
&bull; (Complete) Communication between the bluetooth board and the Emmoco app (this is a proof of concept helper app).<br>\
&bull; (Complete) Add other patient information to the new patient page (insurance plans, emergency contact, etc.)<br>\
<strong>Next commitment(s):</strong><br>\
&bull; Work on the Bluetooth until it works.<br>\
<br>\
<small>Posted by Albertino on March 29th.</small>\
</div>"+
//-------------------------
"<div class=blog-post-albertino>\
<strong>Previous commitment(s) completed?:</strong><br>\
&bull; (Incomplete) Work on the Bluetooth until it works. (Reason: Unable to complete work.)<br>\
<strong>Next commitment(s):</strong><br>\
&bull; Work on the Bluetooth until it works.<br>\
&bull; Get blinker going on the bluetooth with the MSP430F5438A. I have to make the mcu driver for this to work.<br>\
<br>\
<small>Posted by Albertino on April 1st.</small>\
</div>"+
//-------------------------
"<div class=blog-post-albertino>\
<strong>Previous commitment(s) completed?:</strong><br>\
&bull; N/A<br>\
<strong>Next commitment(s):</strong><br>\
&bull; N/A<br>\
<br>\
<small>Posted by Albertino on April 3rd.</small>\
</div>"+
//-------------------------
"<div class=blog-post-albertino>\
<strong>Previous commitment(s) completed?:</strong><br>\
&bull; N/A<br>\
<strong>Next commitment(s):</strong><br>\
&bull; N/A<br>\
<br>\
<small>Posted by Albertino on April 5th.</small>\
</div>"+
//-------------------------
"<div class=blog-post-albertino>\
<strong>Previous commitment(s) completed?:</strong><br>\
&bull; N/A<br>\
<strong>Next commitment(s):</strong><br>\
&bull; N/A<br>\
<br>\
<small>Posted by Albertino on April 8th.</small>\
</div>"+
//-------------------------
"<div class=blog-post-albertino>\
<strong>Previous commitment(s) completed?:</strong><br>\
&bull; N/A<br>\
<strong>Next commitment(s):</strong><br>\
&bull; N/A<br>\
<br>\
<small>Posted by Albertino on April 10th.</small>\
</div>"+
//-------------------------
"<div class=blog-post-albertino>\
<strong>Previous commitment(s) completed?:</strong><br>\
&bull; <br>\
<strong>Next commitment(s):</strong><br>\
&bull; <br>\
<br>\
<small>Posted by Albertino on April 12th.</small>\
</div>"+
//-------------------------
"<div class=blog-post-albertino>\
<strong>Previous commitment(s) completed?:</strong><br>\
&bull; <br>\
<strong>Next commitment(s):</strong><br>\
&bull; <br>\
<br>\
<small>Posted by Albertino on April 15th.</small>\
</div>"+
//-------------------------
"<div class=blog-post-albertino>\
<strong>Previous commitment(s) completed?:</strong><br>\
&bull; <br>\
<strong>Next commitment(s):</strong><br>\
&bull; <br>\
<br>\
<small>Posted by Albertino on April 17th.</small>\
</div>"+
//-------------------------
"<div class=blog-post-albertino>\
<strong>Previous commitment(s) completed?:</strong><br>\
&bull; <br>\
<strong>Next commitment(s):</strong><br>\
&bull; <br>\
<br>\
<small>Posted by Albertino on April 19th.</small>\
</div>"+
//-------------------------
"<div class=blog-post-albertino>\
<strong>Previous commitment(s) completed?:</strong><br>\
&bull; <br>\
<strong>Next commitment(s):</strong><br>\
&bull; <br>\
<br>\
<small>Posted by Albertino on April 22nd.</small>\
</div>"+
//-------------------------
"<div class=blog-post-albertino>\
<strong>Previous commitment(s) completed?:</strong><br>\
&bull; <br>\
<strong>Next commitment(s):</strong><br>\
&bull; <br>\
<br>\
<small>Posted by Albertino on April 24th.</small>\
</div>"+
//-------------------------
"<div class=blog-post-albertino>\
<strong>Previous commitment(s) completed?:</strong><br>\
&bull; <br>\
<strong>Next commitment(s):</strong><br>\
&bull; <br>\
<br>\
<small>Posted by Albertino on April 26th.</small>\
</div>"+
//-------------------------
"<div class=blog-post-albertino>\
<strong>Previous commitment(s) completed?:</strong><br>\
&bull; <br>\
<strong>Next commitment(s):</strong><br>\
&bull; <br>\
<br>\
<small>Posted by Albertino on April 29th.</small>\
</div>"+
//-------------------------
"<div class=blog-post-albertino>\
<strong>Previous commitment(s) completed?:</strong><br>\
&bull; <br>\
<strong>Next commitment(s):</strong><br>\
&bull; <br>\
<br>\
<small>Posted by Albertino on May 1st.</small>\
</div>"+
//-------------------------
"<div class=blog-post-albertino>\
<strong>Previous commitment(s) completed?:</strong><br>\
&bull; <br>\
<strong>Next commitment(s):</strong><br>\
&bull; <br>\
<br>\
<small>Posted by Albertino on May 3rd.</small>\
</div>"+
//-------------------------
"<div class=blog-post-albertino>\
<strong>Previous commitment(s) completed?:</strong><br>\
&bull; <br>\
<strong>Next commitment(s):</strong><br>\
&bull; <br>\
<br>\
<small>Posted by Albertino on May 6th.</small>\
</div>"+
//-------------------------
"<div class=blog-post-albertino>\
<strong>Previous commitment(s) completed?:</strong><br>\
&bull; <br>\
<strong>Next commitment(s):</strong><br>\
&bull; <br>\
<br>\
<small>Posted by Albertino on May 8th.</small>\
</div>"+
//-------------------------
"<div class=blog-post-albertino>\
<strong>Previous commitment(s) completed?:</strong><br>\
&bull; <br>\
<strong>Next commitment(s):</strong><br>\
&bull; <br>\
<br>\
<small>Posted by Albertino on May 10th.</small>\
</div>"+
//-------------------------
"<div class=blog-post-albertino>\
<strong>Previous commitment(s) completed?:</strong><br>\
&bull; <br>\
<strong>Next commitment(s):</strong><br>\
&bull; <br>\
<br>\
<small>Posted by Albertino on May 13th.</small>\
</div>"+
//-------------------------
"<div class=blog-post-albertino>\
<strong>Previous commitment(s) completed?:</strong><br>\
&bull; <br>\
<strong>Next commitment(s):</strong><br>\
&bull; <br>\
<br>\
<small>Posted by Albertino on May 15th.</small>\
</div>"+
//-------------------------
"<div class=blog-post-albertino>\
<strong>Previous commitment(s) completed?:</strong><br>\
&bull; <br>\
<strong>Next commitment(s):</strong><br>\
&bull; <br>\
<br>\
<small>Posted by Albertino on May 17th.</small>\
</div>";