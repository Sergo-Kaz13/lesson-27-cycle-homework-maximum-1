'use strict'

// ? Гра «Вгадай число». Запропонуй користувачеві загадати число від 0 до 100 і відгадай його наступним способом: кожну ітерацію циклу діли діапазон чисел навпіл, записуй результат в N і питай у користувача «Ваше число> N, <N або == N?». Залежно від того що вказав користувач, зменшуй діапазон. Початковий діапазон від 0 до 100, поділи навпіл і отримай 50. Якщо користувач вказав, що його число> 50, то зміни діапазон на від 51 до 100. І так до тих пір, поки користувач не вибере == N.

alert('Загадай число від 0 до 100');

let start = true;
let more; // більше
let less; // менше
let equal; // дорівнює
let numbers = [];

for (let i = 0; i < 101; i++) {
  numbers.push(i);
}

while (start) {
    more = confirm('Твоє число більше ' + numbers[Math.floor(numbers.length / 2)]);
    if (!more) {
      less = confirm('Твоє число менше ' + numbers[Math.floor(numbers.length / 2)]);
    } 
    if (!less && !more) {
      equal = confirm('Твоє число дорівнює ' + numbers[Math.floor(numbers.length / 2)]);
    }

  if (!more && !less && !equal) {
    start = false;
  } else {
    if (more) {
      numbers.splice(0, Math.floor(numbers.length / 2))
    } else if (less) {
      numbers.splice(Math.floor(numbers.length / 2))
    } else if (equal) {
      alert('Твоє число ' + numbers[Math.floor(numbers.length / 2)]);
      start = false;
    }
  }
}
