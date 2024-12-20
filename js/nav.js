// JavaScript Document
// nav.js

document.addEventListener("DOMContentLoaded", function () {
  // Load navigation menu
  fetch('nav.html')
    .then(response => response.text())
    .then(data => {
      document.getElementById('nav-placeholder').innerHTML = data;

      // Initialize dropdowns
      const dropdowns = document.querySelectorAll('.nav-item.dropdown');
      dropdowns.forEach(dropdown => {
        dropdown.addEventListener('mouseenter', function () {
          this.querySelector('.dropdown-menu').classList.add('show');
        });
        dropdown.addEventListener('mouseleave', function () {
          this.querySelector('.dropdown-menu').classList.remove('show');
        });
      });

      // Handle nested dropdowns
      const submenus = document.querySelectorAll('.dropdown-submenu .dropdown-toggle');
      submenus.forEach(submenu => {
        submenu.addEventListener('click', function (e) {
          e.preventDefault();
          e.stopPropagation();
          this.nextElementSibling.classList.toggle('show');
        });
      });
    })
    .catch(error => console.error('Error loading navigation:', error));
});