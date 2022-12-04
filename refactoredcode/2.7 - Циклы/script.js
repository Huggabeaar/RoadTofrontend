//12.11.2022//

// Задание 1

for (let i = -50; i <= 50; i++) {
   console.log(i); 
}

// Задание 2

for (let i = 10; i >= 0; i--) {
    console.log(i);
}

// Задание 3

for (let i = 1; i <= 100; i++) {
    if (i % 7 !==0) continue;
 
    console.log(i);
}

// Задание 4

for (let i = 1; i <= 10; i++) {
    for (let j = 1; j <= 10; j++) {
        console.log(`${i} * ${j} = ${i * j}`);
    };
};

// Задание 5

const INTEREST_RATE = 1.05;
let account = 1000;

for (let i = 0; i < 20; i++) {
    account *= INTEREST_RATE;
    account = Math.trunc (account);
};

console.log(account);

//Задание 6

let i = 1;
while (i <= 100) {
    if (i % 2 === 0) {
        console.log(i);
    }

    i++;

};

//Задание 7

const INTEREST_RATING = 1.05;
const GOAL = 1000000;

let userAccout = 1000;
let year = 1;

while (account < GOAL) {
    account *= INTEREST_RATE;
    year++;
};

console.log(year);