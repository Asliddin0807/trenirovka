async function f1(){
    console.log('1');
}

async function f2(){
   console.log('2');
}

function f3(){
    console.log('3');
}

function f4(){
    console.log('4');
}

async function start(){
 await f1()
 await f2()
 
}
function app(){
 f3()
 f4()
}

start();
app();
