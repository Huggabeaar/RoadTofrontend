function isLeapYear(year) {
    if (year % 4 !== 0) {
        return false;
    };

    if (year % 100 !== 0) {
        return true;
    };

    if (year % 400 !== 0) {
        return false;
    }

  return true;  
};

function getMonthMaxDays(month, year) {
    if (isLeapYear(year) && MONTHS_BY_ID[month].leapYearDays) {
        return MONTHS_BY_ID[month].leapYearDays
    }

    return MONTHS_BY_ID[month].days;
}

function validate(day, month, year) {
    return day <= getMonthMaxDays(month, year);
};

function createSelectOption( {value, text} ) {
    const opt = document.createElement("option");
    opt.value = value;
    opt.text = text;

    return opt;
}

function initDaySelect(node) {
    for (let i = 1; i <= DAYS_COUNT; i++) {
        const opt = createSelectOption({
            value: i,
            text: i,
        })
    
        node.add(opt);
    }
}

function initMonthSelect(node) {
    for (let i = 1; i <= MONTHS_COUNT; i++) {
        const opt = createSelectOption({
            value: i,
            text: i,
        })
    
        node.add(opt);
    }
}

function initYearSelect(node) {
    for (let i = CURRENT_YEAR; i >= INITIAL_YEAR; i--) {
        const opt = createSelectOption({
            value: i,
            text: i,
        })
    
        node.add(opt);
    }
}

function initDateSelect(dayNode, monthNode, yearNode) {
    initDaySelect(dayNode);
    initMonthSelect(monthNode);
    initYearSelect(yearNode);
}

function formatDate(day, month, year) {
    return `${day} ${MONTHS_BY_ID[month].title} ${year}`;
}

function renderDate(day, month, year, node) {
    let dateText = formatDate(day, month, year);

    if(!validate(day, month, year)) {
        dateText = ERROR_DATE_TEXT;
    }

    node.innerText = dateText;
}