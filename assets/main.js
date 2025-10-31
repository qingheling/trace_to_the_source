(function () {
  function setActiveNav() {
    var links = document.querySelectorAll('.site-nav a');
    var path = location.pathname.split('/').pop() || 'index.html';
    links.forEach(function (a) {
      if (a.getAttribute('href') === path) {
        a.classList.add('active');
      }
    });
  }

  function enableSmoothScroll() {
    var links = document.querySelectorAll('a[href^="#"]');
    links.forEach(function (a) {
      a.addEventListener('click', function (e) {
        var id = a.getAttribute('href').slice(1);
        var el = document.getElementById(id);
        if (el) {
          e.preventDefault();
          el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      });
    });
  }

  setActiveNav();
  enableSmoothScroll();
})();


