'use strict'

var gMeme = {
    selectedImgId: 2,
    selectedLineIdx: 0,
    lines: [
        {
            txt:  'insert your text here',
            size: 40,
            color: 'yellow',
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

function setLineTxt(){
const txt = document.querySelector('[name="add-text"]').value

gMeme.lines[gLine].txt = txt
renderMeme()
}

function setTxtColor(color){
    console.log('settxtColor is on- color:',color);
    gMeme.lines[gLine].color = color
    renderTxtLine()
}

var gLine = 0