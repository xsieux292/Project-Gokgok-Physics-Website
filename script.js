
function toggleMenu() {
  const menu_icon = document.querySelector('#menu-icon');
  const nav_bar = document.querySelector('nav');
    // เปลี่ยนสถานะของ menu-icon ด้วยการเพิ่มหรือลบ class "active"
    menu_icon.classList.toggle('active');
    nav_bar.classList.toggle('active');
  }
