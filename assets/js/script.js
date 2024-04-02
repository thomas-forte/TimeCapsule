const cardContainer = $('#card-container')

    
    

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
// const nytimesAPIkey = anAU8Yk0RQpGTel7ZLCurFyigefJRTo3

// fetch(articleRequestURL) {
//   const articles = await fetch ("https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=anAU8Yk0RQpGTel7ZLCurFyigefJRTo3")

// };

// fetch(bookRequestURL) {
//   const books = await fetch ("https://api.nytimes.com/svc/books/v3/lists/overview.json?api-key=anAU8Yk0RQpGTel7ZLCurFyigefJRTo3")
// }
const movie = {
  title: "Example Movie",
  description: "Example Description Example Description Example Description Example Description Example Description Example Description"
};
function createMovieCard(movie) {
  
    const movieCard = $("<div>").addClass("card").attr('id', 'movieCard');
    const movieCardBody = $("<div>").addClass("cardBody");
    const movieHeader = $("<h3>").addClass("movieHeader").text('Top Movie The Year You Were Born:');
    const movieTitle = $("<h4>").addClass("movieTitle").text(movie.title);
    const movieDescription = $("<p>").addClass("movieDesc").text(movie.description);

    movieCardBody.append(movieHeader, movieTitle, movieDescription);
    movieCard.append(movieCardBody);
    cardContainer.append(movieCard);

    return movieCard;
}
createMovieCard(movie);


    const book = {
    title: "Example Book" ,
    description: "Example Description Example Description Example Description Example Description Example Description Example Description"

}
function createBookCard(book) {
    const bookCard = $("<div>").addClass("card").attr('id', 'bookCard');
    const bookCardBody = $("<div>").addClass("cardBody");
    const bookHeader = $("<h3>").addClass("bookHeader").text('Top Book The Year You Were Born:');
    const bookTitle = $("<h4>").addClass("bookTitle").text(book.title);
    const bookDescription = $("<p>").addClass("bookDesc").text(book.description);

    bookCardBody.append(bookHeader, bookTitle, bookDescription);
    bookCard.append(bookCardBody);
    cardContainer.append(bookCard);

    return bookCard;
}
createBookCard(book)

let News = "Example News Headline"

function createNewsCard(News) {
    const newsCard = $("<div>").addClass("newsCard");
    const newsCardBody = $("<div>").addClass("cardBody");
    const newsHeader = $("<h3>").addClass("newsHeader").text('Headline From The Day You Were Born:');
    const newsTitle = $("<h4>").addClass("newsTitle").text(News);

    newsCardBody.append(newsHeader, newsTitle);
    newsCard.append(newsCardBody);
    cardContainer.append(newsCard);
    return newsCard;
}
createNewsCard(News)

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

