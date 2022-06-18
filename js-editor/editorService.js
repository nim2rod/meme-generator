'use strict'

var gMeme = {
    selectedImgId: 2,
    selectedLineIdx: 0,
    lines: [
        {
            txt:  'insert your text',
            size: 40,
            color: 'white',
            align: 'center'
        },
        {
            txt:  'insert second line',
            size: 40,
            color: 'yellow',
            align: 'center'
        }
    ]  
}


function getMeme(){
    console.log('getMeme is on');
    renderMeme()
}



