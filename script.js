// // Как обрабатывать события
// // 1. Слушатель
// // 2. Обработчик
// // 3. Объект события
// // 4. Поведение по-умолчанию и его остановка

// const btnNode = document.querySelector('.js-btn');
// // const linkNode = document.querySelector('.js-link');

// // linkNode.addEventListener('click', function (event) {
// //     event.preventDefault();
// // });

// // Примеры: Вывести текст по нажатию на кнопку

// const TEXT = 'Привет! Ты вывел текст, умничка!';
// const textContainerNode = document.querySelector('.js-container');

// btnNode.addEventListener('click', function () {
//     textContainerNode.innerHTML = `<h1>${TEXT}</h1>`;
// });

// // Вывести адрес ссылки по клике на неё

// const linkNode = document.querySelector('.js-link');

// linkNode.addEventListener('click', function (event) {
//     event.preventDefault();

//     const href = event.target.href;

//     textContainerNode.innerHTML = `
//         <h2>Эта ссылка ведёт на страницу:</h2>
//         <p>${href}</p>
//     `;
//     console.log(event.target.href)
// });

// // Вывести текст: "Вы проскролили на столько-то пикселей"

// window.addEventListener('scroll', function () {
//    console.log('scroll', window.pageYOffset);
//    textContainerNode.innerHTML = `
//     <p>Страница проскроленна на ${window.pageYOffset}px </p>
//    `;
// });

// //Вывести кнопку и показать текст
// // По нажатию показать
// // По нажатию скрыть
// const TEXT_OPEN = 'Показать текст'
// const TEXT_CLOSE = 'Скрыть текст'
// const buttonNode = document.querySelector('.js-button');
// const textNode = document.querySelector('.js-button-text');
// let isTextClosed = false;

// function getBtnText(isTextClosed) {
//     if (!isTextClosed) {
//         return TEXT_CLOSE;
//     }

//     return TEXT_OPEN;
// };

// buttonNode.textContent = getBtnText(isTextClosed);

// buttonNode.addEventListener('click', function () {
//     isTextClosed = !isTextClosed;
//     console.log(isTextClosed)
//    textNode.classList.toggle('text_closed');

//    buttonNode.textContent = getBtnText(isTextClosed);

//     // if (isTextClosed) {
//     //     buttonNode.textContent = TEXT_OPEN;
//     // }
//     // else {
//     //     buttonNode.textContent = TEXT_CLOSE;
//     // }
// });

//30.12.2022 - 01.12.2022//

// Практика 1, алёрт приветствия

const buttonNode = document.querySelector('.js-button');

buttonNode.addEventListener('click', function () {
    alert ('Привет! Я слышал, что если нажать на котиков ты узнаешь где их найти!')
});

// Практика 2, вывод линка картинки

const catImageLink = document.querySelector('.image-link');
const catImageNode = document.querySelector('.cat-img');

catImageNode.addEventListener('click', function (event) {

    catImageLink.innerHTML = `
    <h2>Ссылка на эту картинку:</h2>
    <p>${event.target.src}</p>
    `
});

// Практика 3, светофор

const cubeNode = document.querySelector('.js-cube');
const redCubeButtonNode = document.querySelector('.js-button-red');
const yellowCubeButtonNode = document.querySelector('.js-button-yellow');
const greenCubeButtonNode = document.querySelector('.js-button-green');
const randomCubeButtonNode = document.querySelector('.js-button-random');

redCubeButtonNode.addEventListener('click', function () {
   cubeNode.style.backgroundColor = 'red'
});

yellowCubeButtonNode.addEventListener('click', function () {
    cubeNode.style.backgroundColor = 'yellow'
});

greenCubeButtonNode.addEventListener('click', function () {
    cubeNode.style.backgroundColor = 'green'
});

const colors = ['green', 'yellow', 'red']
colorsitem = 0;

randomCubeButtonNode.addEventListener('click', function () {

    cubeNode.style.backgroundColor = colors[colorsitem];
    colorsitem++;
    if (colorsitem === 3) {
        colorsitem = 0;
    };

});

// Практика 4, ввод и сумма чисел

const mathProblemButtonNode = document.querySelector('.js-task');
const mathProblemContainerNode = document.querySelector('.js-task-container');
const mathPrompt1 = document.querySelector('.js-math1');
const mathPrompt2 = document.querySelector('.js-math2');
const mathSum = document.querySelector('.js-math3');
const mathText = document.querySelector('.math-text')

mathProblemButtonNode.addEventListener('click', function () {
    
    mathPrompt1.classList.remove('mathButtons');
    mathPrompt2.classList.remove('mathButtons');
    mathSum.classList.remove('mathButtons');

});

let num1 = 0;
mathPrompt1.addEventListener('click', function () {
    num1 = +prompt();
});

let num2 = 0;
mathPrompt2.addEventListener('click', function () {
    num2 = +prompt();
});

mathSum.addEventListener('click', function () {
    let sum = (num1 + num2);
    mathText.innerHTML = `
    <h3>Первое число равно: ${num1}</h3>
    <h3>Второе число равно: ${num2}</h3>
    <h2>Сумма чисел равна: ${sum}</h2>
    `;
});

// Практика 5, список дел

const toDoButtonNode = document.querySelector('.js-toDoButton');
const toDoText = document.querySelector('.toDoTask')

let text;
toDoButtonNode.addEventListener('click', function () {
    text = prompt();
    toDoText.innerHTML += `
    <div class = 'toDoText'>${text}</div>
    `;
});