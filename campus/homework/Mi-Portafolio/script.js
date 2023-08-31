let d=document;

// active hamburguerx menu
let menuIcon = d.querySelector('.menu_icon');

menuIcon.addEventListener('click',()=>{
    menuIcon.classList.toggle('active');
});

//rotate text js code

let text = d.querySelector('.text p');

text.innerHTML=text.innerHTML.split('').map((char,i)=>
    `<b style="transform:rotate(${i * 6.3}deg")>${char}</b>`
).join('');