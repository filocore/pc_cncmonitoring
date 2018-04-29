$(function(){
	var preUsername = "admin";
	var prePassword = "123456";

	$("#login_button").click(function(){
		var username = $("#username_input").val();
		var password = $("#password_input").val();
		if (username == preUsername && password == prePassword) {
			window.location.href = "index.html";
		};
	});
		

});