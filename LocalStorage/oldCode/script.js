// Задание 1, калькулятор с памятью 2.0

let results = [];
const storageResults = localStorage.getItem('results');
pastCalculationsNode.innerHTML = storageResults;

if (storageResults) {
    results = JSON.parse(storageResults);
}

render(results, pastCalculationsNode);

btnOutput2.addEventListener('click', () => {
    event.preventDefault();

    const canIcalculate = checkNumbers2.checked;

    if(!canIcalculate) {
        return;
    }

    const a = Number (inputAnode2.value);
    const b = Number (inputBnode2.value);
   

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
    }

    const resultOutput = `${outPut2}`;

    results.push(resultOutput);

    render(results, pastCalculationsNode);
    
    localStorage.setItem('results', JSON.stringify(results));

    outPutNode2.innerHTML += `<li class = 'output'>${outPut2}</li>`;

    task = outPut2;
})

// Задание 2, редактор поста

const textArea = document.querySelector('.js-textarea');

let text = [];
textStorage = localStorage.getItem('text')
textArea.textContent = textStorage;

let textValue;

if (textStorage) {
    text = JSON.parse(textStorage)
}

renderText(text, textArea)

textArea.addEventListener('input', function () {
    text.push(textArea.value)

    localStorage.setItem('text', JSON.stringify(text))

    renderText(text, textArea)

    textValue = textArea.value;
})

// Задание 3, сброс текста и вычислений

let defaultText = null;

btnClearStory.addEventListener('click', function () {
    localStorage.removeItem('text');

    textArea.value = defaultText;
})

btnClearMathStory.addEventListener('click', function () {
    localStorage.removeItem('results');

    pastCalculationsNode.innerHTML = defaultText;
})

// Задание 4, список фильмов

let cardTitle;
cardStorage = localStorage.getItem('cards');

if(cardStorage) {
    cardTitle = JSON.parse(cardStorage)
}

let cardImage;
cardStorageImage = localStorage.getItem('cards-image');

if(cardStorageImage) {
    cardImage = JSON.parse(cardStorageImage)
}

renderCard();

btnCreateForm.addEventListener('click', function () {
    event.preventDefault();

    outputCard.innerHTML += `
    <h2 class = 'js-output-title'>${inputTitle.value}</h2>
    <img src="${inputImage.value}" class = 'js-output-image'>
    `;
    
    cardTitle.push(inputTitle.value)

    localStorage.setItem('cards', JSON.stringify(cardTitle));

    cardImage.push(inputImage.value)

    localStorage.setItem('cards-image', JSON.stringify(cardImage));
})