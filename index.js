const API ="https://api.npoint.io/ca25aba3353984d3fa75/films"
let selectedMovie=null


document.addEventListener("DOMContentLoaded", ()=>{

function films(){
fetch(API)
.then((res)=>res.json())
.then((data)=>{

  console.log('sdfsdfsdf', data)



  // ---------------------------------------------

  data.forEach(movieDetails);



  // ----------------------------------------------


})

}
  async function list(){
    const response = await fetch(API)
    const data = await response.json()
    
  createMovieList(data)

}
 
list()

function movieDetails(movie) {
  console.log('sdgfdsfesfwefsd', movie)
  const leftSection = document.querySelector("#movie-titles");
  const movieNameButton = document.createElement("button");
  movieNameButton.innerHTML = movie.title;
  leftSection.appendChild(movieNameButton);
  movieNameButton.addEventListener("click", () => {
    selectedMovie = movie;
    showMovie(movie);
  });
}


function showMovie(movie) {

  console.log('sdfsdfsdfdh', selectedMovie)
  const posters = selectedMovie.poster
  const capacity = selectedMovie.capacity
  const runtime = selectedMovie.runtime
  const showtime = selectedMovie.showtime
  const title = selectedMovie.title
  const descriptions = selectedMovie.description
  const tickets_sold = selectedMovie.tickets_sold
 
 const poster = document.getElementById("image")
 poster.src = posters
 const description = document.getElementById("description")
 
 description.innerHTML = `
 <li>title: ${title}</li>
 <li>showtime: ${showtime}</li>
 <li>capacity: ${capacity}</li>
 <li>ticket_sold: ${tickets_sold}</li>
 <li>runtime: ${runtime}</li>
 <li>descriptions: ${descriptions}</li>
 
 <li><button id="buy-ticket">buy ticket </button></li>
 
 `
 const buyTicketButton = document.getElementById("buy-ticket")
 buyTicketButton.addEventListener("click", () => {

  console.log('sdfsdfsdfdh', selectedMovie)
  selectedMovie.tickets_sold = selectedMovie.tickets_sold - 1

  showMovie(selectedMovie)
});
}




function buyTicket(menu){
  console.log('sdfvsdvcsdfsd')
    
}

films()
});

