const langButton = document.querySelector('.lang');
const langMenu = document.querySelector('.lang-menu-container');
langButton.addEventListener('click', () => {
    langMenu.classList.add('active');
    document.querySelector('.lang-exit').addEventListener('click', () => {
        langMenu.classList.remove('active');
    });
});