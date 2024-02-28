'use strict'

window.onload = onInit

function onInit() {
    console.log('Hi')

    const $elBtn = getEl('button')
    $elBtn.on('click', onBtnClick)
}

function onBtnClick() {
    const $elHeading = getEl('h1')
    const $elSubHeading = getEl('h2')
    const $elYear = getEl('footer span')

    $elHeading.addClass('highlight')
    setTimeout(() => $elHeading.removeClass('highlight'), 2000)

    $elYear.addClass('highlight')
    setTimeout(() => $elYear.removeClass('highlight'), 2000)

    $elSubHeading.text('Welcome to My - JQuery!')
}

function getEl(selector) {
    const el = document.querySelector(selector)
    return {
        addClass: cls => el.classList.add(cls),
        removeClass: cls => el.classList.remove(cls),
        text: txt => el.innerText = txt,
        on: (event, cb) => el.addEventListener(event, cb),
    }
}