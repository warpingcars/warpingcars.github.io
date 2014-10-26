$(document).ready(function()
{
	$("#mollyimg").click(function(){
	   $("#hidden").click(); 
	}); 

	$("#show").click(function(){ 
		var mollyimg = $("#hidden").val(); 
	    $("#show").val(mollyimg); 
	    $("#mollyimg").removeClass("mollyimg"); 
	    $("#mollyimg").addClass("mollywang"); 
	    $("#mollyimg").innerHTML = mollyimg; 
	});

}); 
