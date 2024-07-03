
function toggleMenu() {
    const menuToggle = document.getElementById('menu-toggle');
    const nav = document.querySelector('nav');
    menuToggle.addEventListener('click', () => {
      nav.classList.toggle('active');
    });
  }
  

  document.addEventListener('DOMContentLoaded', () => {
    toggleMenu();
  });
  