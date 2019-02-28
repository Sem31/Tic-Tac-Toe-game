 // restart

 var restart = document.querySelector('#b');

 // all squares

 var squares = document.querySelectorAll("td");

 //clear blocks

 function clearBlocks() {
 	// body...
 	for (var i = 0; i<squares.length; i++) {
 			squares[i].textContent = '';
 		}
 	}

// after the function creation run by clicking the restart button
//so there event is that

restart.addEventListener('click',clearBlocks)


// Create a function that will check the square marker
function maker(){
	if(this.textContent == '')
	{
		this.textContent = 'X';
	}
	else if(this.textContent == 'X')
	{
		this.textContent = 'O';
	}
	else{
		this.textContent = '';
	}
}

// Use a for loop to add Event listeners to all the squares
for (var i = 0; i < squares.length; i++) {
    squares[i].addEventListener('click', maker);
}
