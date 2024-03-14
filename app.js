const storeLink = document.getElementById('storeLink');
const storeMenu = document.getElementById('storeMenu');


storeLink.addEventListener('mouseover', () => {
    storeMenu.classList.add('active');
});

storeMenu.addEventListener('mouseover', () => {
    storeMenu.classList.add('active');
});

storeLink.addEventListener('mouseout', () => {
    storeMenu.classList.remove('active');
});

storeMenu.addEventListener('mouseout', () => {
    storeMenu.classList.remove('active');
});