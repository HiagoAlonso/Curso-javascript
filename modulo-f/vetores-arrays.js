let lista = []
lista['Qweasudha2131AAAB'] = 192
lista['Vuweqwasdm123AAAA'] = 282
lista['Wytsoep321askABBA'] = 52
lista['ToweqwoerheroAAAC'] = 550
lista['ZetaqwoerheroACAE'] = 1220

let listaOr = []
for (const player in lista) {
    listaOr.push(lista[player])
    listaOr.sort((a, b) => a - b).reverse();
}

console.log(listaOr)

listaScoreOrdened = []

for (const player in lista){
    for (const indice in listaOr){
        if(lista[player] == listaOr[indice]){
            console.log(`${player} na Posição ${indice}`)
            listaScoreOrdened[indice] = player
        }
    }
}

console.log(listaScoreOrdened)
console.log(listaOr)