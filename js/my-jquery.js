'use strict'

function onInit() {
    console.log('Hi')
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