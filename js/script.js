// Request for the main artist
DZ.api('/chart', function(response){
    console.log(response);
    let topArtist = document.querySelector("#locate-artist-name");
    let artistBanner = document.querySelector("#artist-banner");
    console.log(response.artists.data.length)
    
    let mainArtist = response.artists.data[0];
    console.log(mainArtist);
    let imgArtist = mainArtist.picture_xl;
    console.log(imgArtist);
    let nameArtist = mainArtist.name;
    artistBanner.style.backgroundImage = "url(" + imgArtist + ")";

    let nameOfArtist = document.createElement("div");
    nameOfArtist.classList = "discover-artist"
    nameOfArtist.innerHTML = nameArtist.toUpperCase();
    nameOfArtist.classList = "discover-artist";
    nameOfArtist.innerHTML = nameArtist.toUpperCase();
    topArtist.appendChild(nameOfArtist);
    // Request for the podcasts

    let podcastsDiv = document.querySelector("#main-podcasts");
    for(i = 0; i < response.podcasts.data.length; i++){
        let podcastsImg = response.podcasts.data[i].picture_medium;
        console.log(podcastsImg);
        let podcastsDesc = document.createTextNode(response.podcasts.data[i].description);

        let podcastsBox = document.createElement("div");
        podcastsBox.style = "position : relative;";
        podcastsBox.className = "swiper-slide";
        let podcastsPicture = document.createElement("img");
        // appending the source of the images in the element
        podcastsPicture.src = podcastsImg;
        podcastsPicture.alt = "Illustration des podcasts"
        let podcastsDescDiv = document.createElement("div");

        // Appending my elements
        podcastsDiv.appendChild(podcastsBox); // appending the div that will contain the image

        podcastsBox.appendChild(podcastsPicture); // appending the image in that div
        podcastsDescDiv.appendChild(podcastsDesc); // appending the textnode created previously in the description div
        // podcastsDescDiv.style = "position: absolute; bottom: 0;left: 0;height: 0px;width: 100%;transition: .5s ease;background-color: #3bc8e7;overflow: hidden;"
        podcastsDescDiv.className = "overlay";
        podcastsBox.appendChild(podcastsDescDiv); // appending the description div to the box div, that one is visible only when mouseover is triggered

        // animation hover on the podcasts divs
        podcastsBox.addEventListener("mouseover", () => {
            podcastsDescDiv.classList.add("hoverlay");
        });
        podcastsBox.addEventListener("mouseout", () => {
            podcastsDescDiv.classList.remove("hoverlay");
        });
    }

    // Request for the playlists 
    let playlist = document.querySelector('#playlist');
    for ( i = 0 ; i < response.playlists.data.length ; i++){
        playlistName = response.playlists.data[i].title;
        console.log(playlistName);
        playlistPicture = response.playlists.data[i].picture_medium;

        let myImgPlaylist = document.createElement('img');
            let myTitlePlaylist = document.createElement('p');
            let myPlaylist = document.createElement('div');
            myPlaylist.setAttribute("class", "myDiv swiper-slide");
            myImgPlaylist.src = playlistPicture;
            myImgPlaylist.alt = "Illustration des playlists"
            myTitlePlaylist.textContent = playlistName;
            myTitlePlaylist.className = "small-titles"
            myPlaylist.appendChild(myImgPlaylist);
            myPlaylist.appendChild(myTitlePlaylist);
            playlist.appendChild(myPlaylist);
    }
        // Définition d'éléments communs au deux Top Ten's
        //
        let mySection = document.getElementById('tracklist');
        let myTopContainer = document.createElement('div');
        myTopContainer.classList.add("d-flex", "flex-column", "flex-lg-row");

        mySection.appendChild(myTopContainer);

        // Request for the top ten tracks
        let topTracksTitleEmphasis = document.createTextNode("Top 10 ");
        let topTracksTitleEnd = document.createTextNode("des morceaux les plus écoutés");
        let topTracksTitle = document.createElement('h3');
        let topTracksTitleSpan = document.createElement('span');

        topTracksTitleSpan.appendChild(topTracksTitleEmphasis);
        topTracksTitle.appendChild(topTracksTitleSpan);
        topTracksTitle.appendChild(topTracksTitleEnd);
        
        topTracksTitleSpan.className = "first-word-title";
        topTracksTitle.className = "order-1";
        let myTopTracks = document.createElement('div');
        myTopTracks.className = "topTracksDiv col d-flex";

        let myUlTracks = document.createElement("ul");
        myUlTracks.className = "myUl";
        myUlTracks.appendChild(topTracksTitle);
        myTopTracks.appendChild(myUlTracks);
        myTopContainer.appendChild(myTopTracks);

        
        

        for (let i = 0; i < response.tracks.data.length; i++) {
            //****************************************************************************************//
            // Définition d'éléments Top Ten Tracks (Div + ul) 
            //

            trackName = response.tracks.data[i].title_short;
            trackImage = response.tracks.data[i].artist.picture_small;
            trackPosition = response.tracks.data[i].position;
            if (trackPosition < 10) {
                trackPosition = "0" + trackPosition;
            }
            trackDuration = (response.tracks.data[i].duration) / 60;
            let minutes = Math.floor(trackDuration);
            let secondes = response.tracks.data[i].duration % 60;
            if (secondes < 10) {
                secondes = "0" + secondes;
            }

            trackArtist = response.tracks.data[i].artist.name;

            //*********************************************************************************//
            // creation des LI avec info et Image du Track
            let myLiTrack = document.createElement('li');
            myLiTrack.className = "elementLi d-flex";
            myLiTrack.style = "align-items : center;"

            // Added the div appearing when hovering on the li elements. -Dylan-
            let myLittleDivHidden = document.createElement('div');
            myLittleDivHidden.className = "hoverli";
            

            

            //**********************************
            // creation des DIV's dedans les LI 
            // du div position    
            let myTrackPosDiv = document.createElement('div');
            myTrackPosDiv.className = "positionAlbumsDiv col-1 position-font d-none d-lg-block";
            myTrackPosDiv.style.width = "50px";

            myTrackPosDiv.innerHTML = trackPosition;
            myLiTrack.appendChild(myTrackPosDiv);

            // du div Image            
            let myTracksImgDiv = document.createElement('div');
            myTracksImgDiv.className = "imgTracksDiv";
            
           


            let myTrackImg = document.createElement('img');
            myTrackImg.src = trackImage;
            myTrackImg.alt = "Illustration des artistes"
            myTracksImgDiv.appendChild(myTrackImg);
            myLiTrack.appendChild(myTracksImgDiv);
            // du div text    
            let myTracksTextDiv = document.createElement('div');
            myTracksTextDiv.className = "textTracksDiv col-8 px-3 flex-shrink-1";
            myTracksTextDiv.innerHTML = "<p>" + trackName + '<br/><span class="blue">' + trackArtist +"</span></p>";
            myLiTrack.appendChild(myTracksTextDiv);
            // du div duration
            let myTracksDurationDiv = document.createElement('div');
            myTracksDurationDiv.className = "durationTracksDiv col-1";
            myTracksDurationDiv.style.textAlign = "right";
            myTracksDurationDiv.style.marginLeft = "50px";
            myTracksDurationDiv.innerHTML = minutes + ":" + secondes;
            myLiTrack.appendChild(myTracksDurationDiv);
            // ajouter li au HTML 
            myUlTracks.appendChild(myLiTrack);
            myLiTrack.appendChild(myLittleDivHidden);
            myLiTrack.addEventListener("mouseover", ()=>{
                myLittleDivHidden.classList.add("hoverli-triggered")
            })
            myLiTrack.addEventListener("mouseout", ()=>{
                myLittleDivHidden.classList.remove("hoverli-triggered")
            })

        }
        // Définition d'éléments Top Ten Albums (Div + ul)
        //
        let myTopAlbums = document.createElement('div');
        myTopAlbums.className = "topAlbumsDiv order-1 col d-flex";


        let myUlAlbums = document.createElement("ul");
        myUlAlbums.className = "myUl";

        myTopAlbums.appendChild(myUlAlbums);
        myTopContainer.appendChild(myTopAlbums);

        console.log(myTopContainer);

        let topAlbumsTitleEmphasis = document.createTextNode("Top 10 ");
        let topAlbumsTitleEnd = document.createTextNode("des albums les plus écoutés");
        let topAlbumsTitle = document.createElement('h3');
        let topAlbumsTitleSpan = document.createElement('span');

        topAlbumsTitleSpan.appendChild(topAlbumsTitleEmphasis);
        topAlbumsTitle.appendChild(topAlbumsTitleSpan);
        topAlbumsTitle.appendChild(topAlbumsTitleEnd);
        
        topAlbumsTitleSpan.className = "first-word-title";
        topAlbumsTitle.className = "order-1";

        myUlAlbums.appendChild(topAlbumsTitle);

        for (let i = 0; i < response.albums.data.length; i++) {

            albumTitle = response.albums.data[i].title;
            albumArtist = response.albums.data[i].artist.name;
            albumImage = response.albums.data[i].cover_small;
            albumPosition = response.albums.data[i].position;
            if (albumPosition < 10) {
                albumPosition = "0" + albumPosition;
            }

            //*********************************************
            // creation des LI avec  la position, l'Image et le text du Album  
            let myLiAlbums = document.createElement('li');
            myLiAlbums.className = "elementLi d-flex";
            myLiAlbums.style = "align-items : center;"
            // Added the div appearing when hovering on the li elements. -Dylan-
            let myLittleDivHidden = document.createElement('div');
            myLittleDivHidden.className = "hoverli";
            // du div position    
            let myAlbumsPosDiv = document.createElement('div');
            myAlbumsPosDiv.className = "positionAlbumsDiv col-1 position-font";
            myAlbumsPosDiv.innerHTML = albumPosition;
            myLiAlbums.appendChild(myAlbumsPosDiv);
            // du div Image            
            let myAlbumsImgDiv = document.createElement('div');
            myAlbumsImgDiv.className = "imgAlbumsDiv";
            
            let myAlbumImg = document.createElement('img');
            myAlbumImg.src = albumImage;
            myAlbumImg.alt = "Illustration des albums"

            myAlbumsImgDiv.appendChild(myAlbumImg);
            myLiAlbums.appendChild(myAlbumsImgDiv);

            // du div text    
            let myAlbumsTextDiv = document.createElement('div');
            myAlbumsTextDiv.className = "textAlbumsDiv col-8 px-3";
            

            myAlbumsTextDiv.innerHTML = "<p>" + albumTitle +'<br/><span class="blue">'  + albumArtist + "</span></p>";
            myLiAlbums.appendChild(myAlbumsTextDiv);
            // ajouter li au HTML avec les infos 
            myUlAlbums.appendChild(myLiAlbums);
            // And appending the hidden div to the same box -Dylan-
            myLiAlbums.appendChild(myLittleDivHidden);
            // This is what triggers the animation when hovering over the li elements -Dylan-
            myLiAlbums.addEventListener("mouseover", ()=>{
                myLittleDivHidden.classList.add("hoverli-triggered")
            })
            myLiAlbums.addEventListener("mouseout", ()=>{
                myLittleDivHidden.classList.remove("hoverli-triggered")
            })
            
        }

});


