$(function () {
    $('#cep').mask('00000-000');
    $("#campoData").mask("99/99/9999");
    $("#campoTelefone").mask("(999) 999-9999");
    $('.cpf').mask('000.000.000-00');
})

document.getElementById('dataInicio').value = localStorage.dataInicio;

var salvarData = function () {
    var dataInicio = document.getElementById('dataInicio').value;
    console.log(dataInicio);
    localStorage.setItem('dataInicio', dataInicio)
}
document.onchange = salvarData;