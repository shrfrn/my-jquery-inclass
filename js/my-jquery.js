'use strict'

window.onload = onInit

function onInit() {
    console.log('Hi')

    const elBtn = document.querySelector('button')
    elBtn.addEventListener('click', onBtnClick)
}

function onBtnClick() {
    const elHeading = document.querySelector('h1')
    const elSubHeading = document.querySelector('h2')
    const elYear = document.querySelector('footer span')

    elHeading.classList.add('highlight')
    setTimeout(() => elHeading.classList.remove('highlight'), 2000)

    elYear.classList.add('highlight')
    setTimeout(() => elYear.classList.remove('highlight'), 2000)

    elSubHeading.innerText = 'Welcome to My - JQuery!'
}