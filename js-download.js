'use strict'

var imgFromUser 
var imgFlag = false

function downloadImg(elLink) {
    var imgContent = gElCanvas.toDataURL('image/jpeg')// image/jpeg the default format
    elLink.href = imgContent
}

// function onImgInput(ev) {
//     loadImageFromInput(ev, renderUploadedImg)
//     onImgSelect()
// }

function onImgInput(ev) {
  loadImageFromInput(ev, renderMeme)
  onImgSelect()
}
//                               CallBack func will run on success load of the img
function loadImageFromInput(ev, onImageReady) {
    var reader = new FileReader()
    //After we read the file
    reader.onload = function (event) {
        var img = new Image()// Create a new html img element
        img.src = event.target.result // Set the img src to the img file we read
        //Run the callBack func , To render the img on the canvas
        img.onload = onImageReady.bind(null, img)
        imgFromUser = img
        imgFlag =true
    }
    reader.readAsDataURL(ev.target.files[0]) // Read the file we picked
}

// function renderUploadedImg(img) {
//     gCtx.drawImage(img, 0, 0, gElCanvas.width, gElCanvas.height);
//     renderTxtLine()
// }













//////////////////////////////

function share(){
    var shareBtn = document.querySelector('.share-btn')
    shareBtn.addEventListener('click', event => {
      if(navigator.share) {
        navigator.share({
          text: 'great seccess ',
          url: 'https://www.google.com/'
        }).then(() => { 
          console.log('thanks for sharing!')
        })
        .catch((err) => console.error(err))
      } else{
        alert('this browser is not support sharing')
      }
    })
  }
  
  function shareCanvas(){
    async function shareCanvas() {
      const canvasElement = document.getElementById('canvas-id');
      const dataUrl = canvasElement.toDataURL();
      const blob = await (await fetch(dataUrl)).blob();
      const filesArray = [
        new File(
          [blob],
          'animation.png',
          {
            type: blob.type,
            lastModified: new Date().getTime()
          }
        )
      ];
      const shareData = {
        files: filesArray,
      };
      navigator.share(shareData);
    }
    console.log('share canvas');
  }