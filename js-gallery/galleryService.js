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
    },
    {
        id: 5,
        url: 'meme-imgs(square)/5.jpg'
    },
    {
        id: 6,
        url: 'meme-imgs(square)/6.jpg'
    },
    {
        id: 7,
        url: 'meme-imgs(square)/7.jpg'
    },
    {
        id: 8,
        url: 'meme-imgs(square)/8.jpg'
    },
    {
        id: 9,
        url: 'meme-imgs(square)/9.jpg'
    }
]

// function renderGallery() {
//     var strHTML = ''
//     for(var i=0 ; i < gImgs.length ; i++ ){
//       strHTML +=  `<li> <img src="${gImgs[i].url}" onclick="onImgSelect(${i+1})" class="img imgId${i+1}"></li>`
//     }
//     document.querySelector('.pictures').innerHTML = strHTML
// }

function renderGallery() {
    var strHTML = ''
    for(var i=0 ; i < gImgs.length ; i++ ){
      strHTML +=  `<img src="${gImgs[i].url}" onclick="onImgSelect(${i+1})" class="img imgId${i+1}">`
    }
    document.querySelector('.gallery').innerHTML = strHTML
}
