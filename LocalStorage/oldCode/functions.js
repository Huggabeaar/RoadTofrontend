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

function render(results, pastCalculationsNode) {

    let outputListHTML = ``;

    results.forEach(function (task) {
        outputListHTML += `
        <li class = 'past-calc'>${task}</li>
        `
    });

    pastCalculationsNode.innerHTML = `${outputListHTML}`;

}

function renderText(text, textArea) {
    
    let outputText = ``;

    text.forEach(function (textValue) {
        outputText = textValue;
    })
    textArea.textContent = `${outputText}`
}

function renderCard() {
    let outputListHTML = ``;
    for (let i = 0; i < cardTitle.length; i++) {
        outputListHTML += `<div class = 'film-item'>
        <h2 class = 'js-output-title'>${cardTitle[i]}</h2>
        <img src="${cardImage[i]}" class = 'js-output-image'>
        </div>`
        
    }
outputCard.innerHTML += `${outputListHTML}`;
}