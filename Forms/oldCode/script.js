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



// Практика 1, одинокий чат с одним меняющимся текстом

const inputNode = document.querySelector('.js-input');
const buttonInputNode = document.querySelector('.js-btn');
const messagesStory = document.querySelector('.messages-story');

buttonInputNode.addEventListener('click', function () {
    event.preventDefault();

    messagesStory.innerHTML = `
    <h2 class = 'inputText'>${inputNode.value}</h2>
    `;
});

// Практика 2, диалог с множеством сообщений

const inputNode2 = document.querySelector('.js-input2');
const buttonInputNode2 = document.querySelector('.js-btn2');
const messagesStory2 = document.querySelector('.messages-story2');

buttonInputNode2.addEventListener('click', function () {
    event.preventDefault();

    messagesStory2.innerHTML += `
    <p class = 'inputText'>${inputNode2.value}</p>
    `;
});

// Практика 3, вывод даты

const dataBtnNode = document.querySelector('.js-data-btn');
const dataTextNode = document.querySelector('.js-data-text');

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

dataBtnNode.addEventListener('click', function () {
    event.preventDefault();

let monthName;

    if (select2.value == 1) {
        monthName = 'Января';
    }
    else if (select2.value == 2) {
        monthName = 'Февраля';
    }
    else if (select2.value == 3) {
        monthName = 'Марта';
    }
    else if (select2.value == 4) {
        monthName = 'Апреля';
    }
    else if (select2.value == 5) {
        monthName = 'Мая';
    }
    else if (select2.value == 6) {
        monthName = 'Июня';
    }
    else if (select2.value == 7) {
        monthName = 'Июля';
    }
    else if (select2.value == 8) {
        monthName = 'Августа';
    }
    else if (select2.value == 9) {
        monthName = 'Сентября';
    }
    else if (select2.value == 10) {
        monthName = 'Октября';
    }
    else if (select2.value == 11) {
        monthName = 'Ноября';
    }
    else if (select2.value == 12) {
        monthName = 'Декабря';
    }

    dataTextNode.innerHTML = `
    </p>Дата: ${select1.value} ${monthName} ${select3.value} года.</p> 
    `;

});

// Практика 4, калькулятор

const inputAnode = document.querySelector('.js-input-A');
const inputBnode = document.querySelector('.js-input-B');
const selectMathTypeNode = document.querySelector('.js-selectMathType');
const checkNumbers = document.querySelector('.js-checkbox');
const btnOutput = document.querySelector('.js-btn-output');
const outPutNode = document.querySelector('.js-output');

function sumPlus(a, b) {
    return a + b;
};

function sumMinus(a, b) {
    return a - b;
};

function sumDivision(a, b) {
    return a / b;
};

function sumMultiplication(a, b) {
    return a * b;
}

btnOutput.addEventListener('click', function () {
    event.preventDefault();

    const canICalculate = checkNumbers.checked;
    log(canICalculate);

    if (!canICalculate) {
        return;
    }

    let a = Number (inputAnode.value);
    let b = Number (inputBnode.value);
    let outPut = '';

    switch (selectMathTypeNode.value) {
        case 'Minus':
            outPut = sumMinus (a, b);
            break;

        case 'Plus':
            outPut = sumPlus (a, b);
            break;
            
        case 'Division':
            outPut = sumDivision (a, b);
            break;

        case 'Multiplication':
            outPut = sumMultiplication (a, b);
            break;
    
        default:
            outPut = 'Ошибка!';
            break;
    }

    outPutNode.innerHTML = `
    Результат: ${outPutNode.innerText = outPut}
    `;
});

// Практика 5, калькулятор с описанием действия и памятью

const inputAnode2 = document.querySelector('.js-input-A2');
const inputBnode2 = document.querySelector('.js-input-B2');
const selectMathTypeNode2 = document.querySelector('.js-selectMathType2');
const checkNumbers2 = document.querySelector('.js-checkbox2');
const btnOutput2 = document.querySelector('.js-btn-output2');
const outPutNode2 = document.querySelector('.js-output2');

function sumPlus(a, b) {
    return a + b;
};

function sumMinus(a, b) {
    return a - b;
};

function sumDivision(a, b) {
    return a / b;
};

function sumMultiplication(a, b) {
    return a * b;
}

btnOutput2.addEventListener('click', function () {
    event.preventDefault();

    const canICalculate = checkNumbers2.checked;
    log(canICalculate);

    if (!canICalculate) {
        return;
    }

    let a = Number (inputAnode2.value);
    let b = Number (inputBnode2.value);
    let outPut2 = '';

    switch (selectMathTypeNode2.value) {
        case 'Minus':
            outPut2 = `${a} - ${b} = ${sumMinus(a, b)}`;
            break;

        case 'Plus':
            outPut2 = `${a} + ${b} = ${sumPlus(a, b)}`;
            break;
            
        case 'Division':
            outPut2 = `${a} : ${b} = ${sumDivision(a, b)}`;
            break;

        case 'Multiplication':
            outPut2 = `${a} * ${b} = ${sumMultiplication(a, b)}`;
            break;
    
        default:
            outPut2 = 'Ошибка!';
            break;
    }

    outPutNode2.innerHTML += `
    <ul>
    <li>
    Результат: ${outPutNode2.innerText = outPut2}
    </li>
    </ul>
    `;
});

// Практика 6, лидген форма

const nameInput = document.querySelector('.input-name');
const emailInput = document.querySelector('.input-email');
const numberInput = document.querySelector('.input-number');
const checkboxNode = document.querySelector('.js-check');
const btnFormNode = document.querySelector('.js-form-btn');
const formOutputNode = document.querySelector('.js-formOutput');

btnFormNode.addEventListener('click', function () {
    event.preventDefault();

    const isCheckboxTrue = checkboxNode.checked;

    if (!isCheckboxTrue) {
        return;
    };

    formOutputNode.innerHTML = `
    <ul>

        <li class = 'ulist'>
        Имя: ${nameInput.value}
        </li>

        <li class = 'ulist'>
        Почта: ${emailInput.value}
        </li>
        
        <li class = 'ulist'>
        Телефон: ${numberInput.value}
        </li>

    </ul>
    `;
});