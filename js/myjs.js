$(document).ready(function(){
	var url = "http://twister229.github.io/?url=www.google.com";
	$.get(url, function(response) {
		$("#content").html(response);
	});
});