// Mobile Menu Popup
const menuDiv = document.querySelector('#popup-menu');
const openPopupBtn = document.querySelector('#menu-mob');
const closeMenuBtn = document.querySelector('#close-menu-btn');
openPopupBtn.addEventListener('click', showMenu);
closeMenuBtn.addEventListener('click', closeMenu);

function showMenu() {
  menuDiv.style.display = 'block';
}

function closeMenu() {
  menuDiv.style.display = 'none';
}