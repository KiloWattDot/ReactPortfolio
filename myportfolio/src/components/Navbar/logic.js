

const toggleMenu = document.querySelector('#toggleMenu')
const navList = document.querySelector('.navList')

toggleMenu.addEventListener('click', () => {
    navList.classList.toggle('active');
})