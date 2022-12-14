const SUM = '+';
const SUBSTRACTION = '-';
const MULTIPLICATION = '*';
const DIVISION = '/';

function calculate(a, b, operation) {
    switch (operation) {
        case SUM:
            return sum(a, b);

        case SUBSTRACTION:
            return substraction(a, b);

        case MULTIPLICATION:
            return multiply(a, b);

        case DIVISION:
            return division(a, b);
    }
}