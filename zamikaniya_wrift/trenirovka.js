function app(event){
    return function (){
        document.body.style.fontSize = event + "px";
    }
}

let one = app(12)
let two = app(14)
let three = app(16)
let four = app(18)
let five = app(20)


document.getElementById('size-12').onclick = one;
document.getElementById('size-14').onclick = two;
document.getElementById('size-16').onclick = three;
document.getElementById('size-18').onclick = four;
document.getElementById('size-20').onclick = five;
