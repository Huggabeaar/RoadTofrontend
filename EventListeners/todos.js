const TODO_FORM_TITLE = 'Введите вашу задачу';

const todos = [];

function addTodo(todo) {
    todos.push(todo);
}

function getTodoFromUser() {
    return prompt(TODO_FORM_TITLE);
}

function buildTodoHTML(todo) {
    return `<li>${todo}</li>`
}

function renderTodos(todos, node) {
    let html = ``;

    todos.forEach(function (todo) {
        html += buildTodoHTML(todo);
    });

    node.innerHTML = html;
}
