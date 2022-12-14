const KEY = 'editor';

function savePost(post) {
    localStorage.setItem(KEY, post)
};

function loadPost() {
    const post = localStorage.getItem(KEY);

    return post ?? '';
}