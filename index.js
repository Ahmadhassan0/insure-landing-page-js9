const menu = document.querySelector('.nav__menu');
const openBtn = document.querySelector('.btn__open');
const closeBtn = document.querySelector('.btn__close');

openBtn.addEventListener('click', () => {
    menu.className = "nav__menu active";
    openBtn.style.display = "none";
    closeBtn.style.display = "block";
})
closeBtn.addEventListener('click', () => {
    menu.className = "nav__menu";
    closeBtn.style.display = "none";
    openBtn.style.display = "block";
})