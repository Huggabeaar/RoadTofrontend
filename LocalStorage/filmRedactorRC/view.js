let EMPTY_LIST_TEXT = `Список фильмов пуст`;

let node;

function initView(moviesNode) {
    node = moviesNode;
}

function buildMovieHTML(movie) {
    return `
    <div>
        <p>${movie.title}</p>
        <img
            src = "${movie.img}"
            width = "200">
    </div>
    `;
}

function render(movies) {
    if(!movies.length) {
        node.innerHTML = EMPTY_LIST_TEXT;
        return;
    }

    let html = ``;

    movies.forEach(function (movie) {
        html += buildMovieHTML(movie);
    });

    node.innerHTML = html;
}