const circle = document.querySelectorAll('.circle');
const logo = document.querySelector('.logo');
const line = document.querySelector('.line');
const reset=document.querySelector('#reset')
const form = document.querySelector('#form');
const int = document.querySelector('#int');
const box = document.querySelector('.box');
const lines = document.querySelector('.lines')
let timer = 3000;
const arry = [];

reset.addEventListener('click', () => {
    localStorage.clear();
    location.reload();
})
form.addEventListener('submit', (e) => {
    e.preventDefault();
    let newa = int.value.trim();
    arry.push(...newa.toUpperCase());
    int.value = '';
    localStorage.setItem('arry', JSON.stringify(arry));
})
const localName = JSON.parse(localStorage.getItem('arry', arry));

////////////////////////////////////////////first  one
circle.forEach((p, index, arr) => {
    if (localName == '') {
        arr[index].classList.add('hiden');
    } else {
        const color1 = Math.floor(Math.random() * 255);
        const color2 = Math.floor(Math.random() * 255);
        const color3 = Math.floor(Math.random() * 255);
        arr[index].style.backgroundColor = `rgb(${color1},${color2},${color3})`;
        if (localName[index] != undefined) {
            setTimeout(() => {
                arr[index].innerHTML = `${localName[index]}`;
                arr[index].style.animationName = "none";
                arr[index].style.backgroundColor = "black";
                arr[index].style.color = "white";
                arr[index].style.border = "none";
                if (index == localName.length - 1) {
                    logo.style.borderBottom = '1px solid yellow';
                    line.classList.add('hiden');
                    box.classList.add('hiden');
                    lines.classList.remove('hiden');
                }
            }, timer);
            timer += 2000;
        } else {
            return;
        };
    }
});

///////////////////////////////////////////secound two

// for (let i = 0; i < circle.length; i++) {
//     if (localName == '') {
//         circle[i].classList.add('hiden');
//     }else{
//         const color1 = Math.floor(Math.random() * 255);
//         const color2 = Math.floor(Math.random() * 255);
//         const color3 = Math.floor(Math.random() * 255);
//         circle[i].style.backgroundColor = `rgb(${color1},${color2},${color3})`;
//         if (localName[i] != undefined) {
//             setTimeout(() => {
//                 circle[i].innerHTML = `${localName[i]}`;
//                 circle[i].style.animationName = "none";
//                 circle[i].style.backgroundColor = "black";
//                 circle[i].style.color = "white";
//                 circle[i].style.border = "none";
//                 if (i >= localName.length - 1) {
//                     logo.style.borderBottom = '1px solid yellow';
//                     js.classList.remove('hiden');
//                     line.classList.add('hiden');
//                 }
//             }, timer);
//             timer += 2000;
//         };
//     };
// };

///////////////////////////////////////////third three

// let j = 0;
// for (let i of circle) {
//     if (localName == '') {
//         i.classList.add('hiden');
//     } else {
//         const color1 = Math.floor(Math.random() * 255);
//         const color2 = Math.floor(Math.random() * 255);
//         const color3 = Math.floor(Math.random() * 255);
//         i.style.backgroundColor = `rgb(${color1},${color2},${color3})`;
//         if (localName[j] != undefined) {
//             setTimeout(() => {
//                 i.innerHTML = `${localName[j]}`;
//                 j++;
//                 i.style.animationName = "none";
//                 i.style.backgroundColor = "black";
//                 i.style.color = "white";
//                 i.style.border = "none";
//                 if (j >= localName.length - 1) {
//                     logo.style.borderBottom = '1px solid yellow';
//                     js.classList.remove('hiden');
//                     line.classList.add('hiden');
//                 }
//             }, timer);
       
//             timer += 2000;
//         };
//     };
// };