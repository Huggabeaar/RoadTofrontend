//Задание 1, создание и вывод в консоль массива из чисел от 1 до 10

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

for (let i = 0; i < numbers.length; i++) {
    console.log(numbers[i]);
};

//Задание 2, массив из чисел от 1 до 10 и вывод их суммирования 

const numbers2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let sum = 0;

for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
}

console.log(sum);

//Задание 3, поиск среднего арифмитического массива от 1 до 200

let numbers3 = [];

for (let i = 1; i <= 200; i++) {
   numbers.push(i);
}

let sum2= 0;

for (let i = 0; i < numbers.length; i++) {
    sum2 += numbers[i];
}

const average = sum2 / numbers.length;
console.log(average);

//Задание 4, поиск максимального элемента в массиве

const numbers4 = [];

for (let i = 0; i < 7; i++) {
    numbers4.push(Math.random());
}

let maxIndex = 0;
let max = numbers4[maxIndex];

for (let i = 1; i < numbers4.length; i++) {
    if (numbers4[i] < max) continue;

    max = numbers4[i];
    maxIndex = i;
}

console.log(numbers4);
console.log(maxIndex, max);

//Задание 5, поиск чётных элементов внутри массива 

const NUMBERS_COUNT = 10;
const numbers5 = [];

for (let i = 0; i < NUMBERS_COUNT; i++) {
    const random = Math.floor(Math.random() * NUMBERS_COUNT);
    numbers5.push(random);
}

let evenCount = 0;

for (let i = 0; i < numbers5.length; i++) {
    if (numbers5[i] % 2 !== 0) continue;
    
    evenCount++;
}

console.log(numbers5);
console.log(evenCount);

//Задание 6, программа для ввода температуры за каждый день недели и дальнейший вывод максимальной/средней/минимальной температуры за неделю

const REQUEST_TEMP_TEXT = 'Введите температуру за день';
const DAYS = [
    'Понедельник',
    'Вторник',
    'Среда',
    'Четверг',
    'Пятница',
    'Суббота',
    'Воскресенье'
]
const temps = [];

for (let i = 0; i < DAYS.length; i++) {
    const dayCount = i + 1;
    const tempInput = prompt (`${REQUEST_TEMP_TEXT} ${DAYS[i]}`);
    const temp = Number (tempInput);

    temps.push(temp);
}

let max6 = temps[0];
let min = temps[0];
let sum6 = 0;

for (let i = 0; i < temps.length; i++) {
    if (temps[i] > max) max = temps[i];

    if (temps[i] < min) min = temps[i];

    sum += temps[i];
}

const average6 = sum / temps.length;

console.log(max, min, average);


//Задание 7, перестановка элементов массива в формате reverse

const names = [
    'Rick', 
    'Carl',
    'Judith', 
    'Michonne', 
    'Daryl', 
    'Maggie', 
    'Carol', 
    'Negan', 
    'Eugene'
];

const namesReversed = [];

for (let i = 0; i < names.length / 2; i++) {
    namesReversed[i] = names[names.length - i - 1]
    namesReversed[names.length - i - 1] = names[i];
}

console.log(names);
console.log(namesReversed);
console.log(names.reverse());