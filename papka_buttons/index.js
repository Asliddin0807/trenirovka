function app(){
    let i = 1;
    return function(){
        this.innerHTML = i;
        return i++;
    }

}

let all_buttons = document.getElementsByTagName('button');
for(let i = 0; i < all_buttons.length; i++){
    all_buttons[i].addEventListener('click', app(this));
}