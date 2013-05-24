$(document).ready(function() {

	// Array
	var words = [];

	// String
	var file = "lib.txt";
	
	var clickedOnce = false;
	
	function getRandomWord() {
	   return words[Math.floor(Math.random() * words.length)];
	} 

	function getFile(){
    $.get(file,function(txt){
    	console.log(txt);
        var lines = txt.split("\n");
        for (var i = 0, len = lines.length; i < len; i++) {
			words.push(lines[i])
        }
        console.log(words);
		
 		console.log(getRandomWord());

    	}); 
	}

	// Grabbing all values from text file and giving access to DOM
	getFile();
	
	// Genererate new word set
	$("#generate").click(function() {
		if(clickedOnce) {	
			$("#first-word").fadeOut('fast',function() {
				$(this).html(getRandomWord)
				$(this).removeClass('grey')
			}).fadeIn('fast');
			$("#second-word").fadeOut('fast',function() {
				$(this).html(getRandomWord)
			}).fadeIn('fast');
			$(".amp").fadeOut('fast').delay(10).fadeIn('fast')					
		}
		if(!clickedOnce) {
			clickedOnce = true;
			$("#first-word").fadeOut('fast',function() {
				$(this).html(getRandomWord)
				$(this).removeClass('grey')				
			}).fadeIn('fast');
			$("#second-word").fadeOut('fast',function() {
				$(this).html(getRandomWord)
			}).fadeIn('fast');
			$(".amp").delay(200).fadeIn('fast')		
		}
	});
	
});
