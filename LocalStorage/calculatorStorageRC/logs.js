let logs = [];

function buildLog(a, b, operation, result) {
    return `${a} ${operation} ${b} = ${result}`;
}

function addLog(a, b, operation, result) {
    const log = buildLog(a, b, operation, result);

    logs.push(log);

    setDataToStorage(getLogs());
};

function getLogs() {
    return logs;
}

function fetchLogsWithStorage() {
    const storageLogs = getDataFromStorage();

    logs = storageLogs ?? [];
}