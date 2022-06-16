function clicar () {
    let N = Number(window.document.querySelector('input#tabnumber').value)

    let ans = window.document.querySelector('div#resposta')

    if (N == 0) {
        window.alert('[ERRO] Por favor, insira um valor válido.')
    } else {
        let c = 1
        ans.innerHTML = ""       //para inserir as respostas geradas

        while (c <= 10) {
            let item = window.document.createElement('div')

            item.innerText = `${N} x ${c} = ${N*c}`
            item.style.backgroundColor = `rgba(255, 255, 255, 0.17)`
            item.style.borderRadius = `8px`
            item.style.height = `26px`
            item.style.marginBottom = `10px`
            item.style.paddingTop = `8px`
            ans.appendChild(item)
            c++
        }
    }
}