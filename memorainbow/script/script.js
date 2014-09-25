var memory_array = ['yellow', 'yellow', 'yellow', 'blue', 'blue', 'blue', 'lime', 'lime', 'lime', 'black','black','black', 'waldo', 'waldo', 'waldo', 'purple', 'purple', 'purple', 'street_pete', 'street_pete', 'street_pete']; 

var memory_values = []; 
var memory_tile_ids = []; 
var tiles_flipped = 0; 
var completed = 0; 
var memory_flipped = []; 
var seconds = 0; 

$( document ).ready( function(){ 		 
setInterval(function () {
seconds += 1; 
gamingtime.innerHTML = "Gaming time: "+seconds+" s"; 
}, 1000); 
/*
		if(memory_values[0] == "street_pete" 
		|| memory_values[1] == street_pete 
		|| memory_values[2] == street_pete); 
		{ 
		alert("pete"); 
		}
					var tile_2 = document.getElementById(tile_2); 
					tile_2.style.background = 'url(img/street_pete.jpg) no-repeat'; 
					tile_2.innerHTML = ""; 
¨*/
}); 

Array.prototype.memory_tile_shuffle = function()
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


function newBoard()
{ 
	completed = 0; 
	tiles_flipped = 0; 
	flipcount.innerHTML = "Tiles flipped: "+tiles_flipped+""; 
	seconds= 0; 
	gamingtime.innerHTML = "Gaming time: "+seconds+" s"; 
	var output = ''; 
	memory_array.memory_tile_shuffle(); 

for(var i = 0; i < memory_array.length; i++) 
{ 
	output += '<div id="tile_'+i+'" onclick="memoryFlipTile(this,\''+memory_array[i]+'\')"></div>'; 
} 
document.getElementById('box').innerHTML = output; 
} 


function memoryFlipTile(tile,val)
{ 
	if(tile.innerHTML == "" && memory_values.length < 3); 
	{ 
		tile.style.background = 'url(img/'+val+'.jpg) no-repeat'; 
		tile.innerHTML = ''; 
		
		if(memory_values.length == 0) //One tile flipped. 
		{ 
			memory_values.push(val); 
			memory_tile_ids.push(tile.id); 
			tiles_flipped += 1; 
			flipcount.innerHTML = "Tiles flipped: "+tiles_flipped+""; 
		}

		else if(memory_values.length == 1) //Two tiles flipped. 
		{ 
			memory_values.push(val); 
			memory_tile_ids.push(tile.id); 
			tiles_flipped += 1; 
			flipcount.innerHTML = "Tiles flipped: "+tiles_flipped+""; 
		} 
		else if(memory_values.length == 2) //Three tiles flipped. 
		{ 
				memory_values.push(val); 
				memory_tile_ids.push(tile.id); 
				tiles_flipped += 1; 
				flipcount.innerHTML = "Tiles flipped: "+tiles_flipped+""; 
				
				if(memory_values[0] == memory_values[1] 
				&& memory_values[1] == memory_values[2] 
				&& memory_values[0] == memory_values[2]) 
				{ 
					completed += 3; 
					memory_values = []; 
					memory_tile_ids = []; 
					memory_flipped = [1]; 
					new Audio('mp3/lol.mp3').play(); //Tile one, two and three are the same. 

			if(completed == memory_array.length) 
				{ 
					new Audio('mp3/lol.mp3').play(); 
					var scoreconstant = Math.ceil(250 - 1/100*seconds * tiles_flipped + 15); 
					alert("You won. \nCongratulations!!! \nLeaderboard rank: ??? \nTiles flipped: "+tiles_flipped+" \nTime: "+seconds+" seconds \n\nScore: "+scoreconstant+" Click OK to play again... "); 
					document.getElementById('box').innerHTML = ""; 
					newBoard(); 
				} 
			} 
			else 
			{ 
				function flip2Back() 
				{

					var tile_1 = document.getElementById(memory_tile_ids[0]); 
					var tile_2 = document.getElementById(memory_tile_ids[1]); 
					var tile_3 = document.getElementById(memory_tile_ids[2]); 
					tile_1.style.background = 'url(img/tile_bg.jpg) no-repeat'; 
					tile_1.innerHTML = ""; 
					tile_2.style.background = 'url(img/tile_bg.jpg) no-repeat'; 
					tile_2.innerHTML = ""; 
					tile_3.style.background = 'url(img/tile_bg.jpg) no-repeat'; 
					tile_3.innerHTML = ""; 
					memory_values = []; 
					memory_tile_ids = []; 
				} 
				setTimeout(flip2Back, 500); 
			} 
		} 
	} 
} 
