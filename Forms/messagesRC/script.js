const inputMsgNode = document.querySelector('.js-msg-input');
const sendBtnNode = document.querySelector('.js-send-btn');
const messageNode = document.querySelector('.js-message');

function reset() {
    inputMsgNode.value = ``;
}

initMessanger(messageNode);

sendBtnNode.addEventListener('click', function () {
   const message = inputMsgNode.value;

   if(isEmpty(message)) {
    return;
   }

   addMessage(message);

   render();

   reset();
});