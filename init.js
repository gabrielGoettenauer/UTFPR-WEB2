(function ($) {
    $(function () {
        $('.slider').slider({
            duration: 1800,
            interval: 1800,
            indicators: false,

        })
        $('.sidenav').sidenav();
        $('.parallax').parallax();

    })
})(jQuery);

(function (email) {
    $('input#email').characterCounter();
})

function premium() {
    'use strict'
    const resposta = confirm('Olá,infelizmente ainda estamos trabalhando nesse projeto. Vamos por você como um dos primeiros na lista para receber um desconto de 30% na experiência Premium')
    const nome = prompt('Digite seu nome e sobrenome')
    document.write('<h1> Certo,' + nome + ' seu nome está na nossa lista agora,nós da Dream Travel agradecemos,por gentileza atualize a página para retornar.');

}
strictFunction();

function entrar() {
    'use strict'
    const entrar = alert('É necessário a criação de sua conta antes,por gentileza,clique no botão Inscreva-se')
}
strictFunction();

function acao1() {
    alert('Atualmente essa função está indisponível')
}

function acao() {
    alert('Nossa equipe lhe enviará um email em breve!')
}

function acao() {
    alert('Siga para a linha de baixo')
}

$(document).ready(function () {
    $('.datepicker').datepicker({
        format: 'dddd,dd mmm yyyy ',
        showClearBtn: true,
        i18n: {
            cancel: 'cancelar',
            clear: 'limpar',
            done: 'Ok',
            previusMonth: '<',
            nextMonth: '>',
            months: [
                'Janeiro',
                'Fevereiro',
                'Março',
                'Abril',
                'Maio',
                'Junho',
                'Julho',
                'Agosto',
                'Setembro',
                'Outubro',
                'Novembro',
                'Dezembro'
            ],
            monthsShort: [
                'Jan',
                'Fev',
                'Mar',
                'Abr',
                'Mai',
                'Jun',
                'Jul',
                'Ago',
                'Set',
                'Out',
                'Nov',
                'Dez'
            ],
            weekdays: [
                'Domingo',
                'Segunda',
                'Terça',
                'Quarta',
                'Quinta',
                'Sexta',
                'Sábado',
            ],
            weekdaysShort: [
                'Dom',
                'Seg',
                'Ter',
                'Qua',
                'Qui',
                'Sex',
                'Sáb'
            ],
            weekdaysAbbrev: ['D', 'S', 'T', 'Q', 'Q', 'S', 'S']
        }
    });
    $('.timepicker').timepicker({
        i18n: {
            cancel: 'cancelar',
            clear: 'limpar',
            done: 'Ok',
        },
        twelveHour: false,
    });
});

function distribuirValores() {
    //selecionar o valor digitado
    var caracter = document.getElementById('entrada').value
    document.getElementById('entrada').value = ''
    caracter.trim()
    switch (caracter) {
        case '0':
        case '1':
        case '2':
        case '3':
        case '4':

            document.getElementById('apenas_numeros').value += caracter
            break;
        default:

            document.getElementById('apenas_letras').value += caracter
    }
}

function modificaClasse() {
    document.getElementById('mensagem').className = 'estilo2'
}

console.log(document.getElementsByTagName('input'));
console.log(document.getElementsByName('name'));

function mudarCor() {
    document.querySelector("p").style.backgroundColor = "green";
}



function gerar() {
    let nomes = [
        "KABOL, AFGHANISTAN", "MALDIVAS,ÁSIA", "LONDRES,INGLATERRA"
    ];
    let lista = document.getElementById('lista');
    for (var i = 0; i < nomes.length; i++) {
        let item = document.createElement('li');
        item.appendChild(document.createTextNode(nomes[i]));
        lista.appendChild(item);
    }
}

var lista_destinos = Array()
lista_destinos[0] = 'KABOL, AFGHANISTAN'
lista_destinos[1] = 'LONDRES,INGLATERRA'
lista_destinos[2] = 'PARIS,FRANÇA'
lista_destinos[3] = 'LONDRES,INGLATERRA'
lista_destinos[4] = 'ROMA,ITÁLIA'
lista_destinos[5] = 'NOVA YORK,ESTADOS UNIDOS'
lista_destinos[6] = 'ORLANDO,ESTADOS UNIDOS'
lista_destinos[7] = 'MALDIVAS,ÁSIA'
lista_destinos[8] = 'ATENAS,GRÉCIA'

/////////////////////////////////////////////////////
lista_destinos.pop('ATENAS,GRÉCIA')
console.log(lista_destinos)

lista_destinos.unshift('MADRID,ESPANHA')
console.log(lista_destinos)

lista_destinos.shift('INSTAMBUL,TURQUIA')
console.log(lista_destinos)

var objetos = Array('', '', '')

function adicionarObjetos() {
    'use strict'
    //recupera o valor inserido no campo id objeto
    var objeto = document.getElementById('objeto').value

    //caso possua algum valor preenchido entra no if
    if (objeto != '') {
        //verifica se o valor já não foi inserido anteriormente
        //se sim, informa que valor já existe, se não insere novo valor
        if (objetos.indexOf(objeto) !== -1) {
            alert('Objeto já foi adicionado')
        } else {
            objetos.push(objeto)
            console.log(objetos)

            document.getElementById('objeto').value = ''
        }

    } else {
        alert('Informe um objeto válido')

    }
}
strictFunction();

function ordenarObjetos() {
    objetos.sort()
    console.log(objetos)
}
