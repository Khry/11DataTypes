//6
function getTopNRichestNames(number, people) {
  people.map(function(person) {
    var money = parseInt(person.income);
    var positionOfIndex = person.income.length - 1;
    if (person.income[positionOfIndex] === 'B') {
      person.money = money * 1e9;
    } else if (person.income[positionOfIndex] === 'M') {
      person.money = money * 1e6;
    } else if (person.income[positionOfIndex] === 'K') {
      person.money = money * 1e3;
    }
    });
  people.sort(function (a, b) {
    if (a.money < b.money) {
      return 1;
    }
    if (a.money > b.money) {
      return -1;
    }
    return 0;
    });
  var slicedPeople = people.slice(0, number);
  return pluckByAttribute(slicedPeople, 'name');
  }
var people = [
  {name: 'Bara', income: '1B'},
  {name: 'Dara', income: '5B'},
  {name: 'Kara', income: '1M'},
  {name: 'Zara', income: '2K'},
  {name: 'Lara', income: '24K'},
  {name: 'Fara', income: '2K'},
  {name: 'Nara', income: '2K'},
  {name: 'Sara', income: '2K'}
 ];
console.log(getTopNRichestNames(2, people));
console.log(getTopNRichestNames(100, people));