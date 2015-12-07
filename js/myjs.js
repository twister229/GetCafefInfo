

var find = function() {
	var url = $('#url').val();
	$('#content').html('<object id="webloader" data="'+url+'" type="text/html"/>');
	$( document ).ready(function() {
		// find the element needed		
		var t=document.querySelector("#webloader");
		var htmlDocument= t.contentDocument;
		// alert to check
		console.log(htmlDocument);
	});
		
	
}