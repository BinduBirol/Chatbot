$(function(){
	$("#filter li a").click(function(){
		var category = $(this).attr("data-val");
		console.log(category);
		$("#portfolio li").hide();
		$("."+category).show();	
	});
	
	
});