const messages = [];
let messagesNode = null;

function initMessanger(node) {
    messagesNode = node;
}

function addMessage(message) {
    messages.push(message)
};

function isEmpty(message) {
    return !Boolean(message);
}

function buildMessageHTML(message) {
    return `<div>${message}</div>`;
}

function render() {
    let html = '';

    messages.forEach(function (message) {
        html += buildMessageHTML(message)
    })

    messagesNode.innerHTML = html;
};