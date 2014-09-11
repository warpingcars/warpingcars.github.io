var memory_array = ['yellow', 'yellow', 'yellow', 'blue', 'blue', 'blue', 'lime', 'lime', 'lime', 'green','green','green', 'black','black','black', 'pink', 'pink', 'pink', 'purple', 'purple', 'purple', 'street_pete', 'street_pete', 'street_pete', 'tile_bg', 'tile_bg', 'tile_bg']; 
var memory_values = []; 
var memory_tile_ids = []; 
var tiles_flipped = 0; 

Array.prototype.memory_tile_shuffle = function(){ 
var i = this.length, j, temp; 
while(--i > 0){ 
j = Math.floor(Math.random() * (i+1)); temp = this[j]; this[j] = this[i]; this[i] = temp; 
} 
} 
function newBoard(){ 
tiles_flipped = 0; var output = ''; memory_array.memory_tile_shuffle(); 
for(var i = 0; i < memory_array.length; i++){ 
output += '<div id="tile_'+i+'" onclick="memoryFlipTile(this,\''+memory_array[i]+'\')"></div>'; 
} 
document.getElementById('box').innerHTML = output; 
} 
function memoryFlipTile(tile,val){ if(tile.innerHTML == "" && memory_values.length < 3)
{ 
tile.style.background = 'url('+val+'.jpg) no-repeat'; tile.innerHTML = ''; 
if(memory_values.length == 0){ 
memory_values.push(val); memory_tile_ids.push(tile.id); } else 
if(memory_values.length == 1){ 
memory_values.push(val); memory_tile_ids.push(tile.id); } else 
if(memory_values.length == 2){ 
memory_values.push(val); memory_tile_ids.push(tile.id); 
if(memory_values[0] == memory_values[1] && memory_values[1] == memory_values[2] && memory_values[0] == memory_values[2]){ 
tiles_flipped += 3; memory_values = []; memory_tile_ids = []; 
if(tiles_flipped == memory_array.length){ alert("Congratulations! Click OK to play again..."); 
document.getElementById('box').innerHTML = ""; newBoard(); } } else { 
	function flip2Back(){ 
var tile_1 = document.getElementById(memory_tile_ids[0]); 
var tile_2 = document.getElementById(memory_tile_ids[1]); 
var tile_3 = document.getElementById(memory_tile_ids[2]); 
tile_1.style.background = 'url(rainbow-icon.png) no-repeat'; tile_1.innerHTML = ""; 
tile_2.style.background = 'url(rainbow-icon.png) no-repeat'; tile_2.innerHTML = ""; 
tile_3.style.background = 'url(rainbow-icon.png) no-repeat'; tile_3.innerHTML = ""; 
memory_values = []; memory_tile_ids = []; } setTimeout(flip2Back, 500); } } } }   
