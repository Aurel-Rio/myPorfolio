
const items = document.querySelectorAll('img');
const nbSlide = items.length;
const next = document.querySelector('.right');
const back = document.querySelector('.left');
let count = 0;

function slideNext() {
    items[count].classList.remove('active');

    if (count < nbSlide - 1) {
        count++;
    } else {
        count = 0;
    }
    items[count].classList.add('active');
    console.log(count);
}
next.addEventListener('click', slideNext);

function slideBack() {
    items[count].classList.remove('active');

    if (count > 0) {
        count--;
    } else {
        count = nbSlide - 1;
    }
    items[count].classList.add('active');
    console.log(count);
}
back.addEventListener('click', slideBack);