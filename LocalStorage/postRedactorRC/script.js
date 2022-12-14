const editorNode = document.querySelector('.js-editor');
const clearBtnNode = document.querySelector('.js-clear-btn')

function init() {
    const post = loadPost();
    editorNode.value = post;
    editorNode.focus();
}

function reset() {
    editorNode.value = ``;
    savePost('');
}

init();

editorNode.addEventListener('input', function () {
    savePost(editorNode.value);
})

clearBtnNode.addEventListener('click', function () {
    reset();
})