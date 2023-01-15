/*Необходимо реализовать четыре функции, каждая функция должна принимать по два
числа и выполнять одну из операций (каждая функция выполняет одну из них):
1. Сложение
2. Разность
3. Умножение
4. Деление
Необходимо сделать так, чтобы функция вернула число, например выражение
console.log(sum(2, 6)); должно вывести число 8 в консоль (sum - функция
сложения в данном примере, ваши названия функций могут отличаться).
Округлять значения, которые возвращают функции не нужно, однако, обратите
внимание на разность, функция должна вычесть из большего числа меньшее, либо
вернуть 0, если числа равны.
Функциям всегда передаются корректные числа, проверки на NaN, Infinity делать
не нужно. */


let NumberOne = Number(prompt("Введите первое число"));
let NumberTwo = Number(prompt("Введите второе число"));

const sum = (NumberOne, NumberTwo) => {
  return NumberOne + NumberTwo;
};
console.log(`Сумма чисел равна ${sum(NumberOne, NumberTwo)}`);

const difference = (NumberOne, NumberTwo) => {
  if (NumberOne > NumberTwo || NumberOne === NumberTwo) {
    return NumberOne - NumberTwo;
  } else if (NumberTwo > NumberOne) {
    return NumberTwo - NumberOne;
  }
};
console.log(`Разность чисел равна ${difference(NumberOne, NumberTwo)}`);

const composition = (NumberOne, NumberTwo) => {
  return NumberOne * NumberTwo;
};
console.log(`Произведение чисел равно ${composition(NumberOne, NumberTwo)}`);

const division = (NumberOne, NumberTwo) => {
  return NumberOne / NumberTwo;
};
console.log(`Частное чисел равно ${division(NumberOne, NumberTwo)}`);
