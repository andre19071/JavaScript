 /* Задание №1
    1.Написать функцию, которой передаем, имя, фамилия и возраст, и получаем строку "Привет Иван Петров с возрастом 17" (только здесь данные, которые были переданы в функцию)
    2.Создайте функцию которая возводит переданное число в квадрат
    3.Сделайте функцию, которая параметром принимает число и проверяет, положительное это число или отрицательное. В первом случае пусть функция выводит в консоль текст '+++', а во втором '---'.*/

    /*№1*/
    function userFIO(surnameName, fullName, age)   {
      return `Привет ${surnameName} ${fullName} с возрастом ${age}`;
    }
    
    /*let userFIO = (surnameName, fullName, age) => `Привет ${surnameName} ${fullName} с возрастом ${age}`;*/
    console.log(userFIO('Андреева','Наталья','45'));   
    

    /*№2*/
    /*function square(numberSqr) {
        return numberSqr **2;
    }*/
    const square2= (numberSqr2) => {
        return numberSqr2 **2;
    }
    console.log(square2(Number(prompt('Введите число,которое необходимо возвести в квадрат'))));

    /*№3*/
    function positiveOrNegative(number) {
        console.log((number >= 0) ? '+++' : '---');
        }
        positiveOrNegative(prompt('Введите число, функция проверит положительное оно или отрицательное'));

/* Задание 2
    1. Сделайте функцию, которая параметрами принимает 3 числа и выводит в консоль сумму этих чисел.
    2.С помощью созданной вами функции выведите в консоль сумму значений этих переменных.
        let param1 = 1;
        let param2 = 2;
        let param3 = 3;
     3. Дана фукнция
        function func(num = 5) {
        console.log(num * num);
        }
   Расскажите, каким будет результат каждого из вызовов функции.
        func(2);
        func(3);
        func();*/  
        
    /*№1*/  
    const sum = (num1,num2,num3) => Number(num1+num2+num3)/*{
        return Number(num1+num2+num3) ;
    } */
    console.log(sum(Number(prompt('Введите первое число')),Number(prompt('Введите второе число')),Number(prompt('Введите третье число'))));
    
    /*№2*/
    let param1 = '1';
    let param2 = '2';
    let param3 = '3';

    const summa = (param1,param2,param3) => {
        return Number(param1)+Number(param2)+Number(param3);
    }
    console.log(summa(param1,param2,param3));

/* Задание 3
   1. Сделайте функцию, которая параметром принимает число, а возвращает квадратный корень из этого числа. С помощью этой функции найдите корень числа 3, затем найдите корень числа 4. Просуммируйте полученные результаты и выведите их в консоль.
   2.Создайте функцию, которая находит минимальное число из 2х передаваемых аргументов функции*/
    
   /*№1*/ 
   const numbersq = (a,b) => {
    return Math.sqrt(a)+Math.sqrt(b);
   }
console.log(numbersq (3,4));

   /*№2*/

   function min(a,b) {
    /*a = Number(a);
    b = Number(b);*/
    return a < b ? a : b;
   /*if (Number (a)< Number (b)) {
    return Number (a);
   } else return Number (b);*/ 
   }
   console.log(min('3','4') );

   /* Задание 4
1.Сделайте функцию, которая принимает параметром число от 1 до 7, а возвращает день недели на русском языке.
2.Написать функцию, которой передаем имя и она возвращает приветствие в зависимости от времени суток (Доброе утро\день\вечер\ночи Иван) (гуглить время js)*/
    
/*№1*/ 

let dayOfWeek = Number(prompt('Введите день недели'));
function dayOfTheWeek(dayOfWeek) {
switch (dayOfWeek) {
case 1:
console.log('Понедельник');
break;
case 2:
console.log('Вторник');
break;
case 3:
console.log('Среда');
break;
case 4:
console.log('Четверг');
break;
case 5:
console.log('Пятница');
break;
case 6:
console.log('Суббота');
break;
case 7:
console.log('Воскресенье');
break;
default:
console.log("Нет такого дня недели");
}
}
dayOfTheWeek(dayOfWeek);

/*№2*/ 
let name = 'Наталья';
function helloTime() {
let now = new Date();
let hours = now.getHours();
if (hours >= 5 && hours <= 11)
console.log(`Доброе утро, ${name}`);
else if (hours == 12)
console.log(`Добрый день, ${name}`);
else if (hours > 12 && hours <= 17)
console.log('Добрый день, уже вторая половина дня.');
else if (hours > 17 && hours <= 23)
console.log(`Добрый вечер, ${name}`);
else if (hours > 23 && hours <= 5)
console.log(`Доброй ночи, ${name}`);
}
helloTime();