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
//API URLs
articleRequestURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=anAU8Yk0RQpGTel7ZLCurFyigefJRTo3"
bookRequestURL = "https://api.nytimes.com/svc/books/v3/lists/overview.json?bestsellers_date=1997-03-09&api-key=anAU8Yk0RQpGTel7ZLCurFyigefJRTo3"
movieRequestURL = "https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&primary_release_year=1997&sort_by=revenue.desc"
//Movie API Key
movieAPIKey = "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjNjYyNjI4N2M2ZGU3Yzk4ODUwNjVlNTBjN2MyNzY1NCIsInN1YiI6IjY2MDYxN2JmYTg5NGQ2MDE3YzYyNDkxYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.B1Lq6M9BipX3yYlMkNkluP9ljFAU7rklKjW2B6_X0_A"

//once birthday is submitted this function will run
async function birthdaySubmission() {
  fetch(articleRequestURL)
    .then(response => response.json())
    .then(data => {
      const atricles = data.list
      console.log(data.list)
    });

  fetch(bookRequestURL)
    .then(response => response.json())
    .then(data => {
      const books = data.list
      console.log(data.list)
    });
  fetch(moviesRequestURL, movieAPIKey)
    .then(response => response.json())
    .then(data => {
      const movies = data.list
      console.log(data.list)
    });

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
button.addEventListener('click', function () {
  document.querySelector('#activator').classList.add('is-active')
  console.log(button);
}
);



button.addEventListener('blur', function () {
  document.querySelector('#activator').classList.remove('is-active')
  console.log(button);
}
);

