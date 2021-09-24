<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    
</head>
<body>

    <section id="tracklist">
        This is my Section
        <!-- <?php include 'php/tracklist.php' ?> -->
    </section>

<script>

//****************************************************************************************//
// request APIS Deezer
//
//****************************************************************************************//
// Définition d'éléments communs au deux Top Ten's
//
let mySection=document.getElementById('tracklist');
let myTopContainer = document.createElement('div');
    myTopContainer.className = "topTenContainer";
    myTopContainer.classList.add("d-flex");
    
mySection.appendChild(myTopContainer);
//****************************************************************************************//
// Définition d'éléments Top Ten Albums (Div + ul)
//
let myTopAlbums = document.createElement('div');
    
    myTopAlbums.className = "topAlbumsDiv";
    myTopAlbums.classList.add("col-6");
    
    let myUlAlbums = document.createElement('ul');
    myUlAlbums.className = "ulAlbums";
   
    myTopAlbums.appendChild(myUlAlbums);

myTopContainer.appendChild(myTopAlbums);

//****************************************************************************************//
// Définition d'éléments Top Ten Artist (Div + ul) 
//
let myTopTracks = document.createElement('div');
    myTopTracks.className = "topTracksDiv";
    myTopTracks.classList.add("col-6");
               
    
let myUlTracks = document.createElement('ul');
    myUlTracks.className = "ulTracks";
   
    myTopTracks.appendChild(myUlTracks);

myTopContainer.appendChild(myTopTracks);


//****************************************************************************************//
// Requette à API Deezer pour prendre tous les lTop-ten Lists (Charts)
//
const requeteChart = new XMLHttpRequest();
const method = 'GET';
const url = "https://cors-anywhere.herokuapp.com/https://api.deezer.com/chart/"

requeteChart.open(method, url)
requeteChart.responseType = "json"
requeteChart.send();
requeteChart.onload = function(){
    console.log(requeteChart.readyState)
   
     if (requeteChart.readyState == 4){
        if (requeteChart.status == 200){
 
    // Top Ten Albums   
            const monArray = requeteChart.response;
            
            console.log(monArray);
            console.log(monArray.albums.data)

             for (let i=0; i<monArray.albums.data.length; i++){
                     
                        albumTitle      = monArray.albums.data[i].title;
                        albumArtist     =  monArray.albums.data[i].artist.name;
                        albumImage      =  monArray.albums.data[i].cover_small;
                        albumPosition   =  monArray.albums.data[i].position;
                
                 // creation des LI avec info et Image du Album  
                       let myLiAlbums = document.createElement('li');
                           myLiAlbums.style.textDecorationStyle="none";
                                                    
                        
                    // du div Image            
                        let myAlbumsImgDiv = document.createElement('div');
                        myAlbumsImgDiv.className = "imgAlbumsDiv";
                        myAlbumsImgDiv.classList.add("col-3");

                        let myAlbumImg = document.createElement('img');
                            myAlbumImg.src = albumImage;

                        myAlbumsImgDiv.appendChild(myAlbumImg);
                        myLiAlbums.appendChild(myAlbumsImgDiv);

                    // du div text    
                        let myAlbumsTextDiv = document.createElement('div');
                            myAlbumsTextDiv.className = "textAlbumsDiv";
                            myAlbumsTextDiv.classList.add("col-3");

                        myAlbumsTextDiv.innerHTML= albumTitle + "</br>" + albumArtist + " " + albumPosition; 
                        myLiAlbums.appendChild(myAlbumsTextDiv);
 
                    // ajouter li au HTML avec les infos 
                        myUlAlbums.appendChild(myLiAlbums);
                }

    // Top Ten Tracks  
                       
            console.log(monArray);
            console.log(monArray.tracks.data)

            for (let i=0; i<monArray.tracks.data.length; i++){
                    
                        trackName       = monArray.tracks.data[i].title_short;
                        trackImage      = monArray.tracks.data[i].artist.picture_small;
                        trackPosition   = monArray.tracks.data[i].position;
                        trackDuration   = monArray.tracks.data[i].duration;
                       
                        
                        trackArtist     = monArray.tracks.data[i].artist.name;
                       
           
            // creation des LI avec info et Image du Track
                        let myLiTrack = document.createElement('li');
                            myLiTrack.style.textDecorationLine = "none";
                        
            // creation des DIV's dedans les LI pour le txt et l'image      

                // du div Image            
                        let myTracksImgDiv = document.createElement('div');
                        myTracksImgDiv.classList.add("col-3");
                        myTracksImgDiv.className = "imgTracksDiv";


                        let myTrackImg = document.createElement('img');
                        myTrackImg.src = trackImage;
                        myTracksImgDiv.appendChild(myTrackImg);

                        myLiTrack.appendChild(myTracksImgDiv);
            
                // du div text    
                        let myTracksTextDiv = document.createElement('div');
                            myTracksTextDiv.classList.add("col-3");
                            myTracksTextDiv.className = "textTracksDiv";
                            
                        myTracksTextDiv.innerHTML= trackPosition + " " + trackName +"</br>" + trackArtist + " " + trackDuration;
                        myLiTrack.appendChild(myTracksTextDiv);
                
                // ajouter li au HTML avec les infos 
                        myUlTracks.appendChild(myLiTrack);

                       

                    }   
         
     }
    }
 };




</script>

</body>
</html>