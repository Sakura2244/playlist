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
//var mySong = {
//	"title":"24K Magic",
//	"artist":"Bruno Mars",
//	"mp3url":"https://open.spotify.com/track/6b8Be6ljOzmkOmFslEb23P",
//	"imageurl":"https://images-na.ssl-images-amazon.com/images/I/71Gr9aCHQfL._SY355_.jpg",
//}

    var myPlayList = [
    	{
    		"title":"Liang Liang",
    		"artist":"Aska Yang, Zhang Bichen",
    		"mp3url":"https://open.spotify.com/track/7LmFgyIHlXRqjDOt68RQoQ",
    		"imageurl":"https://c-sf.smule.com/sf/s84/arr/98/e7/ad88b07c-34b1-425a-ab9d-5b531961535c_1024.jpg",
    	},
    	{
    		"title":"Gaze",
    		"artist":"Zhang Bichen, Zhao Liying",
    		"mp3url":"https://open.spotify.com/track/46VQfrwm8BGgKQV7ZhoNsq",
    		"imageurl":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzrZONZm9-R2rL47NMOAbPq8eVpPy6jwxwa5YO5eSRNJN0zyGreg",
    	},
    	{
    		"title":"Flourishing Dream ",
    		"artist":"Isabelle Huang",
    		"mp3-url":"https://open.spotify.com/track/3XGcV54ogbQ5OsT6cv7VJa",
    		"imageurl":"https://i.pinimg.com/736x/0e/09/89/0e098924c6b44d53a73b1d885e11e27a.jpg",
    	}
    
    ]



// DOCUMENT READY FUNCTION
$( document ).ready(function() {
//	$('.songs').append("<p>Title: " + mySong.title + "</p>");
//	$('.songs').append("<p>Artist: " + mySong.artist + "</p>");
//	$('.songs').append("<p>MP3: <a href=" +mySong.mp3url+ "> 24K Magic </a></p>");
//	$('.songs').append("<img src=" + mySong.imageurl + ">");
//	$('.songs').append("<p>Title: " + myPlayList.title + "</p>");
//	$('.songs').append("<p>Artist: " + myPlayList.artist + "</p>");
//	$('.songs').append("<p>MP3: <a href=" +myPlayList.mp3url+ "> 24K Magic </a></p>");
//	$('.songs').append("<img src=" + myPlayList.imageurl + ">");
//	myPlayList.forEach(function(songs) {
//    var title = songs.title;
//    var artist = songs.artist;
//    var url = songs.mp3url;
//    var image = songs.imageurl;
 
//       $("body").append(`
//    		<div class="songs">
//            	<h3>Title: ${title}</h3>
//            	<a>Artist: ${artist}</a>
//            	<img src="${image}">
//            	<a href= ${url}> Play Song</a> 
//           </div>
//        `);
        
//    });
    
    $('#addSong').click(function(){
        clearList();
        addSong();
        displayList();
     
    });
    
    $('#clear').click(function(){
        clearList();
       
    });
    
    function displayList(){
        
    	for (var i = 0; i < myPlayList.length; i++){
            $('.songs').append('<p>' + myPlayList[i].title+'<p>');
            $('.songs').append('<p>' + myPlayList[i].artist +'<p>');
            $('.songs').append("<p>MP3: <a href=" +myPlayList[i].mp3url+ ">Link</a></p>");
            $('.songs').append("<img src=" + myPlayList[i].imageurl + ">");
        }
    }
    
    function clearList(){
       $('.songs').empty();
      
    }
    
    function addSong(){
    	var titleInput = $("#title").val();
        var artistInput = $("#artist").val();
        var urlInput = $("#mp3url").val();
        var imageInput = $("#imageurl").val();
        
        var song = {
            title: titleInput,
            artist: artistInput,
            url: urlInput,
            image: imageInput
            };
        myPlayList.push(song);
        
        
    }
    
    displayList();

});