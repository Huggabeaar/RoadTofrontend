const btnSwitchNode = document.querySelector('.js-switch-btn');
const btnGreenNode = document.querySelector('.js-btn-green');
const btnYellowNode = document.querySelector('.js-btn-yellow');
const btnRedNode = document.querySelector('.js-btn-red');
const trafficLightNode = document.querySelector('.js-traffic-light');

const LIGHTS = {
    green: 'green',
    yellow: 'yellow',
    red: 'red',
};

const NEXT_LIGHT_BY_LIGHT = {
    [LIGHTS.green]: LIGHTS.yellow,
    [LIGHTS.yellow]: LIGHTS.red,
    [LIGHTS.red]: LIGHTS.green
};

const CLASSES_BY_LIGHT = {
    [LIGHTS.green]: 'traffic-light_green',
    [LIGHTS.yellow]: 'traffic-light_yellow',
    [LIGHTS.red]: 'traffic-light_red',
}

let currentLight = LIGHTS.green;


function getNextLightByLight(light) {
    return NEXT_LIGHT_BY_LIGHT [light];
}

function initLight(node) {
    node.classList.add(CLASSES_BY_LIGHT[currentLight]);
}

function switchLightsByOrder(node) {
    const newLight = getNextLightByLight(currentLight);
    const currentClass = CLASSES_BY_LIGHT[currentLight];
    const newClass = CLASSES_BY_LIGHT[newLight]

    node.classList.replace(currentClass, newClass)
    currentLight = newLight;
}

function switchLight(newLight, node) {
    for (light in CLASSES_BY_LIGHT) {
        if (light === newLight) {
            node.classList.add(CLASSES_BY_LIGHT[newLight]);
            continue;
        }

        node.classList.remove(CLASSES_BY_LIGHT[light])
    }
}