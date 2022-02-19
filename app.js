const circle = document.querySelectorAll('.circle');
const logo = document.querySelector('.logo');
const js = document.querySelector('.js');
const line = document.querySelector('.line');
console.log(typeof circle);
let timer = 3000;
const str = ['J', 'A', 'V', 'A', 'S', 'C', 'R', 'I', 'P', 'T'];
for (let i in circle) {
    setTimeout(() => {
        circle[i].innerHTML = `${str[i]}`;
        circle[i].style.animationName = "none";
        circle[i].style.backgroundColor = "black";
        circle[i].style.color = "white";
        circle[i].style.border = "none";
        if (i >= str.length - 1) {
            logo.style.borderBottom = '1px solid yellow';
            js.classList.remove('hiden');
            line.classList.add('hiden');
        }
    }, timer);
    timer += 2000; 
}
    








