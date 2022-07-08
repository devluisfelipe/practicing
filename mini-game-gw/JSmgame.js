let Val0 = window.document.querySelector('input#dataStart')
let ValF = window.document.querySelector('input#dataEnd')
let ans = window.document.querySelector('div#trofeu')


let ValSecret = ''

function teste (x, y) {
    if (Number(y) > Number(x)){
        return true
    } else {
        return false
    }
}

function Start () {
    if (teste(Val0.value, ValF.value)) {
        ValSecret = Math.floor(Math.random()*ValF.value) + 1

        while (ValSecret < Val0.value) {
            ValSecret = Math.floor(Math.random()*ValF.value) + 1
        }
        

        ans.innerHTML = `<p>O número gerado está guardado aqui ${ValSecret}.<p>`    //remover o Nº posteriormente
        ans.appendChild(cubo)
        ans.innerHTML += `<p>Tente adivinha-lo!<p>`

    } else {
        window.alert('[ERRO] Por favor, revise os daods inseridos. Lembrando que para os intervalos, o número final deve ser maior que o inicial.')

        ans.innerHTML = '[ERRO]'    //fazer adaptação
    }
}


let tentativa = []
let chute = window.document.querySelector('input#resposta')
let hist = window.document.querySelector('div#historico')

function verific (N, L) {
    if (L.indexOf(Number(N)) == -1) {
        return true
    } else {
        return false
    }
}

function Check () {

    if (chute.value.length == 0) {
        window.alert('[ERRO] Por favor insira um número.')      //fazer adaptação
    } else {

        if (verific(chute.value, tentativa)) {
           
            if (chute.value == ValSecret) {

                window.alert('PARABÉNS! Você acertou!!')
        
            } else if (chute.value > ValSecret) {
                window.alert(`Você falou ${chute.value}, mas ainda não é esse o Nº. Vou dar uma dica, é um Nº menor.`)
        
            } else {
                window.alert(`Você falou ${chute.value}, mas ainda não é esse o Nº. Vou dar uma dica, é um Nº maior.`)
            }
        
        
        tentativa.push(Number(chute.value))
        hist.innerHTML += `<p>Você disse o número <strong>${chute.value}</strong></p>`

        } else {
            window.alert('Por favor insira um número que você ainda não tenha tentado.')      //fazer adaptação
        } 
    } 

    chute.innerHTML = ''
    chute.focus()    //para não precisar ficar clicando no campo de digitação após adicionar cada dado

}
//até aqui o código está rodando perfeitamente, conforme ideia inicial
//fazer adaptações das janelas com a dica para os usuários
//ocultar o número gerado aleatoriamente p/ o usuário





/* ==== TENTATIVA DE CODAR O MODAL ==== */


function abrirModal(seletor) {
    let modal = document.getElementById(seletor)

    if (modal) {
        modal.classList.add('mostrar')
        //para fechar o elemento ao clicar no botão 'Entendi'.
        modal.addEventListener('click', function (event){
            if (event.target.className == 'modal-botao') {
                modal.classList.remove('mostrar')
            }
        })
    }
}

let icon = document.querySelector('div.iconExp');

icon.addEventListener('click',
    function() {
    abrirModal ('modal-explicaçao')
    }
); // primeiro argumento 'click' trata-se do evento que vai desencadear a ação da function 'abrirModal'

/* Pela variável (let) selecionar o elemente que se deseja utilizar como meio de realizar um evento;
Posteriormente, foi adicionado o evento 'click' que vai realizar uma ação;
Na function, o parâmetro é o id 'modal-explicaçao' (existente);
    A ação da function é criar uma variável que vai pegar o elemento html que recebe o ID 'modal-explicaçao' e então adicionar a classe 'mostrar' a esse elemento;
        O id é só pra selecionar a variável.
        A classe mostrar foi configurada com uma animação em CSS.
*/

function abrirModalP2(seletorP2) {
    let modalP2 = document.getElementById(seletorP2)

    if (modalP2) {
        modalP2.classList.add('mostrar')
        //para fechar o elemento ao clicar no botão 'Entendi'.
        modalP2.addEventListener('click', function (event){
            if (event.target.className == 'modal-botaoP2') {
                modalP2.classList.remove('mostrar')
            }
        })
    }
}

let iconP2 = document.querySelector('div.iconExpP2');

iconP2.addEventListener('click',
    function() {
    abrirModalP2 ('modal-explicaçaoP2')
    }
)