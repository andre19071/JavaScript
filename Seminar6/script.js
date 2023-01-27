console.log("--------Задание №1--------");
/*<div id="block">
<p>1</p>
<p>2</p>
</div>
1 Получите ссылку на первый абзац из дива с id, равным block, выведите его в консоль*/
const blockEl = document.querySelector("#block p");
console.log(blockEl);
/*2 Получите ссылку на первый абзац с классом www. и вывести его в консоль
<p class="www">text 1</p>
<p class="www">text 2</p>*/
const blockE2 = document.querySelector(".www");
console.log(blockE2);

console.log("--------Задание №2--------");
/* Дан тег <a class="link" href="#">link text html</a>
1 Вам необходимо поменять текст внутри ссылки на “link text js”
2 Заменить href, на значение https://developer.mozilla.org/ru/ */

const newlink = document.querySelector(".link");
newlink.textContent = "link text js";
newlink.href = "https://developer.mozilla.org/ru/ ";
/*2 Дан тег <img class="photo" src="" alt=""> 
1 Вам необходимо с помощью js поменять значение src на любое изображение из интернета*/
const newimg = document.querySelector(".photo");
newimg.src = "73.jpg";


console.log("--------Задание №3--------");

// Дан тег <div class="content"></div> 
// Создайте новый элемент p
// Добавьте в него текст “Новый текстовый элемент”

const paragraph = document.createElement('p');
paragraph.textContent = 'Новый текстовый элемент';

// Добавьте созданный элемент внутри <div class="content"></div>
const content = document.querySelector('.content');
content.appendChild(paragraph);

// Удалите добавленный узел

//contentEl.remove();

console.log("--------Задание №4--------");
/*1 Создать элемент button, добавить в блок <div class="content"></div>
2 При клике на который в консоль выводится сколько раз пользователь нажал на данную кнопку*/


const content1 = document.querySelector('.content1');

const buttonEl = document.createElement('button');
content1.appendChild(buttonEl);
buttonEl.textContent = 'Push';
let count = 0;
buttonEl.onclick = function () {
console.log(++count);
}
console.log("--------Задание №5--------");
/*1 Дан тег <div class="content"></div> 
2 Создайте с помощью javascript новый элемент button
3 Добавьте текст для кнопки “Отправить”
4 При клике на данную кнопку необходимо чтобы текст поменялся на “Текст отправлен”*/
const contentEl = document.querySelector('.content2');
const buttonElem = document.createElement('button');
buttonElem.textContent = 'Отправить';
contentEl.appendChild(buttonElem);
buttonElem.onclick = function () {
  if (buttonElem.textContent === 'Отправить') {
    buttonElem.textContent = 'Текст отправлен';
  } else {
    buttonElem.textContent = 'Отправить';
  }
}