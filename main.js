let login = document.querySelector(".login-btn");
let register = document.querySelector(".register-btn");
let container = document.querySelector(".container");


register.addEventListener('click',()=>{
    container.classList.add('active');
    login.style.background = 'transparent';
    login.style.color = '#000';
    register.style.background = '#fff';
    register.style.color = '#000';
})

login.addEventListener('click',()=>{
    container.classList.remove('active');
    login.style.background = '#fff';
    login.style.color = '#000';
    register.style.background = 'transparent';

})