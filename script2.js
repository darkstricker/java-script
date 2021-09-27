function imagens(){

    var msg = window.document.getElementById("msg")
    var img = window.document.getElementById("imagem")
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `agora são ${hora} horas.`
    
    if (hora >= 5 && hora < 12) {

        img.src = 'fotomanha.png'
        document.body.style.background = '#efc897'

    } else if (hora > 12 && hora <= 18) {

        img.src = 'tarde.png'
        document.body.style.background = '#f9ae54'

    } else {

        img.src = 'noite.png'
        document.body.style.background = '#294a54'

    }

}