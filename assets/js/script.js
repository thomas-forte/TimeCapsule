// const cardContainer = document.getElementById('#card-container')
//  let Movie = {
//      title: ,
//      description:
//  }
//      let Book = {
//      title: ,
//      description:
//  }
//      let News = 
    

//  Get the #1 song for a given day
//  GET /:1991/:june/:19

//  // Returns:
//  {
//    "name": "Name of hit song",
//   "artist": "Name of Artist",
//   "startDate": "(first day on chart, in UTC)",
//   "endDate": "(last day on chart, in UTC)"
//  }

// function dynamicColors() { // Returns a date-based color scheme
//   element.style.color = "";
// }
// function changeColor() {
// var gfg = document.getElementById("gfg");
// gfg.style.color = "green";
// }

// Articles API
// https://api.nytimes.com/svc/archive/v1/{year}/{month}.json

// articleRequestURL = "https://api.nytimes.com/svc/archive/v1/{year}/{month}.json"
// bookRequestURL = "https://api.nytimes.com/svc/books/v3/lists/overview.json"
// const nytimesAPIkey = anAU8Yk0RQpGTel7ZLCurFyigefJRTo3

// fetch(articleRequestURL) {
//   const articles = await fetch ("https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=anAU8Yk0RQpGTel7ZLCurFyigefJRTo3")

// };

// fetch(bookRequestURL) {
//  const books = await fetch ("https://api.nytimes.com/svc/books/v3/lists/overview.json?api-key=anAU8Yk0RQpGTel7ZLCurFyigefJRTo3")
// }

// function createMovieCard(Movie) {
//     const movieCard = $("<div>").addclass("movieCard");
//     const movieCardBody = $("<div>").addClass("card-body");
//     const movieTitle = $("<h4>").addClass("movieTitle").text(Movie.title);
//     movieCardBody.append(movieTitle);
//     const movieDescription = $("<p>").addClass("movieDesc").text(Movie.description);
//     movieCardBody.append(movieDescription);
//     movieCard.append(movieCardBody);
//     cardContainer.append(movieCard);
//     return movieCard;
// }


// function createBookCard(Book) {
//     const bookCard = $("<div>").addclass("bookCard");
//     const bookCardBody = $("<div>").addClass("card-body");
//     const bookTitle = $("<h4>").addClass("bookTitle").text(Book.title);
//     bookCardBody.append(bookTitle);
//     const bookDescription = $("<p>").addClass("bookDesc").text(Book.description);
//     bookCardBody.append(bookDescription);
//     bookCard.append(bookCardBody);
//     cardContainer.append(bookCard);
//     return bookCard;
// }


// function createNewsCard(News) {
//     const newsCard = $("<div>").addclass("newsCard");
//     const newsCardBody = $("<div>").addClass("card-body");
//     const newsTitle = $("<h4>").addClass("newsTitle").text(News);
//     newsCardBody.append(newsTitle);
//     newsCard.append(newsCardBody);
//     cardContainer.append(newsCard);
//     return newsCard;
// }





//DROPDOWN:

//Toggle dropdown on and off
var button = document.querySelector('#dropdown-button');
button.addEventListener('click', function(){
const dropdown = document.querySelector('#activator');
dropdown.classList.toggle('is-active');

});




//MODAL:
// Modal open
var modal = document.querySelector('#js-modal-trigger');
modal.addEventListener('click', function(){
    document.querySelector('.modal').classList.add('is-active');
    event.preventDefault();

});
    
    
const formEl = document.querySelector('#birthdate-form');
const dateInputEl = document.querySelector('#datepicker');
submitButton = document.querySelector('#submit-date');
const handleFormSubmit = function (event) {
    event.preventDefault();
    var firstGetItem = JSON.parse(localStorage.getItem('birthdates'));
    if (!Array.isArray(firstGetItem))  {
        firstGetItem = [];
    }

    const dateInput = dateInputEl.value;
    console.log(dateInput);
    firstGetItem.push(dateInput);
    localStorage.setItem('birthdates', JSON.stringify(firstGetItem));
    return;
    }

formEl.addEventListener('submit', handleFormSubmit);     

// Closes Modal on Submit
submitButton.addEventListener('click', function(){
    document.querySelector('.modal').classList.remove('is-active');
});
   

//Closes Modal on Cancel

const cancelButton = document.querySelector('#cancel-button');
    cancelButton.addEventListener('click', function(){
        event.preventDefault();
        document.querySelector('.modal').classList.remove('is-active');
});

// let cancelClicked = false;


// function runScript ()
// for (let i = 0; i < 10000; i++) {
//     if cancelClicked) {
//         updateOutput('Maybe Next Time!');
//         return;
//     }
// }

// function cancelScript(){
//     cancelClicked = true;
// }

// function(){
//     document.querySelector('.modal').classList.remove('is-active'); 



$(function () {
    $('#datepicker').datepicker({
      changeMonth: true,
      changeYear: true,
      minDate: 0,
    });
  });

  


// To close modal by means of the X in upper-right corner
var modalClose = document.querySelector(".modal-close")
modalClose.addEventListener('click', function(){
    document.querySelector('.modal').classList.remove('is-active');
    
})


