// Практика 1, алёрт приветствия

// Получить кнопку

// Отслеживать событие

// В момент события запустить логику показа текста
const HELLO_TEXT = 'Приветик!';

const buttonNode = document.querySelector('.js-button');

buttonNode.addEventListener('click', function () {

    alert (HELLO_TEXT)
});

// Практика 2, вывод линка картинки

// Выбрать изображение

// Добавить слушатель события

// Получить ссылку изображения 

// Вывести результат на экран
const catImageNode = document.querySelector('.cat-img');
const imgSrc = catImageNode.src;
const outputNode = document.querySelector('.js-output');

catImageNode.addEventListener('click', function () {
    outputNode.innerHTML = `
    <h2>Ссылка на эту картинку:</h2>
    <p>${imgSrc}</p>
    `
});

// Практика 3, светофор
btnGreenNode.addEventListener('click', function () {
    switchLight(LIGHTS.green, trafficLightNode);
})

btnYellowNode.addEventListener('click', function () {
    switchLight(LIGHTS.yellow, trafficLightNode);
})

btnRedNode.addEventListener('click', function () {
    switchLight(LIGHTS.red, trafficLightNode);
})

initLight(trafficLightNode);

btnSwitchNode.addEventListener('click', function () {
    switchLightsByOrder(trafficLightNode);
})
// Практика 4, ввод и сумма чисел

const sumContainerNode = document.querySelector('.js-sum-container');
const startBtnNode = document.querySelector('.js-btn-start');
const firstBtnNode = document.querySelector('.js-btn-first');
const secondBtnNode = document.querySelector('.js-btn-second');
const firstNumberOutputNode = document.querySelector('.js-first-number-output');
const secondNumberOutputNode = document.querySelector('.js-second-number-output');
const sumOutputNode = document.querySelector('.js-sum-output');

let firstNumber = null;
let secondNumber = null;

function sum(a, b) {
    return a + b;
}

function render() {
    firstNumberOutputNode.innerText = firstNumber;
    secondNumberOutputNode.innerText = secondNumber;
    sumOutputNode.innerText = sum(firstNumber, secondNumber); 
}

function getNumberFromUser() {
    const input = prompt ('Введите число');

    return Number(input); 
}

function showButtons() {
   sumContainerNode.classList.remove('sum-container_hidden'); 
}

startBtnNode.addEventListener('click', function () {
    showButtons();
});

firstBtnNode.addEventListener('click', function () {
    firstNumber = getNumberFromUser();

    render();
});

secondBtnNode.addEventListener('click', function () {
    secondNumber = getNumberFromUser();

    render();
});

// Практика 5, список дел
const addBtnNode = document.querySelector('.js-add-todo-btn');
const todosNode = document.querySelector('.js-todos');

addBtnNode.addEventListener('click', function () {
    const todo = getTodoFromUser();
    
    addTodo(todo);

    renderTodos(todos, todosNode);
});