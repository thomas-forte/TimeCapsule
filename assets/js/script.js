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