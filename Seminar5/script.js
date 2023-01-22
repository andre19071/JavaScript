console.log("---------Задание № 1-----------");

//1 Создайте объект с ключами от 1 до 7, в качестве значений содержащий имена дней недели. Выведите на экран “Вторник”
const week = {
  1: "Понедельник",
  2: "Вторник",
  3: "Среда",
  4: "Четверг",
  5: "Пятница",
  6: "Суббота",
  7: "Воскресенье",
};
console.log(week[2]);
//2 Создайте объект user с ключами 'name', 'surname', ‘age’. Выведите на экран фамилию, имя и возраст через дефис.

const user = {
  name: "Наталья",
  surname: "Андреева",
  age: "45 лет",
};
console.log(`${user.name}  - ${user.surname} - ${user.age}`);
//3 Добавьте в объект user свойство отчество, которое пользователь должен ввести с клавиатуры

//user.patronymic = prompt("Введите отчество");
console.log(user.patronymic);
//Удалите свойство surname
delete user.surname;
console.log(user);

console.log("---------Задание № 2-----------");

//1 Даны два массива: первый с названиями дней недели, а второй - с их порядковыми номерами:
//const arr1 = ['пн', 'вт', 'ср', 'чт', 'пт', 'сб', 'вс'];
//const arr2 = [1, 2, 3, 4, 5, 6, 7];
//С помощью цикла создайте объект, ключами которого будут названия дней, а значениями - их номера.

const arr1 = ["пн", "вт", "ср", "чт", "пт", "сб", "вс"];
const arr2 = [1, 2, 3, 4, 5, 6, 7];
const week2 = {};

for (let i = 0; i <= arr2.length; i++) {
  week2[arr2[i]] = arr1[i];
}
console.log(week2);

//2 const obj = {x: 1, y: 2, z: 3};
//Переберите этот объект циклом и возведите каждый элемент этого объекта в квадрат.

const obj = { x: 1, y: 2, z: 3 };
console.log(Object.values(obj));
for (let key in obj) {
  if (typeof obj[key] !== "number") {
    console.log("Не все значения числа!");
  } else {
    obj[key] = obj[key] ** 2;
  }
}
console.log(obj);

console.log("---------Задание № 3-----------");

const obj1 = {
  key1: {
    key1: 1,
    key2: 2,
    key3: 3,
  },
  key2: {
    key1: 4,
    key2: 5,
    key3: 6,
  },
  key3: {
    key1: 7,
    key2: 8,
    key3: 9,
  },
};

let sum2 = 0;
for (const key in obj1) {
  console.log(Object.values(obj1[key]).reduce((a, b) => a + b));
  sum2 += Object.values(obj1[key]).reduce((a, b) => a + b);
}
console.log(sum2);
// 2 dfhbfyn
/*let sum = 0;
for (const key in obj) {
for (const keyIn in obj[key]) {
sum += obj[key][keyIn];
}
}
console.log(sum);*/

console.log("---------Задание № 4-----------");
//1 Создайте объект riddles
//2 Добавьте свойства question, answer
//3 создайте метод askQuestion который спрашивает у пользователя вопрос question и сравнивает ответ с answer
//4 Если ответил неверно, то в консоль выводится текст: “вы проиграли”

const riddles = {
  question: "Зимой и летом одним цветом",
  answer: "Елка",
  riddler() {
    userAnswer = prompt(this.question);
    if (userAnswer === this.answer) {
      console.log("Верно!");
    } else {
      console.log("Вы проиграли!");
    }
  },
};
riddles.riddler();
