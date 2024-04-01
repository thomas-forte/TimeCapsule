const cardContainer = document.getElementById('#card-container')
// let Movie = {
//     title: ,
//     description:
// }
//     let Book = {
//     title: ,
//     description:
// }
//     let News = 
//     

// Get the #1 song for a given day
// GET /:1991/:june/:19

// // Returns:
// {
//   "name": "Name of hit song",
//   "artist": "Name of Artist",
//   "startDate": "(first day on chart, in UTC)",
//   "endDate": "(last day on chart, in UTC)"
// }

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
  const articles = await fetch ("https://api.nytimes.com/svc/search/v2/articlesearch.json?fq=pub_date=${birthday}&api-key=anAU8Yk0RQpGTel7ZLCurFyigefJRTo3")
  fetch ("https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=anAU8Yk0RQpGTel7ZLCurFyigefJRTo3")
    .then(response => response.json())
    .then(data => {
      const atricles = data.list
    });
};

fetch(bookRequestURL) {
  const books = await fetch ("https://api.nytimes.com/svc/books/v3/lists/overview.json?published_date=${birthday}&api-key=anAU8Yk0RQpGTel7ZLCurFyigefJRTo3")
  fetch ("https://api.nytimes.com/svc/books/v3/lists/overview.json?bestsellers_date=1997-03-09&api-key=anAU8Yk0RQpGTel7ZLCurFyigefJRTo3")
  .then(response => response.json())
  .then(data => {
    const books = data.list
  })
}

function createMovieCard(Movie) {
    const movieCard = $("<div>").addclass("movieCard");
    const movieCardBody = $("<div>").addClass("card-body");
    const movieTitle = $("<h4>").addClass("movieTitle").text(Movie.title);
    movieCardBody.append(movieTitle);
    const movieDescription = $("<p>").addClass("movieDesc").text(Movie.description);
    movieCardBody.append(movieDescription);
    movieCard.append(movieCardBody);
    cardContainer.append(movieCard);
    return movieCard;
}



function createBookCard(Book) {
    const bookCard = $("<div>").addclass("bookCard");
    const bookCardBody = $("<div>").addClass("card-body");
    const bookTitle = $("<h4>").addClass("bookTitle").text(Book.title);
    bookCardBody.append(bookTitle);
    const bookDescription = $("<p>").addClass("bookDesc").text(Book.description);
    bookCardBody.append(bookDescription);
    bookCard.append(bookCardBody);
    cardContainer.append(bookCard);
    return bookCard;
}


function createNewsCard(News) {
    const newsCard = $("<div>").addclass("newsCard");
    const newsCardBody = $("<div>").addClass("card-body");
    const newsTitle = $("<h4>").addClass("newsTitle").text(News);
    newsCardBody.append(newsTitle);
    newsCard.append(newsCardBody);
    cardContainer.append(newsCard);
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

