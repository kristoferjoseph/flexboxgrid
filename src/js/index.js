(function(window){
  var d = window.document,
      q = d.querySelector,
      menu = d.querySelector('.js-menu'),
      menuButton = d.querySelector('.js-menu-button'),
      menuList = d.querySelector('.js-menu__list'),
      page = d.querySelector('.page');

  menu.classList.add('slide-menu');
  menuButton.addEventListener('click', function() {
    page.classList.toggle('open');
  });

  menuList.addEventListener('click', function() {
    page.classList.toggle('open');
  });

}(this));

