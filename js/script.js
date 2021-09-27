const requeteMainArtist = new XMLHttpRequest();
const method = 'GET';
const urlChart = "https://api.deezer.com/chart";
requeteMainArtist.open(method, urlChart);



requeteMainArtist.onreadystatechange = function(){
    let artistBanner = document.querySelector("#artist-banner")
    let topArtist = document.querySelector("#locate-artist-name")
    if(requeteMainArtist.readyState === 4 && requeteMainArtist.status === 200){
        const mainArtist = JSON.parse(requeteMainArtist.responseText)
    
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
requeteMainArtist.send()

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
            podcastsDescDiv.className = "overlay"
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