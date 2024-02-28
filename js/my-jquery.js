'use strict'

window.onload = onInit

function onInit() {
    console.log('Hi')

    $('button').on('click', onBtnClick)
}

function onBtnClick() {
    $('h1').addClass('highlight')
    setTimeout(() => $('h1').removeClass('highlight'), 2000)

    $('footer span').addClass('highlight')
    setTimeout(() => $('footer span').removeClass('highlight'), 2000)

    $('h2').text('Welcome to My - JQuery!')
}

function $(selector) {
    const el = document.querySelector(selector)
    return {
        addClass: cls => el.classList.add(cls),
        removeClass: cls => el.classList.remove(cls),
        text: txt => el.innerText = txt,
        on: (event, cb) => el.addEventListener(event, cb),
    }
}