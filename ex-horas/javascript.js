function carregar () {
    var cxhora = window.document.querySelector('div#txthora')

    var hour = new Date ()
    var hora = hour.getHours ()

    cxhora.innerHTML = `It's <strong>${hora}</strong> o'clock.`

    var cximg = window.document.querySelector('img#imgturno')

    var cxturno = window.document.querySelector('div#txtturno') 

    if (hora >= 5 && hora < 12) {
        cximg.src = 'imagens/morning1.png'
        document.body.style.backgroundColor = '#EDD4CA'
        cxturno.innerHTML = 'Good morning!'
    } else if (hora >= 12 && hora < 18) {
        cximg.src = 'imagens/afternoon1.png'
        document.body.style.backgroundColor = '#B5D8F4'
        cxturno.innerHTML = 'Good afternoon!'
    } else {
        cximg.src = 'imagens/night1.png'
        document.body.style.backgroundColor = '#162E32'
        cxturno.innerHTML = 'Good night!'
    }
}
