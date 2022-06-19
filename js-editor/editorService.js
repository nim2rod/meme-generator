'use strict'

const STORAGE_KEY = 'memeDB'
var arrayStorage = []

var gMeme = {
    selectedImgId: 2,
    selectedLineIdx: 0,
    lines: [
        {
            txt:  'insert your text',
            size: 40,
            color: 'white',
            align: 'center',
            font: 'Impact'
        },
        {
            txt:  'insert second line',
            size: 40,
            color: 'white',
            align: 'center',
            font: 'Impact'
        }
    ]  
}

function createLine(){
    return {
        txt:  'insert text',
        size: 40,
        color: 'white',
        align: 'center'
    }
}

function _saveMemeToStorage() {
    arrayStorage.push(gMeme)
    saveToStorage(STORAGE_KEY, arrayStorage)
}

function _uploadLast(){
    loadFromStorage(STORAGE_KEY)
}




