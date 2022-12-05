// Задание 1
let day = 03;
let month = 11;
let year = 2022;

let dayOutputString = day;
let monthOutputString = month;

if (day < 10) dayOutputString = `0${day}`;

if (month < 10) monthOutputString = `0${month}`;

const date = `${dayOutputString}/${monthOutputString}/${year}`;

console.log(date);

// Задание 2
let USD_RUB_EXCHANGE_RATE = 61.62;
console.log(typeof currnetDollarExchange);
const USD_RUB_EXCHANGE_RATE_MESSAGE = `1 Доллар США равно ${USD_RUB_EXCHANGE_RATE} Российских рублей.`;

console.log(USD_RUB_EXCHANGE_RATE_MESSAGE);

// Задание 3

const IS_FAVORITE_TEXT = 'Товар в избранном';
const NOT_FAVORITE_TEXT = 'Товар не в избранном';

const isFavorite = true;

if (isFavorite) {
    console.log(IS_FAVORITE_TEXT);
}
else {
    console.log(NOT_FAVORITE_TEXT);
};

// Задание 4

const MALE_SEX = 'Мужчина';
const FEMALE_SEX = 'Женщина';

let me = {
    name: 'Владимир',
    surname: 'Шансков',
    age: 20,
    sex: MALE_SEX,
    height: 181,
    weight: 80,
    interests: 'Программирование, видеоигры, аниме, сериалы, саморазвитие и многое другое'
};

console.log(me);