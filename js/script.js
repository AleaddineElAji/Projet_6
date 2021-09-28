const requete = new XMLHttpRequest();
const method = 'GET';
const urlChart = "https://api.deezer.com/chart";
requete.open(method, urlChart);



requete.onreadystatechange = function () {
    let artistBanner = document.querySelector("#artist-banner")
    let topArtist = document.querySelector("#locate-artist-name")
    if (requete.readyState === 4 && requete.status === 200) {
        const mainArtist = JSON.parse(requete.responseText)

        // console.log(mainArtist.artists.data[1].name)
        // console.log(mainArtist.artists.data[1].picture_xl)

        let myArtistName = mainArtist.artists.data[1].name;
        myArtistPicture = mainArtist.artists.data[1].picture_xl;
        artistBanner.style.backgroundImage = "url(" + myArtistPicture + ")";
        let nameOfArtist = document.createElement("div")
        nameOfArtist.classList = "discover-artist"
        nameOfArtist.innerHTML = myArtistName.toUpperCase();
        topArtist.appendChild(nameOfArtist);


    } else {
        console.log("Une erreur est survenue")
    }
};
requete.send()

requeteRadios = new XMLHttpRequest();
requeteRadios.open(method, urlChart);

requeteRadios.onreadystatechange = function () {
    if (requeteRadios.readyState === 4 && requeteRadios.status === 200) {
        let podcastsDiv = document.querySelector("#main-podcasts");
        console.log(JSON.parse(requeteRadios.response))
        let podcastsArray = JSON.parse(requeteRadios.response);
        for (i = 0; i < 10; i++) {
            let podcastsImg = podcastsArray.podcasts.data[i].picture_medium;
            // creating my elements

            let podcastsBox = document.createElement("div");
            podcastsBox.style = "position : relative;";
            podcastsBox.className = "swiper-slide";
            let podcastsPicture = document.createElement("img");
            // appending the source of the images in the element
            podcastsPicture.src = podcastsImg;
            let podcastsDescDiv = document.createElement("div");
            // creating a Node of Text so I can append it later
            let podcastsDesc = document.createTextNode(podcastsArray.podcasts.data[i].description);



            // Appending my elements
            podcastsDiv.appendChild(podcastsBox); // appending the div that will contain the image

            podcastsBox.appendChild(podcastsPicture); // appending the image in that div
            podcastsDescDiv.appendChild(podcastsDesc); // appending the textnode created previously in the description div
            // podcastsDescDiv.style = "position: absolute; bottom: 0;left: 0;height: 0px;width: 100%;transition: .5s ease;background-color: #3bc8e7;overflow: hidden;"
            podcastsDescDiv.className = "overlay";
            podcastsBox.appendChild(podcastsDescDiv); // appending the description div to the box div, that one is visible only when mouseover is triggered


            podcastsBox.addEventListener("mouseover", () => {
                podcastsDescDiv.classList.add("hoverlay");
            });
            podcastsBox.addEventListener("mouseout", () => {
                podcastsDescDiv.classList.remove("hoverlay");
            });


        }


    }
};
requeteRadios.send()

// ALAEDIN 
const requeteGenre = new XMLHttpRequest();
const urlGenre = "https://api.deezer.com/genre";


requeteGenre.open(method, urlGenre);

requeteGenre.onreadystatechange = function () {
    if (requeteGenre.readyState === 4 && requeteGenre.status === 200) {
        // console.log(JSON.parse(requeteGenre.response))
        const genreArray = JSON.parse(requeteGenre.responseText)
        for (let i = 0; i < genreArray.data.length; i++) {
            const datataPicture = genreArray.data[i].picture_medium;
            const datataName = genreArray.data[i].name;
            let myImg = document.createElement('img');
            let myTitle = document.createElement('p');
            let myGenre = document.createElement('div');
            myGenre.setAttribute("class", "myDiv swiper-slide");
            myImg.src = datataPicture;
            myTitle.textContent = datataName;
            myTitle.className = "small-titles";
            myGenre.appendChild(myImg);
            myGenre.appendChild(myTitle);
            genre.appendChild(myGenre);
        }
    }

};
requeteGenre.send();

