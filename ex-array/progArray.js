let numeroIn = window.document.querySelector('input#valorEntrada')

let cxLista = window.document.querySelector('select#armazValorEnt')

let conjunto = []   //é uma ARRAY vazia. Necessário cria-lá pois ela não existe.

let ans = window.document.querySelector('div#resposta')     //aqui vai aparecer minha resposta.


// validação do intervalo dos valores dos dados aceitos.
// a ação (dataIn) e o valor (N) da função criada abaixo, são  nomeadas arbitrariamente.
// essa técnica é apenas uma das maneiras para criar essa aplicação.
// você cria as condições de maneira separada através das funções.
function dataIn (N) {
    if (Number(N) >= 1 && Number(N) <= 1000) {
        return true
    }
    else {
        return false
    } 
}

//encontrar se o número já faz parte daquela array ou não.
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
        window.alert ('[ERRO] Valor inválido ou já adicionado na lista. Por favor, insira outro número.')
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
    ans.innerHTML += `<p>O valor do <strong>menor</strong> dado inserido foi ${valorBaixo}</p>`
    ans.innerHTML += `<p>O valor do <strong>maior</strong> dado inserido foi ${valorAlto}</p>`
    ans.innerHTML += `<p>A <strong>soma</strong> dos dados inseridos equivale a ${soma}</p>`
    ans.innerHTML += `<p>A <strong>média aritmética</strong> dos dados inseridos é ${soma/conjunto.length}.</p>`
    ans.style.background = ' rgba(255, 255, 255, 0.50)'
    }
}

