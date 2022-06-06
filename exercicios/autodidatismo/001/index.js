score = []
score['Qweasudha2131AAAB'] = 192
score['Vuweqwasdm123AAAA'] = 282
score['Wytsoep321askABBA'] = 52
score['ToweqwoerheroAAAC'] = 550
score['ZetaqwoerheroACAE'] = 1220

listOr = []

for (const ID in score) {
    listOr.push(score[ID])
    listOr.sort((a, b) => a - b).reverse();
}

console.log('================================')
console.log(score)
console.log(listOr)
console.log('================================')

const a = Object.keys(listOr)
console.log(a)  
const b = Object.getOwnPropertyNames(score)
console.log(b)

console.log('================================')

for (n in score){
    console.log(`${n}: ${score[n]}`)
}
console.log('================================')

for (let n in listOr){
    console.log(`${n}: ${listOr[n]}`)
    if(score['ZetaqwoerheroACAE'] == listOr[n]){
        console.log("Acheeei!")
    }
}
console.log('================================')

numberlist = [1, 2, 3, 4]
listScoreOrdened = []

for (n in numberlist){
    listScoreOrdened[n] = {n: score[ID]}
}

/*
for (const ID in score){
    console.log(`${ID}: ${score[ID]}`)

    for (const indice in listOr){
        console.log(`${indice}: ${listOr[indice]}`)

        if(score[ID] == listOr[indice]){
            console.log("Valor encontrado ^")

            //listScoreOrdened[indice] = {ID: score[ID]}
        }
    }
}*/


/*
for (const indice in listOr) {
    for (const scoreAssoc in score) {
        
        if (listOr[indice] == score[scoreAssoc]) {
    
            console.log(`Encontrei uma semelhança entre o Score Unitário ${listOr[indice]} e o Score Associado ${score.scoreAssoc}`)
            
            const playerId = scoreAssoc
            
        }
    }
}*/


/*
Pega o indice de cada Score e aplica na lista original.
*/




/*



/*



for (const scoreUnit in listOr) {
    for (const scoreAssoc in score) {

        if (scoreUnit == score[scoreAssoc]) {
    
            console.log(`Encontrei uma semelhança entre o Score Unitário ${scoreUnit} e o Score Associado ${score.scoreAssoc}`)
            
            const playerId = scoreAssoc
            
        }
    }



    Eu to tentando pegar todos os scores dos jogadores, separar em uma lista, ordenar, fazer uma operação reversa para voltar á ter o ID dos jogadores e os scores em uma forma ordenada.

    Mas acho que dá pra pegar uma lista com nomes e números, e então utilizar alguma função matemática para definir o maior. É claro que essa função hipotética não deve funcionar para ordens.



command = {type: att-score, playerId, playerScore}
listScore[command.playerId] = command.playerScore    //  def lista['cão'] = 2001
listOrdened.push(listScore[command.playerId])

listScore   and   listOrdened

score             score
playerId
playerName
/

for (const scoreUnit in listOrdened) {
    for (const scoreAssoc in listScore) {

        if (scoreUnit == listScore[scoreAssoc]) {
    
            console.log(`Encontrei uma semelhança entre o Score Unitário ${scoreUnit} e o Score Associado ${listScore.scoreAssoc}`)
            
            const playerId = scoreAssoc
            
        }
    }
}
/



Pega os SCORES de todos os PLAYERS, coloca numa lista e ordena em decrescente. 
Pegar os IDs de todos os PLAYERS, e pegar seus NOMES.
Pega os SCORES da lista e os utiliza para recapturar seus respectivos PLAYERS.
Pega os NOMES dos RESPECTIVOS PLAYERS.
Exibe os NOMES de todos RESPECTIVOS PLAYERS junto ao SCORE.






for(prop in obj) {
    if (obj.hasOwnProperty(prop)) {
        if (obj[prop] === 137) {
            indice = prop;
            break;
        }
    }
}

var dados = {
    aifuw    :    7,
    hsjwo    :    5,
    hsgqk    :    137,
    jskwe    :    9483
};
chavePorValor(dados, 137); // hsgqk


*/