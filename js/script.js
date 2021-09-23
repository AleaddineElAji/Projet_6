const requete = new XMLHttpRequest();
const method = 'GET';
// const urlGenre = "https://cors-anywhere.herokuapp.com/https://api.deezer.com/genre"


// requete.open(method, urlGenre)

// requete.onreadystatechange = function(){
//    console.log(requete.readyState);
//    console.log(requete.status)
//    if(requete.readyState === 4 && requete.status === 200){
//        console.log(JSON.parse(requete.responseText))
//        const genreArray = JSON.parse(requete.responseText)
//        console.log(genreArray.data.length)
//        for(i = 0; i < genreArray.data.length; i++ ){
//             genreLi = document.createElement("li");
//             genreLi.classList = "list";

//             genreName = requete.data[i].name;
//             let divGenre = document.querySelector("#artist-banner");
//            genreLi.innerHTML = genreName
//             divGenre.appendChild(genreImg)


//        }
       
//    } else {
//        console.log("Une erreur est survenue")
//    }
    
// };
// requete.send()

const urlArtist = "https://api.deezer.com/chart";
requete.open(method, urlArtist);



requete.onreadystatechange = function(){
    let artistBanner = document.querySelector("#artist-banner")
    let topArtist = document.querySelector("#locate-artist-name")
    if(requete.readyState === 4 && requete.status === 200){
        const mainArtist = JSON.parse(requete.responseText)
        console.log(JSON.parse(requete.responseText))

        console.log(mainArtist.artists.data[1].name)
        console.log(mainArtist.artists.data[1].picture_xl)

        let myArtistName = mainArtist.artists.data[1].name;
        myArtistPicture = mainArtist.artists.data[1].picture_xl;
        artistBanner.style.backgroundImage = "url(" + myArtistPicture + ")";
        let nameOfArtist = document.createElement("div")
        nameOfArtist.classList = "discover-artist"
        nameOfArtist.innerHTML = myArtistName.toUpperCase();
        topArtist.appendChild(nameOfArtist);
       

    }
};
requete.send()

