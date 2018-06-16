

function openSignup() {
	$(".login-btn").removeClass("selected")
	$(".signup-btn").addClass("selected")
	$("#form-login").fadeOut();
	$(".card").animate({
		width: "80%"
	}, "fast", "linear");
	$("#form-signup")
		.css("display", "flex")
		.hide()
		.delay(400)
		.fadeIn();
}

function openLogin() {	
	$(".signup-btn").removeClass("selected")
	$(".login-btn").addClass("selected")
	$("#form-signup").hide();
	$(".card").css("width", "50%");
	$("#form-login").fadeIn();
	
}