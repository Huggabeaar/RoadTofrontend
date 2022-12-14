const POLICY_ERROR_TEXT = `Вы не согласились с политикой конфиденциальности.`;

const nameNode = document.querySelector('.js-name');
const emailNode = document.querySelector('.js-email');
const phoneNode = document.querySelector('.js-phone');
const policyNode = document.querySelector('.js-policy');
const btnNode = document.querySelector('.js-btn');
const outputNode = document.querySelector('.js-output');

function render(name, email, phone, isPolicyChecked) {
    if(!isPolicyChecked) {
        outputNode.innerText = POLICY_ERROR_TEXT

        return;
    }

    outputNode.innerHTML = `
    <div>${name}</div>
    <div>${email}</div>
    <div>${phone}</div>
    `;
};

function reset() {
    nameNode.value = ``;
    emailNode.value = ``;
    phoneNode.value = ``;
    policyNode.checked = ``;
}

btnNode.addEventListener('click', function () {
    const name = nameNode.value;
    const email = emailNode.value;
    const phone = phoneNode.value;
    const isPolicyChecked = policyNode.checked;

    render(name, email, phone, isPolicyChecked);

    if(isPolicyChecked) {
        reset();
    } 
})