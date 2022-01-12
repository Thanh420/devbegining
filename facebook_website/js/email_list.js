"use strict";
$(document).ready(function() {
	$("#sign_up").click(function() {
			var emailAddress1 = $("#email1").val();
			var emailAddress2 = $("#email2").val();
			var isValid = true;
			
			// validate the first email address
			if (emailAddress1 == "") { 
				$("#email1").next().text("This field is required!");
				isValid = false;
			} else {
				$("#email1").next().text("");
			} 
			
			// validate the second email address
			if (emailAddress2 == "") { 
				$("#email2").next().text("This field is required!");
				isValid = false; 
			} else if (emailAddress1 !== emailAddress2) { 
				$("#email2").next().text("This entry must equal first entry!");
				isValid = false;
			} else {
				$("#email2").next().text("");
			}
			
			// validate the first name entry  
			if ($("#first_name").val() == "") {
				$("#first_name").next().text("This field is required!");
				isValid = false;
			} 
			else {
				$("#first_name").next().text("");
			}
                        
                        if ($("#last_name").val() == "") {
				$("#last_name").next().text("This field is required!");
				isValid = false;
			} 
			else {
				$("#last_name").next().text("");
			}
			
                        if ($("#password").val() == "") {
				$("#password").next().text("This field is required!");
				isValid = false;
			} 
			else {
				$("#password").next().text("");
			}
                        
			// submit the form if all entries are valid
			if (isValid) {
				$("#signin_form").submit(); 
			}
	});	// end click
}); // end ready
function thongbao() {
alert("Welcome to Facebook");
}