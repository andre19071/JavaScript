/*Пользователь с клавиатуры вводит 3 числа, необходимо создать функцию, которая определяет максимальное значение среди этих чисел*/

let a = Number(prompt('Введите первое число'));
let b = Number(prompt('Введите второе число'));
let c = Number(prompt('Введите третье число'));
const Max = (a,b,c) => {
   let max = a;
    if (b > max) {
        max = b;
    } 
    if  (c > max) {
        max = c;
    }
       return max;
    } 
console.log(`Максимальное число ${Max(a,b,c)}`);

