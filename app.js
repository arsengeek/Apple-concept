const navLinks = document.querySelectorAll('.nav-a');
const dropMenus = document.querySelectorAll('.dropmenu');

// Добавляем обработчики событий для каждого навигационного элемента и его подменю
navLinks.forEach((link, index) => {
    link.addEventListener('mouseover', () => {
        dropMenus[index].classList.add('active');
    });

    dropMenus[index].addEventListener('mouseover', () => {
        dropMenus[index].classList.add('active');
    });

    link.addEventListener('mouseout', () => {
        dropMenus[index].classList.remove('active');
    });

    dropMenus[index].addEventListener('mouseout', () => {
        dropMenus[index].classList.remove('active');
    });
});