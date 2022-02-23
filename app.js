const circle = document.querySelectorAll('.circle');
const logo = document.querySelector('.logo');
const js = document.querySelector('.js');
const line = document.querySelector('.line');
const reset=document.querySelector('#reset')
const form = document.querySelector('#form');
const int = document.querySelector('#int');
let timer = 3000;
const arry=[]

reset.addEventListener('click', () => {
    localStorage.clear()
    location.reload()
})
form.addEventListener('submit', (e) => {
    e.preventDefault();
    let newa = int.value.trim();
    arry.push(...newa.toUpperCase());
    int.value = '';
    localStorage.setItem('arry', JSON.stringify(arry));
})
const conv = JSON.parse(localStorage.getItem('arry', arry));

////////////////////////////////////////////first  one
circle.forEach((p, index, arr) => {
       const color1 = Math.floor(Math.random() * 255);
       const color2 = Math.floor(Math.random() * 255);
       const color3 = Math.floor(Math.random() * 255);
      arr[index].style.backgroundColor = `rgb(${color1},${color2},${color3})`;
    if (conv[index] != undefined) {
        setTimeout(() => {
            arr[index].innerHTML = `${conv[index]}`;
            arr[index].style.animationName = "none";
            arr[index].style.backgroundColor = "black";
            arr[index].style.color = "white";
            arr[index].style.border = "none";
            if (index == conv.length-1) {
                logo.style.borderBottom = '1px solid yellow';
                js.classList.remove('hiden');
                line.classList.add('hiden');
            }
        }, timer);
        timer += 2000;
    } else {
        return
    }
  })


///////////////////////////////////////////secound two

// for (let i = 0; i < circle.length;i++) {
//        const color1 = Math.floor(Math.random() * 255);
//        const color2 = Math.floor(Math.random() * 255);
//        const color3 = Math.floor(Math.random() * 255);
//        circle[i].style.backgroundColor = `rgb(${color1},${color2},${color3})`;
//      setTimeout(() => {
//         circle[i].innerHTML = `${conv[i]}`;
//         circle[i].style.animationName = "none";
//         circle[i].style.backgroundColor = "black";
//         circle[i].style.color = "white";
//         circle[i].style.border = "none";
//         if (i >= str.length - 1) {
//             logo.style.borderBottom = '1px solid yellow';
//             js.classList.remove('hiden');
//             line.classList.add('hiden');
//         }
//     }, timer);
//     timer += 2000;
// };

///////////////////////////////////////////third three

// let j = 0;
//   for (let i of circle) {
//           const color1 = Math.floor(Math.random() * 255);
//           const color2 = Math.floor(Math.random() * 255);
//           const color3 = Math.floor(Math.random() * 255);
//          i.style.backgroundColor = `rgb(${color1},${color2},${color3})`;
//       setTimeout(() => {
//           i.innerHTML = `${conv[j]}`;
//           j++;
//             i.style.animationName = "none";
//             i.style.backgroundColor = "black";
//             i.style.color = "white";
//             i.style.border = "none";
//             if (j >= str.length - 1) {
//                 logo.style.borderBottom = '1px solid yellow';
//                 js.classList.remove('hiden');
//                 line.classList.add('hiden');
//             }
//         }, timer);
       
//       timer += 2000;
//     }
