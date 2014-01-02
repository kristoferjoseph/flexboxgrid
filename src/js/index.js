(function(window){
  var d = window.document,
      q = d.querySelector,
      menu = d.querySelector('.features'),
      menuButton = d.querySelector('.js-menu-button'),
      page = d.querySelector('.page');

  menu.classList.add('slide-menu');
  menuButton.addEventListener('click', function() {
    page.classList.toggle('open');
  });

}(this));

