const KEY = 'calculator-logs'

function setDataToStorage(data) {
    localStorage.setItem(KEY, JSON.stringify(data));
}

function getDataFromStorage() {
    const data = localStorage.getItem(KEY);

    if(!data) {
        return null;
    }

    return JSON.parse(data);
}