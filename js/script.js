const requete = new XMLHttpRequest();
const method = 'GET';
const urlChart = "https://api.deezer.com/chart";
requete.open(method, urlChart);



requete.onreadystatechange = function(){
    let artistBanner = document.querySelector("#artist-banner")
    let topArtist = document.querySelector("#locate-artist-name")
    if(requete.readyState === 4 && requete.status === 200){
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

requeteRadios.onreadystatechange = function(){
    if(requeteRadios.readyState === 4 && requeteRadios.status === 200){
        let podcastsDiv = document.querySelector("#main-podcasts");
        console.log(JSON.parse(requeteRadios.response))
        let podcastsArray = JSON.parse(requeteRadios.response);
        for(i = 0; i < 10; i++){
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
            

            podcastsBox.addEventListener("mouseover", ()=>{
                podcastsDescDiv.classList.add("hoverlay");
            });
            podcastsBox.addEventListener("mouseout", ()=>{
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

requeteGenre.onreadystatechange = function(){
    if(requeteGenre.readyState === 4 && requeteGenre.status === 200){
        // console.log(JSON.parse(requeteGenre.response))
        const genreArray = JSON.parse(requeteGenre.responseText)
            for (let i = 0; i < genreArray.data.length ; i++) {
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

requetePlaylist.onreadystatechange = function(){
    if(requetePlaylist.readyState === 4 && requetePlaylist.status === 200){
        // console.log(JSON.parse(requetePlaylist.response))
        const playlistArray = JSON.parse(requetePlaylist.responseText)
            for (let i = 0; i < playlistArray.data.length ; i++) {
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
