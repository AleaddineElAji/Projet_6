const requeteGenre = new XMLHttpRequest();
const method = 'GET';
const urlGenre = "https://api.deezer.com/genre";


requeteGenre.open(method, urlGenre);

requeteGenre.onreadystatechange = function(){
    if(requeteGenre.readyState === 4 && requeteGenre.status === 200){
        console.log(JSON.parse(requeteGenre.response))
        const genreArray = JSON.parse(requeteGenre.responseText)
            for (let i = 0; i < genreArray.data.length ; i++) {
                const datataPicture = genreArray.data[i].picture;
                const datataName = genreArray.data[i].name;
                let myImg = document.createElement('img');
                let myTitle = document.createElement('p');
                let myGenre = document.createElement('div');
                myGenre.setAttribute("id", "MyDiv"+i);
                myImg.src = datataPicture;
                myTitle.textContent = datataName;
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
        const genreArray = JSON.parse(requetePlaylist.responseText)
            for (let i = 0; i < genreArray.data.length ; i++) {
                const datataPicture = genreArray.data[i].picture;
                const datataName = genreArray.data[i].title;
                let myImgPlaylist = document.createElement('img');
                let myTitlePlaylist = document.createElement('p');
                let myPlaylist = document.createElement('div');
                myPlaylist.setAttribute("id", "MyDiv"+i);
                myImgPlaylist.src = datataPicture;
                myTitlePlaylist.textContent = datataName;
                myPlaylist.appendChild(myImgPlaylist);
                myPlaylist.appendChild(myTitlePlaylist);
                playlist.appendChild(myPlaylist);
            }
    }

};
requetePlaylist.send();

