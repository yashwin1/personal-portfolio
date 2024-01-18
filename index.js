let slides = document.querySelector('.slider .slides');
let items = document.querySelectorAll('.slider .slides .slide');
let dots = document.querySelectorAll('.slider .dots li');
let prev = document.querySelector('.slider .buttons .prev');
let next = document.querySelector('.slider .buttons .next');

let active = 0;
let lengthItems = items.length - 1;

next.onclick = function() {
    active = active + 1 > lengthItems ? active = 0 : active += 1;
    reloadSlider();
}
prev.onclick = function(){
    active = active - 1 >= 0 ? active - 1 : lengthItems;
    reloadSlider();
}

function reloadSlider() {
    let checkLeft = items[active].offsetLeft;
    slides.style.left = -(checkLeft - 150) + 'px';

    let last_active_dot = document.querySelector('.slider .dots li.active');
    last_active_dot.classList.remove('active');
    dots[active].classList.add('active');
}

dots.forEach((li, key) => {
    li.addEventListener('click', ()=>{
        active = key;
        reloadSlider();
    })
});

window.onresize = function(event) {
    reloadSlider();
};