const requetePlaylist = new XMLHttpRequest();
const urlPlaylist = "https://api.deezer.com/chart/0/playlists";


requetePlaylist.open(method, urlPlaylist);

requetePlaylist.onreadystatechange = function () {
    if (requetePlaylist.readyState === 4 && requetePlaylist.status === 200) {
        // console.log(JSON.parse(requetePlaylist.response))
        const playlistArray = JSON.parse(requetePlaylist.responseText)
        for (let i = 0; i < playlistArray.data.length; i++) {
            const datataPicture = playlistArray.data[i].picture_medium;
            const datataName = playlistArray.data[i].title;
            let myImgPlaylist = document.createElement('img');
            let myTitlePlaylist = document.createElement('p');
            let myPlaylist = document.createElement('div');
            myPlaylist.setAttribute("class", "myDiv swiper-slide");
            myImgPlaylist.src = datataPicture;
            myTitlePlaylist.textContent = datataName;
            myTitlePlaylist.className = "small-titles"
            myPlaylist.appendChild(myImgPlaylist);
            myPlaylist.appendChild(myTitlePlaylist);
            playlist.appendChild(myPlaylist);
        }
    }

};
requetePlaylist.send();

// Alfonso

//****************************************************************************************//
// request APIS Deezer
//
//****************************************************************************************//

// Définition d'éléments communs au deux Top Ten's
//
let mySection = document.getElementById('tracklist');
let myTopContainer = document.createElement('div');
myTopContainer.classList.add("d-flex", "flex-column", "flex-lg-row");

mySection.appendChild(myTopContainer);
//****************************************************************************************//
// Définition d'éléments Top Ten Albums (Div + ul)
//
let myTopAlbums = document.createElement('div');
myTopAlbums.className = "topAlbumsDiv";

myTopAlbums.className += " order-1";

myTopAlbums.classList.add("col", "d-flex");

let myUlAlbums = document.createElement("ul");
myUlAlbums.className = "myUl";

myTopAlbums.appendChild(myUlAlbums);
myTopContainer.appendChild(myTopAlbums);

//****************************************************************************************//
// Définition d'éléments Top Ten Tracks (Div + ul) 
//
let myTopTracks = document.createElement('div');
myTopTracks.className = "topTracksDiv";
myTopTracks.classList.add("col", "d-flex");

let myUlTracks = document.createElement("ul");
myUlTracks.className = "myUl";

myTopTracks.appendChild(myUlTracks);
myTopContainer.appendChild(myTopTracks);


//****************************************************************************************//
// Requette à API Deezer pour prendre tous les lTop-ten Lists (Charts)
//
const requeteChart = new XMLHttpRequest();
const url = "https://cors-anywhere.herokuapp.com/https://api.deezer.com/chart/"

