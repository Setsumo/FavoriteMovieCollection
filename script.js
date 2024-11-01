
let movies = [];

function addMovie() {
   
    let title = document.getElementById('title').value;
    let genre = document.getElementById('genre').value;
    let year = document.getElementById('year').value;

  
    movies.push({ title, genre, year });

    document.getElementById('movieForm').reset();


    displayMovies();
}


function displayMovies() {
    let tableBody = document.getElementById('movieTable').querySelector('tbody');
    tableBody.innerHTML = ''; // Clear the table

   
    for (let movie of movies) {
        let row = tableBody.insertRow();
        row.innerHTML = `<td>${movie.title}</td><td>${movie.genre}</td><td>${movie.year}</td>`;
    }
}
