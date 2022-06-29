//Pwede baguhin yung name ng variable
const form = document.getElementById("search_form");
const row = document.querySelector(".row");

const API_KEY= "1bfdbff05c2698dc917dd28c08d41096";
const BASE_URL= "https://api.themoviedb.org/3/";
const IMAGE_BASE_URL= "http://image.tmdb.org/t/p/w500";



//Pang kuha ng data sa API
const getUpcomingMovie = async () => {
    let data = [];

    const response = await axios.get(`${BASE_URL}movie/upcoming?api_key=${API_KEY}&language=en-US&page=1`);
    const responseData = response.data;
    data = responseData;
 
    movieListTemplate(data.results);
 };

 getUpcomingMovie();



 //Code para sa search
 const searchFunction = async (event) => {
    event.preventDefault();

    let data = [];

    let query = document.getElementById("search").value;
    const response  = await axios.get(`${BASE_URL}search/movie?api_key=${API_KEY}&query=${query}`);
    const responseData = response.data;
    data = responseData;
 
    movieListTemplate(data.results);
 };
 
 form.addEventListener("submit", searchFunction);



 //Dito na yung design para sa list ng mga movie
 const movieListTemplate = (data) => {
    row.innerHTML = data
       .map((movie) => {
          return `
             <a href="singleMovie.html?movie=${movie.id}" onclick="return false" ondblclick="location=this.href">
                 <h3>${movie.title}</h3>
             </a>
            `;
       })
       .join("");
 };


 //Yung nasa href sa A tag palitan lang kung anong name nung page para sa single movie