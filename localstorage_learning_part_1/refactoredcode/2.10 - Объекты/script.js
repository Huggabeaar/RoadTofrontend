//20.11.2022//

// Задание 1, практика добавления разных типов данных в объект

function log(text) {
    console.log(text)
}
    
    let me = {
        name: 'Владимир',
        age: 20,
        buildHelloText: function () {
            return `Привет, Я - ${this.name}, мне ${this.age}`;
        }
    };
    
    log(me.buildHelloText);
    
// Задание 2, создание человека через функцию и добавление его в объект
    
function createPerson({name, age}) {
        return {
            name,
            age,
            getName: function () {
                return this.name;
            },
            getAge: function () {
                return this.age;
            },
            buildHelloText: function () {
                return `Привет, Я - ${this.getName()}, мне ${this.getAge()}`;
            }
        }
    }

    const me2 = createPerson({
        name: 'Владимир',
        age: 20
    });

    log(me2.buildHelloText());
    
// Задание 3, поиск самого взрослого человека в массиве
    
    function buildText( { name, age } ) {
        return `${name} самый мудрый, ему ${age}`; 
    }

    function getMaxAgeIndex(people) {
        let index = 0;
        let maxAge = people[0].getAge();

        for (let i = 0; i < people.length; i++) {
            if (people[i].getAge() <= maxAge) {
                continue;
            }

            maxAge = people[i].getAge();
            index = i;
        }

        return index;
    }

    function getRandomInt(max) {
    return Math.floor(Math.random() * max);
    }
    
    let people = [
    createPerson('Daryl', getRandomInt(30)),
    createPerson('Rick', getRandomInt(30)),
    createPerson('Carol', getRandomInt(30)),
    createPerson('Negan', getRandomInt(30)),
    createPerson('Lori', getRandomInt(30)),
    createPerson('Maggie', getRandomInt(30)),
    createPerson('Carl', getRandomInt(30)),
    ];

    const maxAgeIndex = getMaxAgeIndex(people);

    log(buildText({
        name: people[maxAgeIndex].getName(),
        age: people[maxAgeIndex].getAge()
    }));
    
// Задание 4, ввод порядкового номера недели и вывод его названия

    function getDayIdFromUser() {
        const input = prompt('Введите номер дня недели');

        return Number(input);
    }
    
    const WEEK_DAYS_BY_ID = {
        1: 'Понедельник',
        2: 'Вторник',
        3: 'Среда',
        4: 'Четверг',
        5: 'Пятница',
        6: 'Суббота',
        7: 'Воскресенье',
    };

    const dayId = getDayIdFromUser();

    console.log(WEEK_DAYS_BY_ID[dayId]);
    
// Задание 5, ввод порядкового номера месяца и вывод названия сезона года

    const MONTH_ERROR_TEXT = 'Такого месяца нет.'
    const MONTH_REQUEST_TEXT = 'Введите номер месяца'
    
    function getMonthIdFromUser() {
        const input = prompt(MONTH_REQUEST_TEXT);

        return Number (input);
    }

    function getMonthTitle(id) {
        if (!SEASONS_BY_MONTHS[id]) {
            return MONTH_ERROR_TEXT;
        }

        return SEASONS_BY_MONTHS[id];
    }

    const WINTER = 'Зима';
    const SPRING = 'Весна';
    const SUMMER = 'Лето';
    const AUTUMN = 'Осень';

    const SEASONS_BY_MONTHS = {
        12: WINTER,
        1: WINTER,
        2: SPRING,
        3: SPRING,
        4: SPRING,
        5: SUMMER, 
        6: SUMMER, 
        7: SUMMER,
        8: AUTUMN,
        9: AUTUMN,
        10: AUTUMN,
        11: WINTER
    };

    const monthId = getMonthIdFromUser();

    log(getMonthTitle(monthId));
    
// Задание 6, объект с данными для отрисовки блока с историями
    
    function createStory(title, imgSrc, isViewed) {
        return {
            title,
            imgSrc,
            isViewed
        }
    }

    let stories = [
        createStory({
            title: 'Путешествия с детьми',
            imgSrc: 'src="https://90.img.avito.st/image/1/1.Z_WKNbayAWA-RsvOPmJHr8PjyR4-ks8.iCdfmvLs24hjHLFX4TZ2I0iSK_jnOpvJlbLNONfc7Ss"',
            isViewed: true
        }),
        createStory({
            title: 'Интерьер в стиле лофт',
            imgSrc: 'src="https://66.img.avito.st/image/1/1.Y6Z8uLayBTPIy8-dyOcD1whtzU3IH8s.xGDFv4xmlOu8A8a9UKrm7YjH3JEK5rD87gGCFpH_dGE"',
            isViewed: false
        }),
        createStory({
            title:'Дарим iPhone 14 и не только',
            imgSrc: 'src="https://86.img.avito.st/image/1/1.d0W057ayEdAAlNt-AJAnbr0y2a4AQN8.qeuozk1GQWvP1mTLef9zzpaJ1UkjB6fRvhaYC1yRF0o"',
            isViewed: true
        }),
    ];
    
log(stories);