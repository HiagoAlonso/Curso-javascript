function carregar(){

    var msg = window.document.querySelector("div#msg")
    var imagem = window.document.querySelector("div#imagem")
    var data = new Date()
    var hora = data.getHours()
    var min = data.getMinutes()
    var dia = null

    if (hora >= 4 && hora < 12){
        imagem.innerHTML = "<img src= 'images/manha.png'>"
        document.body.style.background = "#e2cd9f"
        dia = 'manhã'

    } else if (hora >= 12 && hora <= 18){
        imagem.innerHTML = "<img src= 'images/tarde.png'>"
        document.body.style.background = "#b9846f"
        dia = 'tarde'

    } else {
        imagem.innerHTML = "<img src= 'images/noite.png'>"
        document.body.style.background = "#081C1D"
        dia = 'noite'
    }

    msg.innerHTML = `Agora são <strong>${hora}h ${min}m</strong> da ${dia}.`
}