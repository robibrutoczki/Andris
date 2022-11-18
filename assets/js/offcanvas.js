(function (open) {
  'use strict'

  document.querySelector('#navbarSideCollapse').addEventListener('click', function () {
    document.querySelector('.offcanvas-collapse').classList.toggle('open');
 
  })
})();
(function (close) {
  'use strict'

  document.querySelector('.navbar-collapse').addEventListener('click', function () {
    document.querySelector('.offcanvas-collapse').classList.toggle('open');
 
  })
})();
(function (close) {
  'use strict'

  document.querySelector('.navbar-collapse').addEventListener('click', function () {
    document.querySelector('.rotate').classList.toggle('down');
 
  })
})();