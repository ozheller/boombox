window.onload = function(){
	//This sets the global variable for box. So it can be used in multiple places.
	var box = document.getElementById("box");
	
	//This sets the time for the box to popup. 
	setTimeout(	
		//This defines the box, box location and contents.
		function boom(){
			box.setAttribute('style', 'position: absolute; left: 50%;	top: 50%;	width: 4.15em;	height: 1.25em; border: 10px solid #FFFF00');
			box.style.marginLeft='-2.0525em';
			box.style.marginTop='-0.75em';
			box.style.backgroundColor = '#FF0000';
			box.innerHTML="BOOM!!!";
	
			//These are calling the functions to grow the box after it has appeared.
			big();
			bigger();
	
			//This function will remove the box and change the backgroung and font color when the box is clicked.
			box.onclick = function(){
			box.style.display='none';
			var spell = document.getElementById("spell");
			spell.style.color="orange";
			spell.style.backgroundColor="black";
			}
		},
		1500);
	
	//This calls the function for the box. So that it is executed.
	boom();

	//This defines the first box expansion that is called in boom().		
	function big(){
		setTimeout(function(){box.style.fontSize='5.5em'},250);
	}

	//This defines the second box expansion that is called in boom().
	function bigger(){
		setTimeout(function(){box.style.fontSize='10.5em'},500);
	}
}