var mainNavigation = new Menu(document.querySelector('.main-nav'));

mainNavigation.toggle();

function Menu(elem) {
  var menu = elem;

  menu.addEventListener('click', function(event) {
    if (event.target.className == 'main-nav__toggle') {
      event.preventDefault();
      toggle();
    }
  });

  function toggle() {
    menu.classList.toggle('main-nav--closed');
  }

  this.toggle = toggle;
}
