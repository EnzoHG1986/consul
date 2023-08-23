const btnMenuElement = document.getElementById('btnMenu');
const menuElement = document.getElementById('menu')

btnMenuElement.addEventListener('click', ()=> {
    menuElement.classList.toggle('menu--show')
})