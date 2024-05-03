 let menu =document.querySelector('#menu-icon');
 let navbar = document.querySelector('.navbar');

 menu.onclick = ()=>{
    menu.classList.toggle('bx-x');
    navbar.classList.toggle('active');
 }

 window.onscroll= () =>{
    menu.classList.remove('bx-x');
    navbar.classList.remove('active');
 }

 const sr = ScrollReveal ({
    distance:'60px',
    duration: 2500,
    delay: 400,
    reset: true
 })

 sr.reveal('.text',{delay:100, origin:'top'})
 sr.reveal('.form-container form',{delay: 800, origin:'left'})
 sr.reveal('.heading',{delay: 100, origin:'top'})
 sr.reveal('.ride-container',{delay: 200, origin:'left'})
 sr.reveal('.services-container',{delay: 200, origin:'left'})
 sr.reveal('.about-container',{delay: 200, origin:'left'})
 sr.reveal('.reviews-container',{delay: 200, origin:'left'})
 sr.reveal('.newsletter .box',{delay: 200, origin:'left'})