

$(document).ready(function()
{ 
/*
    document.body.addEventListener('touchmove', function(e)
        { e.preventDefault(); 
        }); 
    window.addEventListener("touchstart", function(event)
    {
             if(event.target.tagName=="HTML" || event.target.tagName=="BODY")
             {
                     event.preventDefault();
             }
    } ,false); 
    window.addEventListener("scroll",function()
    {
    window.scrollTo(0,0)
    },false);   
*/        

	$("#mollyimg").click(function() 
	{ 
	if ($("#mollyimg").attr('src') == "")
	{
        $("#mollyimg").attr( "class", "imgedit" ); 
        $("#toolbox_up").attr( "class", "toolbox" ); 
        $("#toolbox_down").attr( "class", "toolbox" ); 
        $("#hidden").click(); 
	}
	else  
	{ 
        alert("You tapped your MollyWang. That's nasty! "); 
	}
	   
	}); 
	
    $("#toolbox_up").click(function() 
    {
        alert("We are currently out of Molly Accessories. Please try again next week! "); 
    }); 
    $("#toolbox_down").click(function() 
    {
        alert("Molly Effects need further research in order to achieve an enhanced MollyWang experience. Be patient! "); 
    }); 


    $("#exit").click(function() 
    {
        $("#mollyimg").attr('src', ""); 
        $("#mollyimg").attr( "class", "imgedit" ); 
        $("#toolbox_up").attr( "class", "toolbox" ); 
        $("#toolbox_down").attr( "class", "toolbox" ); 
        $("#hidden").click(); 
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