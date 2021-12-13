document.getElementById('dataInicio').value = localStorage.dataInicio;

var salvarData = function () {
    var dataInicio = document.getElementById('dataInicio').value;
    console.log(dataInicio);
    localStorage.setItem('dataInicio', dataInicio)
}
document.onchange = salvarData;

function saveComplexData() {
    console.log('Salvando um objeto');
    var nameInput = $$("name");
    var ageInput = $$("age");
    var personObject = {};
    personObject.name = nameInput.value;
    personObject.age = ageInput.value;
    localStorage.setItem("person", JSON.stringify(personObject));
}

let clienteTexto = '{"nome":"Gabriel", "idade":20, "cidade":"Rio de Janeiro", "estado":"RJ"}'
let cliente = JSON.parse(clienteTexto)

document.getElementById("demo").innerHTML = cliente.nome + ", " + cliente.idade + ' - ' + cliente.cidade + '/' + cliente.estado

$(document).ready(function () {

    function limpa_formulário_cep() {
        $("#rua").val("");
        $("#bairro").val("");
        $("#cidade").val("");
        $("#uf").val("");
    }

    $("#cep").blur(function () {

        var cep = $(this).val().replace(/\D/g, '');
        if (cep != "") {

            var validacep = /^[0-9]{8}$/;
            if (validacep.test(cep)) {

                $("#rua").val("...");
                $("#bairro").val("...");
                $("#cidade").val("...");
                $("#uf").val("...");

                $.getJSON("https://viacep.com.br/ws/" + cep + "/json/?callback=?", function (dados) {

                    if (!("erro" in dados)) {
                        $("#rua").val(dados.logradouro);
                        $("#bairro").val(dados.bairro);
                        $("#cidade").val(dados.localidade);
                        $("#uf").val(dados.uf);
                    } else {
                        limpa_formulário_cep();
                        alert("CEP não encontrado.");
                    }
                });
            } else {
                limpa_formulário_cep();
                alert("CEP inválido.");
            }
        } else {
            limpa_formulário_cep();
        }
    });
});