'use strict'


function initGallery(){
    renderGallery()
}

function onImgSelect(picId){  
gMeme.selectedImgId = picId
console.log('gMeme:',gMeme);
var elGallery = document.querySelector('.gallery')
elGallery.style.display = 'none'
initEditor()
}





   