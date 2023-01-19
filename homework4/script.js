console.log(`--------------Задача №1--------------`);
/*Необходимо с помощью цикла for вывести следующие 11 строк в консоль:
0 – это ноль
1 – нечетное число
2 – четное число
3 – нечетное число
…
10 – четное число*/

for (let i = 0; i <= 10; i++) {
  if (i === 0) {
    console.log(`${i} это ноль`);
  } else if (i % 2 === 0) {
    console.log(`${i} четное число`);
  } else {
    console.log(`${i} нечетное число`);
  }
}

console.log(`--------------Задача №2--------------`);
/*Дан массив [1, 2, 3, 4, 5, 6, 7]
Сделайте из этого массива следующий [1, 2, 3, 6, 7]*/

const array = [1, 2, 3, 4, 5, 6, 7];
array.splice(3, 2);
console.log(array);

console.log(`--------------Задача №3--------------`);
/*Используя Math.random() вам необходимо генерировать цифры от 0 до 9, и создать массив состоящий из 5 таких элементов
1. Рассчитать сумму элементов этого массива
2. Найти минимальное число
3. Найти есть ли в этом массиве число 3*/

function getRandom(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}
const Array = [];
for (let i = 0; i < 5; i++) {
  Array[i] = getRandom(0, 10);
}
console.log(Array);

console.log(`--------------Задача №3.1--------------`);

let sum = 0;
function sumElement(Array) {
  for (let i = 0; i < Array.length; i++) {
    const element = Array[i];
    sum += element;
  }
  return console.log(`Сумма элементов массива ${sum}`);
}
sumElement(Array, sum);

console.log(`--------------Задача №3.2--------------`);

let min = Array[0];
function minElement(Array) {
  for (let i = 0; i < Array.length; i++) {
    const element = Array[i];
    if (min > element) {
      min = element;
    }
  }
  return console.log(`Mинимальное число ${min}`);
}
minElement(Array, min);

console.log(`--------------Задача №3.3--------------`);

let elemThree = 3;
function threeNumber(Array, elem) {
  for (let i = 0; i < Array.length; i++) {
    if (Array[i] === elem) {
      return console.log(`В данном массиве есть число ${elem}`);
    }
  }
  return console.log(`В данном массиве нет числа ${elem}`);
}
threeNumber(Array, elemThree);

 
console.log(`--------------Задача №4----------------`);
/*Необязательное задание.
Необходимо вывести горку в консоль (используя цикл for), как показано на
рисунке, только у вашей горки должно быть 20 рядов, а не 5:

x
xx
xxx
xxxx
xxxxx*/

let slide = ' ';
for (let i= 0; i < 20; i++) {
  slide += 'x';
  console.log(slide);
}