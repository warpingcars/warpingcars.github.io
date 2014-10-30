$(document).ready(function()
{        
	$("#wrapper_new").hide(); 
    $("#wrapper_popular").hide(); 
    $("#wrapper_random").hide(); 
    $("#wrapper_mittrussekort").hide(); 

    $("#cambtn").click(function() 
	{ 
        $("#wrapper_new").hide(); 
        $("#wrapper_popular").hide(); 
        $("#wrapper_random").hide(); 

    	if ($("#mittrussekort").attr('src') == "")
    	{
            $("#wrapper_mittrussekort").show(); 
            $("#snap").click(); 
    	}
    	else  
    	{ 
            $("#mittrussekort").attr("src", ""); 
            $("#snap").click(); 
    	}  
    }); 

    $("#new").click(function()
    {
        $("#wrapper_new").show(); 
        $("#wrapper_popular").hide(); 
        $("#wrapper_random").hide(); 
        $("#wrapper_mittrussekort").hide(); 

    }); 

    $("#popular").click(function()
    {
        $("#wrapper_new").hide(); 
        $("#wrapper_popular").show(); 
        $("#wrapper_random").hide(); 
        $("#wrapper_mittrussekort").hide(); 

    }); 

    $("#random").click(function()
    {
        $("#wrapper_new").hide(); 
        $("#wrapper_popular").hide(); 
        $("#wrapper_random").show(); 
        $("#wrapper_mittrussekort").hide(); 

    }); 

    $("#mittrussekort").click(function()
    {
        rotateRussekort(); 
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

function getVote(int)
{
    if (window.XMLHttpRequest)
    {// code for IE7+, Firefox, Chrome, Opera, Safari
        xmlhttp=new XMLHttpRequest();
    }
    else
    {// code for IE6, IE5
        xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
    }
    xmlhttp.onreadystatechange=function()
    {
        if (xmlhttp.readyState==4 && xmlhttp.status==200)
        {
            document.getElementById("poll").innerHTML=xmlhttp.responseText;
        }
    }
    xmlhttp.open("GET","poll_vote.php?vote="+int,true);
    xmlhttp.send();
}