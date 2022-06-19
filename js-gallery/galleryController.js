'use strict'


function initGallery() {
    renderGallery()
}

function onImgSelect(picId = 2) {
    gMeme.selectedImgId = picId
    var elGallery = document.querySelector('.gallery')
    elGallery.style.display = 'none'
    initEditor()
}

function backToGallery() {
    document.querySelector('.editor-page').style.display = 'none'
    document.querySelector('.promotion-bar').style.display = 'block'
    document.querySelector('.search-bar').style.display = 'block'
    var elGallery = document.querySelector('.gallery')
    elGallery.style.display = 'block'
    initGallery()
}





