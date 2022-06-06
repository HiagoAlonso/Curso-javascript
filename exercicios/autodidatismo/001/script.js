let lista = []
lista['Hiago'] = 192
lista['Viego'] = 282
lista['Javier'] = 52
lista['Milly'] = 550
lista['Brownie'] = 1220
lista['Tonny'] = 3200

let listaOr = []

for (const player in lista) {
    listaOr.push(lista[player])
    listaOr.sort((a, b) => a - b).reverse();
}

listaScoreOrdened = []

for (const player in lista){
    for (const indice in listaOr){
        if(lista[player] == listaOr[indice]){
            console.log(`${player} na Posição ${indice}`)
            listaScoreOrdened[indice] = player
        }
    }
}

for (const player in listaScoreOrdened){

    let playerName = listaScoreOrdened[player]
    let pos = listaScoreOrdened.indexOf(playerName)
    let score = listaOr[pos]
    console.log(`Eu vou escrever o jogador ${playerName} na posição ${pos}`)
    document.getElementsByTagName("p")[pos].innerHTML = `${playerName}: ${score}`
}