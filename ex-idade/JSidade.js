function verificar () {
   var year = new Date ()
    var ano = year.getFullYear()    //vem do sistema computador

    var anonasc = Number (window.document.querySelector('input#yearborn').value)    //vem do usuário

    var idade = ano - anonasc   //JS calculo idade
    
    var ans = window.document.querySelector('div#resposta')     //variável p/ substituir no documento

    var bgans = window.document.querySelector('section#bg')

    if (anonasc <= 0 || anonasc >= ano){
        window.alert (`[ERRO] Por favor, verifique as informações e tente novamente.`)
    } else {
        var genero = window.document.getElementsByName('opçao')   // vem do usuário (marcação), lembrar de colocar o Nº dentro de []

        var sexo = ''   // deixar vazia, apenas p/ retornar como resposta do que o usuário irá marcar

        var pic = window.document.getElementById('foto')

        if (genero[0].checked) {
            sexo = 'um homem'

            

            if (idade > 0 && idade <= 12) {
                pic.src = 'imagens/youngb.png'
                //document.body.style.backgroundColor = `#93B378`
             } else if (idade > 12 && idade <= 25) { 
                pic.src = 'imagens/boy.png'
                //document.body.style.backgroundColor = `rgb(49, 159, 237)`
             } else if (idade > 25 && idade <= 50) {
                pic.src = 'imagens/man.png'
                //document.body.style.backgroundColor = `#B27657`
             } else {
                pic.src = 'imagens/elderlyM.png'
                //document.body.style.backgroundColor = `#B9D0DC`
             }
        } else {
            sexo = 'uma mulher'
            if (idade > 0 && idade <= 12) {
                pic.src = 'imagens/youngG.png'
                document.body.style.backgroundColor = `#7C3547`
             } else if (idade > 12 && idade <= 25) { 
                pic.src = 'imagens/girl.png'
                document.body.style.backgroundColor = `#273F50`
             } else if (idade > 25 && idade <= 50) {
                pic.src = 'imagens/woman.png'
                document.body.style.backgroundColor = `#097B71`
             } else {
                pic.src = 'imagens/elderlyW.png'
                document.body.style.backgroundColor = `#8A5A44`
             }
        }

        ans.innerHTML = `<p>Conforme suas informações, identificamos que você é <strong>${sexo} de ${idade} anos</strong>.</p>`
        ans.style.color = 'white'   //esses retornos precisam estar dentro da condição p/ o código funcionar corretamente.
        bgans.style.backgroundColor = `rgba(0, 0, 0, 0.4)`
        bgans.style.borderRadius = `8px`
        bgans.style.padding = `8px`
        
    }
}


