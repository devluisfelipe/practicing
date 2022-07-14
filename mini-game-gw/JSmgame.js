let Val0 = window.document.querySelector('input#dataStart')
let ValF = window.document.querySelector('input#dataEnd')

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

    } else {
        function abrirModAviso (seletorAviso) {
            let msgAviso = document.getElementById(seletorAviso)
        
            if (msgAviso) {
                msgAviso.classList.add('show1')

                let warning = window.document.querySelector('p#msgAviso')
                warning.innerHTML = `Por favor, revise os dados inseridos. Lembrando que o valor do número inicial <strong>precisa ser inferior</strong> ao valor do número final.`
                        
                msgAviso.addEventListener('click', function(selectW) {
                    if (selectW.target.className == 'modal-botaoAviso') {
                        msgAviso.classList.remove('show1')
                    }
                })
            }
        }
        
        abrirModAviso ('modal-aviso')

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

        function abrirModAviso (seletorAviso) {
            let msgAviso = document.getElementById(seletorAviso)
        
            if (msgAviso) {
                msgAviso.classList.add('show1')

                let warning = window.document.querySelector('p#msgAviso')
                let titulo = window.document.querySelector('h3#tituloResposta')

                        titulo.innerHTML = `Ops! Algo está errado....`

                warning.innerHTML = `Por favor, insira um valor válido na caixa <strong>resposta</strong>.`
                        
                msgAviso.addEventListener('click', function(selectW) {
                    if (selectW.target.className == 'modal-botaoAviso') {
                        msgAviso.classList.remove('show1')
                    }
                })
            }
        }
        
        abrirModAviso ('modal-aviso')

    } else {

        if (verific(chute.value, tentativa)) {
           
            if (chute.value == ValSecret) {
                
                function abrirModCongrats (seletorTrophy) {
                    let msgTrophy = document.getElementById(seletorTrophy)
                
                    if (msgTrophy) {
                        msgTrophy.classList.add('show1')

                        msgTrophy.addEventListener('click', function(identific) {
                            if (identific.target.className == 'bx bx-x bx-tada' || identific.target.className == 'm-closeTrophy') {
                                msgTrophy.classList.remove('show1')
                            }
                        })
                    }
                }
                
                abrirModCongrats ('m-Trophy')
        
            } else if (chute.value > ValSecret) {
                
                function abrirModAviso (seletorAviso) {
                    let msgAviso = document.getElementById(seletorAviso)
                
                    if (msgAviso) {
                        msgAviso.classList.add('show1')
        
                        let warning = window.document.querySelector('p#msgAviso')
                        let titulo = window.document.querySelector('h3#tituloResposta')

                        titulo.innerHTML = `Uhh, essa passou perto...`

                        warning.innerHTML = `Você falou <strong>${chute.value}</strong>, mas ainda essa não é a resposta correta. Portanto, vai uma dica aí: <strong>é um número menor</strong>.`
                                
                        msgAviso.addEventListener('click', function(selectW) {
                            if (selectW.target.className == 'modal-botaoAviso') {
                                msgAviso.classList.remove('show1')
                            }
                        })
                    }
                }
                
                abrirModAviso ('modal-aviso')
        
            } else {
                function abrirModAviso (seletorAviso) {
                    let msgAviso = document.getElementById(seletorAviso)
                
                    if (msgAviso) {
                        msgAviso.classList.add('show1')
        
                        let warning = window.document.querySelector('p#msgAviso')
                        let titulo = window.document.querySelector('h3#tituloResposta')

                        titulo.innerHTML = `Uhh, essa passou perto...`

                        warning.innerHTML = `Você falou <strong>${chute.value}</strong>, mas ainda essa não é a resposta correta. Portanto, vai uma dica aí: <strong>é um número maior</strong>.`
                                
                        msgAviso.addEventListener('click', function(selectW) {
                            if (selectW.target.className == 'modal-botaoAviso') {
                                msgAviso.classList.remove('show1')
                            }
                        })
                    }
                }
                
                abrirModAviso ('modal-aviso')
                
            }
        
        
        tentativa.push(Number(chute.value))
        hist.innerHTML += `<p>Você disse o número <strong>${chute.value}</strong></p>`

        } else {
            
            function abrirModAviso (seletorAviso) {
                let msgAviso = document.getElementById(seletorAviso)
            
                if (msgAviso) {
                    msgAviso.classList.add('show1')
    
                    let warning = window.document.querySelector('p#msgAviso')
                    let titulo = window.document.querySelector('h3#tituloResposta')

                    titulo.innerHTML = `Atenção!`

                    warning.innerHTML = `Por favor, insira um número que você ainda <strong>não</strong> tenha tentado.`
                            
                    msgAviso.addEventListener('click', function(selectW) {
                        if (selectW.target.className == 'modal-botaoAviso') {
                            msgAviso.classList.remove('show1')
                        }
                    })
                }
            }
            
            abrirModAviso ('modal-aviso')            
        } 
    } 

    chute.innerHTML = ''
    chute.focus()    //para não precisar ficar clicando no campo de digitação após adicionar cada dado

}
//até aqui o código está rodando perfeitamente, conforme ideia inicial
//fazer adaptações das janelas com a dica para os usuários
//ocultar o número gerado aleatoriamente p/ o usuário





/* ======== function para abrir modal etapas 1 e 2 ======== */

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
        modalP2.addEventListener('click', function (evento){
            if (evento.target.className == 'modal-botaoP2') {
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


// ==== Atualizar a página ao clicar no botão de jogar novamente ====

function NewGame () {
    window.location.reload()
}