//Сделайте функцию, которая считает и выводит количество своих вызовов.
// Использую функцию Замыкание
function app(){
    let i = 1;
   return function (){
      return i++;
   }

}

let counter = app();
console.log(counter());
console.log(counter());
console.log(counter());
console.log(counter());