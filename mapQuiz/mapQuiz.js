var counties = ["Hordaland", "Akershus og Oslo", "Aust-Agder", "Buskerud", "Finnmark", "Hedmark", "Møre og Romsdal", "Nordland", "Nord-Trøndelag", "Oppland", "Rogaland", "Sogn og Fjordane", "Sør-Trøndelag", "Telemark", "Troms", "Vest-Agder", "Vestfold", "Østfold"]; 
var random_counties = []; 			
var highScoreArray = [0];
		
var round = 0; 
var answer; 
var points = 0; 

var seconds = 0; 
var minutes = 0;
var hours = 0; 

var gameOver = 0; 

$(document).ready(function()
{ 
	//Starting the Quiz 
	init(); 

	$("#remove").click(function()
	{
		highScoreArray = [];
		localStorage.highScoreArray = "";
		localStorage.highScoreArrayStr = ""; 
		$("#highscores").text(""); 
	});

	$("area").attr("href", "#");
	$('area').hover(function() 
	{
		$('.Kart').attr('src', 'images/kart/kart_fylker_' + $(this).attr('id') + '.gif');
	}, 

	function()
	{
		$('.Kart').attr('src', 'images/kart/kart_fylker.gif');
	}); 

	setInterval(function()
	{ 
		if(gameOver == 0)
		{
			seconds++; 
		}

		if(seconds == 60)
		{ 
			minutes++; 
			seconds = 0; 
		} 

		if(minutes == 60)
		{ 
			hours++; 
			minutes = 0; 
		} 

		$("#seconds").text("Tid: " + hours + ":" + minutes +":" +seconds); 
	}, 1000); 

	$("area").click(function(event) 
	{
		answer = event.target.alt; 
		if(gameOver == 0)
		{
			checkAnswer(); 
			//newQuestion(); 
		}
	}); 
});  

function init() // shuffling countyArray. Counties will now appear in random order. 
{   
	readResultsFromLocalStorage(); 
	counties.counties_shuffle(); 
	for(var i = 0; i < counties.length; i++) 
	{ 
		random_counties[i] = counties[i]; 		
	} 
	newQuestion();
	//setTimeout("newQuestion();", 30);	
} 

Array.prototype.counties_shuffle = function() // Function for randomizing array
{ 	
	var i = this.length, j, temp; 
	
	while(--i > 0)
	{ 
		j = Math.floor(Math.random() * (i+1)); 
		temp = this[j]; 
		this[j] = this[i]; 
		this[i] = temp; 
	} 
} 

function newQuestion() 
{ 
	if (round < counties.length)
	{
		$("#spm").text("Hvor ligger "+random_counties[round]+"?"); 
	}
	else if(gameOver == 0) 
	{
		if (typeof(Storage) !== "undefined") 
		{
			saveResultsToLocalStorage();
		} 
		else 
		{
			alert('Din nettleser str ikke localStorage'); 
			//cookies(); 
		}

		gameOver = 1; 

		if(points >= highScoreArray[(highScoreArray.length) - 1])
		{
			$("#spm").text("Gratulerer! Du fikk "+points+" av 18 riktige, og kom med på top topplisten! "); 
		}
		else 
		{ 
			$("#spm").text("Du fikk "+points+" av 18 riktige. Prøv å slå de "+highScoreArray.length+" beste resultatene! "); 
		} 
	} 
} 

function checkAnswer() 
{ 
	if(answer == random_counties[round]) 
	{ 
		round++; 
		points++; 
		$("#points").text("Rett: "+Math.floor((points/(round))*100)+" %"); 
		correct(); 
	} 
	else 
	{ 
		round++; 
		$("#points").text("Rett: "+Math.floor((points/(round))*100)+" %"); 
		incorrect(); 
	} 
	newQuestion(); 
} 

function correct()
{
	document.getElementById("resultat").innerHTML = "rett";
	$("#resultat").attr("class", "correct");
}

function incorrect()
{
    document.getElementById("resultat").innerHTML = "feil";
	$("#resultat").attr("class", "incorrect");
}

function ShowHighScores()	
{
	highScoreArray.sort(function(a, b)
	{
		return b-a; 
	}); 

	if(highScoreArray.length > 5)
	{ 
		var tempArray = []; 
		for(var j = 0; j < 5; j++)
		{ 
			tempArray[j] = highScoreArray[j]; 
		}
		highScoreArray = tempArray; 
	}

	var output = ""; 
	for(var i = 0; i < highScoreArray.length; i++)
	{ 
		output += "#"+(i + 1) + ": " + " " + highScoreArray[i] +  " " + "poeng" + "<br>"; 
	}
	document.getElementById("highscores").innerHTML = output;   
}

function saveResultsToLocalStorage()
{
	// Save 
	var newIndex = highScoreArray.length; 
	highScoreArray[newIndex] = points; 
	var highScoreArrayStr = highScoreArray.toString();
	localStorage.setItem("highScoreArrayStr", highScoreArrayStr); 
	readResultsFromLocalStorage(); 
	//alert(highScoreArray); 
} 

function readResultsFromLocalStorage()
{
	// Read 
	if(localStorage.getItem("highScoreArrayStr") != "")
	{
		var highScoreArrayStr = localStorage.getItem("highScoreArrayStr"); 
		highScoreArray = highScoreArrayStr.split(','); 
	}
	ShowHighScores(); 
} 
