const numberList = []
const tabela = document.querySelector('select#valores')

function eventButton(){
    const num = Number(document.querySelector('input#input-number').value)
    analisar()

    function adicionar() {
        const valor = numberList[numberList.length - 1]  
        let item = document.createElement('option')
        item.text = `Valor adicionado: ${num}`
        tabela.appendChild(item)
    }

    function analisar() {
        if (num <= 0 || isNaN(num) || num > 100 || numberList.indexOf(Number(num)) != -1){
            window.alert("Digite um valor numérico entre 1 e 100 que não tenha sido adicionado ainda.")
            var resultado = false
        }
        if (resultado != false){
            numberList.push(num)
            adicionar()
        }
    }
}

function finalizar() {
    if (numberList.lenght <= 0){
        window.alert("Digite algum valor para finalizar.")
    } else {
        numberList.sort((a, b) => a - b).reverse();
    
        let number = 0 
        for (let indice in numberList){
            number += numberList[indice]
        }

        let maxValue = numberList[0]
        let minValue = numberList[numberList.length - 1]
        let soma = number
        let media = number/(numberList.length-1)

        document.querySelector("h2#resFinal").innerHTML =
        `<strong>Menor valor: ${minValue}<br>
        Maior valor: ${maxValue}<br>
        Soma: ${soma} Média: ${media}</strong>`
    }
}
