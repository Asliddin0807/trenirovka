function app(n){
    function step(){
        console.log(1000 * n)
    }
   return step;
}
let myApp = app(4);
myApp();
function app(x){
   return function (y){
      return x + y;
   }
}
let add1 = app(3);
let add2 = app(10);

console.log(add1(2));
console.log(add2(3));