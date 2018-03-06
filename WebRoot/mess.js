	function bot_message(message){
		var prevMessage= $("#display").html();
		
		if(prevMessage.length>5){
			prevMessage= prevMessage+"<br/>";
		}
		$("#display").html(prevMessage+"<span class='current_message'>"+"<span class='bot'>ChatBot: </span>"+ message+"</span>");
		//$("#display").scrollTop($("#display").prop("scrollHeight"));//showing last message on display div.
		$(".current_message").hide();
		$(".current_message").delay(500).fadeIn();
		$(".current_message").removeClass("current_message");
    }
    //get UserName
    function get_username(){
    	bot_message("WTF is your name?"); 
    }
    // Robot speech
    var humanname="";
    function AI(message){
	    if(humanname.length<3){
	    	 humanname=message;	
	    	 bot_message(humanname+" or whatever. What do you want?");
	    }
	    if(message.indexOf("fuck")>=0){
	    	bot_message("Hey, I am the one who can be rude here!! so, FUCK YOU!!");
	    }
	    if(message.indexOf("nothing")>=0){
	    	bot_message("if its Nothing then get lost.");
	    }
	    if(message.indexOf("what time")>=0){
	    	var date= new Date();
	    	var h= date.getHours();
	    	var m= date.getMinutes();
	    	var s= date.getSeconds();
	    	var ampm="AM";
	    	if(h>12){
	    		h=h%12;
	    		ampm="PM";
	    	}
	    	bot_message("Current time is: "+h+":"+m+":"+s+" "+ampm);
	    }
    }
    //Enter key pressing send.
    $(function(){
	    get_username();
	    $("#textarea").keypress(function(event){
	    if(event.which==13){
	    	if($("#checkbox").prop("checked")){
	    		$("#submit").click();
	    		event.preventDefault();
	    	}
	    }
	    });
    });
    //Human chat message actions.
    $("#submit").click(function(){
	    var prevMessage= $("#display").html();
	    var newMessage=$("#textarea").val();
	    var username="<span class='username'>You: </span>";
	    
	    if(prevMessage.length>5){
	    	prevMessage= prevMessage+"<br/>";
		}
	    $("#display").html(prevMessage+username+newMessage);
	    AI(newMessage);
	    $("#display").scrollTop($("#display").prop("scrollHeight"));//showing last message on display div.
	    $("#textarea").val("");
    });