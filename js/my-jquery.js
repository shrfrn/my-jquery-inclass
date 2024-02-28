'use strict'

window.onload = onInit

function onInit() {
    console.log('Hi')

    const elBtn = document.querySelector('button')
    elBtn.addEventListener('click', onBtnClick)
}

function onBtnClick() {
    const elHeading = getEl('h1')
    const elSubHeading = getEl('h2')
    const elYear = getEl('footer span')

    elHeading.classList.add('highlight')
    setTimeout(() => elHeading.classList.remove('highlight'), 2000)

    elYear.classList.add('highlight')
    setTimeout(() => elYear.classList.remove('highlight'), 2000)

    elSubHeading.innerText = 'Welcome to My - JQuery!'
}

function getEl(selector) {
    const el = document.querySelector(selector)
    return el
}