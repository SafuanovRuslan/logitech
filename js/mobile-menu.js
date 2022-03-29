"use strict";

function openMenu() {
    document.getElementById('header').setAttribute('style', 'background-color: #2F3132;');
    document.getElementById('logo').setAttribute('style', 'background-image: url("img/Logo_Logitech_1.png");');

    document.getElementById('mobile-nav').setAttribute('style', 'height: calc(100vh - 88px);');
    document.getElementById('cross').setAttribute('style', 'display: block;');
    document.getElementById('burger').setAttribute('style', 'display: none;');
}

function closeMenu() {
    document.getElementById('mobile-nav').setAttribute('style', 'height: 0;');

    let menuDelay = setTimeout(menuTransition, 5);
}

function menuTransition() {
    if (!document.getElementById('mobile-nav').offsetHeight) {
        document.getElementById('header').setAttribute('style', 'background-color: #E0E1E2;');
        document.getElementById('logo').setAttribute('style', 'background-image: url("img/Logo_Logitech_dark_1.png")');
        document.getElementById('cross').setAttribute('style', 'display: none;');
        document.getElementById('burger').setAttribute('style', 'display: block;');
        return;
    }

    let menuDelay = setTimeout(menuTransition, 5);
}