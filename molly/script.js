$(document).ready(function()
{
	
	$("#mollyimg").click(function(){
	   $("#hidden").click(); 
	}); 
	
	$("#show").click(function(){ 
		var mollyimg = $("#hidden").val(); 
	    $("#show").val(mollyimg); 
	    $("#mollyimg").css('background', '"url('+mollyimg+')"'); 
	}); 
}); 
