$(document).ready(function()
{ 
	$("#tap_pic").click(function()
    { 
        $("#mollyimg").click(); 
    }); 

	$("#mollyimg").click(function()
	{ 
	if ($("#mollyimg").attr('src') == "")
	{
        $("#tap_pic").attr( "class", "hidden" ); 
        $("#mollyimg").attr( "class", "imgedit" ); 
        $("#toolbox_up").attr( "class", "toolbox" ); 
        $("#toolbox_down").attr( "class", "toolbox" ); 
        $("#hidden").click(); 
	}
	else  
	{ 
        var imgsrc = $("#mollyimg").attr('src'); 
        alert("MollyWang this image "+imgsrc+" ? "); 
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