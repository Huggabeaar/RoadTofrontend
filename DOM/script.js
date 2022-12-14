// Задание 1
const TITLE_TEXT = 'Это изменённый через JS заголовок';

const titleNode = document.querySelector('.js-title');

titleNode.innerText = TITLE_TEXT;

// Задание 2
function buildNumbersArray(length) {
  const numbers = [];

    for (let i = 1; i <= NUMBERS_QUANTITY; i++) {
    numbers.push(i)
  }
  
  return numbers;
}

function renderNumbers(numbers, node) {
    let appHTML = '';

  numbers.forEach(function (elem) {
    appHTML += `<div>${elem}</div>`;
  });

  node.innerHTML = appHTML;
}

const NUMBERS_QUANTITY = 100;

const appNode = document.querySelector('.js-app');
const numbers = buildNumbersArray(NUMBERS_QUANTITY);

renderNumbers(numbers, appNode);

// Задание 3

const people = [
  createPerson ({name:'Daryl', age: 28}),
  createPerson ({name:'Rick', age: 2}),
  createPerson ({name:'Carol', age: 21}),
  createPerson ({name:'Carl', age: 8}),
  createPerson ({name:'Michonne', age: 42}),
  createPerson ({name:'Eugene', age: 6}),
  createPerson ({name:'Judith', age: 12}),
];

const maxAgeIndex = getMaxAgeIndex(people);

renderPeopleApp(people, people[maxAgeIndex], appNode)

// Задание 4

  const avitoStories = [
    createStory({
       title: 'Интерьер в стиле лофт',
       imgSrc: "https://66.img.avito.st/image/1/1.Y6Z8uLayBTPIy8-dyOcD1whtzU3IH8s.xGDFv4xmlOu8A8a9UKrm7YjH3JEK5rD87gGCFpH_dGE",
       isViewed: true
    }),
    createStory({
      title: 'Дарим iPhone 14 и не только',
      imgSrc: "https://86.img.avito.st/image/1/1.d0W057ayEdAAlNt-AJAnbr0y2a4AQN8.qeuozk1GQWvP1mTLef9zzpaJ1UkjB6fRvhaYC1yRF0o",
      isViewed: false
   }),
   createStory({
    title: 'Путешествия с детьми',
    imgSrc: "https://90.img.avito.st/image/1/1.Z_WKNbayAWA-RsvOPmJHr8PjyR4-ks8.iCdfmvLs24hjHLFX4TZ2I0iSK_jnOpvJlbLNONfc7Ss",
    isViewed: true
 }),
];

renderStories(avitoStories, appNode);