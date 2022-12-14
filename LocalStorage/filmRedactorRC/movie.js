let movies = [];

function createMovie(title, img) {
    return {
        title,
        img
    }
}

function addMovie(movie) {
    movies.push(movie);
}

function getMovies() {
    return movies;
}

function setMovies(newMovies) {
    movies = newMovies;
}