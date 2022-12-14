const aInputNode = document.querySelector('.js-a');
const bInputNode = document.querySelector('.js-b');
const operationNode = document.querySelector('.js-operation');
const btnNode = document.querySelector('.js-btn');
const outputNode = document.querySelector('.js-result');
const logsNode = document.querySelector('.js-logs');

function buildLogsHTML(logs) {
    let HTML = ``;

    logs.forEach(function (log) {
        HTML += `<div>${log}</div>`;
    })

    return HTML;
}

function render(result, logs) {
    outputNode.innerText = result;
    logsNode.innerHTML = buildLogsHTML(logs);
}

btnNode.addEventListener('click', function () {
   const a = Number(aInputNode.value);
   const b = Number(bInputNode.value);
   const operation = operationNode.value;
   const result = calculate(a, b, operation);

   addLog(a, b, operation, result);

   render(result, getLogs());
});