//    Request for the genre
DZ.api('/genre', function(responseGenre){
    
    let genre = document.querySelector('#genre');
    for ( i = 0; i < responseGenre.data.length; i++){
        let imgGenre = responseGenre.data[i].picture_medium;
        let nameGenre = responseGenre.data[i].name;
        let myImg = document.createElement('img');
        let myTitle = document.createElement('p');
        let myGenre = document.createElement('div');
        myGenre.setAttribute("class", "myDiv swiper-slide");
        myImg.src = imgGenre;
        myImg.alt = "Illustration des genres"
        myTitle.textContent = nameGenre;
        myTitle.className = "small-titles";
        myGenre.appendChild(myImg);
        myGenre.appendChild(myTitle);
        genre.appendChild(myGenre);
    }

});


// Exemple of the second method :
// requeteRadios = new XMLHttpRequest();
// requeteRadios.open(method, urlChart);

// requeteRadios.onreadystatechange = function () {
//     if (requeteRadios.readyState === 4 && requeteRadios.status === 200) {
//         let podcastsDiv = document.querySelector("#main-podcasts");
//         console.log(JSON.parse(requeteRadios.response))
//         let podcastsArray = JSON.parse(requeteRadios.response);
//         for (i = 0; i < 10; i++) {
//             let podcastsImg = podcastsArray.podcasts.data[i].picture_medium;
//             // creating my elements

