function createView(selector) {
    const node = document.querySelector(selector);

    return {
        node,
        render: function (task) {
            let outputListHTML = ``;

            task.forEach(function (task) {
                outputListHTML += `
                <li class = 'past-calc'>${task}</li>
                `
            });

            this.node.innerHTML = `${outputListHTML}`;
        }
    };
}