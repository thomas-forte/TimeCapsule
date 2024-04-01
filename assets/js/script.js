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
};
//function changeColor() {
  //var gfg = document.getElementById("gfg");
 //gfg.style.color = "green";
//}

//Articles API
https://api.nytimes.com/svc/archive/v1/{year}/{month}.json

articleRequestURL = "https://api.nytimes.com/svc/archive/v1/{year}/{month}.json"
bookRequestURL = "https://api.nytimes.com/svc/books/v3/lists/overview.json"
const nytimesAPIkey = anAU8Yk0RQpGTel7ZLCurFyigefJRTo3

fetch(articleRequestURL)
  const articles = await fetch ("https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=anAU8Yk0RQpGTel7ZLCurFyigefJRTo3")

fetch(bookRequestURL) 
  const books = await fetch ("https://api.nytimes.com/svc/books/v3/lists/overview.json?api-key=anAU8Yk0RQpGTel7ZLCurFyigefJRTo3")

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

