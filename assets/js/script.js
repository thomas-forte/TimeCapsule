function createMovieCard() {
    const movieCard = $("<div>").addclass("movieCard");
    const movieCardBody = $("<div>").addClass("card-body");
    const movieTitle = $("<h4>").addClass("movieTitle");
    movieCardBody.append(movieTitle);
    const movieDescription = $("<p>").addClass("movieDesc");
    movieCardBody.append(movieDescription);
    movieCard.append(movieCardBody);
    return movieCard;
}

function createMovieCard() {
    const musicCard = $("<div>").addclass("musicCard");
    const musicCardBody = $("<div>").addClass("card-body");
    const musicTitle = $("<h4>").addClass("musicTitle");
    musicCardBody.append(musicTitle);
    const musicDescription = $("<p>").addClass("musicDesc");
    musicCardBody.append(musicDescription);
    musicCard.append(musicCardBody);
    return musicCard;
}

function createNewsCard() {
    const newsCard = $("<div>").addclass("newsCard");
    const newsCardBody = $("<div>").addClass("card-body");
    const newsTitle = $("<h4>").addClass("newsTitle");
    newsCardBody.append(newsTitle);
    const newsDescription = $("<p>").addClass("newsDesc");
    newsCardBody.append(newsDescription);
    newsCard.append(newsCardBody);
    return newsCard;
}


const button = document.querySelector('#dropdown-button');
button.addEventListener('click', function(){
    document.querySelector('#activator').classList.add('is-active')
    console.log (button);
}  
);



button.addEventListener('blur', function(){
    document.querySelector('#activator').classList.remove('is-active')
    console.log (button);
}  
);