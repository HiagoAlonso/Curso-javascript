let nome = document.querySelector("#name")
let job = document.querySelector("#job")
let form = document.querySelector("#form")

form.addEventListener("submit", function(event) {
    event.preventDefault()

    let dados = {
        name: nome.value,
        job: job.value
    }

    fetch("https://reqres.in/api/users", {
        method: 'POST',
        body: JSON.stringify(dados) //Transformando o [dados], de um objeto para uma string. O back-end tem a responsabilidade de retransformar em objeto.
    })

    .then(function(response){ //Vai retornar um objeto gigantesco sobre a reposta da requisição. Leia sobre Status Code HTTP.
        console.log(response)
        return response.json()
    })

    .then(function(response) { //Retorna o valor Json tratado, com a data de inscrição e o ID de cadastro.
        console.log(response)
        alert("Cadastro Realizado com Sucesso!")
    })
})



let button = document.querySelector("#button-2")
let list = document.querySelector("#list")

button.addEventListener('click', function() {
    fetch("https://reqres.in/api/users?page=2")

    .then(function(response) {
        return response.json()
    })

    .then(function(response) {
        response.data.forEach(function(user) {
            let item = document.createElement("li")
            item.classList.add("item")
            item.innerHTML = `<img src="${user.avatar}"/> <span>${user.first_name}</span>`
            list.appendChild(item)
        })
    })
})