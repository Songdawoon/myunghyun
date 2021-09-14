const toggleBtn = document.querySelector('.navBar__toggleBtn')
const menu = document.querySelector('.navBar__menu')
const icons = document.querySelector('.navBar__links')

toggleBtn.addEventListener('click', () => {
    menu.classList.toggle('active');
    icons.classList.toggle('active');
})