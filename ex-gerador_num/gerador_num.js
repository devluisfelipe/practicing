let ans = window.document.querySelector('p#resp')
let start = window.document.querySelector('input#dataStart')
let End = window.document.querySelector('input#dataEnd')

function teste (x, y) {
    if (Number(x) >= 0 && Number(y) > Number(x)){
        return true
    } else {
        return false
    }
}

function gerarNum () {
    if (teste(start.value, End.value)) {
        let C = Math.floor(Math.random() * End.value) + 1

        while (C < start.value) {
            C = Math.floor(Math.random() * End.value) + 1
        }

        ans.innerHTML = `${C}`

    } else {
        window.alert('[ERRO] Por favor, revise os dados inseridos.')
    }
}






/*function gerarNum() {
    let ans = window.document.querySelector('p#resp')
    let start = Number(window.document.querySelector('input#dataStart').value)
    let End = Number(window.document.querySelector('input#dataEnd').value)


    if (start >= 0 && End > start) {
        //ans.innerHTML = Math.floor(Math.random() * End) + 1       
    } else {
        window.alert('[ERRO] Por favor, revise os dados inseridos.')
    }
}*/