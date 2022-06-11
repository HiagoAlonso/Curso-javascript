//VARIÁVEIS DE CONTROLE

var perguntas_feitas = []

//PERGUNTAS DO JOGO

const perguntas = [
    {
        pergunta: "Qual destas linguagens não é considerada uma Linguagem de Programação:",
        respostas: ["PHP", "JavaScript", "C++", "CSS"],
        correta: "resp3"
    },{
        pergunta: "Em que ano o Brasil foi descoberto?",
        respostas: ["1498", "1500", "1375", "1828"],
        correta: "resp1"
    },{
        pergunta: "O que significa a sigla HTML?",
        respostas: ["Hyper Tonto Maluco Legal", "Hyper Text Markup Language", "Hy Trade More Ladding", "Hyper Text Markation Language"],
        correta: "resp1"
    },{
        pergunta: "Qual destas linguagens é considerada uma Linguagem de Marcação:",
        respostas: ["HTML", "Assembly", "Java", "Kotlin"],
        correta: "resp0"
    },{
        pergunta: "Qual destas linguagens é mais apta á Machine Learning e Data Science?",
        respostas: ["Python", "Fortrant", "Java", "Kotlin"],
        correta: "resp0"
    },{
        pergunta: "Qual destas linguagens foi utilizada na criação do Windows da Microsoft?",
        respostas: ["Assembly", "C++", "C#", "C"],
        correta: "resp1"
    },{
        pergunta: "Qual destas ferramentas é utilizada para fazer requisições de Arquivos e API's externas?",
        respostas: ["jQuery", "React", "Node.js", "Ajax"],
        correta: "resp3"
    },{
        pergunta: "Qual destes Frameworks é mantido pelo Facebook(Meta) e lidera na popularidade?",
        respostas: ["Vue", "React", "Angular", "Electron"],
        correta: "resp1"
    },{
        pergunta: "Quais destes é um Design Pattern?",
        respostas: ["Function", "IA Pattern", "Web Design", "Observer"],
        correta: "resp3"
    },
]

var qtd_perguntas = perguntas.length-1

gerarPergunta(qtd_perguntas)

function gerarPergunta (max_perguntas) {

    //GERAR E VERIFICAR O NÚMERO ALEATÓRIO
    let aleatorio = Number((Math.random() * max_perguntas).toFixed())

    //VERIFICAR SE A PERGUNTA JÁ FOI FEITA
    if(!perguntas_feitas.includes(aleatorio)){
        perguntas_feitas.push(aleatorio)

        //RENDERIZAR NO HTML:
        var p_selecionada = perguntas[aleatorio].pergunta;
        
        $("#pergunta").html(p_selecionada)
        $("#pergunta").attr('data-indice', aleatorio)
    
        for (var i = 0; i < 4; i++){
            $(`#resp${i}`).val(perguntas[aleatorio].respostas[i])
        }
    
        //EMBARALHAR AS RESPOSTAS
        let parent = $("#respostas")
        let buttons = parent.children()
    
        for(var i=1; i<buttons.length; i++){
            parent.append(buttons.eq(Math.floor(Math.random() * buttons.length)))
        }
    } else {
        if (perguntas_feitas.length < qtd_perguntas +1){
            return gerarPergunta(max_perguntas)
        } else {
            $('#status').removeClass('hidden')
            $('#mensagem').html('Parabéns! Voocê venceu!')
            $('#quiz').addClass('hidden')
        }
    }
}

$('#novo_jogo').click(function() {
    novo_jogo()
})

$('.res').click(function () {
    if($('#quiz').attr('data-status') !== 'travado'){
        reset_selection() 
        $(this).addClass('selecionada') //E então marca a em questão.
    }
})

$('#confirmar').click(function () {
    var indice = $("#pergunta").attr('data-indice')
    var resp_certa = perguntas[indice].correta

    $('.res').each(function () {
        if ($(this).hasClass('selecionada')) {
            var resp_escolhida = $(this).attr('id')

            if (resp_certa == resp_escolhida){
                proxima_pergunta()
            } else {
                $('#quiz').attr('data-status', 'travado')
                $('#'+resp_certa).addClass('correta')
                $('#'+resp_escolhida).addClass('errada')
                $('#'+resp_escolhida).removeClass('selecionada')
                setTimeout(function() {game_over()}, 4000)
            }
        }
    })
})



function game_over() {
    $('#status').removeClass('hidden')
    $('#mensagem').html('Game Over!')
    $('#quiz').addClass('hidden')
}
function novo_jogo() {
    $('#status').addClass('hidden')
    $('#quiz').attr('data-status', 'ok')
    $('#quiz').removeClass('hidden')
    perguntas_feitas = []
    reset_selection()
    gerarPergunta(qtd_perguntas)
}

function proxima_pergunta() {
    reset_selection()
    gerarPergunta(qtd_perguntas)
}

function reset_selection () {
    $('.res').each(function () { //Itera sobre todos os botões.
        if($(this).hasClass('selecionada')) { //Se tiver selecionado,
            $(this).removeClass('selecionada') //remove.
        }
        if($(this).hasClass('correta')) { //Se tiver correta,
            $(this).removeClass('correta') //remove.
        }
        if($(this).hasClass('errada')) { //Se tiver correta,
            $(this).removeClass('errada') //remove.
        }

    }) 
}