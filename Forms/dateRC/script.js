const daySelectNode = document.querySelector('.js-day');
const monthSelectNode = document.querySelector('.js-month');
const yearSelectNode = document.querySelector('.js-year');
const btnNode = document.querySelector('.js-btn');
const outputNode = document.querySelector('.js-output');

initDateSelect(daySelectNode, monthSelectNode, yearSelectNode);

btnNode.addEventListener('click', function () {
    const day = daySelectNode.value;
    const month = monthSelectNode.value;
    const year = yearSelectNode.value;

    renderDate(day, month, year, outputNode);
});