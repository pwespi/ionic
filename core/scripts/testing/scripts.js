
(function() {

  if (window.location.search.indexOf('rtl=true') > -1) {
    document.documentElement.setAttribute('dir', 'rtl');
  }

  window.Ionic = window.Ionic || {};
  window.Ionic.config = window.Ionic.config || {};

})();