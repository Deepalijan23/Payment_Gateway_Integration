
let menu=document.querySelector('.navbar-toggler');
let navbar=document.querySelector('.navbar');


window.onscroll=()=>{
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');
}

navbar-toggler-icon.addEventListener('click', () =>{
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
});