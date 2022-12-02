//Формы

function log(text) {
    console.log(text);
};

// Виды элементов
// 1. Где смотреть
// 2. Примеры

// const btnNode = document.querySelector('.js-btn');
// const appNode = document.querySelector('.js-app');

// btnNode.addEventListener('click', function () {
//     appNode.innerHTML += `
//     <h1>Приветик, Вова!</h1>
//     `
// });

//Получение значения из формы
// 1. Отдельный элемент
// 2. Вся форма целиком
// const nameInputNode = document.querySelector('.js-name-input');

// console.log(nameInputNode.value);

// const aInputNode = document.querySelector('.js-a-input');
// const bInputNode = document.querySelector('.js-b-input');
// const okInputNode = document.querySelector('.js-ok-input');
// const mathTypeSelectNode = document.querySelector('.js-math-type')
// const sumBtnNode = document.querySelector('.js-sum-btn');
// const outputNode = document.querySelector('.js-output');

// function sum(a, b) {
//     return a + b;
// };

// function minus(a, b) {
//     return a - b;
// };

// sumBtnNode.addEventListener('click', function () {
//     const canCalculateSum = okInputNode.checked;
//     console.log(mathTypeSelectNode.value);

//     if (!canCalculateSum) {
//         return;
//     }

//     console.log(okInputNode.checked);

//     const a = Number(aInputNode.value);
//     const b = Number(bInputNode.value);
//     let output = '';
//     console.log(a, b);

//     switch(mathTypeSelectNode.value) {
//         case 'sum':
//             output = sum(a, b);
//             break;
           
//         case 'minus':
//             output = minus(a, b);
//             break;

//         default:
//             break;
//     }
    
//     outputNode.innerText = output;
// });

// // События элементов
// // 1. change, срабатывает после того, как мы ввели и вышли из элемента (Можно использовать для валидации).
// // 2. input, срабатывает сразу в момент обновления элемента.
// // 3. focus, срабатывает тогда, когда мы нажимаем на элемент.
// // 4. blur, срабатывает когда мы выходим из элемента.
// aInputNode.addEventListener('input', function () {
//     outputNode.innerText = Number(aInputNode.value) + Number(bInputNode.value);
//     // Моментальный вывод
// })

// // Использование значений из формы реально благодаря:
// // 1. button click
// // 2. on change
// // form submit

// Практика 1, одинокий чат с историей сообщений

const inputNode = document.querySelector('.js-input');
const buttonInputNode = document.querySelector('.js-btn');
const messagesStory = document.querySelector('.messages-story');

buttonInputNode.addEventListener('click', function () {
    event.preventDefault();

    messagesStory.innerHTML = `
    <h2 class = 'inputText'>${inputNode.value}</h2>
    `;
});

// dialogue

const inputNode2 = document.querySelector('.js-input2');
const buttonInputNode2 = document.querySelector('.js-btn2');
const messagesStory2 = document.querySelector('.messages-story2');

buttonInputNode2.addEventListener('click', function () {
    event.preventDefault();

    messagesStory2.innerHTML += `
    <p class = 'inputText'>${inputNode2.value}</p>
    `;
});

// data DD.MM.YY

const select1 = document.querySelector('#type');


for (let i = 1; i <= 31; i++) {
    const option = document.createElement('option');
    option.textContent = option.value = i;
    select1.append(option);
};

const select2 = document.querySelector('#type2');


for (let i = 1; i <= 12; i++) {
    const option = document.createElement('option');
    option.textContent = option.value = i;
    select2.append(option);
};

const select3 = document.querySelector('#type3');


for (let i = 1950; i <= 2022; i++) {
    const option = document.createElement('option');
    option.textContent = option.value = i;
    select3.append(option);
};