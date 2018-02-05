// quick fix for Cloud9 warning:
/* global $ */

// Class 2:
// Complete displayList() to show a single song in the list

// Class 2:
// Complete displayList() to show all the songs in the list
// Complete clearList() funcion

// Class 3:
// Complete the addSong function to take an input from input boxes and push a new song to the playlist array. 

// *************************** YOUR CODE BELOW *******************************
//******************TEST EARLY AND OFTEN USING console.log() ******************
//****************** SERIOUSLY TEST USING console.log()!!! ******************

// Songs
var mySong = {
	"title":"24K Magic",
	"artist":"Bruno Mars",
	"mp3url":"https://open.spotify.com/track/6b8Be6ljOzmkOmFslEb23P",
	"imageurl":"https://images-na.ssl-images-amazon.com/images/I/71Gr9aCHQfL._SY355_.jpg",
}

var myPlayList = [
	{
		"title":"24K Magic",
		"artist":"Bruno Mars",
		"mp3url":"https://open.spotify.com/track/6b8Be6ljOzmkOmFslEb23P",
		"imageurl":"https://images-na.ssl-images-amazon.com/images/I/71Gr9aCHQfL._SY355_.jpg",
	},
	{
		"title":"Sir Duke",
		"artist":"Stevie Wonder",
		"mp3url":"https://open.spotify.com/track/2udw7RDkldLFIPG9WYdVtT",
		"imageurl":"https://upload.wikimedia.org/wikipedia/en/thumb/e/e2/Songs_in_the_key_of_life.jpg/220px-Songs_in_the_key_of_life.jpg",
	},
	{
		"title":"Sorry",
		"artist":"Justin Bieber",
		"mp3-url":"https://open.spotify.com/track/09CtPGIpYB4BrO8qb1RGsF",
		"image-url":"http://assets-s3.usmagazine.com/uploads/assets/articles/93827-justin-biebers-sorry-choreographer-spills-video-style-secrets-parris-goebel/1445638548_justin-bieber-sorry-dancers-zoom.jpg",
	}

]



// DOCUMENT READY FUNCTION
$( document ).ready(function() {
	$('.songs').append("<p>Title: " + mySong.title + "</p>");
	$('.songs').append("<p>Artist: " + mySong.artist + "</p>");
	$('.songs').append("<p>MP3: <a href=" +mySong.mp3url+ "> 24K Magic </a></p>");
	$('.songs').append("<img src=" + mySong.imageurl + ">");
	$('.songs').append("<p>Title: " + myPlayList.title + "</p>");
	$('.songs').append("<p>Artist: " + myPlayList.artist + "</p>");
	$('.songs').append("<p>MP3: <a href=" +myPlayList.mp3url+ "> 24K Magic </a></p>");
	$('.songs').append("<img src=" + myPlayList.imageurl + ">");
	



});

function displayList(){


  
}

function clearList(){
  
  
  
}

function addSong(){
 
  
  
}
