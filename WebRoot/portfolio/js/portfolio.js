$(function(){
	var current_li="";
	var prev_li="";
	var next_li="";
	
	function setImg(src,id){
		$("#main").attr("src",src);
		var path="texts/"+id+".txt";
		
		$.get(path,function(data){
			//console.log(data);
			$("#description p").html(data);
			});
	};
	
	$("#portfolio img").click(function(){
		var src=$(this).attr("src");
		var id=$(this).attr("id");
		current_li= $(this).parent();
		
		setImg(src,id);
		$("#frame").fadeIn(500);
		$("#overlay").fadeIn();
	});
	
	$("#overlay").click(function(){
		$(this).fadeOut();
		$("#frame").fadeOut();
	});
	//working with arrows
	$("#right").click(function(){
		if(current_li.is(":last-child")){
			next_li=$("#portfolio li").first();
		}else{
			next_li= current_li.next();
		}
		var next_src= next_li.children("img").attr("src");
		var next_id= next_li.children("img").attr("id");

		setImg(next_src,next_id);
		current_li= next_li;
	});
	$("#left").click(function(){
		if(current_li.is(":first-child")){
			prev_li= $("#portfolio li").last();
		}else{
			prev_li= current_li.prev();
		}
		var prev_src= prev_li.children("img").attr("src");
		var prev_id= prev_li.children("img").attr("id");
		
		setImg(prev_src,prev_id);
		current_li=prev_li;
	});
});