//             let podcastsBox = document.createElement("div");
//             podcastsBox.style = "position : relative;";
//             podcastsBox.className = "swiper-slide";
//             let podcastsPicture = document.createElement("img");
//             // appending the source of the images in the element
//             podcastsPicture.src = podcastsImg;
//             podcastsPicture.alt = "Illustration des podcasts"
//             let podcastsDescDiv = document.createElement("div");
//             // creating a Node of Text so I can append it later
//             let podcastsDesc = document.createTextNode(podcastsArray.podcasts.data[i].description);



//             // Appending my elements
//             podcastsDiv.appendChild(podcastsBox); // appending the div that will contain the image

//             podcastsBox.appendChild(podcastsPicture); // appending the image in that div
//             podcastsDescDiv.appendChild(podcastsDesc); // appending the textnode created previously in the description div
//             // podcastsDescDiv.style = "position: absolute; bottom: 0;left: 0;height: 0px;width: 100%;transition: .5s ease;background-color: #3bc8e7;overflow: hidden;"
//             podcastsDescDiv.className = "overlay";
//             podcastsBox.appendChild(podcastsDescDiv); // appending the description div to the box div, that one is visible only when mouseover is triggered

//             // animation hover on the podcasts divs
//             podcastsBox.addEventListener("mouseover", () => {
//                 podcastsDescDiv.classList.add("hoverlay");
//             });
//             podcastsBox.addEventListener("mouseout", () => {
//                 podcastsDescDiv.classList.remove("hoverlay");
//             });
            

//         }


//     }
// };
// requeteRadios.send()