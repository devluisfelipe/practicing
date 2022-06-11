function clicar () {
    var inic = Number(window.document.getElementById('start').value)

    var fim = Number(window.document.getElementById('end').value)

    var espaç = Number(window.document.getElementById('intervalo').value)

    var ans = window.document.getElementById('resposta')

    if (inic == fim || inic == 0 || fim == 0 || espaç == 0) {    /* igual a zero também significa que o campo está vazio ou sem valor */
        window.alert('[ERRO] Reavalie os valores inseridos.')
    } else {
        
        if (espaç < 1) {    // dessa forma já se descarta os valores negativos
            window.alert(`Para valores inferiores a 1, o campo 'Intervalo' considerará como 1.`)
            espaç = 1
        }

        ans.innerHTML = '' /* para não aparecer o que estava escrito na tag em html antes de executar a ação E também para poder acrescentar todos os resultados através da concatenação  */

        for (var op = inic; op < fim; op+=espaç) {
            
            ans.innerHTML += `${op} \u{27A1}`   // diferentemente do html, e JS aplica-se \u{INSERIR O CÓDIGO SEM O +U}
        }
        
        for (var op = inic; op > fim; op-=espaç) {
            ans.innerHTML += `${op} \u{27A1}`
        }
        ans.innerHTML += `\u{1F3C1}`
    }
}