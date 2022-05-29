function verificar(){
    var data = new Date()
    var ano_atual = data.getFullYear()
    var ano_nasci_txt = window.document.querySelector("input#txtnasci")
    var ano_nasci = Number(ano_nasci_txt.value)

    var res = document.querySelector("div#res")

    if (ano_nasci >= ano_atual || ano_nasci < 1900){
        window.alert("Preencha Corretamente os Dados Solicitados.")

    } else {
        var idade = ano_atual - ano_nasci
        var fsex = document.getElementsByName("radsex")
        var img = document.createElement("img")
        img.setAttribute("id", "foto")

        if (fsex[0].checked){
            var genero = "Homem"

            if (idade >= 0 && idade < 10){
                img.setAttribute("src", "images/homem_bebe.png")
            } else if (idade < 21){
                img.setAttribute("src", "images/homem_jovem.png")
            } else if (idade < 50){
                img.setAttribute("src", "images/homem_adulto.png")
            } else {
                img.setAttribute("src", "images/homem_idoso.png")
            }

        } else if (fsex[1].checked){
            var genero = "Mulher"

            if (idade >= 0 && idade < 10){
                img.setAttribute("src", "images/mulher_bebe.png")
            } else if (idade < 21){
                img.setAttribute("src", "images/mulher_jovem.png")
            } else if (idade < 50){
                img.setAttribute("src", "images/mulher_adulto.png")
            } else {
                img.setAttribute("src", "images/mulher_idosa.png")
            }
        }

        res.style.textAlign = "center"
        res.innerHTML = `<p>Detectamos: ${genero} de ${idade} anos.</p>`
        res.appendChild(img)
    }
}