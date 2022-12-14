function createPerson({ name, age }) {
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
        return `Привет, ${this.getName()}, мне ${this.getAge()}`;
      },
      selebrateBirthday: function () {
        this.age += 1;
      }
    }
  }
  
  function buildOldestPersonText(person) {
    return `B этой группе самый старший ${person.getName()}, ему уже: ${person.getAge()}`
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
  
  function renderPeopleApp(people, oldestPerson, node) {
    let peopleListHTML = ``;
  
    people.forEach(function (person) {
      peopleListHTML += `<div>${person.getName()}</div>`;
    });
  
    node.innerHTML = `
    ${peopleListHTML}
    <div>${buildOldestPersonText(oldestPerson)}</div>
    `;
  };