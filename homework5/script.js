console.log("---------Задание № 1-----------");

//Дан объект numbers. Необходимо в консоль вывести все значения больше или равные 3.

const numbers = {
  keyin1: 1,
  keyin2: 2,
  keyin3: 3,
  keyin4: 4,
  keyin5: 5,
  keyin6: 6,
  keyin7: 7,
};
for (const keyin in numbers) {
  if (numbers[keyin] >= 3) {
    console.log(numbers[keyin]);
  }
}

console.log("---------Задание № 2-----------");

//Необходимо из объекта, который лежит в константе post вывести значения, к которым приписан комментарий, в консоль.

const post = {
  author: "John", // вывести этот текст
  postId: 23,
  comments: [
    {
      userId: 10,
      userName: "Alex",
      text: "lorem ipsum",
      rating: {
        likes: 10,
        dislikes: 2, // вывести это число
      },
    },
    {
      userId: 5, // вывести это число
      userName: "Jane",
      text: "lorem ipsum 2", // вывести этот текст
      rating: {
        likes: 3,
        dislikes: 1,
      },
    },
  ],
};
const oneArray = Object.values(post.comments[0]);
const twoArray = Object.values(oneArray[3]);
const threeArray = Object.values(post.comments[1]);
console.log(post.author, twoArray[1], threeArray[0], threeArray[2]);

console.log("---------Задание № 3-----------");

//Дан массив product, необходимо цену каждого продукта уменьшить на 15% используя метод forEach.

const product = [
  {
    id: 3,
    price: 200,
  },
  {
    id: 4,
    price: 900,
  },
  {
    id: 1,
    price: 1000,
  },
];
product.forEach((product) => {
  product.price *= 0.85;
});
console.log(product);

console.log("---------Задание № 4-----------");

//1.Необходимо вывести в консоль массив продуктов в котором есть хоть одна фотография используя метод filter. Исходные данные - массив product.
//2.Необходимо отсортировать массив products используя метод sort по цене, начиная с самой маленькой, заканчивая самой большой ценой, после чего вывести
//отсортированный массив в консоль.

const products = [
  {
    id: 3,
    price: 127,
    photos: ["1.jpg", "2.jpg"],
  },
  {
    id: 5,
    price: 499,
    photos: [],
  },
  {
    id: 10,
    price: 26,
    photos: ["3.jpg"],
  },
  {
    id: 8,
    price: 78,
  },
];
const productsphotos = products.filter((products) => products.photos >= ".jpg");
console.log(productsphotos);

products.sort((min, max) => min.price - max.price);
console.log(products);

console.log("---------Задание № 5-----------");

//Дано 2 массива.Вам необходимо объединить 2 этих массива, чтобы значения первого массива были ключами, а значения второго массива — значениями.

const en = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"];
const ru = [
  "понедельник",
  "вторник",
  "среда",
  "четверг",
  "пятница",
  "суббота",
  "воскресенье",
];
const week = {};

for (let i = 0; i <= en.length; i++) {
  week[en[i]] = ru[i];
}
console.log(week);

console.log("---------Задание № 6-----------");

/*Создайте объект riddles 
Добавьте свойства question, answer
создайте метод askQuestion который спрашивает у пользователя вопрос question и сравнивает ответ с answer
Добавьте свойство hints (содержащее 2 подсказки)
Если пользователь ответил неверно, ему даётся одна подсказка
Если пользователь ответил второй раз неверно, даётся вторая подсказка
Если ответил неверно, то в консоль выводится текст: “вы проиграли”*/

const riddles = {
  question: "На дворе горой,а в избе водой",
  answer: "снег",
  hints: ["белый", "холодный"],
  askQuestion: function () {
    this.userAnswer = prompt(this.question).toLowerCase();
    if (this.userAnswer === this.answer) {
      console.log("Верно!");
    } else if (this.hints.length > 0) {
      this.outputhints();
      this.askQuestion();
    } else {
      console.log("Вы проиграли");
    }
  },
  outputhints: function () {

    alert(this.hints.shift());
  },
};
riddles.askQuestion();
