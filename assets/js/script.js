
// Get the #1 song for a given day
GET /:1991/:june/:19

// Returns:
{
  "name": "Name of hit song",
  "artist": "Name of Artist",
  "startDate": "(first day on chart, in UTC)",
  "endDate": "(last day on chart, in UTC)"
}

function dynamicColors() { // Returns a date-based color scheme
  element.style.color = "";
}
//function changeColor() {
  //var gfg = document.getElementById("gfg");
 //gfg.style.color = "green";
//}

//Articles API
https://api.nytimes.com/svc/archive/v1/{year}/{month}.json

articleRequestURL = "https://api.nytimes.com/svc/archive/v1/{year}/{month}.json"
bookRequestURL = "https://api.nytimes.com/svc/books/v3/lists/overview.json"
const nytimesAPIkey = anAU8Yk0RQpGTel7ZLCurFyigefJRTo3

fetch(articleRequestURL) {
  const articles = await fetch ("https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=anAU8Yk0RQpGTel7ZLCurFyigefJRTo3")

};

fetch(bookRequestURL) {
  const books = await fetch ("https://api.nytimes.com/svc/books/v3/lists/overview.json?api-key=anAU8Yk0RQpGTel7ZLCurFyigefJRTo3")
}
=======
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

