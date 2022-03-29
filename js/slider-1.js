"use strict";

changeSurface.stop = false;

function changeSurface() {
    if (changeSurface.stop) return;
    changeSurface.stop = true;
    setTimeout(() => changeSurface.stop = false, 2000);

    let target = event.target;
    if (!target.closest('svg') && !target.closest('IMG')) return;

    let curentImg = getCurentImg();
    let curentImgId = curentImg.id.slice(curentImg.id.length - 1);
    let nextImg;
    let nextImgId;

    document.getElementById('slider-1_0').classList.remove(document.getElementById('slider-1_0').classList[2]);
    document.getElementById('slider-1_0').classList.add(curentImg.classList[2])

    clearTimeout(changeSurfaseForTimer.timer);

    if (target.closest('svg')) {
        nextImgId = (target.closest('svg').id == 'slider-1_left-button') ? 
                    ((curentImgId <=  1) ? 5 : --curentImgId) : 
                    ((curentImgId >= 5) ? 1 : ++curentImgId);

        nextImgId = curentImg.id.slice(0, curentImg.id.length - 1) + nextImgId;
        nextImg = document.getElementById(nextImgId);

        curentImg.classList.toggle('illustration_active');
        nextImg.classList.toggle('illustration_active');
        
    } else if (target.closest('IMG')) {
        nextImgId = target.closest('IMG').id.slice(-1);
        nextImgId = curentImg.id.slice(0, curentImg.id.length - 1) + nextImgId;
        nextImg = document.getElementById(nextImgId);

        curentImg.classList.toggle('illustration_active');
        nextImg.classList.toggle('illustration_active');
    }

    changeSurfaseForTimer();
}

function getCurentImg() {
    let slider = document.getElementById('slider-1');
    let curentImg;

    for (let child of slider.children) {
        if (child.className.includes('active')) {
            curentImg = child;
            break;
        }
    }

    return curentImg;
}

function autoChange() {
    if (changeSurface.stop) {
        clearTimeout(changeSurfaseForTimer.timer);
        changeSurfaseForTimer()
        return;
    }
    changeSurface.stop = true;
    setTimeout(() => changeSurface.stop = false, 2000);


    let curentImg = getCurentImg();
    let curentImgId = curentImg.id.slice(curentImg.id.length - 1);
    let nextImgId = (curentImgId >= 5) ? 1 : ++curentImgId;
    nextImgId = curentImg.id.slice(0, curentImg.id.length - 1) + nextImgId;
    let nextImg = document.getElementById(nextImgId)

    document.getElementById('slider-1_0').classList.remove(document.getElementById('slider-1_0').classList[2]);
    document.getElementById('slider-1_0').classList.add(curentImg.classList[2])

    curentImg.classList.toggle('illustration_active');
    nextImg.classList.toggle('illustration_active');

    changeSurfaseForTimer.timer = setTimeout(autoChange, 5000);
}

function changeSurfaseForTimer() {
    changeSurfaseForTimer.timer = setTimeout(autoChange, 5000);
}

changeSurfaseForTimer();