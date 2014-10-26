$(document).ready(function()
{
	
	$("#mollyimg").click(function(){
	   $("#hidden").click(); 
	   loadImageFile(this); 
	}); 
	
	$("#show").click(function(){ 
		var mollyimg = $("#hidden").val(); 
	    $("#show").val(mollyimg); 
	    $("#mollyimg").css('background', '"url('+mollyimg+')"'); 
	}); 
}); 
