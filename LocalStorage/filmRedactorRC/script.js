const titleInputNode = document.querySelector('.js-title');
const imgInputNode = document.querySelector('.js-img');
const addBtnNode = document.querySelector('.js-add');
const moviesNode = document.querySelector('.js-movies');

const storageMoves = pullMovies();

setMovies(storageMoves);

initView(moviesNode);

render(getMovies());

addBtnNode.addEventListener('click', function () {
    const title = titleInputNode.value;
    const img = imgInputNode.value;

    if(!title && !img) {
        return;
    }

    const movie = createMovie(title, img);

    addMovie(movie);
    pushMovies(getMovies());

    render(getMovies());
});