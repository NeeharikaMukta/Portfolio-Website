const menuLinks = document.querySelectorAll('.main-menu a');
const sections = document.querySelectorAll('.section');

menuLinks.forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();

    menuLinks.forEach(l => l.classList.remove('active'));
    sections.forEach(s => s.classList.remove('active'));

    link.classList.add('active');
    const target = document.querySelector(link.getAttribute('href'));
    target.classList.add('active');
  });
});




