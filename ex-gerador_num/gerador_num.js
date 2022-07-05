let ans = window.document.querySelector('p#resp')
let start = window.document.querySelector('input#dataStart')    //vem de input, type = number
let End = window.document.querySelector('input#dataEnd')

let layout = window.document.querySelector('div#resultado')
let animation = window.document.querySelector('div#circleEffect')

function teste (x, y) {
    if (Number(x) >= 0 && Number(y) > Number(x)){
        return true
    } else {
        return false
    }
}

function gerarNum () {
    if (teste(start.value, End.value)) {
        let C = Math.floor(Math.random() * End.value) + 1       //como as variáveis estão fora da function, potanto, necessário inserir o .value

        while (C < start.value) {
            C = Math.floor(Math.random() * End.value) + 1
        }

        ans.innerHTML = `${C}`

        layout.style.border = '2px solid cyan'
        animation.style.boxShadow = 'inset 0px 0px 2px white, 0px 0px 15px white'

    } else {
        window.alert('[ERRO] Por favor, revise os dados inseridos.')
    }

}