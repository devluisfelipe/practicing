let numeroIn = window.document.querySelector('input#valorEntrada')

let cxLista = window.document.querySelector('select#armazValorEnt')

let conjunto = []   //é uma ARRAY vazia.

let ans = window.document.querySelector('div#resposta')     //aqui vai aparecer minha resposta.


function dataIn (N) {
    if (Number(N) >= 1 && Number(N) <= 1000) {
        return true
    }
    else {
        return false
    } 
}

function list (N, L) {
    if (L.indexOf(Number(N)) == -1) {
        return true
    } else {
        return false
    }
}


function adicionar () {
    if (dataIn(numeroIn.value) && list(numeroIn.value, conjunto)) {
        conjunto.push(Number(numeroIn.value))      //não pode esquecer, se não a ARRAY não armazena o dado adicionado
        
        let item = window.document.createElement('option')

        cxLista.appendChild(item)
        item.innerHTML = `Foi adicionado o número: ${numeroIn.value}`

    } else {
        window.alert ('[ERRO] Valor inválido ou já adicionado na lista. Por favor, insira outra número.')
    }
    numeroIn.value = ''
    numeroIn.focus()    //para não precisar ficar clicando no campo de digitação após adicionar cada dado
    ans.innerHTML = ''
}

function finalizar() {
    if (conjunto.length == 0) {
        window.alert ('[ERRO] É necessário adicionar adicionar os dados antes de finalizar.')
    } else {
        //descobrir o maior e o menor valor
        let valorBaixo = conjunto[0]
        let valorAlto = conjunto[0]

        let soma = 0

        for (let key in conjunto) {
            soma += conjunto[key]
            if (conjunto[key] < valorBaixo) {
                valorBaixo = conjunto[key]
            }
            if (conjunto[key] > valorAlto) {
                valorAlto = conjunto[key]
            }
        }

    ans.innerHTML = ``
    ans.innerHTML += `Foram adicionados ${conjunto.length} números.`
    ans.innerHTML += `<p>O valor do menor dado inserido foi ${valorBaixo}</p>`
    ans.innerHTML += `<p>O valor do maior dado inserido foi ${valorAlto}</p>`
    ans.innerHTML += `<p>A soma dos dados inseridos equivale a ${soma}</p>`
    ans.innerHTML += `<p>A média aritmética dos dados inseridos é ${soma/conjunto.length}.</p>`
    ans.style.background = ' rgba(255, 255, 255, 0.50)'
    }
}

