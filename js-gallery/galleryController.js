'use strict'


function initGallery(){
    renderGallery()
}

function onImgSelect(picId=2){  
gMeme.selectedImgId = picId
var elGallery = document.querySelector('.gallery')
elGallery.style.display = 'none'
initEditor()
}





   