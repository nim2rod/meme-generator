'use strict'
var gCtx
var gElCanvas
var gLine = 0


function initEditor() {
  document.querySelector('.editor-page').style.display = 'flex'
  document.querySelector('.promotion-bar').style.display = 'none'
  document.querySelector('.search-bar').style.display = 'none'
  gElCanvas = document.querySelector('canvas')
  gCtx = gElCanvas.getContext('2d')
  renderMeme()
}

function renderMeme() {
  renderImg()
}

function renderImg() {
  var picIdx = gMeme.selectedImgId
  document.querySelector(
    '.img-teporary-container'
  ).innerHTML = `<img src="meme-imgs(square)/${picIdx}.jpg" class="img-meme" style="display: none" />`
  var elImg = document.querySelector('.img-meme')
  if (!imgFlag) gCtx.drawImage(elImg, 0, 0, gElCanvas.height, gElCanvas.width)
  else gCtx.drawImage(imgFromUser, 0, 0)
  gMeme.lines.forEach(renderTxtLine)
}

// function renderImg() {
//   var picIdx = gMeme.selectedImgId
//   var img = new Image()
//   img.src = `meme-imgs(square)/${picIdx}.jpg`   
//   img.onload = () => {
//     if (!imgFlag)  gCtx.drawImage(img, 0, 0, gElCanvas.height, gElCanvas.width)
//     else gCtx.drawImage(imgFromUser, 0, 0)
//   }
//    gMeme.lines.forEach(renderTxtLine)
// }


function renderTxtLine(element,index) {
console.log('element:',element)
console.log('index',index)

  var fontSize = gMeme.lines[index].size // fontSize
  gCtx.font = fontSize + 'px Impact'

  gCtx.lineWidth = 3.5
  gCtx.strokeStyle = 'black'

  gCtx.fillStyle = gMeme.lines[index].color // txtColor

  gCtx.textAlign = gMeme.lines[index].align // align txt

  var line1 = gMeme.lines[index].txt

  gCtx.strokeText(line1, 250, ((index+1)*100))  //stroke
  
  gCtx.fillText(line1, 250, ((index+1)*100)) // input txt
  
}

function changeTxtSize(x) {
  var fontSize
  fontSize = gMeme.lines[gLine].size
  if (x < 0) fontSize -= 10
  if (x > 0) fontSize += 10
  // gCtx.font = fontSize + 'px'
  gMeme.lines[gLine].size = fontSize
  renderMeme()
}

function setLineTxt() {
  const txt = document.querySelector('[name="add-text"]').value
  gMeme.lines[gLine].txt = txt
  renderMeme()
}

function setTxtColor(color) {
  console.log('settxtColor is on- color:', color)
  gMeme.lines[gLine].color = color
  renderMeme()
}

function switchLine() {
  gLine++
  if(gLine >= gMeme.lines.length) gLine = 0
}

function changeAlignTxt(value) {
  if (value === 'rtl') gMeme.lines[gLine].align = 'right'
  if (value === 'ltr') gMeme.lines[gLine].align = 'left'
  if (value === 'center') gMeme.lines[gLine].align = 'center'
  renderMeme()
}

function addLine(){
  gMeme.lines.push(createLine())
  renderMeme()
}








////////////////////////
  // img.height / img. width = ratio %   //////
  // resize canvas
  // height is larger = elGcanvas.height * ratio

