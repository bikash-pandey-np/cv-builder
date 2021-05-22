var headerToggleBtn = document.getElementById('header-toggle-btn');
var menu = document.getElementById('menu');

headerToggleBtn.onclick = function (e) {
    if (menu.classList.contains('open-menu')) {
        menu.classList.remove('open-menu');
    }
    else {

        menu.classList.add('open-menu');
    }
}
