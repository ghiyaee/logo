const cir = document.querySelectorAll('.cir');
const div = document.querySelector('.logo');
const js = document.querySelector('.js');
const line = document.querySelector('.line');

let timer = 3000;
const str = ['J', 'A', 'V', 'A', 'S', 'C', 'R', 'I', 'P', 'T'];
for (let i in cir) {
    setTimeout(() => {
        cir[i].innerHTML = `${str[i]}`;
        cir[i].style.animationName = 'none';
        cir[i].style.backgroundColor = "black";
        cir[i].style.color = "white";
        cir[i].style.border = "none";
        if (i >= str.length - 1) {
            div.style.borderBottom = '1px solid yellow';
            js.classList.remove('hiden');
            line.classList.add('hiden');
        }
    }, timer);
    timer += 2000; 
}
    








