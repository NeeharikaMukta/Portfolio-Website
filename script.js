// Mobile sidebar toggle — used on every page
document.addEventListener('DOMContentLoaded', function () {
  var toggle = document.querySelector('.nav-toggle');
  var sidebar = document.querySelector('.sidebar');

  if (toggle && sidebar) {
    toggle.addEventListener('click', function () {
      sidebar.classList.toggle('open');
    });

    document.querySelectorAll('.sidebar a').forEach(function (link) {
      link.addEventListener('click', function () {
        sidebar.classList.remove('open');
      });
    });
  }

  // Highlight the current section link while scrolling (home page only)
  var sections = document.querySelectorAll('main section[id]');
  var navLinks = document.querySelectorAll('.side-nav a[href^="#"]');

  if (sections.length && navLinks.length && 'IntersectionObserver' in window) {
    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          navLinks.forEach(function (link) {
            link.classList.toggle('active', link.getAttribute('href') === '#' + entry.target.id);
          });
        }
      });
    }, { rootMargin: '-40% 0px -50% 0px' });

    sections.forEach(function (section) { observer.observe(section); });
  }
});
