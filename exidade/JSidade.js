function verificar () {
   var year = new Date ()
    var ano = year.getFullYear()    //vem do sistema computador

    var anonasc = Number (window.document.querySelector('input#yearborn').value)    //vem do usuário

    var idade = ano - anonasc   //JS calculo idade
    
    var ans = window.document.querySelector('div#resposta')     //variável p/ substituir no documento

    

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
             } else if (idade > 12 && idade <= 25) { 
                pic.src = 'imagens/boy.png'
             } else if (idade > 25 && idade <= 50) {
                pic.src = 'imagens/man.png'
             } else {
                pic.src = 'imagens/elderlyM.png'
             }
        } else {
            sexo = 'uma mulher'
            if (idade > 0 && idade <= 12) {
                pic.src = 'imagens/youngG.png'
             } else if (idade > 12 && idade <= 25) { 
                pic.src = 'imagens/girl.png'
             } else if (idade > 25 && idade <= 50) {
                pic.src = 'imagens/woman.png'
             } else {
                pic.src = 'imagens/elderlyW.png'
             }
        }

        ans.innerHTML = `Conforme suas informações, identificamos que você é <strong>${sexo} de ${idade} anos</strong>.`
        ans.style.color = 'black'   //esses retornos precisam estar dentro da condição p/ o código funcionar corretamente.
        
    }
}