requeteChart.open(method, url)
requeteChart.responseType = "json"
requeteChart.send();
requeteChart.onload = function () {

    console.log(requeteChart.readyState)

    if (requeteChart.readyState == 4) {
        if (requeteChart.status == 200) {

            const monArray = requeteChart.response;

            //****************************************************************************************//
            // Top Ten Tracks  

            console.log(monArray);
            console.log(monArray.tracks.data)

            for (let i = 0; i < monArray.tracks.data.length; i++) {

                trackName = monArray.tracks.data[i].title_short;
                trackImage = monArray.tracks.data[i].artist.picture_small;
                trackPosition = monArray.tracks.data[i].position;
                if (trackPosition < 10) {
                    trackPosition = "0" + trackPosition;
                }
                trackDuration = (monArray.tracks.data[i].duration) / 60;
                let minutes = Math.floor(trackDuration);
                let secondes = monArray.tracks.data[i].duration % 60;
                if (secondes < 10) {
                    secondes = "0" + secondes;
                }

                trackArtist = monArray.tracks.data[i].artist.name;

                //*********************************************************************************//
                // creation des LI avec info et Image du Track
                let myLiTrack = document.createElement('li');
                myLiTrack.className = "elementLi";
                myLiTrack.style = "align-items : center;"
                myLiTrack.classList.add("d-flex");
                myLiTrack.style.flexDirection = "row";
                let myLittleDivHidden = document.createElement('div');
                myLittleDivHidden.className = "hoverli";
                

                

                //**********************************
                // creation des DIV's dedans les LI 
                // du div position    
                let myTrackPosDiv = document.createElement('div');
                myTrackPosDiv.className = "positionAlbumsDiv";
                myTrackPosDiv.classList.add("col-1", "position-font");
                myTrackPosDiv.style.width = "50px";

                myTrackPosDiv.innerHTML = trackPosition;
                myLiTrack.appendChild(myTrackPosDiv);

                // du div Image            
                let myTracksImgDiv = document.createElement('div');
                myTracksImgDiv.className = "imgTracksDiv";
                
               


                let myTrackImg = document.createElement('img');
                myTrackImg.src = trackImage;

                myTracksImgDiv.appendChild(myTrackImg);
                myLiTrack.appendChild(myTracksImgDiv);

                // du div text    
                let myTracksTextDiv = document.createElement('div');
                
                myTracksTextDiv.classList.add("textTracksDiv", "col-8", "px-3", "flex-shrink-1");
                

                myTracksTextDiv.innerHTML = "<p>" + trackName + '<br/><span class="blue">' + trackArtist +"</span></p>";


                myLiTrack.appendChild(myTracksTextDiv);

                // du div duration
                let myTracksDurationDiv = document.createElement('div');
                myTracksDurationDiv.classList.add("col-1");
                myTracksDurationDiv.className = "durationTracksDiv";
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

            //****************************************************************************************//
            // Top Ten Albums   
            console.log(monArray);
            console.log(monArray.albums.data)

            for (let i = 0; i < monArray.albums.data.length; i++) {

                albumTitle = monArray.albums.data[i].title;
                albumArtist = monArray.albums.data[i].artist.name;
                albumImage = monArray.albums.data[i].cover_small;
                albumPosition = monArray.albums.data[i].position;
                if (albumPosition < 10) {
                    albumPosition = "0" + albumPosition;
                }

                //*********************************************
                // creation des LI avec  la position, l'Image et le text du Album  
                let myLiAlbums = document.createElement('li');
                myLiAlbums.className = "elementLi";
                myLiAlbums.style = "align-items : center;"
                myLiAlbums.classList.add("d-flex");
                myLiAlbums.style.flexDirection = "row";
                let myLittleDivHidden = document.createElement('div');
                myLittleDivHidden.className = "hoverli";
                

                // du div position    
                let myAlbumsPosDiv = document.createElement('div');
                myAlbumsPosDiv.className = "positionAlbumsDiv";
                myAlbumsPosDiv.classList.add("col-1", "position-font");
                // myAlbumsPosDiv.style.width="50px";

                myAlbumsPosDiv.innerHTML = albumPosition;
                myLiAlbums.appendChild(myAlbumsPosDiv);

                // du div Image            
                let myAlbumsImgDiv = document.createElement('div');
                myAlbumsImgDiv.className = "imgAlbumsDiv";
                
                // myAlbumsImgDiv.style.width="110px";

                let myAlbumImg = document.createElement('img');
                myAlbumImg.src = albumImage;

                myAlbumsImgDiv.appendChild(myAlbumImg);
                myLiAlbums.appendChild(myAlbumsImgDiv);

                // du div text    
                let myAlbumsTextDiv = document.createElement('div');
                myAlbumsTextDiv.className = "textAlbumsDiv";
                myAlbumsTextDiv.classList.add("col-8");
                myAlbumsTextDiv.classList.add("px-3");
                // myAlbumsTextDiv.style.width="295px";

                myAlbumsTextDiv.innerHTML = "<p>" + albumTitle +'<br/><span class="blue">'  + albumArtist + "</span></p>";
                myLiAlbums.appendChild(myAlbumsTextDiv);

                // ajouter li au HTML avec les infos 
                myUlAlbums.appendChild(myLiAlbums);
                myLiAlbums.appendChild(myLittleDivHidden);

                myLiAlbums.addEventListener("mouseover", ()=>{
                    myLittleDivHidden.classList.add("hoverli-triggered")
                })
                myLiAlbums.addEventListener("mouseout", ()=>{
                    myLittleDivHidden.classList.remove("hoverli-triggered")
                })
                
            }



        }
    }
};

