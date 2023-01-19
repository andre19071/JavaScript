/*Задание 1*/

/*1.Создайте массив с элементами 1, 2, 3. Выведите на экран каждый из этих элементов.*/
const arr = [1, 2, 3];
console.log(arr[0]);
console.log(arr[1]);
console.log(arr[2]);

for (let i = 0; i < arr.length; i++) {
  const element = arr[i];
  console.log(element);
}

/*2.Создайте массив с произвольными элементами. Выведите на экран количество элементов в этом массиве.*/
/*const arr = [1, 2, 3];*/
console.log(arr.length);

/*3.Создайте массив с элементами 'a', 'b', 'c'. Запишите вместо первого элемента число 1, вместо второго - 2, вместо третьего - 3.*/
const arrText = ["a", "b", "c"];
arrText[0] = 1;
arrText[1] = -2;
arrText[2] = -3;
console.log(arrText);

/*Задание 2*/

/*1.Создайте массив с элементами 1, 2 и 3. С помощью оператора ++ увеличьте каждый элемент массива на единицу.*/
const Arr = [1, 2, 3];
for (let index = 0; index < Arr.length; index++) {
  Arr[index]++;
}
console.log(Arr);

/*2.Узнайте длину следующего массива:
const arr = [];
arr[3] = 'a';
arr[8] = 'b';*/
const ARr = [];
ARr[3] = "a";
ARr[8] = "b";
console.log(ARr.length);

/*3.Пусть дан такой массив:
const arr = [1, 2, 3];
Добавьте ему в конец элементы 4 и 5.*/
const ARR = [1, 2, 3];
console.log(ARR);
ARR.push(4, 5);
console.log(ARR);

/*4.Создайте произвольный массив из 5 элементов, Удалите из него два последних элемента. Проверьте, какое станет значение свойства length после этого.*/
function getRandom(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}
const Arrey = [];
for (let i = 0; i < 5; i++) {
  Arrey[i] = getRandom(0, 10);
}
console.log(Arrey);
Arrey.pop();
Arrey.pop();
console.log(Arrey);
console.log(Arrey.length);

/*Задание 3*/

/*1.С помощью цикла for выведите в консоль числа от 11 до 33.*/
const ARrey = [];
for (let i = 11; i <= 33; i++) {
  ARrey.push(i);
}
console.log(ARrey);

/*2.С помощью цикла for выведите в консоль нечетные числа в промежутке от 1 до 99.*/
const ARRey = [];
for (let i = 1; i <= 99; i++) {
  if (i % 2) {
    //if (i % 2 === 0) для поиска четных
    ARRey.push(i);
  }
}
console.log(ARRey);

/*3.С помощью цикла for выведите в консоль числа от 100 до 0.*/
const ARREy = [];
for (let i = 100; i >= 0; i--) {
  ARREy.push(i);
}
console.log(ARREy);

/*4.Дано число num с неким начальным значением. Умножайте его на 3 столько раз, пока результат умножения не станет больше 1000. Какое число получится? Посчитайте количество итераций, необходимых для этого.*/
let num = 3;
let i = 0;
while (num < 100) {
  num *= 3;
  i++;
}
console.log(`Количество итераций равно ${i}`);

/*Задание 4*/

/* 1.Дан массив const arr = [2, 5, 9, 15, 1, 4];
Выведите в консоль те элементы массива, которые больше 3-х, но меньше 10.*/

const ARREY = [2, 5, 9, 15, 1, 4];
for (let index = 0; index < ARREY.length; index++) {
  const element = ARREY[index];
  if (element >= 3 && element <= 10) {
    console.log(element);
  }
}
//второй вариант 
/*arr.forEach(element => {
    if (element <= 10 && element >= 3) {
    console.log(element);
    }
    });*/

/*2.Найдите сумму четных чисел от 2 до 100.
Дан массив const = [2, 5, 9, 3, 1, 4];
Найдите сумму элементов этого массива.*/

let sum = 0;
 for (let i = 2; i <= 100; i = i + 2) {
      if (!(i % 2)){
        sum += i ;
      }
 }
console.log(sum);


//второй вариант
//let sum = 0;
// for (let i = 2; i <= 100; i += 2) {
// sum += i ;
// }
// console.log(sum);

/*4.Дан массив const = [2, 5, 9, 3, 1, 4];
Найдите сумму элементов этого массива.*/

let sumNew = 0;
const arrNew= [2, 5, 9, 3, 1, 4]
for (let i = 0; i < arrNew.length; i++) {
    const element = arrNew[i];
    sumNew += element;  
}
console.log(sumNew);

/*4.С помощью цикла сформируйте строку '-1-2-3-4-5-6-7-8-9-'.*/

let text = '-'
for (let i = 1; i <= 9; i++) {
    text += i + '-';
}
console.log(text);

/*5.Дан массив с числами. const = [2, 5, 9, 0, 3, 1, 4]; Запустите цикл, который будет по очереди выводить элементы этого массива в консоль до тех пор, пока не встретится элемент со значением 0. После этого цикл должен завершить свою работу.*/

const arrLest = [2, 5, 9, 0, 3, 1, 4];
for (let i = 0; i < arrLest.length; i++) {
    const element = arrLest[i];
    console.log(element);
    if (element === 0){
     break;   
    }
}