//17.11.2022//

function log(text) {
    console.log(text);
    }

//Задание 1, умножение двух чисел между собой

    function multiply(a, b) {
    return a * b;
    }
    
    const result = (multiply(2, 3));

    log(result);
    
    //Задание 2, поиск самого большого числа в массиве
    
    function getMaxNumber(arr) {
        let result = arr[0];

        for (let i = 1; i < arr.length; i++) {
            if (arr[i] < result) continue;

            result = arr[i];
        }

        return result;
    }

    log(getMaxNumber([1, 2, 3, 4, 5]));

    const arr1 = [2, 3, 532];
    const arr2 = [2, 424, 654];

    log(getMaxNumber(arr1));
    log(getMaxNumber(arr2));
    
    
    //Задание 3, функция проверяющая число на чётность
    
    function isNumberEven(number) {
        return number % 2 === 0;
    }

    log(isNumberEven(2));
    log(isNumberEven(3));
    
    //Задание 4, функция возвращающая сумму чисел в диапазоне чисел заданных пользователем
    
    function getRangeSum(start, end) {
        let result = 0;

        for (let i = start; i < end; i++) {
            result += i;
        }

        return result;
    }

    log(0, 100);
    
    //Задание 5, функция на проверку наличия числа в массиве 
    
    function contains(arr, number) {
        for (let i = 0; i < arr.length; i++) {
               if (arr[i] === number) {
                return true;
               };
        }

        return false;
    }

   log(contains([1, 2, 3], 2));
   log(contains([1, 2, 3], 5));
    
    //Задание 6, функция для восстановления полного УРЛа страницы
    
    function buildUrl(protocol, withWWW, domain, zone) {
        const www = withWWW ? 'www.' : '' ; // Тернарный оператор

        return `${protocol}://${www}.${domain}.${zone}`; // Шаблонные строки
    }
    
    log(buildUrl('http', true, 'avito', 'ru')); // 'https://www.avito.ru'
    log(buildUrl('https', false, 'avito', 'com')); // 'http://avito.com'

    //Задание 7, функция, которая принимает массив возвращает новый состоящий из чётных/нечётных значений входного массива

    function filterOdds(arr) {
        const result = [];

        for (let i = 0; i < arr.length; i++) {
            if (isEven(arr[i])) continue; 
            
            result.push(arr[i]);
        }
        return result;
    }

    log(filterOdds([1, 2, 3, 4, 5])); // [1, 3, 5]
    log(filterOdds([1, 7, 5, 4])); // [1, 7, 5]