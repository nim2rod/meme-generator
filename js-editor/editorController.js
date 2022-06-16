'use strict'
var gCtx
var gElCanvas
var gLine = 0

function initEditor() {
    console.log('initt editor')
    gElCanvas = document.querySelector('canvas')
    gCtx = gElCanvas.getContext('2d')
    getMeme()
}

function renderMeme() {
    renderImg()
    renderTxtLine()
}

function renderImg() { //לרנדר תמונה על הקנבס
    var picIdx = gMeme.selectedImgId
    document.querySelector('.img-teporary-container').innerHTML = `<img src="meme-imgs(square)/${picIdx}.jpg" class="img-meme" style="display: none" />`

    var elImg = document.querySelector('.img-meme')
    gCtx.drawImage(elImg, 0, 0)
}

function renderTxtLine() {
    // for(var i = 1 ; i<gMeme.lines.length ; i++){
    
    // }
    var fontSize = gMeme.lines[0].size  // fontSize
    gCtx.font = fontSize + 'px Arial'

    gCtx.fillStyle = gMeme.lines[0].color // txtColor

    gCtx.textAlign = gMeme.lines[0].align // align txt

    var line1 = gMeme.lines[0].txt
    var line2 = gMeme.lines[1].txt

    gCtx.fillText(line1, 250, 100)         // input txt
    gCtx.fillText(line2, 250, 350)
}

function changeTxtSize(x) {
    var fontSize
    fontSize = gMeme.lines[0].size
    if (x < 0) fontSize -= 10
    if (x > 0) fontSize += 10
    // gCtx.font = fontSize + 'px'
    gMeme.lines[0].size = fontSize
    renderMeme()
}

function setLineTxt() {
    const txt = document.querySelector('[name="add-text"]').value

    gMeme.lines[gLine].txt = txt
    renderMeme()
}

function setTxtColor(color) {
    console.log('settxtColor is on- color:', color);
    gMeme.lines[0].color = color
    renderTxtLine()
}

function switchLine(){
    (gLine === 0) ? gLine = 1 : gLine = 0
}