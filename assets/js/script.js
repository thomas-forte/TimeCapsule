
const cardContainer = document.getElementById('#card-container');

// Colors and font selection
function renderStyles() {
    if (year >= 1950 && year < 1960) {
        $(':root').css({'--primary-color': '#3EADD2', 
                        '--secondary-color': '#F2CB05', 
                        '--accent-color': '#F28157',
                        '--text-color': '#031C26',
                        '--background-color': '#FFF7EF',
                        '--heading': 'Carter One',
                        '--body': 'Truculenta'});
    }

    if (year >= 1960 && year < 1970) {
        $(':root').css({'--primary-color': '#FF8636', 
                        '--secondary-color': '#54BCD6', 
                        '--accent-color': '#9BBD25',
                        '--text-color': '#310C0B',
                        '--background-color': '#FFE101',
                        '--heading': 'Spicy Rice',
                        '--body': 'Life Savers'});
    }

    if (year >= 1970 && year < 1980) {
        $(':root').css({'--primary-color': '#E59F23', 
                        '--secondary-color': '#7E9636', 
                        '--accent-color': '#633B07',
                        '--text-color': '#3C2000',
                        '--background-color': '#E2C6A7',
                        '--heading': 'Bungee Shade',
                        '--body': 'Michroma'});
    }

    if (year >= 1980 && year < 1990) {
        $(':root').css({'--primary-color': '#FA8057', 
                        '--secondary-color': '#E754B0', 
                        '--accent-color': '#F3D751',
                        '--text-color': '#8CA9FD',
                        '--background-color': '#2B0D29',
                        '--heading': 'Monoton',
                        '--body': 'Orbitron'});
    }

    if (year >= 1990 && year < 2000) {
        $(':root').css({'--primary-color': '#5ABFAD', 
                        '--secondary-color': '#D93682', 
                        '--accent-color': '#5D3B8C',
                        '--text-color': '#FDB64C',
                        '--background-color': '#161616',
                        '--heading': 'Yuji Boku',
                        '--body': 'Special Elite'});    
    }

    if (year >= 2000 && year < 2010) {
        $(':root').css({'--primary-color': '#5E88BA', 
                        '--secondary-color': '#B4CBE4', 
                        '--accent-color': '#D6D6D6',
                        '--text-color': '#112236',
                        '--background-color': '#FCFBFC',
                        '--heading': 'Cute Font',
                        '--body': 'Jura'});    
    }

    if (year >= 2010 && year < 2020) {
        $(':root').css({'--primary-color': '#', 
                        '--secondary-color': '#', 
                        '--accent-color': '#',
                        '--text-color': '#',
                        '--background-color': '#',
                        '--heading': '',
                        '--body': ''});    
    }

    if (year >= 2020) {
        $(':root').css({'--primary-color': '#', 
                        '--secondary-color': '#', 
                        '--accent-color': '#',
                        '--text-color': '#',
                        '--background-color': '#',
                        '--heading': '',
                        '--body': ''});    
    }
};

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
};


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
};


function createNewsCard(News) {
    const newsCard = $("<div>").addclass("newsCard");
    const newsCardBody = $("<div>").addClass("card-body");
    const newsTitle = $("<h4>").addClass("newsTitle").text(News);
    newsCardBody.append(newsTitle);
    newsCard.append(newsCardBody);
    cardContainer.append(newsCard);
    return newsCard;
};



// If questions about below, see Tess :)

//DROPDOWN:

//Toggle dropdown on and off
var button = document.querySelector('#dropdown-button');
button.addEventListener('click', function(){
    document.querySelector('#activator').classList.add('is-active')
    console.log (button);
   

//     document.querySelector('#activator').classList.remove('is-active')
//     console.log (button);


// }  
});



button.addEventListener('blur', function () {
  document.querySelector('#activator').classList.remove('is-active')
  console.log(button);
}

);




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

 



$(function () {
    $('#datepicker').datepicker({
      changeMonth: true,
      changeYear: true,
    });
  });


// To close modal by means of the X in upper-right corner
var modalClose = document.querySelector(".modal-close")
modalClose.addEventListener('click', function(){
    document.querySelector('.modal').classList.remove('is-active');
    
})


