var randomnumber;
var count;
var arr = [];
function handleInstructionsModal() {
	// when users click on the element with
	// `.js-what` class, we'll fade in
	// the instructions modal
	$('.js-what').click(function() {
		$('.overlay').fadeIn(1000);
	});

	// when users click on the element with the
	// `.js-close` class, we'll fade out
	// the instructions modal
	$('.js-close').click(function(){
		$(".overlay").fadeOut(1000);
	});
}
// new game function
function newGame(){
	clearEverything();
	randomnumber = randomNumberGenerator();
	console.log("new game is invoked random number is assigned");
}

//this function is intended to ckear the page and start a new game
function clearEverything(){
	
	$('.button').show();
	//show button

	$('h2#feedback').html("Make your Guess!");
	//clear the cound by setting it zero
	count =0;
	$('.count').html(""+count);
	//remove all the li from the ul
	$('ul#guessList').html(' ');
	//null the array
	arr=[];

}

//this function will return a a random value between 1 and 00
function randomNumberGenerator(){
	
	return Math.floor(Math.random() * 100) + 1  
}


//feedback to user
function feedback(guessed){
	var diff = Math.abs(randomnumber-guessed);
	console.log(arr);
	console.log("random number is ="+randomnumber);
	console.log("user has guessed="+guessed);
	console.log("diff is ="+diff);
	if(randomnumber==guessed){
		$('h2#feedback').html("yay you have won!<br>click on +NEW GAME to start a new game");
		$('.button').hide();
	}else if(diff>=50){
		$('h2#feedback').html("ice cold");
	}else if(diff>30 && diff<50){
		$('h2#feedback').html("cold");
	}else if(diff>20 && diff<=30){
		$('h2#feedback').html("warm");
	}else if(diff>10 && diff<=20){
		$('h2#feedback').html("hot");
	}else if(diff>=1 && diff<=10){
		$('h2#feedback').html("very hot");
	}

}

//increment the count
function guessCount(){
	++count;
	$('span.count').html(count);
}

// memthod for add to list
function addToList(number){
	$('ul#guessList').append('<li>'+number+'</li>');
}

function ifNumberExist(number){
	var result =arr.indexOf(number);
	if(result==-1){
		return false;
	}else{
		return true;
	}
}

// `$(document).ready` lets you specify a
// function that should execute when all the
// resources required by your web page have loaded.
// This code says, when the document is ready, run the
// `handleInstructionsModal` function.
$(document).ready(function(){
	handleInstructionsModal();
	newGame();


	$("form").submit(function(event) {
		event.preventDefault();
		var guess=$(".text").val();
		if(ifNumberExist(guess)){
			alert("you have already guessed this number");
		}else{
		arr[count]=guess;	
		addToList(guess);
		feedback(guess);
		guessCount();
		}
	});

	$('.new').click(function(event) {
		newGame();
	});	

});



