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