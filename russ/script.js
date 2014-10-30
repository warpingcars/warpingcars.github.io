


$(document).ready(function()
{        
	$("#upload").click(function() 
	{ 
	if ($("#mittrussekort").attr('src') == "")
	{
        $("#mittrussekort").attr( "class", "imgedit" ); 
        $("#hidden").click(); 
	}
	else  
	{ 
        $("#mittrussekort").attr("src", ""); 
        $("#hidden").click(); 
	}  
	}); 

    $("#mittrussekort").click(function()
    {
        rotateRussekort(); 
    }); 

    $("#confirm").click(function() 
    { 
    if ($("#mittrussekort").attr('src') == "")
    {
         alert("Du må laste opp et russekort før du kan publisere det..."); 
        $("#upload").click(); 
    }
    else  
    { 
        alert("Pupliserer nå ditt russekort!"); 
        uploadRussekort(); 
    }  
    });  
}); 

function change(fileInput) 
{
        var files = fileInput.files;
        for (var i = 0; i < files.length; i++) {           
            var file = files[i];
            var imageType = /image.*/;     
            if (!file.type.match(imageType)) {
                continue;
            }           
            var img=document.getElementById("mittrussekort");            
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


var degrees = 90; 
function rotateRussekort() 
{
    var elem = document.getElementById("mittrussekort");
    
    if(navigator.userAgent.match("Chrome")){
    elem.style.WebkitTransform = "rotate("+degrees+"deg)";
    } else if(navigator.userAgent.match("Firefox")){
    elem.style.MozTransform = "rotate("+degrees+"deg)";
    } else if(navigator.userAgent.match("MSIE")){
    elem.style.msTransform = "rotate("+degrees+"deg)";
    } else if(navigator.userAgent.match("Opera")){
    elem.style.OTransform = "rotate("+degrees+"deg)";
    } else {
    elem.style.transform = "rotate("+degrees+"deg)";
    }

    degrees += 90;

    if(degrees > 359)
    {
    degrees = 0; 
    }

}