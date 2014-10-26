$(document).ready(function()
{
	
	$("#mollyimg").click(function(){
		var mollyimg = ''; 
	   $("#hidden").click(); 
	   $("#show").val(mollyimg); 
	}); 
	
	$("#show").click(function(){ 
		var mollyimg = $("#hidden").val(); 
	    $("#show").val(mollyimg); 
	}); 
}); 

function change()
{
	
	$("#show").val($("#hidden").val()); 
	$("#mollyimg").val($("#hidden").val()); 

}
