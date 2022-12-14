const KEY = 'movies';

function pushMovies(movies) {
    localStorage.setItem(KEY, JSON.stringify(movies));
}

function pullMovies() {
    const movies = localStorage.getItem(KEY);

    return movies ? JSON.parse(movies) : [];
}