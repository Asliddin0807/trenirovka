const knopka = document.getElementById('knopka');
let count = 0;
function app(){
    
    return function(){
        count++;
        document.getElementById('nol').innerHTML = count;
    }
}
let one = app();
knopka.addEventListener('click', () => {
    one();
})