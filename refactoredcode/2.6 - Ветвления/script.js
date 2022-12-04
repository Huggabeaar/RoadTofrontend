//Задание 1

const TYPE_OF_NUMBER = 'number';
const VARIABLE_VALUE_TEXT = 'Это число со значением';
const a = '10';

if (typeof a === TYPE_OF_NUMBER) {
    alert(`${VARIABLE_VALUE_TEXT}`);
};

//Задание 2

const STRENGTH_REPS_COUNT_MAX = 5;
const MASS_REPS_COUNT_MAX = 12;
const STRENGTH_MESSAGE = 'Вы работаете на силу';
const MASS_MESSAGE = 'Вы работаете на массу';
const RELIEF_MESSAGE = 'Вы работаете на рельеф';

const repsCount = 14;

if (repsCount <= STRENGTH_REPS_COUNT_MAX) {
    console.log(STRENGTH_MESSAGE);
} 
else if (repsCount <= MASS_REPS_COUNT_MAX) {
    console.log(MASS_MESSAGE);
}
else {
    console.log(RELIEF_MESSAGE);
}

//Задание 3

const LOST_WEIGHT_GOAL = 'Похудеть';
const MUSCLE_MASS_GOAL = 'Мышечная масса';
const STRENGTH_GOAL = 'Сила';
const TONE_GOAL = 'Тонус';
const RELIEF_GOAL = 'Рельеф';
const LOST_WEIGHT_CREATING_PROGRAMM_MESSAGE = 'Составляю программу для похудения';
const MUSCLE_MASS_CREATING_PROGRAMM_MESSAGE = 'Составляю программу для набора мышечной массы';
const STRENGTH_CREATING_PROGRAMM_MESSAGE = 'Составляю программу тренировок для поддержания силы';
const TONE_CREATING_PROGRAMM_MESSAGE = 'Составляю программу для поддержания тонуса';
const RELIEF_CREATING_PROGRAMM_MESSAGE = 'Составляю программу для создания рельефа';
const MODAL_TEXT = 'Цель тренировок';
const ERROR_MESSAGE = 'Ошибка ввода';

const userGoal = prompt (MODAL_TEXT);

switch (userGoal) {
    case LOST_WEIGHT_GOAL:
        alert (LOST_WEIGHT_CREATING_PROGRAMM_MESSAGE);
        break;

    case MUSCLE_MASS_GOAL:
        alert (MUSCLE_MASS_CREATING_PROGRAMM_MESSAGE);
        break;

    case STRENGTH_GOAL:
        alert (STRENGTH_CREATING_PROGRAMM_MESSAGE);
        break;

    case TONE_GOAL:
        alert (TONE_CREATING_PROGRAMM_MESSAGE);
        break;

    case RELIEF_GOAL:
        alert (RELIEF_CREATING_PROGRAMM_MESSAGE);
        break;

    default:
        alert (ERROR_MESSAGE);
        break;
}

//Задание 4

const FIRST_NUMBER_REQUEST_TEXT = 'Введите первое число';
const SECOND_NUMBER_REQUEST_TEXT = 'Введите второе число';
const RESULT_REQUEST_TEXT = 'Результат сложения?';
const CORRECT_ANSWER_TEXT = 'Правильно';
const NOT_CORRECT_ANSWER_TEXT = 'Неправильно';

const aInput = prompt (FIRST_NUMBER_REQUEST_TEXT);
const bInput = prompt (SECOND_NUMBER_REQUEST_TEXT);
const sumInput = prompt (RESULT_REQUEST_TEXT);

const aProccessed = Number (aInput);
const bProccessed = Number (bInput);
const sumProccessed = Number (sumInput);

const sum = aProccessed + bProccessed;

if (sumProccessed === sum) {
    alert (CORRECT_ANSWER_TEXT);
}
else {
    alert(NOT_CORRECT_ANSWER_TEXT);
}

//Задание 5

const NUMBER_REQUEST_TEXT = 'Введите число';
const EVEN_TEXT = 'Чётное';
const ODD_TEXT = 'Нечётное';

const input = prompt (NUMBER_REQUEST_TEXT);

const inputProccessed = Number (input);

if (inputProccessed % 2 === 0) {
    console.log(EVEN_TEXT);
}
else {
    console.log(ODD_TEXT);
};

//Задание 6

const MONTH_REQUEST_TEXT = 'Введите номер месяца';
const WINTER_TEXT = 'Это зима';
const SPRING_TEXT = 'Это весна';
const SUMMER_TEXT = 'Это лето';
const AUTUMN_TEXT = 'Это осень';
const ERROR_TEXT = 'Ошибка ввода';

const monthInput = prompt (MONTH_REQUEST_TEXT);

const month = Number (monthInput);

switch (month) {
    case 12:
    case 1:
    case 2:
        console.log(WINTER_TEXT)
        break;

    case 3:
    case 4:
    case 5:
        console.log(SPRING_TEXT)
        break;

    case 6:
    case 7:
    case 8:
        console.log(SUMMER_TEXT)
        break;

    case 9:
    case 10:
    case 11:
        console.log(AUTUMN_TEXT)
        break;

    default:
        console.log(ERROR_TEXT);
        break;
};