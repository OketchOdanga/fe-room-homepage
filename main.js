const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close');

// show menu

if (navToggle) {
    navToggle.addEventListener('click',()=>{
        navMenu.classList.add('show-menu')
    })  
};

// hide menu
if (navClose) {
    navClose.addEventListener('click',()=>{
        navMenu.classList.remove('show-menu')
    })  
};

// remove menu for mobile

const navLink = document.querySelectorAll('.nav__link');
const linkAction = () => {
    const navMenu = document.getElementById('nav-menu');
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click',linkAction));


//slider
const hero1 = document.getElementById('hero1');
const hero2 = document.getElementById('hero2');
const hero3 = document.getElementById('hero3');
const leftbutton1 = document.getElementById('left1');
const leftbutton2 = document.getElementById('left2');
const leftbutton3 = document.getElementById('left3');

leftbutton1.addEventListener('click',()=>{
        hero1.style.display="none"
        hero2.style.display="none"
        hero3.style.display="grid"
})

leftbutton2.addEventListener('click',()=>{
        hero1.style.display="grid"
        hero2.style.display="none"
        hero3.style.display="none"
})

leftbutton3.addEventListener('click',()=>{
        hero1.style.display="none"
        hero2.style.display="grid"
        hero3.style.display="none"
})
const rightbutton1 = document.getElementById('right1');
const rightbutton2 = document.getElementById('right2');
const rightbutton3 = document.getElementById('right3');

rightbutton1.addEventListener('click',()=>{
        hero1.style.display="none"
        hero2.style.display="grid"
        hero3.style.display="none"
})

rightbutton2.addEventListener('click',()=>{
        hero1.style.display="none"
        hero2.style.display="none"
        hero3.style.display="grid"
})

rightbutton3.addEventListener('click',()=>{
        hero1.style.display="grid"
        hero2.style.display="none"
        hero3.style.display="none"
})


























