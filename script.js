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

// Практика 1

const buttonNode = document.querySelector('.js-button');

buttonNode.addEventListener('click', function () {
    alert ('Привет!')
});

// Практика 2

const catImageLink = document.querySelector('.image-link');
const catImageNode = document.querySelector('.cat-img');

catImageNode.addEventListener('click', function (event) {

    catImageLink.innerHTML = `
    <h2>Ссылка на эту картинку:</h2>
    <p>${event.target.src}</p>
    `
});