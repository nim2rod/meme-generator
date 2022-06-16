'use strict'

var gImgs = [
    {
        id: 1,
        url: 'meme-imgs(square)/1.jpg'
    },
    {
        id: 2,
        url: 'meme-imgs(square)/2.jpg'
    },
    {
        id: 3,
        url: 'meme-imgs(square)/3.jpg'
    },
    {
        id: 4,
        url: 'meme-imgs(square)/4.jpg'
    }
]

function renderGallery() {
    var strHTML = ''
    for(var i=0 ; i < gImgs.length ; i++ ){
      strHTML +=  `<li> <img src="${gImgs[i].url}" onclick="onImgSelect(${i+1})" class="imgId${i+1}"></li>`
    }
    document.querySelector('.pictures').innerHTML = strHTML
}
