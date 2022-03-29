"use strict";

changeSettings.stop = false;

function changeSettings() {
    if (changeSettings.stop) return;
    if (!event.target.closest('button')) return;

    let curentSettings = getCurentSettings();
    let curentSettingsId = curentSettings.id.slice(curentSettings.id.length - 1);
    let nextSettings;
    let nextSettingsId = getNextId();
    let curentButtonId = curentSettingsId;
    let curentButton = document.getElementById('slider-2__button-' + curentButtonId);
    let nextButton = document.getElementById('slider-2__button-' + nextSettingsId);

    curentButton.classList.toggle('slider-2__button_active');
    nextButton.classList.toggle('slider-2__button_active');

    nextSettings = document.getElementById('slider-2_' + nextSettingsId);

    let side;
    if (curentSettingsId < nextSettingsId) {
        nextSettings.setAttribute('style', 'left: 100%');
        side = ' -100%';
    } else if (curentSettingsId > nextSettingsId) {
        nextSettings.setAttribute('style', 'left: -100%');
        side = ' 100%';
    } else {
        return;
    }

    changeSettings.stop = true;
    setTimeout(() => changeSettings.stop = false, 2000);
    clearTimeout(changeSettingsForTimer.timer);


    curentSettings.setAttribute('style', 'left:' + side)
    function delay() {
        nextSettings.classList.toggle('settings_active');
        nextSettings.setAttribute('style', 'left: 0');
    }
    
    setTimeout(delay, 25);


    let activeDelay = setTimeout(() => curentSettings.classList.toggle('settings_active'), 2000);

    changeSettingsForTimer();
}

function getCurentSettings() {
    let slider = document.getElementById('slider-2');
    let curentSettings;

    for (let child of slider.children) {
        if (child.className.includes('active')) {
            curentSettings = child;
            break;
        }
    }

    return curentSettings;
}

function getNextId() {
    return event.target.id.slice(-1);
}

function changeSettingsForTimer() {
    changeSettingsForTimer.timer = setTimeout(autoChangeSettings, 9000);
}

function autoChangeSettings() {
    if (changeSettings.stop) {
        clearTimeout(changeSettingsForTimer.timer);
        changeSettingsForTimer()
        return;
    }

    changeSettings.stop = true;
    setTimeout(() => changeSettings.stop = false, 2000);

    let curentSettings = getCurentSettings();
    let curentSettingsId = curentSettings.id.slice(curentSettings.id.length - 1);
    let nextSettings;
    let nextSettingsId = (curentSettingsId >= 6) ? 1 : +curentSettingsId + 1;
    let curentButtonId = curentSettingsId;
    let curentButton = document.getElementById('slider-2__button-' + curentButtonId);
    let nextButton = document.getElementById('slider-2__button-' + nextSettingsId);

    curentButton.classList.toggle('slider-2__button_active');
    nextButton.classList.toggle('slider-2__button_active');

    nextSettings = document.getElementById('slider-2_' + nextSettingsId);

    let side;
    nextSettings.setAttribute('style', 'left: 100%');
    side = ' -100%';

    curentSettings.setAttribute('style', 'left:' + side);

    function delay() {
        nextSettings.classList.toggle('settings_active');
        nextSettings.setAttribute('style', 'left: 0');
    }
    
    setTimeout(delay, 25);

    let activeDelay = setTimeout(() => curentSettings.classList.toggle('settings_active'), 2000);

    changeSettingsForTimer.timer = setTimeout(autoChangeSettings, 9000);
}

changeSettingsForTimer();