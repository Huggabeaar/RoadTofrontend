const DAYS_COUNT = 31;
const MONTHS_COUNT = 12;
const INITIAL_YEAR = 1950;
const CURRENT_YEAR = 2023;
const ERROR_DATE_TEXT = `Ошибка, некорректно выбрана дата`;

const MONTHS_BY_ID = {
    1: {
        title: 'января',
        days: 31
    },
    2: {
        title: 'февраля',
        days: 28,
        leapYearDays: 29
    },
    3: {
        title: 'марта',
        days: 31
    },
    4: {
        title: 'апреля',
        days: 30
    },
    5: {
        title: 'мая',
        days: 31
    },
    6: {
        title: 'июня',
        days: 30
    },
    7: {
        title: 'июля',
        days: 31
    },
    8: {
        title: 'августа',
        days: 31
    },
    9: {
        title: 'сентября',
        days: 30
    },
    10: {
        title: 'октября',
        days: 31
    },
    11: {
        title: 'ноября',
        days: 30
    },
    12: {
        title: 'декабря',
        days: 31
    },
};