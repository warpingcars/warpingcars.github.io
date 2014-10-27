$(document).ready(function()
{ 
	
	$("#mollyimg").click(function()
	{ 
	if ($("#mollyimg").attr('src') == "")
	{
	    $("#hidden").click(); 
	}
	else  
	{ 
        alert("Do you want to MollyWang this image?"); 
        $("#mollyimg").attr( "class", "imgedit" ); 
        $("#toolbox_up").attr( "class", "toolbox" ); 
        $("#toolbox_down").attr( "class", "toolbox" ); 
	}
	   
	}); 
	
}); 

function change(fileInput) {
        var files = fileInput.files;
        for (var i = 0; i < files.length; i++) {           
            var file = files[i];
            var imageType = /image.*/;     
            if (!file.type.match(imageType)) {
                continue;
            }           
            var img=document.getElementById("mollyimg");            
            img.file = file;    
            var reader = new FileReader();
            reader.onload = (function(aImg) { 
                return function(e) { 
                    aImg.src = e.target.result; 
                }; 
            })(img);
            reader.readAsDataURL(file);
        }    
    }